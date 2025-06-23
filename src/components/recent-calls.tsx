"use client";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Phone, Clock } from "lucide-react";
import type { RecentCall } from "@/types/dashboard";

interface RecentCallsProps {
  calls: RecentCall[];
}

export function RecentCalls({ calls }: RecentCallsProps) {
  if (calls.length === 0) {
    return (
      <div className="flex items-center justify-center h-24">
        <p className="text-muted-foreground">No recent calls to display.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {calls.map((call) => (
        <div key={call.id} className="flex items-center space-x-3 sm:space-x-4">
          <Avatar className="h-8 w-8 sm:h-9 sm:w-9">
            <AvatarFallback className="text-xs">
              {call.agentName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1 min-w-0">
            <p className="text-sm font-medium leading-none truncate">
              {call.agentName}
            </p>
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
              <Phone className="h-3 w-3" />
              <span className="truncate">{call.customerPhone}</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-end sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
            <Badge
              variant={call.appointmentBooked ? "default" : "secondary"}
              className="text-xs">
              {call.appointmentBooked ? "Booked" : "No Booking"}
            </Badge>
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              {call.duration}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
