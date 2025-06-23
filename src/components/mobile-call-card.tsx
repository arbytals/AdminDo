"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, Clock, User, FileText } from "lucide-react";
import type { CallRecord } from "@/types/dashboard";

interface MobileCallCardProps {
  call: CallRecord;
  onViewDetails: () => void;
}

export function MobileCallCard({ call, onViewDetails }: MobileCallCardProps) {
  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium text-sm">{call.agentName}</span>
            </div>
            <div className="text-lg font-semibold">{call.customerName}</div>
          </div>
          <Badge
            variant={call.appointmentBooked ? "default" : "secondary"}
            className="text-xs">
            {call.appointmentBooked ? "Booked" : "No Booking"}
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span className="truncate">{call.customerPhone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{call.duration}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {new Date(call.timestamp).toLocaleDateString()}
          </span>
          <Button variant="outline" size="sm" onClick={onViewDetails}>
            <FileText className="h-4 w-4 mr-1" />
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
