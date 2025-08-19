import { cn } from "@/lib/utils";
import React from "react";

interface BackgroundGradientAnimationProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  interactive?: boolean;
}

export function BackgroundGradientAnimation({
  children,
  className,
  containerClassName,
  colors = ["#ffaa40", "#9c40ff", "#ffaa40", "#9c40ff", "#ffaa40"],
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  interactive = true,
}: BackgroundGradientAnimationProps) {
  const interactiveRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (interactiveRef.current) {
        const rect = interactiveRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        interactiveRef.current.style.setProperty("--x", `${x}px`);
        interactiveRef.current.style.setProperty("--y", `${y}px`);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [interactive]);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br",
        containerClassName
      )}
      ref={interactive ? interactiveRef : null}
      style={{
        background: `linear-gradient(40deg, ${gradientBackgroundStart}, ${gradientBackgroundEnd})`,
      }}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("", className)}>
        <div className="gradients-container h-full w-full blur-lg">
          <div
            className={cn(
              "absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]",
              "[mix-blend-mode:var(--blending-value)] [width:var(--size)] [height:var(--size)] [top:calc(50%-var(--size)/2)] [left:calc(50%-var(--size)/2)]",
              "[transform-origin:center_center]",
              "[animation:first_7s_ease-in-out_infinite]",
              "opacity-100"
            )}
            style={{
              "--first-color": `rgba(${firstColor}, 1)`,
              "--size": size,
              "--blending-value": blendingValue,
            } as React.CSSProperties}
          ></div>
          <div
            className={cn(
              "absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]",
              "[mix-blend-mode:var(--blending-value)] [width:var(--size)] [height:var(--size)] [top:calc(50%-var(--size)/2)] [left:calc(50%-var(--size)/2)]",
              "[transform-origin:calc(50%-400px)]",
              "[animation:second_7s_ease-in-out_infinite]",
              "opacity-100"
            )}
            style={{
              "--second-color": secondColor,
              "--size": size,
              "--blending-value": blendingValue,
            } as React.CSSProperties}
          ></div>
          <div
            className={cn(
              "absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]",
              "[mix-blend-mode:var(--blending-value)] [width:var(--size)] [height:var(--size)] [top:calc(50%-var(--size)/2)] [left:calc(50%-var(--size)/2)]",
              "[transform-origin:calc(50%+400px)]",
              "[animation:third_7s_ease-in-out_infinite]",
              "opacity-100"
            )}
            style={{
              "--third-color": thirdColor,
              "--size": size,
              "--blending-value": blendingValue,
            } as React.CSSProperties}
          ></div>
          <div
            className={cn(
              "absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]",
              "[mix-blend-mode:var(--blending-value)] [width:var(--size)] [height:var(--size)] [top:calc(50%-var(--size)/2)] [left:calc(50%-var(--size)/2)]",
              "[transform-origin:calc(50%-200px)]",
              "[animation:fourth_7s_ease-in-out_infinite]",
              "opacity-70"
            )}
            style={{
              "--fourth-color": fourthColor,
              "--size": size,
              "--blending-value": blendingValue,
            } as React.CSSProperties}
          ></div>
          <div
            className={cn(
              "absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]",
              "[mix-blend-mode:var(--blending-value)] [width:var(--size)] [height:var(--size)] [top:calc(50%-var(--size)/2)] [left:calc(50%-var(--size)/2)]",
              "[transform-origin:calc(50%-800px)_calc(50%+800px)]",
              "[animation:fifth_7s_ease-in-out_infinite]",
              "opacity-100"
            )}
            style={{
              "--fifth-color": fifthColor,
              "--size": size,
              "--blending-value": blendingValue,
            } as React.CSSProperties}
          ></div>

          {interactive && (
            <div
              className={cn(
                "absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]",
                "[mix-blend-mode:var(--blending-value)] [width:var(--size)] [height:var(--size)]",
                "[top:calc(var(--y)-var(--size)/2)] [left:calc(var(--x)-var(--size)/2)]",
                "opacity-70"
              )}
              style={{
                "--pointer-color": pointerColor,
                "--size": size,
                "--blending-value": blendingValue,
                "--x": "50%",
                "--y": "50%",
              } as React.CSSProperties}
            ></div>
          )}
        </div>
        {children}
      </div>

      <style>{`
        @keyframes first {
          0% {
            transform: rotate(0deg);
          }
          33% {
            transform: rotate(120deg);
          }
          66% {
            transform: rotate(240deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes second {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(180deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes third {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(90deg);
          }
          50% {
            transform: rotate(180deg);
          }
          75% {
            transform: rotate(270deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes fourth {
          0% {
            transform: rotate(0deg);
          }
          33% {
            transform: rotate(-120deg);
          }
          66% {
            transform: rotate(-240deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }

        @keyframes fifth {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-90deg);
          }
          50% {
            transform: rotate(-180deg);
          }
          75% {
            transform: rotate(-270deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
}