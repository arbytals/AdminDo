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
import { Calendar, Clock, Mail, Phone, Search, User, Edit } from "lucide-react";
import { useAppointments } from "@/hooks/use-appointments";
// import { MobileAppointmentCard } from "@/components/mobile-appointment-card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function AppointmentsList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const { appointments, isLoading, error } = useAppointments();

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch =
      appointment.customerName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      appointment.customerEmail
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      appointment.reason.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || appointment.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled":
        return "default";
      case "completed":
        return "secondary";
      case "cancelled":
        return "destructive";
      default:
        return "secondary";
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="h-4 bg-muted animate-pulse rounded" />
              </CardHeader>
              <CardContent>
                <div className="h-8 bg-muted animate-pulse rounded" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Appointments</CardTitle>
          <CardDescription>Failed to load appointments</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Appointments
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{appointments.length}</div>
            <p className="text-xs text-muted-foreground">
              {appointments.filter((apt) => apt.status === "scheduled").length}{" "}
              scheduled
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {appointments.filter((apt) => apt.status === "scheduled").length}
            </div>
            <p className="text-xs text-muted-foreground">
              Upcoming appointments
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Completion Rate
            </CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {appointments.length > 0
                ? Math.round(
                    (appointments.filter((apt) => apt.status === "completed")
                      .length /
                      appointments.length) *
                      100
                  )
                : 0}
              %
            </div>
            <p className="text-xs text-muted-foreground">
              Average show-up rate
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-card-foreground dark:text-white">
            Upcoming Appointments
          </CardTitle>
          <CardDescription className="text-muted-foreground dark:text-gray-400">
            Your scheduled appointments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-center justify-between p-4 rounded-lg border bg-background dark:bg-gray-900 dark:border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Avatar>
                      <AvatarFallback>
                        {appointment.customerName[0]}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <p className="font-medium text-foreground dark:text-white">
                      {appointment.customerName}
                    </p>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">
                      {appointment.appointmentTime}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge
                    variant={
                      appointment.status === "scheduled"
                        ? "default"
                        : "secondary"
                    }
                    className="dark:bg-gray-800">
                    {appointment.status}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="dark:text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    Reschedule
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
