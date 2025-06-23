import type React from "react";
import { cn } from "@/lib/utils";

interface LayoutContainerProps {
  children: React.ReactNode;
  className?: string;
}


export function LayoutContainer({ children, className }: LayoutContainerProps) {
  return (
    <div
      className={cn(
        "container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]",
        className
      )}>
      {children}
    </div>
  );
}
