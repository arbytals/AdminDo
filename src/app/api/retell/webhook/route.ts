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

    // Extract appointment time from call summary (only thing not in custom_analysis_data)
    const extractAppointmentTime = (summary: string, transcript: string) => {
      // Extract appointment time from summary or transcript
      const timePatterns = [
        /at\s+(\d{1,2}:\d{2}\s*(?:AM|PM|am|pm))/i,
        /at\s+(\d{1,2}\s*(?:AM|PM|am|pm))/i,
        /(\d{1,2}:\d{2}\s*(?:AM|PM|am|pm))/i,
        /(\d{1,2}\s*(?:AM|PM|am|pm))/i,
      ];

      for (const pattern of timePatterns) {
        const match = summary.match(pattern) || transcript.match(pattern);
        if (match && match[1]) {
          return match[1];
        }
      }

      return "Time TBD";
    };

    // Get data from custom_analysis_data with fallbacks
    const agentName =
      call_analysis.custom_analysis_data?.agent_name || "Unknown Agent";
    const customerName =
      call_analysis.custom_analysis_data?.customer_name || "Unknown Customer";
    const customerEmail =
      call_analysis.custom_analysis_data?.customer_email || null;
    const appointmentDate = call_analysis.custom_analysis_data?.date || null;
    const appointmentTime = extractAppointmentTime(
      call_analysis.call_summary || "",
      call.transcript || ""
    );

    // Debug logging for extraction
    console.log("Extraction results:", {
      agentName,
      customerName,
      customerEmail,
      appointmentDate,
      appointmentTime,
      hasCustomAnalysisData: !!call_analysis.custom_analysis_data,
      callAgentId: call.agent_id,
    });

    // Debug custom_analysis_data contents
    if (call_analysis.custom_analysis_data) {
      console.log(
        "Custom analysis data:",
        JSON.stringify(call_analysis.custom_analysis_data, null, 2)
      );
    } else {
      console.log("No custom_analysis_data found");
    }

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

    // Update or insert agent data using the agent name from custom_analysis_data
    console.log("Agent storage process:", {
      retellAgentId: call.agent_id,
      customAnalysisAgentName: agentName,
      willSearchFor: call.agent_id,
      willStoreName: agentName,
    });

    // Test if we can access the agents table at all
    const { data: agentsTableTest, error: agentsTableError } = await supabase
      .from("agents")
      .select("count(*)")
      .limit(1);

    console.log("🔍 Agents table access test:", {
      canAccessTable: !agentsTableError,
      testResult: agentsTableTest,
      error: agentsTableError,
    });

    const { data: existingAgent, error: existingAgentError } = await supabase
      .from("agents")
      .select("*")
      .eq("id", call.agent_id)
      .single();

    console.log("🔍 Existing agent lookup:", {
      agentId: call.agent_id,
      foundAgent: !!existingAgent,
      lookupError: existingAgentError,
    });

    console.log("Agent lookup result:", {
      searchingForAgentId: call.agent_id,
      foundExistingAgent: !!existingAgent,
      existingAgentData: existingAgent,
      agentNameToStore: agentName,
    });

    if (!existingAgent) {
      // Insert new agent with Retell agent_id as primary key and custom_analysis_data name
      const newAgentData = {
        id: call.agent_id, // Use Retell's agent_id as the primary key
        name: agentName, // Use the name from custom_analysis_data
        email: `${agentName.toLowerCase().replace(/\s+/g, ".")}@admindo.com`,
        status: "active",
      };

      console.log("🔍 About to insert new agent:", newAgentData);
      console.log("🔍 Using supabase service client:", !!supabase);

      const { data: insertedAgent, error: agentInsertError } = await supabase
        .from("agents")
        .insert(newAgentData)
        .select(); // Add select to get the inserted data back

      console.log("🔍 Agent insertion result:", {
        insertedAgent,
        error: agentInsertError,
        errorDetails: agentInsertError
          ? {
              message: agentInsertError.message,
              details: agentInsertError.details,
              hint: agentInsertError.hint,
              code: agentInsertError.code,
            }
          : null,
      });

      if (agentInsertError) {
        console.error("❌ Error inserting agent:", agentInsertError);
        console.error(
          "❌ Full agent insert error object:",
          JSON.stringify(agentInsertError, null, 2)
        );
      } else {
        console.log("✅ New agent inserted successfully:", {
          id: call.agent_id,
          name: agentName,
          insertedData: insertedAgent,
        });
      }
    } else {
      // Update existing agent name if we have a better one from custom_analysis_data
      if (agentName !== "Unknown Agent" && existingAgent.name !== agentName) {
        console.log("Updating existing agent name:", {
          agentId: call.agent_id,
          oldName: existingAgent.name,
          newName: agentName,
        });

        const { error: agentUpdateError } = await supabase
          .from("agents")
          .update({
            name: agentName,
            status: "active",
            updated_at: new Date().toISOString(),
          })
          .eq("id", call.agent_id);

        if (agentUpdateError) {
          console.error("Error updating agent:", agentUpdateError);
        } else {
          console.log("✅ Agent name updated successfully:", {
            agentId: call.agent_id,
            newName: agentName,
          });
        }
      } else {
        console.log("No agent update needed:", {
          agentId: call.agent_id,
          currentName: existingAgent.name,
          providedName: agentName,
          reason:
            existingAgent.name === agentName
              ? "names match"
              : "provided name is Unknown Agent",
        });
      }
    }

    // If an appointment was successfully booked, create a new record in the 'appointments' table.
    if (
      call_analysis.call_successful &&
      appointmentDate &&
      appointmentTime !== "Time TBD"
    ) {
      console.log("📅 Processing appointment booking:", {
        callSuccessful: call_analysis.call_successful,
        appointmentDate,
        appointmentTime,
        customerName,
        customerEmail,
        agentId: call.agent_id,
        agentName,
      });

      // Format appointment date properly from custom_analysis_data
      let formattedDate = null;
      let formattedTime = appointmentTime;

      if (appointmentDate) {
        try {
          console.log("🔍 Starting date parsing:", {
            original: appointmentDate,
          });

          // Handle different date formats from custom_analysis_data
          let dateString = appointmentDate;

          // Remove ordinal suffixes (st, nd, rd, th) from dates
          dateString = dateString.replace(/(\d+)(st|nd|rd|th)/g, "$1");

          // Handle formats like "Thursday, June 26, 2025" or "June 26, 2025"
          if (dateString.includes(",")) {
            // Split by comma and get the parts
            const parts = dateString.split(",").map((p: string) => p.trim());

            if (parts.length >= 2) {
              // If we have "Thursday, June 26, 2025" - use the middle parts
              if (parts.length === 3) {
                dateString = `${parts[1]}, ${parts[2]}`; // "June 26, 2025"
              } else if (parts.length === 2) {
                dateString = `${parts[0]}, ${parts[1]}`; // "June 26, 2025"
              }
            }
          } else {
            // Handle simple formats like "June 26th" - add current year
            const currentYear = new Date().getFullYear();
            if (!dateString.includes(currentYear.toString())) {
              dateString = `${dateString}, ${currentYear}`;
            }
          }

          console.log("🔍 Cleaned date string:", { cleaned: dateString });

          // Parse the cleaned date string
          const parsedDate = new Date(dateString);

          console.log("🔍 Parsed date object:", {
            parsedDate,
            isValid: !isNaN(parsedDate.getTime()),
            getTime: parsedDate.getTime(),
          });

          if (!isNaN(parsedDate.getTime())) {
            // Format as YYYY-MM-DD in local timezone to avoid timezone shifts
            const year = parsedDate.getFullYear();
            const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
            const day = String(parsedDate.getDate()).padStart(2, "0");
            formattedDate = `${year}-${month}-${day}`;

            console.log("📅 Date formatting successful:", {
              original: appointmentDate,
              cleaned: dateString,
              parsed: parsedDate,
              formatted: formattedDate,
            });
          } else {
            throw new Error("Invalid date after parsing");
          }
        } catch (error) {
          console.log("❌ Date parsing failed, keeping original:", {
            original: appointmentDate,
            error: error instanceof Error ? error.message : String(error),
          });
          formattedDate = appointmentDate; // Keep original if parsing fails
        }
      }

      // Format appointment time to 24-hour format for better storage
      if (appointmentTime && appointmentTime !== "Time TBD") {
        try {
          // Convert formats like "10 AM", "3:30 PM" to 24-hour format
          const timeMatch = appointmentTime.match(
            /(\d{1,2})(?::(\d{2}))?\s*(AM|PM)/i
          );
          if (timeMatch) {
            let hours = parseInt(timeMatch[1]);
            const minutes = timeMatch[2] ? parseInt(timeMatch[2]) : 0;
            const period = timeMatch[3].toUpperCase();

            // Convert to 24-hour format
            if (period === "PM" && hours !== 12) {
              hours += 12;
            } else if (period === "AM" && hours === 12) {
              hours = 0;
            }

            formattedTime = `${String(hours).padStart(2, "0")}:${String(
              minutes
            ).padStart(2, "0")}`;

            console.log("🕐 Time formatting:", {
              original: appointmentTime,
              formatted: formattedTime,
            });
          }
        } catch (error) {
          console.log("⚠️ Time formatting failed, keeping original:", {
            original: appointmentTime,
            error: error instanceof Error ? error.message : String(error),
          });
          // Keep original format if conversion fails
        }
      }

      const appointmentData = {
        call_id: call.call_id,
        customer_name: customerName,
        customer_email: customerEmail,
        customer_phone: call.from_number || null,
        appointment_date: formattedDate,
        appointment_time: formattedTime,
        reason: "General consultation",
        status: "scheduled",
        agent_id: call.agent_id, // This links to the agent table
        notes: `Appointment scheduled via call. ${
          call_analysis.call_summary || ""
        }`,
      };

      console.log("📅 Inserting appointment data:", appointmentData);

      const { error: appointmentInsertError } = await supabase
        .from("appointments")
        .insert(appointmentData);

      if (appointmentInsertError) {
        console.error(
          "❌ Error inserting appointment data into Supabase:",
          appointmentInsertError
        );
        // We don't return an error here because the primary call data was already saved.
      } else {
        console.log("✅ Appointment inserted successfully:", {
          callId: call.call_id,
          customer: customerName,
          agent: agentName,
          date: formattedDate,
          time: formattedTime,
        });
      }
    } else {
      console.log("ℹ️ No appointment to book:", {
        callSuccessful: call_analysis.call_successful,
        hasDate: !!appointmentDate,
        hasTime: appointmentTime !== "Time TBD",
        appointmentTime,
      });
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
