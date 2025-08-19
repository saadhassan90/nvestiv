import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ParallaxContainerProps {
  children: ReactNode;
  className?: string;
  speed?: "slow" | "medium" | "fast";
  enableFloat?: boolean;
}

/**
 * ParallaxContainer - Wrapper component for all pages to ensure consistent parallax behavior
 * - Automatically applies parallax classes and respects reduced motion preferences
 * - Use this for all new pages to ensure parallax scroll functionality
 * 
 * @param speed - Controls parallax speed: slow, medium, fast
 * @param enableFloat - Adds subtle floating animation
 */
const ParallaxContainer = ({ 
  children, 
  className, 
  speed = "slow", 
  enableFloat = false 
}: ParallaxContainerProps) => {
  const parallaxClass = speed === "slow" ? "parallax-slow" : 
                       speed === "medium" ? "parallax-medium" : 
                       "parallax-fast";

  return (
    <div className={cn(
      "parallax overflow-x-hidden",
      className
    )}>
      <div className={cn(
        "parallax-element",
        parallaxClass,
        enableFloat && "animate-parallax-float"
      )}>
        {children}
      </div>
    </div>
  );
};

export default ParallaxContainer;