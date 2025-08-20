"use client";
import React from "react";
import { cn } from "@/lib/utils";

export interface MovingBorderProps {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}

export function Button({
  borderRadius = "1rem",
  children,
  as: Component = "div",
  containerClassName,
  borderClassName,
  duration = 2,
  className,
  ...otherProps
}: MovingBorderProps) {
  return (
    <Component
      className={cn(
        "bg-transparent relative p-[1px] overflow-hidden",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0 rounded-[inherit] z-[0] moving-border-spin"
        style={{
          background: `conic-gradient(from 0deg, transparent, #8215E0, transparent 30%)`,
        }}
      />
      <div
        className={cn(
          "relative bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 w-full h-full",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({ children, ...props }: MovingBorderProps) => {
  return <Button {...props}>{children}</Button>;
};