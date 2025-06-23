"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { DashboardOverview } from "@/components/dashboard-overview";
import { CallHistory } from "@/components/call-history";
import { AppointmentsList } from "@/components/appointments-list";
import { CallAnalytics } from "@/components/call-analytics";
import { CallAgents } from "@/components/call-agents";
import { RecentActivity } from "@/components/recent-activity";
import { Settings } from "@/components/settings";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview />;
      case "analytics":
        return <CallAnalytics />;
      case "calls":
        return <CallHistory />;
      case "appointments":
        return <AppointmentsList />;
      case "agents":
        return <CallAgents />;
      case "activity":
        return <RecentActivity />;
      case "settings":
        return <Settings />;
      default:
        return <DashboardOverview />;
    }
  };

  const getPageTitle = () => {
    switch (activeTab) {
      case "dashboard":
        return "Dashboard";
      case "analytics":
        return "Call Analytics";
      case "calls":
        return "Call History";
      case "appointments":
        return "Appointments";
      case "agents":
        return "Call Agents";
      case "activity":
        return "Recent Activity";
      case "settings":
        return "Settings";
      default:
        return "Dashboard";
    }
  };

  return (
    <div className="bg-background dark:bg-gray-900">
      <DashboardLayout activeTab={activeTab} onTabChange={setActiveTab}>
        <div className="p-4 sm:p-6 bg-card dark:bg-gray-800 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-foreground dark:text-white mb-4">
            {getPageTitle()}
          </h1>
          <div className="bg-background dark:bg-gray-900 p-4 rounded-lg">
            {renderContent()}
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
}
