import { cn } from "@/lib/utils";
import React from "react";

interface GridBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function GridBackground({
  children,
  className,
}: GridBackgroundProps) {
  return (
    <div className={cn("relative w-full bg-white dark:bg-black", className)}>
      {/* Aceternity Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )} />
      {/* Radial gradient for the container to give a faded look */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black">
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

interface GridBackgroundDemoProps {
  children?: React.ReactNode;
  className?: string;
}

export function GridBackgroundDemo({ children, className }: GridBackgroundDemoProps) {
  return (
    <GridBackground className={cn("min-h-screen bg-background", className)}>
      <div className="relative z-10">
        {children}
      </div>
    </GridBackground>
  );
}