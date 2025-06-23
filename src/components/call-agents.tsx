"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Phone,
  Calendar,
  Clock,
  TrendingUp,
  Users,
  Plus,
  Edit,
  MoreHorizontal,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAgents } from "@/hooks/use-agents";
import { Skeleton } from "@/components/ui/skeleton";

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-500";
    case "busy":
      return "bg-yellow-500";
    case "inactive":
      return "bg-gray-500";
    default:
      return "bg-gray-500";
  }
};

const getPerformanceBadge = (performance: string) => {
  switch (performance) {
    case "excellent":
      return <Badge className="bg-green-100 text-green-800">Excellent</Badge>;
    case "good":
      return <Badge className="bg-blue-100 text-blue-800">Good</Badge>;
    case "average":
      return <Badge className="bg-yellow-100 text-yellow-800">Average</Badge>;
    default:
      return <Badge variant="secondary">Unknown</Badge>;
  }
};

export function CallAgents() {
  const { agents, isLoading, error } = useAgents();

  // Note: Most of these metrics are placeholders. A real implementation would involve
  // more complex queries to calculate these values per agent.
  const totalCallsToday = agents.reduce(
    (sum, agent) => sum + agent.totalCalls,
    0
  );
  const totalAppointments = agents.reduce(
    (sum, agent) => sum + agent.appointmentsBooked,
    0
  );
  const avgConversion = agents.length > 0 ? 23.7 : 0; // Placeholder

  if (isLoading) {
    return <AgentSkeleton />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">Failed to load agent data.</p>
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
              Total Agents
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground dark:text-white">
              {agents.length}
            </div>
            <p className="text-xs text-muted-foreground dark:text-gray-400">
              {agents.filter((a) => a.status === "active").length} active
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card dark:bg-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground dark:text-white">
              Avg Conversion
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground dark:text-white">
              {avgConversion.toFixed(1)}%
            </div>
            <p className="text-xs text-muted-foreground dark:text-gray-400">
              Across all agents
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card dark:bg-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground dark:text-white">
              Total Calls Today
            </CardTitle>
            <Phone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground dark:text-white">
              {totalCallsToday}
            </div>
            <p className="text-xs text-muted-foreground dark:text-gray-400">
              All agents combined
            </p>
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
              {totalAppointments}
            </div>
            <p className="text-xs text-muted-foreground dark:text-gray-400">
              Booked today
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Add Agent Button */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-foreground">
          Agent Management
        </h3>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Agent
        </Button>
      </div>

      {/* Agents List */}
      <div className="grid gap-4 md:grid-cols-2">
        {agents.map((agent) => (
          <Card key={agent.id} className="bg-card dark:bg-gray-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      {/* AvatarImage is removed to prevent 404s, relying on Fallback */}
                      <AvatarFallback>
                        {agent.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`absolute -bottom-1 -right-1 h-3 w-3 rounded-full ${getStatusColor(
                        agent.status
                      )}`}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground dark:text-white">
                      {agent.name}
                    </h4>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">
                      {agent.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-background">
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Agent
                      </DropdownMenuItem>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Assign Calls</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-card-foreground dark:text-white">
                      {agent.totalCalls} calls
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-card-foreground dark:text-white">
                      {agent.appointmentsBooked} booked
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-card-foreground dark:text-white">
                      {agent.averageCallDuration}m avg
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    <span className="text-card-foreground dark:text-white">
                      {agent.totalCalls > 0
                        ? Math.round(
                            (agent.appointmentsBooked / agent.totalCalls) * 100
                          )
                        : 0}
                      % rate
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-card-foreground dark:text-white">
                      Conversion Rate
                    </span>
                    <span className="text-card-foreground dark:text-white">
                      {agent.totalCalls > 0
                        ? Math.round(
                            (agent.appointmentsBooked / agent.totalCalls) * 100
                          )
                        : 0}
                      %
                    </span>
                  </div>
                  <Progress
                    value={
                      agent.totalCalls > 0
                        ? Math.round(
                            (agent.appointmentsBooked / agent.totalCalls) * 100
                          )
                        : 0
                    }
                    className="h-2"
                  />
                </div>

                <div className="flex justify-between items-center text-xs text-muted-foreground dark:text-gray-400">
                  <span>
                    Last active:{" "}
                    {agent.status === "active" ? "now" : "1 hour ago"}
                  </span>
                  <Badge
                    variant="outline"
                    className={`capitalize ${
                      agent.status === "active"
                        ? "border-green-500 text-green-500"
                        : agent.status === "busy"
                        ? "border-yellow-500 text-yellow-500"
                        : "border-gray-500 text-gray-500"
                    }`}>
                    {agent.status}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function AgentSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-28" />
        ))}
      </div>
      <div className="flex justify-between items-center">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-10 w-28" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-64" />
        ))}
      </div>
    </div>
  );
}
