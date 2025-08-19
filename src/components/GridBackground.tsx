import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  gridSize?: number;
  gridColor?: string;
  fadeColor?: string;
}

export function GridBackground({
  children,
  className,
  gridSize = 50,
  gridColor = "stroke-border/[0.04]",
  fadeColor = "mask-gradient-to-br",
}: GridBackgroundProps) {
  return (
    <div className={cn("relative w-full", className)}>
      {/* Grid SVG Background */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width={gridSize}
              height={gridSize}
              patternUnits="userSpaceOnUse"
            >
              <path
                d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
                fill="none"
                className={gridColor}
                strokeWidth="1"
              />
            </pattern>
            <radialGradient id="fade" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(var(--background))" stopOpacity="0" />
              <stop offset="100%" stopColor="hsl(var(--background))" stopOpacity="1" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#fade)" />
        </svg>
      </div>
      {children}
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