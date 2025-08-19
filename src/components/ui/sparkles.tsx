"use client";
import React, { useId, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SparklesProps {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
  children?: React.ReactNode;
}

export const SparklesCore = (props: SparklesProps) => {
  const {
    id,
    className,
    background = "transparent",
    minSize = 0.5,
    maxSize = 1.5,
    particleDensity = 100,
    particleColor = "#8215E0",
    children,
  } = props;
  
  const [init, setInit] = useState(false);
  const generatedId = useId();
  const sparklesId = id || "sparkles" + generatedId;

  useEffect(() => {
    setInit(true);
  }, []);

  // Generate random sparkles
  const sparkles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * (maxSize - minSize) + minSize,
    delay: Math.random() * 3,
  }));

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Black background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Sparkles overlay */}
      {init && (
        <div className="absolute inset-0 w-full h-full">
          {sparkles.map((sparkle) => (
            <div
              key={sparkle.id}
              className="absolute animate-pulse"
              style={{
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`,
                animationDelay: `${sparkle.delay}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              <div
                className="rounded-full opacity-70"
                style={{
                  width: `${sparkle.size}px`,
                  height: `${sparkle.size}px`,
                  backgroundColor: particleColor,
                  boxShadow: `0 0 ${sparkle.size * 2}px ${particleColor}`,
                }}
              />
            </div>
          ))}
        </div>
      )}
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export const Sparkles = ({ children, className, ...props }: SparklesProps) => {
  return (
    <SparklesCore
      className={cn("relative w-full h-full", className)}
      particleColor="#8215E0"
      {...props}
    >
      {children}
    </SparklesCore>
  );
};