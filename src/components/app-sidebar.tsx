"use client";

import { useAuth } from "@/contexts/auth-context";
import {
  Calendar,
  Home,
  Phone,
  Settings,
  Users,
  BarChart3,
  Clock,
  LogOut,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSidebar } from "@/components/ui/sidebar";
import Image from "next/image";

interface AppSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const items = [
  {
    title: "Dashboard",
    id: "dashboard",
    icon: Home,
  },
  {
    title: "Call Analytics",
    id: "analytics",
    icon: BarChart3,
  },
  {
    title: "Call History",
    id: "calls",
    icon: Phone,
  },
  {
    title: "Appointments",
    id: "appointments",
    icon: Calendar,
  },
  {
    title: "Call Agents",
    id: "agents",
    icon: Users,
  },
  {
    title: "Recent Activity",
    id: "activity",
    icon: Clock,
  },
  {
    title: "Settings",
    id: "settings",
    icon: Settings,
  },
];

export function AppSidebar({ activeTab, onTabChange }: AppSidebarProps) {
  const { user, signOut } = useAuth();
  const { setOpen, isMobile } = useSidebar();

  const handleTabChange = (tabId: string) => {
    onTabChange(tabId);
    // Close sidebar on mobile when tab is selected
    if (isMobile) {
      setOpen(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <Sidebar
      variant="inset"
      className="bg-background dark:bg-gray-900 border-r border-border dark:text-white">
      <SidebarHeader className="border-b border-border dark:border-gray-800 bg-background dark:bg-gray-900">
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="flex h-8 w-8 items-center justify-center bg-transparent">
            <Image src="/logo.png" alt="AdminDo Logo" width={32} height={32} />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold text-foreground">
              AdminDo
            </span>
            <span className="truncate text-xs text-muted-foreground">
              AI Assistant
            </span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={activeTab === item.id}
                    onClick={() => handleTabChange(item.id)}
                    className="cursor-pointer text-foreground hover:bg-accent hover:text-accent-foreground">
                    <item.icon className="text-muted-foreground" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-border dark:border-gray-800 bg-background dark:bg-gray-900">
        <div className="flex items-center gap-2 px-4 py-2">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={user?.user_metadata?.avatar_url}
              alt={user?.email || "User"}
            />
            <AvatarFallback className="bg-muted text-muted-foreground">
              {user?.email?.charAt(0).toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold text-foreground">
              {user?.user_metadata?.full_name || user?.email || "John Doe"}
            </span>
            <span className="truncate text-xs text-muted-foreground">
              {user?.email || "john@admindo.com"}
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
            onClick={handleSignOut}>
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
