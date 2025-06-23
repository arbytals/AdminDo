"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Phone,
  Calendar,
  TrendingUp,
  TrendingDown,
  Users,
  Clock,
} from "lucide-react";
import { CallVolumeChart } from "@/components/call-volume-chart";
import { RecentCalls } from "@/components/recent-calls";
import { useCallMetrics } from "@/hooks/use-call-metrics";
import { useCallHistory } from "@/hooks/use-call-history";
import { Skeleton } from "@/components/ui/skeleton";
import type { RecentCall } from "@/types/dashboard";

export function DashboardOverview() {
  const {
    metrics,
    isLoading: metricsLoading,
    error: metricsError,
  } = useCallMetrics();
  const {
    calls,
    isLoading: callsLoading,
    error: callsError,
  } = useCallHistory();

  // We only want to show the 5 most recent calls in the overview
  const recentCalls = calls.slice(0, 5) as RecentCall[];

  const isLoading = metricsLoading || callsLoading;
  const error = metricsError || callsError;

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">Failed to load dashboard data</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-card dark:bg-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground dark:text-white">
              Total Calls
            </CardTitle>
            <Phone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground dark:text-white">
              {metrics.totalCalls}
            </div>
            <div className="flex items-center text-xs text-muted-foreground dark:text-gray-400">
              {metrics.weeklyChange >= 0 ? (
                <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
              ) : (
                <TrendingDown className="h-4 w-4 mr-1 text-red-500" />
              )}
              <span
                className={
                  metrics.weeklyChange >= 0 ? "text-green-500" : "text-red-500"
                }>
                {metrics.weeklyChange > 0 ? "+" : ""}
                {metrics.weeklyChange}%
              </span>
              <span className="ml-1">from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card dark:bg-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground dark:text-white">
              Appointments
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground dark:text-white">
              {metrics.appointmentsBooked}
            </div>
            <p className="text-xs text-muted-foreground dark:text-gray-400">
              {metrics.appointmentRate}% conversion rate
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card dark:bg-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground dark:text-white">
              Avg Duration
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground dark:text-white">
              {metrics.averageCallDuration}m
            </div>
            <p className="text-xs text-muted-foreground dark:text-gray-400">
              per call
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card dark:bg-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground dark:text-white">
              Active Agents
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground dark:text-white">
              {metrics.activeAgents}
            </div>
            <p className="text-xs text-muted-foreground dark:text-gray-400">
              currently online
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Call Volume Chart */}
      <Card className="bg-card dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-card-foreground dark:text-white">
            Call Volume
          </CardTitle>
          <CardDescription className="text-muted-foreground dark:text-gray-400">
            Daily call volume and appointments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CallVolumeChart />
        </CardContent>
      </Card>

      {/* Recent Calls */}
      <Card className="bg-card dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-card-foreground dark:text-white">
            Recent Calls
          </CardTitle>
          <CardDescription className="text-muted-foreground dark:text-gray-400">
            Latest call activity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RecentCalls calls={recentCalls} />
        </CardContent>
      </Card>
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <Card key={i} className="col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-8 w-16 mb-2" />
            <Skeleton className="h-3 w-24" />
          </CardContent>
        </Card>
      ))}
      <Card className="col-span-2 lg:col-span-2">
        <CardHeader>
          <Skeleton className="h-5 w-24 mb-2" />
          <Skeleton className="h-4 w-48" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[200px] sm:h-[300px] w-full" />
        </CardContent>
      </Card>
      <Card className="col-span-2 lg:col-span-2">
        <CardHeader>
          <Skeleton className="h-5 w-24 mb-2" />
          <Skeleton className="h-4 w-48" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <Skeleton className="h-9 w-9 rounded-full" />
                <div className="flex-1 space-y-1">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-32" />
                </div>
                <Skeleton className="h-6 w-16" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
