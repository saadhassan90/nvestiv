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
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: MovingBorderProps) {
  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl h-16 w-full p-[1px] overflow-hidden",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0 rounded-[inherit] [mask:linear-gradient(white,transparent)] z-[0]"
        style={{
          background: `conic-gradient(from 0deg, transparent, #8215E0, transparent 30%)`,
          animation: `spin ${duration ?? 2}s linear infinite`,
        }}
      />
      <div
        className={cn(
          "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
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