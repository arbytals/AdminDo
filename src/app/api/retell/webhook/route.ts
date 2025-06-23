import { createSupabaseServiceClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    console.log("payload", payload);

    // We are only interested in the 'call_analyzed' event for detailed data
    if (
      payload.event !== "call_analyzed" ||
      (payload.call?.call_type !== "phone_call" &&
        payload.call?.call_type !== "web_call")
    ) {
      return NextResponse.json(
        {
          error:
            "Event is not 'call_analyzed' or call_type is not 'phone_call' or 'web_call'.",
        },
        { status: 200 } // Return 200 to acknowledge receipt and prevent retries
      );
    }

    const { call } = payload;
    const { call_analysis } = call;

    // Extract agent name from transcript (first speaker who introduces themselves)
    const extractAgentName = (transcript: string): string => {
      const agentPatterns = [
        /Agent:\s*Hello,?\s*this is\s+(\w+)/i,
        /Agent:\s*Hi,?\s*I'm\s+(\w+)/i,
        /Agent:\s*My name is\s+(\w+)/i,
        /Agent:\s*This is\s+(\w+)/i,
      ];

      for (const pattern of agentPatterns) {
        const match = transcript.match(pattern);
        if (match && match[1]) {
          return (
            match[1].charAt(0).toUpperCase() + match[1].slice(1).toLowerCase()
          );
        }
      }
      return "Unknown Agent";
    };

    // Extract customer name from call summary (prioritize summary over transcript)
    const extractCustomerName = (
      summary: string,
      transcript: string
    ): string => {
      // First try to extract from summary where it's more reliable
      const summaryPatterns = [
        /(?:customer|caller|client)\s+(?:named?\s+)?(\w+)/i,
        /(?:with|for)\s+(\w+)(?:\s+(?:who|regarding|about))/i,
        /(\w+)\s+(?:called|contacted|reached out)/i,
        /(?:scheduled|booked).*?(?:for|with)\s+(\w+)/i,
        /appointment.*?(?:for|with)\s+(\w+)/i,
      ];

      for (const pattern of summaryPatterns) {
        const match = summary.match(pattern)
        if (
          match &&
          match[1] &&
          match[1].toLowerCase() !== "appointment" &&
          match[1].toLowerCase() !== "consultation"
        ) {
          return (
            match[1].charAt(0).toUpperCase() + match[1].slice(1).toLowerCase()
          );
        }
      }

      // Fallback to transcript patterns if summary doesn't have clear name
      const transcriptPatterns = [
        /User:\s*(?:Oh,?\s*)?(?:hi,?\s*)?(?:this is\s+|I'm\s+|my name is\s+)(\w+)/i,
        /(?:my name is|i'm|this is|i am)\s+(\w+)/i,
        /User:\s*(\w+)(?:\s+here|\.|\s*$)/i,
      ];

      for (const pattern of transcriptPatterns) {
        const match = transcript.match(pattern);
        if (match && match[1] && match[1].toLowerCase() !== "looking") {
          return (
            match[1].charAt(0).toUpperCase() + match[1].slice(1).toLowerCase()
          );
        }
      }

      return "Unknown Customer";
    };

    // Extract customer email from transcript - focus on agent spelling it out
    const extractCustomerEmail = (transcript: string): string | null => {
      // Regex to find the agent's confirmation of the email address
      const confirmationPattern =
        /Agent:.*?confirm.*?it's\s+(.+?)\s*,?\s*correct\?/i;

      const match = transcript.match(confirmationPattern);

      if (match && match[1]) {
        let spelledOutEmail = match[1].toLowerCase();

        // Standardize separators
        spelledOutEmail = spelledOutEmail
          .replace(/\s+at\s+/g, "@")
          .replace(/\s+dot\s+/g, ".");

        // Remove all remaining spaces and hyphens
        const cleanedEmail = spelledOutEmail.replace(/[-\s]/g, "");

        // Basic validation to ensure it looks like an email
        if (cleanedEmail.includes("@") && cleanedEmail.includes(".")) {
          return cleanedEmail;
        }
      }

      // Fallback for user stating email directly if confirmation fails
      const userStatingPattern = /User:.*?it's\s+(.+?)(?:\.|$|,)/i;
      const userMatch = transcript.match(userStatingPattern);
      if (userMatch && userMatch[1]) {
        let spelledOutEmail = userMatch[1].toLowerCase();

        // Standardize separators
        spelledOutEmail = spelledOutEmail
          .replace(/\s+at\s+/g, "@")
          .replace(/\s+dot\s+/g, ".");

        // Convert number words to digits - common for verbal emails
        const numberConversions: { [key: string]: string } = {
          "forty-five": "45",
          "forty five": "45",
          forty: "40",
          thirty: "30",
          twenty: "20",
          five: "5",
          four: "4",
        };
        for (const word in numberConversions) {
          spelledOutEmail = spelledOutEmail.replace(
            new RegExp(word, "g"),
            numberConversions[word]
          );
        }

        const cleanedEmail = spelledOutEmail.replace(/[-\s]/g, "");

        if (cleanedEmail.includes("@") && cleanedEmail.includes(".")) {
          return cleanedEmail;
        }
      }

      return null;
    };

    // Extract appointment details from transcript and call_summary
    const extractAppointmentDetails = (transcript: string, summary: string) => {
      // Extract appointment date and time
      const appointmentPatterns = [
        /(?:Tuesday|Wednesday|Thursday|Friday|Monday|Saturday|Sunday)[,\s]*(?:June|July|August|September|October|November|December)?\s*\d{1,2}(?:st|nd|rd|th)?[,\s]*(?:at\s*)?(\d{1,2}(?::\d{2})?\s*(?:AM|PM|am|pm))/i,
        /(\w+day)[,\s]*(?:at\s*)?(\d{1,2}(?::\d{2})?\s*(?:AM|PM|am|pm))/i,
        /(?:booked|scheduled|appointment).*?(\w+day)[,\s]*(?:at\s*)?(\d{1,2}(?::\d{2})?\s*(?:AM|PM|am|pm))/i,
      ];

      let appointmentTime = null;
      let appointmentDate = null;

      for (const pattern of appointmentPatterns) {
        const match = transcript.match(pattern) || summary.match(pattern);
        if (match) {
          if (match[2]) {
            appointmentTime = match[2];
            appointmentDate = match[1];
          } else if (match[1]) {
            appointmentTime = match[1];
          }
          break;
        }
      }

      // Extract specific date if mentioned
      const specificDatePattern =
        /(\w+day)[,\s]*(\w+)\s*(\d{1,2})(?:st|nd|rd|th)?/i;
      const specificMatch =
        transcript.match(specificDatePattern) ||
        summary.match(specificDatePattern);
      if (specificMatch) {
        appointmentDate = `${specificMatch[1]}, ${specificMatch[2]} ${specificMatch[3]}`;
      }

      // Extract reason/service from transcript and summary
      const reasonPatterns = [
        /(?:book|schedule|appointment for|looking for|need|want).*?(simple will|will|legal consultation|consultation|divorce|estate planning)/i,
        /(?:service|appointment).*?for\s*(.*?)(?:\.|,|$)/i,
      ];

      let reason = "General consultation";
      for (const pattern of reasonPatterns) {
        const match = transcript.match(pattern) || summary.match(pattern);
        if (match && match[1]) {
          reason = match[1].trim();
          break;
        }
      }

      return {
        appointmentDate,
        appointmentTime: appointmentTime || "Time TBD",
        reason,
      };
    };

    // Get extracted data
    const agentName = extractAgentName(call.transcript || "");
    const customerName =
      call_analysis.custom_analysis_data?.customer_name ||
      extractCustomerName(
        call_analysis.call_summary || "",
        call.transcript || ""
      );
    const customerEmail =
      call_analysis.custom_analysis_data?.customer_email ||
      extractCustomerEmail(call.transcript || "");

    // Debug logging for extraction
    console.log("Extraction results:", {
      agentName,
      customerName,
      customerEmail,
      hasCustomAnalysisData: !!call_analysis.custom_analysis_data,
      summaryLength: (call_analysis.call_summary || "").length,
      transcriptLength: (call.transcript || "").length,
    });

    // Additional debug for email extraction
    console.log("Email extraction debug:", {
      transcriptSnippet: (call.transcript || "").substring(0, 500),
      emailPattern1:
        /Agent:.*?([a-zA-Z](?:-[a-zA-Z])*(?:-\d+)*)\s*(?:at|@)\s*([a-zA-Z]+)\s*(?:dot|\.)\s*([a-zA-Z]{2,})/i.test(
          call.transcript || ""
        ),
      emailPattern2:
        /User:.*?([a-zA-Z]+)\s+(?:forty|thirty|twenty|fifty|sixty|seventy|eighty|ninety|\d+)\s*(?:five|four|three|six|seven|eight|nine|\d+)?\s*(?:at|@)\s*([a-zA-Z]+)\s*(?:dot|\.)\s*([a-zA-Z]{2,})/i.test(
          call.transcript || ""
        ),
      confirmationPattern:
        /Agent:.*?confirm.*?email.*?([a-zA-Z-0-9]+)\s*(?:at|@)\s*([a-zA-Z]+)\s*(?:dot|\.)\s*([a-zA-Z]{2,})/i.test(
          call.transcript || ""
        ),
    });

    const appointmentDetails = extractAppointmentDetails(
      call.transcript || "",
      call_analysis.call_summary || ""
    );

    // Construct the data object for the 'calls' table matching actual database schema
    const callData = {
      id: call.call_id,
      summary: call_analysis.call_summary || null,
      transcript: call.transcript || null,
      recording_url: call.recording_url || null,
      start_time: new Date(call.start_timestamp).toISOString(),
      end_time: call.end_timestamp
        ? new Date(call.end_timestamp).toISOString()
        : null,
      duration: Math.round(call.duration_ms / 1000), // Convert ms to seconds
      from_number: call.from_number || null,
      to_number: call.to_number || null,
      agent_id: call.agent_id,
      appointment_booked: call_analysis.call_successful || false,
      rating: null, // Could be added later based on call quality
      call_type: call.call_type || null,
      successful: call_analysis.call_successful || false,
    };

    // Use service role client to bypass RLS
    const supabase = createSupabaseServiceClient();

    // Insert call data
    const { error: callInsertError } = await supabase
      .from("calls")
      .insert(callData);

    if (callInsertError) {
      console.error(
        "Error inserting call data into Supabase:",
        callInsertError
      );
      return NextResponse.json(
        { error: `Failed to store call data: ${callInsertError.message}` },
        { status: 500 }
      );
    }

    // Update or insert agent data
    const { data: existingAgent } = await supabase
      .from("agents")
      .select("*")
      .eq("id", call.agent_id)
      .single();

    if (!existingAgent) {
      // Insert new agent
      await supabase.from("agents").insert({
        id: call.agent_id,
        name: agentName,
        email: `${agentName.toLowerCase().replace(" ", ".")}@admindo.com`,
        status: "active",
      });
    } else {
      // Update existing agent name if we have a better one
      if (agentName !== "Unknown Agent" && existingAgent.name !== agentName) {
        await supabase
          .from("agents")
          .update({ name: agentName, status: "active" })
          .eq("id", call.agent_id);
      }
    }

    // If an appointment was successfully booked, create a new record in the 'appointments' table.
    if (call_analysis.call_successful) {
      // Format appointment date properly
      let formattedDate = null;
      if (appointmentDetails.appointmentDate) {
        try {
          // Try to parse and format the date
          const dateString = appointmentDetails.appointmentDate;
          if (dateString.includes("June") || dateString.includes("Tuesday")) {
            // For "Tuesday, June 24" format, assume current year
            const currentYear = new Date().getFullYear();
            const fullDateString = `${dateString}, ${currentYear}`;
            const parsedDate = new Date(fullDateString);
            if (!isNaN(parsedDate.getTime())) {
              formattedDate = parsedDate.toISOString().split("T")[0]; // YYYY-MM-DD format
            }
          }
        } catch (error) {
          console.log(
            "Date parsing failed, using original:",
            appointmentDetails.appointmentDate
          );
        }
      }

      const appointmentData = {
        call_id: call.call_id,
        customer_name: customerName,
        customer_email: customerEmail,
        customer_phone: call.from_number || null,
        appointment_date: formattedDate,
        appointment_time: appointmentDetails.appointmentTime,
        reason: appointmentDetails.reason,
        status: "scheduled",
        agent_id: call.agent_id,
        notes: `Appointment scheduled via call. ${call_analysis.call_summary}`,
      };

      const { error: appointmentInsertError } = await supabase
        .from("appointments")
        .insert(appointmentData);

      if (appointmentInsertError) {
        console.error(
          "Error inserting appointment data into Supabase:",
          appointmentInsertError
        );
        // We don't return an error here because the primary call data was already saved.
      }
    }

    return NextResponse.json(
      { message: "Webhook processed successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing Retell webhook:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
