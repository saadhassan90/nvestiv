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
    <div className="relative">
      {/* Blue glow shadow behind the browser */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-blue-500/30 to-blue-900/20 blur-3xl opacity-50 -z-10"></div>
      
      <div className={cn(
        "w-fit mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-600 relative z-10",
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
        
        {/* Browser Content - No background, fits content exactly */}
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};