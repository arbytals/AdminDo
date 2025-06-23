"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, FileText, Phone } from "lucide-react";
import { useCallHistory } from "@/hooks/use-call-history";
import { MobileCallCard } from "@/components/mobile-call-card";
import { CallDetailsDialog } from "@/components/call-details-dialog";
import type { CallRecord } from "@/types/dashboard";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function CallHistory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedCall, setSelectedCall] = useState<CallRecord | null>(null);
  const { calls, isLoading, error } = useCallHistory();

  const filteredCalls = calls.filter((call) => {
    const matchesSearch =
      call.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      call.customerPhone.includes(searchTerm) ||
      call.agentName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "booked" && call.appointmentBooked) ||
      (statusFilter === "not-booked" && !call.appointmentBooked);
    return matchesSearch && matchesStatus;
  });

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Call History</CardTitle>
          <CardDescription>Loading call data...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-16 bg-muted animate-pulse rounded" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Call History</CardTitle>
          <CardDescription>Failed to load call history</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="bg-card dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-card-foreground dark:text-white">
          Call History
        </CardTitle>
        <CardDescription className="text-muted-foreground dark:text-gray-400">
          Complete history of all calls made by your agents
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search calls..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-background"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[180px] bg-background">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent className="bg-background">
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4">
            {filteredCalls.map((call) => (
              <Card key={call.id} className="bg-card">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <Avatar>
                          <AvatarFallback className="bg-muted text-muted-foreground">
                            {call.customerName[0]}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground">
                          {call.customerName}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {call.customerPhone}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge
                            variant={
                              call.status === "completed"
                                ? "default"
                                : call.status === "in-progress"
                                ? "secondary"
                                : "destructive"
                            }>
                            {call.status}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {call.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedCall(call)}
                        className="text-muted-foreground hover:text-foreground">
                        <Phone className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <CallDetailsDialog
            call={selectedCall}
            open={!!selectedCall}
            onOpenChange={(open) => !open && setSelectedCall(null)}
          />
        </div>
      </CardContent>
    </Card>
  );
}
