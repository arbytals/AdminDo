"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Phone,
  Calendar,
  Clock,
  Target,
} from "lucide-react";

const callVolumeData = [
  { day: "Mon", calls: 45, appointments: 12 },
  { day: "Tue", calls: 52, appointments: 15 },
  { day: "Wed", calls: 48, appointments: 11 },
  { day: "Thu", calls: 61, appointments: 18 },
  { day: "Fri", calls: 55, appointments: 14 },
  { day: "Sat", calls: 35, appointments: 8 },
  { day: "Sun", calls: 28, appointments: 6 },
];

const conversionData = [
  { name: "Appointments Booked", value: 24, color: "#8884d8" },
  { name: "Follow-ups Scheduled", value: 18, color: "#82ca9d" },
  { name: "No Interest", value: 35, color: "#ffc658" },
  { name: "Callback Requested", value: 23, color: "#ff7300" },
];

const agentPerformance = [
  { name: "Sarah Johnson", calls: 89, appointments: 23, rate: 25.8 },
  { name: "Mike Chen", calls: 76, appointments: 18, rate: 23.7 },
  { name: "Emily Davis", calls: 92, appointments: 21, rate: 22.8 },
  { name: "Alex Rodriguez", calls: 68, appointments: 14, rate: 20.6 },
];

export function CallAnalytics() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-card dark:bg-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground dark:text-white">
              Total Calls This Week
            </CardTitle>
            <Phone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground dark:text-white">
              324
            </div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground dark:text-gray-400">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+12.5%</span>
              <span>from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card dark:bg-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground dark:text-white">
              Conversion Rate
            </CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground dark:text-white">
              23.4%
            </div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground dark:text-gray-400">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+2.1%</span>
              <span>from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card dark:bg-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground dark:text-white">
              Avg Call Duration
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground dark:text-white">
              4:32
            </div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground dark:text-gray-400">
              <TrendingDown className="h-3 w-3 text-red-500" />
              <span className="text-red-500">-0:15</span>
              <span>from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card dark:bg-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground dark:text-white">
              Appointments Booked
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground dark:text-white">
              76
            </div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground dark:text-gray-400">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+8.2%</span>
              <span>from last week</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-card dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-card-foreground">
              Daily Call Volume & Conversions
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Calls made and appointments booked per day
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={callVolumeData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  className="stroke-border"
                />
                <XAxis dataKey="day" stroke="currentColor" />
                <YAxis stroke="currentColor" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--background)",
                    border: "1px solid var(--border)",
                    color: "var(--foreground)",
                  }}
                />
                <Bar dataKey="calls" fill="#8884d8" name="Total Calls" />
                <Bar
                  dataKey="appointments"
                  fill="#82ca9d"
                  name="Appointments"
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-card dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-card-foreground">
              Call Outcomes
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Distribution of call results this week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={conversionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value">
                  {conversionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--background)",
                    border: "1px solid var(--border)",
                    color: "var(--foreground)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Agent Performance */}
      <Card className="bg-card dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-card-foreground">
            Agent Performance
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Individual agent statistics for this week
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {agentPerformance.map((agent) => (
              <div key={agent.name} className="flex items-center space-x-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-card-foreground dark:text-white">
                      {agent.name}
                    </span>
                    <Badge variant="outline" className="text-card-foreground">
                      {agent.rate}% conversion
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground dark:text-gray-400 mb-2">
                    <span>{agent.calls} calls</span>
                    <span>{agent.appointments} appointments</span>
                  </div>
                  <Progress value={agent.rate} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
