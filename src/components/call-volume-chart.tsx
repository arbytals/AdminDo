"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";
import { Skeleton } from "@/components/ui/skeleton";

interface ChartData {
  date: string;
  calls: number;
}

export function CallVolumeChart() {
  const [data, setData] = useState<ChartData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const fetchChartData = async () => {
      setIsLoading(true);
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      const { data: callsData, error } = await supabase
        .from("calls")
        .select("start_time")
        .gte("start_time", sevenDaysAgo.toISOString());

      if (error) {
        console.error("Error fetching call volume data:", error);
        setIsLoading(false);
        return;
      }

      // Process data to get calls per day
      const callsByDay: { [key: string]: number } = {};
      for (let i = 0; i < 7; i++) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const dayString = d.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });
        callsByDay[dayString] = 0;
      }

      callsData.forEach((call) => {
        const callDate = new Date(call.start_time!).toLocaleDateString(
          "en-US",
          {
            month: "short",
            day: "numeric",
          }
        );
        if (callsByDay.hasOwnProperty(callDate)) {
          callsByDay[callDate]++;
        }
      });

      const chartData = Object.keys(callsByDay)
        .map((date) => ({ date, calls: callsByDay[date] }))
        .reverse(); // Reverse to show oldest date first

      setData(chartData);
      setIsLoading(false);
    };

    fetchChartData();

    // Set up real-time subscription for calls table
    const callsSubscription = supabase
      .channel("calls_volume_changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "calls",
        },
        () => {
          // Refetch data when there's a change
          fetchChartData();
        }
      )
      .subscribe();

    // Cleanup subscription
    return () => {
      supabase.removeChannel(callsSubscription);
    };
  }, [supabase]);

  if (isLoading) {
    return <Skeleton className="h-[300px] w-full" />;
  }

  return (
    <Card className="bg-card dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-card-foreground dark:text-white">
          Call Volume
        </CardTitle>
        <CardDescription className="text-muted-foreground dark:text-gray-400">
          Daily call volume over the last 7 days
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}>
              <defs>
                <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="date"
                stroke="currentColor"
                className="text-muted-foreground dark:text-gray-400"
              />
              <YAxis
                stroke="currentColor"
                allowDecimals={false}
                className="text-muted-foreground dark:text-gray-400"
              />
              <CartesianGrid
                strokeDasharray="3 3"
                className="stroke-border/50"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                }}
              />
              <Area
                type="monotone"
                dataKey="calls"
                stroke="#7c3aed"
                fillOpacity={1}
                fill="url(#colorVolume)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
