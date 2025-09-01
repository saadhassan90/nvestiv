import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TextRotateProps {
  words: string[];
  duration?: number;
  className?: string;
}

export const TextRotate: React.FC<TextRotateProps> = ({
  words,
  duration = 3000,
  className,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, 300);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <span
      className={cn(
        "inline-block transition-all duration-300 ease-in-out",
        isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-2",
        className
      )}
    >
      {words[currentWordIndex]}
    </span>
  );
};