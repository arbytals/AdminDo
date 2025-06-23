"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase";
import type { CallMetrics } from "@/types/dashboard";

export function useCallMetrics() {
  const [metrics, setMetrics] = useState<CallMetrics>({
    totalCalls: 0,
    weeklyChange: 0,
    monthlyChange: 0,
    appointmentsBooked: 0,
    appointmentRate: 0,
    averageCallDuration: 0,
    activeAgents: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchMetrics = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Query 1: Get call data for metrics using actual schema columns
        const { data: callsData, error: callsError } = await supabase
          .from("calls")
          .select("duration, appointment_booked, successful, start_time");

        if (callsError) throw callsError;

        // Query 2: Get active agent count
        const { count: activeAgentsCount, error: agentsError } = await supabase
          .from("agents")
          .select("*", { count: "exact", head: true })
          .eq("status", "active");

        if (agentsError) throw agentsError;

        // Query 3: Get week-over-week comparison
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

        const twoWeeksAgo = new Date();
        twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);

        const { data: thisWeekCalls, error: thisWeekError } = await supabase
          .from("calls")
          .select("*")
          .gte("start_time", oneWeekAgo.toISOString());

        const { data: lastWeekCalls, error: lastWeekError } = await supabase
          .from("calls")
          .select("*")
          .gte("start_time", twoWeeksAgo.toISOString())
          .lt("start_time", oneWeekAgo.toISOString());

        if (thisWeekError) throw thisWeekError;
        if (lastWeekError) throw lastWeekError;

        if (callsData) {
          const totalCalls = callsData.length;
          const appointmentsBooked = callsData.filter(
            (call) => call.appointment_booked
          ).length;
          const totalDuration = callsData.reduce(
            (sum, call) => sum + (call.duration || 0),
            0
          );

          const appointmentRate =
            totalCalls > 0
              ? Math.round((appointmentsBooked / totalCalls) * 100)
              : 0;
          const averageCallDuration =
            totalCalls > 0 ? Math.round(totalDuration / totalCalls / 60) : 0; // in minutes

          // Calculate weekly change
          const thisWeekCallsCount = thisWeekCalls?.length || 0;
          const lastWeekCallsCount = lastWeekCalls?.length || 0;
          const weeklyChange =
            lastWeekCallsCount > 0
              ? Math.round(
                  ((thisWeekCallsCount - lastWeekCallsCount) /
                    lastWeekCallsCount) *
                    100
                )
              : thisWeekCallsCount > 0
              ? 100
              : 0;

          setMetrics({
            totalCalls,
            appointmentsBooked,
            appointmentRate,
            averageCallDuration,
            activeAgents: activeAgentsCount || 0,
            weeklyChange,
            monthlyChange: 5, // Placeholder for now
          });
        }
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch call metrics")
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchMetrics();

    // Set up real-time subscription for calls table
    const callsSubscription = supabase
      .channel("calls_metrics_changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "calls",
        },
        () => {
          // Refetch metrics when there's a change
          fetchMetrics();
        }
      )
      .subscribe();

    // Set up real-time subscription for agents table
    const agentsSubscription = supabase
      .channel("agents_metrics_changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "agents",
        },
        () => {
          // Refetch metrics when there's a change
          fetchMetrics();
        }
      )
      .subscribe();

    // Cleanup subscriptions
    return () => {
      supabase.removeChannel(callsSubscription);
      supabase.removeChannel(agentsSubscription);
    };
  }, [supabase]);

  return { metrics, isLoading, error };
}
