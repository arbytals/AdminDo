"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Phone,
  Calendar,
  UserPlus,
  PhoneCall,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface ActivityItem {
  id: string;
  type: "call" | "appointment" | "agent_added";
  title: string;
  description: string;
  timestamp: string;
  outcome?: "successful" | "failed" | "scheduled";
  agent?: string;
  customer?: string;
}

const getActivityIcon = (type: string) => {
  switch (type) {
    case "call":
      return Phone;
    case "appointment":
      return Calendar;
    case "agent_added":
      return UserPlus;
    default:
      return PhoneCall;
  }
};

const getOutcomeIcon = (outcome: string) => {
  switch (outcome) {
    case "successful":
      return CheckCircle;
    case "failed":
      return XCircle;
    case "scheduled":
      return Calendar;
    default:
      return Clock;
  }
};

const getOutcomeBadge = (outcome: string) => {
  switch (outcome) {
    case "successful":
      return (
        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
          Successful
        </Badge>
      );
    case "failed":
      return (
        <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
          Failed
        </Badge>
      );
    case "scheduled":
      return (
        <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
          Scheduled
        </Badge>
      );
    default:
      return <Badge variant="secondary">In Progress</Badge>;
  }
};

export function RecentActivity() {
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchActivities = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Get recent calls data
        const { data: callsData, error: callsError } = await supabase
          .from("calls")
          .select("*")
          .order("start_time", { ascending: false })
          .limit(10);

        if (callsError) throw callsError;

        // Get agents data separately
        const { data: agentsData, error: agentsError } = await supabase
          .from("agents")
          .select("id, name");

        if (agentsError) throw agentsError;

        // Get appointments data
        const { data: appointmentsData, error: appointmentsError } =
          await supabase
            .from("appointments")
            .select("call_id, customer_name, appointment_time, status")
            .order("created_at", { ascending: false })
            .limit(5);

        if (appointmentsError) throw appointmentsError;

        // Create lookup maps
        const agentsMap = new Map(agentsData.map((agent) => [agent.id, agent]));
        const appointmentsMap = new Map(
          appointmentsData.map((apt) => [apt.call_id, apt])
        );

        // Combine and format activities
        const activities: ActivityItem[] = [];

        // Add call activities
        callsData?.forEach((call) => {
          const agent = agentsMap.get(call.agent_id);
          const agentName =
            agent?.name ||
            (call.agent_id
              ? `Agent ${call.agent_id.slice(-4)}`
              : "Unknown Agent");
          const appointment = appointmentsMap.get(call.id);
          const customer = appointment?.customer_name || "Unknown Customer";

          activities.push({
            id: `call-${call.id}`,
            type: "call",
            title: `Call ${call.successful ? "completed" : "failed"}`,
            description: `${agentName} ${
              call.successful ? "successfully handled" : "attempted"
            } call with ${customer}`,
            timestamp: call.start_time
              ? new Date(call.start_time).toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })
              : "Unknown time",
            outcome: call.successful ? "successful" : "failed",
            agent: agentName,
            customer,
          });

          // Add appointment activity if one was booked
          if (call.appointment_booked && appointment) {
            activities.push({
              id: `appointment-${call.id}`,
              type: "appointment",
              title: "Appointment scheduled",
              description: `${agentName} scheduled appointment for ${customer} at ${appointment.appointment_time}`,
              timestamp: call.start_time
                ? new Date(call.start_time).toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })
                : "Unknown time",
              outcome: "scheduled",
              agent: agentName,
              customer,
            });
          }
        });

        // Sort all activities by timestamp (most recent first)
        activities.sort(
          (a, b) =>
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );

        setActivities(activities.slice(0, 15)); // Keep only the 15 most recent
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch activities")
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchActivities();

    // Set up real-time subscriptions
    const callsSubscription = supabase
      .channel("calls_activity")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "calls",
        },
        () => {
          fetchActivities();
        }
      )
      .subscribe();

    const appointmentsSubscription = supabase
      .channel("appointments_activity")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "appointments",
        },
        () => {
          fetchActivities();
        }
      )
      .subscribe();

    const agentsSubscription = supabase
      .channel("agents_activity")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "agents",
        },
        () => {
          fetchActivities();
        }
      )
      .subscribe();

    // Cleanup subscriptions
    return () => {
      supabase.removeChannel(callsSubscription);
      supabase.removeChannel(appointmentsSubscription);
      supabase.removeChannel(agentsSubscription);
    };
  }, [supabase]);

  if (isLoading) {
    return (
      <Card className="bg-card dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-card-foreground dark:text-white">
            Recent Activity
          </CardTitle>
          <CardDescription className="text-muted-foreground dark:text-gray-400">
            Latest events and updates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="flex-1 space-y-1">
                  <Skeleton className="h-4 w-48" />
                  <Skeleton className="h-3 w-32" />
                </div>
                <Skeleton className="h-6 w-16" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="bg-card dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-card-foreground dark:text-white">
            Recent Activity
          </CardTitle>
          <CardDescription className="text-destructive">
            Failed to load activity data
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="bg-card dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-card-foreground dark:text-white">
          Recent Activity
        </CardTitle>
        <CardDescription className="text-muted-foreground dark:text-gray-400">
          Latest events and updates from your call center
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const ActivityIcon = getActivityIcon(activity.type);
            const OutcomeIcon = getOutcomeIcon(activity.outcome || "");

            return (
              <div
                key={activity.id}
                className="flex items-start space-x-4 p-3 rounded-lg border bg-background/50 dark:bg-gray-900/50 dark:border-gray-700">
                <div className="flex-shrink-0">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10">
                      <ActivityIcon className="h-5 w-5 text-primary" />
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-card-foreground dark:text-white">
                      {activity.title}
                    </h4>
                    {activity.outcome && getOutcomeBadge(activity.outcome)}
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-gray-400 mt-1">
                    {activity.description}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-muted-foreground dark:text-gray-500">
                      {activity.timestamp}
                    </span>
                    {activity.outcome && (
                      <OutcomeIcon className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          {activities.length === 0 && (
            <div className="text-center py-8">
              <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No recent activity</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
