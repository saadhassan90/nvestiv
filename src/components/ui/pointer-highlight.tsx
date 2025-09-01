import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PointerHighlightProps {
  children: React.ReactNode;
  className?: string;
  rectangleClassName?: string;
  pointerClassName?: string;
  containerClassName?: string;
}

export function PointerHighlight({
  children,
  className,
  rectangleClassName,
  pointerClassName,
  containerClassName,
}: PointerHighlightProps) {
  return (
    <span className={cn("relative", containerClassName)}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
          "absolute inset-0 rounded-md",
          rectangleClassName
        )}
      />
      <motion.div
        initial={{ opacity: 0, x: 10, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className={cn(
          "absolute -bottom-1 -right-1 transform rotate-12",
          pointerClassName
        )}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M1 1L11 4L6 6L4 11L1 1Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
      <span className={cn("relative z-20", className)}>{children}</span>
    </span>
  );
}