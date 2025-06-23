"use client";

import type React from "react";
import { useState } from "react";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "./ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { ThemeToggle } from "./theme-toggle";

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function DashboardLayout({
  children,
  activeTab,
  onTabChange,
}: DashboardLayoutProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 dark:text-white">
      <SidebarProvider>
        <AppSidebar activeTab={activeTab} onTabChange={onTabChange} />
        <SidebarInset>
          <header className="flex h-14 sm:h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b border-border bg-background dark:bg-gray-900 dark:text-white">
            <div className="flex items-center gap-2 px-2 sm:px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden sm:block">
                    <BreadcrumbLink href="#" className="text-foreground">
                      AdminDo
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden sm:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-foreground">
                      {activeTab === "dashboard"
                        ? "Dashboard"
                        : activeTab === "analytics"
                        ? "Analytics"
                        : activeTab === "calls"
                        ? "Calls"
                        : activeTab === "appointments"
                        ? "Appointments"
                        : activeTab === "agents"
                        ? "Agents"
                        : activeTab === "activity"
                        ? "Activity"
                        : activeTab === "settings"
                        ? "Settings"
                        : "Dashboard"}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex items-center gap-2 px-2 sm:px-4">
              <ThemeToggle />
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-2 sm:gap-4 p-2 sm:p-4 pt-0 bg-background dark:bg-gray-900 dark:text-white">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
