"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase";
import type { CallRecord } from "@/types/dashboard";

export function useCallHistory() {
  const [calls, setCalls] = useState<CallRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchCalls = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Fetch calls data
        const { data: callsData, error: callsError } = await supabase
          .from("calls")
          .select("*")
          .order("start_time", { ascending: false });

        if (callsError) throw callsError;

        // Fetch agents data separately
        const { data: agentsData, error: agentsError } = await supabase
          .from("agents")
          .select("id, name, email");

        if (agentsError) throw agentsError;

        // Fetch appointments data
        const { data: appointmentsData, error: appointmentsError } =
          await supabase.from("appointments").select("call_id, customer_name");

        if (appointmentsError) throw appointmentsError;

        // Create lookup maps
        const agentsMap = new Map(agentsData.map((agent) => [agent.id, agent]));
        const appointmentsMap = new Map(
          appointmentsData.map((apt) => [apt.call_id, apt])
        );

        const formattedCalls: CallRecord[] = callsData.map((call: any) => {
          const agent = agentsMap.get(call.agent_id);
          const appointment = appointmentsMap.get(call.id);

          return {
            id: call.id,
            agentName: agent?.name || call.agent_id || "Unknown Agent",
            customerPhone: call.from_number || "N/A",
            customerName: appointment?.customer_name || "Unknown Customer",
            duration: call.duration
              ? `${Math.floor(call.duration / 60)}m ${call.duration % 60}s`
              : "0m 0s",
            appointmentBooked: call.appointment_booked || false,
            timestamp: call.start_time
              ? new Date(call.start_time).toLocaleString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })
              : "N/A",
            status: call.successful ? "completed" : "failed",
            transcript: call.transcript || "No transcript available.",
            summary: call.summary || null,
            appointments: appointment
              ? [{ customer_name: appointment.customer_name }]
              : [],
          };
        });

        setCalls(formattedCalls);
      } catch (err) {
        console.error("Error fetching call history:", err);
        setError(
          err instanceof Error ? err : new Error("Failed to fetch call history")
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchCalls();

    // Set up real-time subscription for calls table
    const callsSubscription = supabase
      .channel("calls_changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "calls",
        },
        () => {
          // Refetch data when there's a change
          fetchCalls();
        }
      )
      .subscribe();

    // Set up real-time subscription for appointments table
    const appointmentsSubscription = supabase
      .channel("appointments_changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "appointments",
        },
        () => {
          // Refetch data when there's a change
          fetchCalls();
        }
      )
      .subscribe();

    // Cleanup subscriptions
    return () => {
      supabase.removeChannel(callsSubscription);
      supabase.removeChannel(appointmentsSubscription);
    };
  }, [supabase]);

  return { calls, isLoading, error };
}
