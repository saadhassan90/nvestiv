"use client";
import React from "react";
import { Button } from "./ui/moving-border";

export function MovingBorderDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <Button
        borderRadius="1.75rem"
        className="bg-background dark:bg-card text-foreground dark:text-card-foreground border-border dark:border-card-foreground/20"
      >
        Moving Border
      </Button>
    </div>
  );
}