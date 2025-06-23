"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Mail, Phone, User, Edit } from "lucide-react";
import type { Appointment } from "@/types/dashboard";

interface MobileAppointmentCardProps {
  appointment: Appointment;
  statusColor: "default" | "secondary" | "destructive";
}

export function MobileAppointmentCard({
  appointment,
  statusColor,
}: MobileAppointmentCardProps) {
  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="text-lg font-semibold mb-1">
              {appointment.customerName}
            </div>
            <div className="text-sm text-muted-foreground">
              {appointment.reason}
            </div>
          </div>
          <Badge variant={statusColor} className="text-xs">
            {appointment.status.charAt(0).toUpperCase() +
              appointment.status.slice(1)}
          </Badge>
        </div>

        <div className="space-y-2 mb-3 text-sm">
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <span className="truncate">{appointment.customerEmail}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <span>{appointment.customerPhone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <span>
              {new Date(appointment.appointmentDate).toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <span>{appointment.appointmentTime}</span>
          </div>
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <span>{appointment.agentName}</span>
          </div>
        </div>

        {appointment.notes && (
          <div className="mb-3 p-2 bg-muted/30 rounded text-xs">
            <span className="font-medium">Notes: </span>
            {appointment.notes}
          </div>
        )}

        <div className="flex justify-end">
          <Button variant="outline" size="sm">
            <Edit className="h-4 w-4 mr-1" />
            Edit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
