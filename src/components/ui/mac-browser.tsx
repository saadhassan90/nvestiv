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
  className,
  url = "https://nvestiv.com/dashboard",
  title = "Nvestiv - AI CRM Dashboard"
}: MacBrowserProps) => {
  return (
    <div className={cn(
      "w-full max-w-6xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700",
      className
    )}>
      {/* Browser Header */}
      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        {/* Traffic Lights */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        
        {/* Address Bar */}
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-white dark:bg-gray-700 rounded-md px-3 py-1.5 flex items-center gap-2 border border-gray-300 dark:border-gray-600">
            <div className="w-4 h-4 text-gray-400">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v6m0 6v6"/>
                <path d="m1 12 6 0m6 0 6 0"/>
              </svg>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300 font-mono">
              {url}
            </span>
          </div>
          <div className="w-6 h-6 text-gray-400">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
              <path d="M21 3v5h-5"/>
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
              <path d="M3 21v-5h5"/>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Browser Content */}
      <div className="bg-white dark:bg-gray-900">
        {children}
      </div>
    </div>
  );
};