import React from "react";
import { cn } from "@/lib/utils";

interface FixedGradientBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function FixedGradientBackground({
  children,
  className,
}: FixedGradientBackgroundProps) {
  return (
    <>
      {/* Fixed gradient background that doesn't scroll */}
      <div className="fixed inset-0 bg-white dark:bg-gray-950 overflow-hidden -z-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,rgba(59,130,246,0)_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12)_0%,rgba(15,23,42,0)_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.08)_0%,rgba(14,165,233,0)_60%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.12)_0%,rgba(14,165,233,0)_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.08)_0%,rgba(99,102,241,0)_60%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.12)_0%,rgba(99,102,241,0)_60%)]" />
      </div>
      
      {/* Content that scrolls on top */}
      <div className={cn("relative z-10", className)}>
        {children}
      </div>
    </>
  );
}