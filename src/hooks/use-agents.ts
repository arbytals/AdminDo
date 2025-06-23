"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase";
import type { Agent } from "@/types/dashboard";

export function useAgents() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchAgents = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Get agents data
        const { data: agentsData, error: agentsError } = await supabase
          .from("agents")
          .select("*");

        if (agentsError) throw agentsError;

        // Get calls data for performance metrics
        const { data: callsData, error: callsError } = await supabase
          .from("calls")
          .select("agent_id, duration, appointment_booked, successful");

        if (callsError) throw callsError;

        const formattedAgents: Agent[] = agentsData.map((agent) => {
          // Calculate metrics for this agent
          const agentCalls = callsData.filter(
            (call) => call.agent_id === agent.id
          );
          const totalCalls = agentCalls.length;
          const appointmentsBooked = agentCalls.filter(
            (call) => call.appointment_booked
          ).length;
          const totalDuration = agentCalls.reduce(
            (sum, call) => sum + (call.duration || 0),
            0
          );
          const averageCallDuration =
            totalCalls > 0 ? Math.round(totalDuration / totalCalls / 60) : 0; // in minutes

          return {
            id: agent.id,
            name: agent.name || "Unnamed Agent",
            email: agent.email || `agent.${agent.id.slice(-4)}@admindo.com`,
            status: agent.status || "inactive",
            totalCalls,
            appointmentsBooked,
            averageCallDuration,
          };
        });

        setAgents(formattedAgents);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch agents")
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchAgents();

    // Set up real-time subscription for agents table
    const agentsSubscription = supabase
      .channel("agents_changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "agents",
        },
        () => {
          // Refetch data when there's a change
          fetchAgents();
        }
      )
      .subscribe();

    // Set up real-time subscription for calls table to update performance metrics
    const callsSubscription = supabase
      .channel("calls_agents_changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "calls",
        },
        () => {
          // Refetch data when there's a change
          fetchAgents();
        }
      )
      .subscribe();

    // Cleanup subscriptions
    return () => {
      supabase.removeChannel(agentsSubscription);
      supabase.removeChannel(callsSubscription);
    };
  }, [supabase]);

  return { agents, isLoading, error };
}
