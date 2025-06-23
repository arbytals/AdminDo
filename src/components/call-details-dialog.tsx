"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Mail, Phone, User } from "lucide-react";
import type { CallRecord } from "@/types/dashboard";

interface CallDetailsDialogProps {
  call: CallRecord | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CallDetailsDialog({
  call,
  open,
  onOpenChange,
}: CallDetailsDialogProps) {
  if (!call) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Call Details
            <Badge variant={call.appointmentBooked ? "default" : "secondary"}>
              {call.appointmentBooked ? "Appointment Booked" : "No Appointment"}
            </Badge>
          </DialogTitle>
          <DialogDescription>
            Complete information for call {call.id}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[70vh] pr-4">
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="font-semibold">Agent</span>
                </div>
                <p className="text-sm pl-6">{call.agentName}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="font-semibold">Customer</span>
                </div>
                <p className="text-sm pl-6">{call.customerName}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="font-semibold">Phone</span>
                </div>
                <p className="text-sm pl-6">{call.customerPhone}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="font-semibold">Duration</span>
                </div>
                <p className="text-sm pl-6">{call.duration}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold flex items-center space-x-2">
                <span>Call Transcript</span>
              </h4>
              <ScrollArea className="h-32 w-full rounded border p-3 bg-muted/30">
                <p className="text-sm leading-relaxed">{call.transcript}</p>
              </ScrollArea>
            </div>

            {call.appointmentDetails && (
              <div className="space-y-3">
                <h4 className="font-semibold">Appointment Details</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm bg-muted/30 p-4 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Date:</span>
                    <span>{call.appointmentDetails.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Time:</span>
                    <span>{call.appointmentDetails.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Email:</span>
                    <span className="truncate">
                      {call.appointmentDetails.email}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Reason:</span>
                    <span>{call.appointmentDetails.reason}</span>
                  </div>
                  <div className="col-span-1 sm:col-span-2">
                    <span className="font-medium">Notes:</span>
                    <p className="mt-1 text-muted-foreground">
                      {call.appointmentDetails.notes}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
