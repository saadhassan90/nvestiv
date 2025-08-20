import React from "react";
import { Badge } from "@/components/ui/badge";
import { MovingBorder } from "@/components/ui/moving-border";
import { Mail, Timer, UserPlus, Link, Send, Download, FileType } from "lucide-react";
import mishaAvatar from "@/assets/misha-fuentes-avatar.jpg";
import jordanAvatar from "@/assets/jordan-noah-avatar.jpg";

export function ThreeDCardDemo() {
  return (
    <div className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Glow effect behind the card */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-blue-500/30 to-blue-900/20 blur-3xl opacity-50 -z-10"></div>
      <MovingBorder
        borderRadius="0.75rem"
        className="text-gray-900 dark:text-white"
        containerClassName="w-full max-w-4xl mx-auto"
        duration={6}
      >
        <div className="p-4 sm:p-6 lg:p-8">
          
          {/* Header */}
          <div className="w-full">
            <div className="flex flex-col space-y-3 sm:space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h1 className="text-lg sm:text-xl font-bold text-neutral-800 dark:text-white">
                  New Incoming Email
                </h1>
                <div className="flex items-center gap-2">
                  <img src={jordanAvatar} alt="Jordan Noah" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-gray-200 dark:border-gray-600" />
                  <span className="text-xs sm:text-sm text-neutral-500">from jordan.n@terraview.com</span>
                </div>
              </div>
              
              {/* Status Badges */}
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs font-normal text-gray-600 flex items-center gap-1">
                  <Mail className="w-3 h-3 text-gray-500" />
                  Email Agent
                </Badge>
                <Badge variant="outline" className="text-xs font-normal text-gray-600 flex items-center gap-1">
                  <Timer className="w-3 h-3 text-gray-500" />
                  In Progress
                </Badge>
              </div>
            </div>
          </div>

          <div className="w-full mt-4 sm:mt-6">
            <hr className="border-gray-200 dark:border-gray-600" />
          </div>

          {/* Outlook API Section */}
          <div className="w-full mt-4 sm:mt-6">
            <div className="space-y-3">
              {/* Outlook API Header */}
              <div className="flex items-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg" alt="Outlook" className="w-4 h-4" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Outlook API</span>
              </div>

              {/* Activity Cards */}
              <div className="space-y-2 ml-4 border-l-2 border-gray-200 dark:border-gray-600 pl-3 sm:pl-4">
              {/* Read Email Card */}
              <div className="bg-gray-50/30 dark:bg-gray-900/30 border border-gray-300/30 dark:border-gray-600/30 rounded-md p-3 sm:p-4">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
                      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Read incoming email</h3>
                    </div>
                    <div className="break-words">
                      <p className="text-xs text-gray-500 dark:text-gray-400">Subject: Introducing Terraview Capital Partners.</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs font-normal text-green-700 border-green-300 self-start sm:self-center flex-shrink-0">
                    ✓ Complete
                  </Badge>
                </div>
              </div>

                {/* Detected Body Text Card */}
                <div className="bg-gray-50/30 dark:bg-gray-900/30 border border-gray-300/30 dark:border-gray-600/30 rounded-md p-3 sm:p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <FileType className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Detected body text + 1 attachments</h3>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Email summary generated. Parsed .pdf file</p>
                        <div className="flex items-center gap-2">
                          <FileType className="w-3 h-3 text-red-500 flex-shrink-0" />
                          <span className="text-xs text-gray-600 dark:text-gray-400 truncate">Terraview CP 2024 Performance YTD</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs font-normal text-green-700 border-green-300 self-start sm:self-center flex-shrink-0">
                      ✓ Complete
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IRIS CRM Management Section */}
          <div className="w-full mt-4 sm:mt-6">
            <div className="space-y-3">
              {/* IRIS CRM Header */}
              <div className="flex items-center gap-2">
                <img src="/public/lovable-uploads/c6f05c4c-ee88-4c86-a4f7-98e6e90e6071.png" alt="IRIS CRM" className="w-4 h-4" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">IRIS CRM Management</span>
              </div>

              {/* CRM Activity Cards */}
              <div className="space-y-2 ml-4 border-l-2 border-gray-200 dark:border-gray-600 pl-3 sm:pl-4">
                {/* New Contact Card */}
                <div className="bg-gray-50/30 dark:bg-gray-900/30 border border-gray-300/30 dark:border-gray-600/30 rounded-md p-3 sm:p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <UserPlus className="w-4 h-4 text-gray-500 flex-shrink-0" />
                        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">New Contact & Company Created</h3>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Terraview and Jordan Noah did not already exist.</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Updated contact using email details.</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs font-normal text-green-700 border-green-300 self-start sm:self-center flex-shrink-0">
                      ✓ Complete
                    </Badge>
                  </div>
                </div>

                {/* Associated File Card */}
                <div className="bg-gray-50/30 dark:bg-gray-900/30 border border-gray-300/30 dark:border-gray-600/30 rounded-md p-3 sm:p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Link className="w-4 h-4 text-gray-500 flex-shrink-0" />
                        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1">Associated File to <img src={jordanAvatar} alt="Jordan Noah" className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-gray-200 dark:border-gray-600 mx-1 flex-shrink-0" />Jordan Noah</h3>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Uploaded file, summarized, and tagged to profile.</p>
                        <div className="flex items-center gap-2">
                          <FileType className="w-3 h-3 text-red-500 flex-shrink-0" />
                          <span className="text-xs text-gray-600 dark:text-gray-400 truncate">Terraview CP 2024 Performance YTD</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs font-normal text-green-700 border-green-300 self-start sm:self-center flex-shrink-0">
                      ✓ Complete
                    </Badge>
                  </div>
                </div>

                {/* Sending Email Card */}
                <div className="bg-gray-50/30 dark:bg-gray-900/30 border border-gray-300/30 dark:border-gray-600/30 rounded-md p-3 sm:p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Send className="w-4 h-4 text-gray-500 flex-shrink-0" />
                        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Sending email introduction</h3>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Logical next step is to introduce Jordan to</p>
                        <div className="flex items-center gap-2">
                          <img src={mishaAvatar} alt="Misha Fuentes" className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-gray-200 dark:border-gray-600 flex-shrink-0" />
                          <span className="text-xs text-gray-600 dark:text-gray-400 truncate">Misha Fuentes @ Demarquay Family Office</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs font-normal text-blue-700 border-blue-300 self-start sm:self-center flex-shrink-0">
                      <Send className="w-3 h-3 mr-1 text-gray-500" />
                      Sending Email
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MovingBorder>
    </div>
  );
}