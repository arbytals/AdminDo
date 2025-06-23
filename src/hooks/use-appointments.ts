"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase";
import type { Appointment } from "@/types/dashboard";

export function useAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchAppointments = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Fetch appointments data
        const { data: appointmentsData, error: appointmentsError } =
          await supabase
            .from("appointments")
            .select("*")
            .order("created_at", { ascending: false });

        if (appointmentsError) throw appointmentsError;

        // Fetch agents data separately
        const { data: agentsData, error: agentsError } = await supabase
          .from("agents")
          .select("id, name");

        if (agentsError) throw agentsError;

        // Create lookup map for agents
        const agentsMap = new Map(agentsData.map((agent) => [agent.id, agent]));

        const formattedAppointments: Appointment[] = appointmentsData.map(
          (apt: any) => {
            const agent = agentsMap.get(apt.agent_id);

            return {
              id: apt.id,
              customerName: apt.customer_name || "N/A",
              customerEmail: apt.customer_email || "N/A",
              customerPhone: apt.customer_phone || "N/A",
              appointmentDate: apt.appointment_date
                ? new Date(apt.appointment_date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "Date TBD",
              appointmentTime: apt.appointment_time || "Time TBD",
              reason: apt.reason || "General consultation",
              status: apt.status || "scheduled",
              agentName: agent?.name || apt.agent_id || "Unknown Agent",
              notes: apt.notes || "No notes",
              callId: apt.call_id || "",
            };
          }
        );

        setAppointments(formattedAppointments);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch appointments")
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchAppointments();

    // Set up real-time subscription for appointments table
    const appointmentsSubscription = supabase
      .channel("appointments_realtime")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "appointments",
        },
        () => {
          // Refetch data when there's a change
          fetchAppointments();
        }
      )
      .subscribe();

    // Set up real-time subscription for agents table to update agent names
    const agentsSubscription = supabase
      .channel("agents_appointments_changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "agents",
        },
        () => {
          // Refetch data when there's a change
          fetchAppointments();
        }
      )
      .subscribe();

    // Cleanup subscriptions
    return () => {
      supabase.removeChannel(appointmentsSubscription);
      supabase.removeChannel(agentsSubscription);
    };
  }, [supabase]);

  return { appointments, isLoading, error };
}
