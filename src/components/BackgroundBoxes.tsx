"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-background flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-background z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="relative z-20 w-full">
        {children}
      </div>
    </div>
  );
}