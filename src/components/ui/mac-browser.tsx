import React from "react";
import { cn } from "@/lib/utils";

interface MacBrowserProps {
  children: React.ReactNode;
  className?: string;
  url?: string;
  title?: string;
}

export const MacBrowser = ({ 
  children, 
  className
}: MacBrowserProps) => {
  return (
    <div className={cn(
      "w-full max-w-6xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-600",
      className
    )}>
      {/* Browser Header */}
      <div className="bg-gray-700 px-4 py-3 border-b border-gray-600">
        {/* Traffic Lights */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      
      {/* Browser Content */}
      <div className="bg-gray-800">
        {children}
      </div>
    </div>
  );
};