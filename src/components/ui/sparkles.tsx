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
    minSize = 0.4,
    maxSize = 1,
    particleDensity = 1200,
    particleColor = "#FFFFFF",
    children,
  } = props;
  
  const [init, setInit] = useState(false);

  useEffect(() => {
    setInit(true);
  }, []);

  const particles = [];
  for (let i = 0; i < particleDensity; i++) {
    particles.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (maxSize - minSize) + minSize,
      opacity: Math.random() * 0.8 + 0.2,
      delay: Math.random() * 20,
    });
  }

  return (
    <div className={cn("relative", className)} style={{ background }}>
      {init && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full animate-sparkle"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particleColor,
                boxShadow: `0 0 ${particle.size * 2}px ${particleColor}`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      )}
      {children}
    </div>
  );
};

export const Sparkles = ({ children, className, ...props }: SparklesProps) => {
  return (
    <SparklesCore
      className={cn("relative w-full h-full", className)}
      background="black"
      particleColor="#FFFFFF"
      particleDensity={1200}
      {...props}
    >
      {children}
    </SparklesCore>
  );
};