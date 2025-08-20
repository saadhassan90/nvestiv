"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface ExpandableCardProps {
  title: string;
  subtitle?: string;
  description: string;
  badge: string;
  children: React.ReactNode;
  expandedContent?: React.ReactNode;
  className?: string;
}

export const ExpandableCard = ({
  title,
  subtitle,
  description,
  badge,
  children,
  expandedContent,
  className
}: ExpandableCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className={cn(
        "card-dark-premium text-center cursor-pointer relative overflow-hidden",
        className
      )}
      onClick={() => setIsExpanded(!isExpanded)}
      layout
      initial={false}
      animate={{
        height: isExpanded ? "auto" : "400px"
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-full text-sm font-medium text-muted-foreground mb-6">
          <div className="w-2 h-2 bg-foreground rounded-full"></div>
          {badge}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-foreground mb-4">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-8 leading-relaxed">
          {description}
        </p>

        {/* Content */}
        <div className="mb-6">
          {children}
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && expandedContent && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-border/10 pt-6 mt-6"
            >
              {expandedContent}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand Indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-muted-foreground"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};