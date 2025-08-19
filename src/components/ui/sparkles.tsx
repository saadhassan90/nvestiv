"use client";
import React, { useId, useEffect, useState } from "react";
import { useTheme } from "next-themes";
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
    particleColor = "#FFF",
    children,
  } = props;
  
  const [init, setInit] = useState(false);
  const generatedId = useId();
  const sparklesId = id || "sparkles" + generatedId;

  useEffect(() => {
    setInit(true);
  }, []);

  return (
    <div className={cn("relative", className)}>
      {init && (
        <svg
          className="absolute inset-0 h-full w-full pointer-events-none"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id={sparklesId}
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <g className="animate-pulse">
                <circle
                  cx="1"
                  cy="1"
                  r={minSize}
                  fill={particleColor}
                  opacity="0.8"
                >
                  <animate
                    attributeName="opacity"
                    values="0.8;0.3;0.8"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="10"
                  cy="10"
                  r={maxSize}
                  fill={particleColor}
                  opacity="0.5"
                >
                  <animate
                    attributeName="opacity"
                    values="0.5;1;0.5"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="20"
                  cy="20"
                  r={minSize}
                  fill={particleColor}
                  opacity="0.7"
                >
                  <animate
                    attributeName="opacity"
                    values="0.7;0.2;0.7"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="40"
                  cy="40"
                  r={maxSize}
                  fill={particleColor}
                  opacity="0.4"
                >
                  <animate
                    attributeName="opacity"
                    values="0.4;0.9;0.4"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="60"
                  cy="60"
                  r={minSize}
                  fill={particleColor}
                  opacity="0.6"
                >
                  <animate
                    attributeName="opacity"
                    values="0.6;1;0.6"
                    dur="3.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="80"
                  cy="80"
                  r={maxSize}
                  fill={particleColor}
                  opacity="0.3"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;0.8;0.3"
                    dur="2.8s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="90"
                  cy="10"
                  r={minSize}
                  fill={particleColor}
                  opacity="0.5"
                >
                  <animate
                    attributeName="opacity"
                    values="0.5;1;0.5"
                    dur="4.2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="15"
                  cy="70"
                  r={maxSize}
                  fill={particleColor}
                  opacity="0.8"
                >
                  <animate
                    attributeName="opacity"
                    values="0.8;0.4;0.8"
                    dur="3.1s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="75"
                  cy="25"
                  r={minSize}
                  fill={particleColor}
                  opacity="0.7"
                >
                  <animate
                    attributeName="opacity"
                    values="0.7;1;0.7"
                    dur="2.3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="35"
                  cy="85"
                  r={maxSize}
                  fill={particleColor}
                  opacity="0.4"
                >
                  <animate
                    attributeName="opacity"
                    values="0.4;0.9;0.4"
                    dur="3.8s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill={`url(#${sparklesId})`}
            opacity="0.6"
          />
        </svg>
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export const Sparkles = ({ children, className, ...props }: SparklesProps) => {
  return (
    <SparklesCore
      className={cn("relative w-full h-full bg-black", className)}
      particleColor="#8215E0"
      {...props}
    >
      {children}
    </SparklesCore>
  );
};