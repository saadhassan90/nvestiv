"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Badge } from "@/components/ui/badge";
import { Mail, Timer, FileText, UserPlus, Link, Send, Download } from "lucide-react";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody
        className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-8 border">
        
        {/* Header */}
        <CardItem translateZ="20" className="w-full">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-bold text-neutral-800">
                New Incoming Email
              </h1>
              <span className="text-xs text-neutral-500">from jordan.n@terraview.com</span>
            </div>
            
            {/* Status Badges */}
            <div className="flex gap-2">
              <Badge variant="outline" className="text-xs flex items-center gap-1">
                <Mail className="w-3 h-3" />
                Email Agent
              </Badge>
              <Badge variant="outline" className="text-xs flex items-center gap-1">
                <Timer className="w-3 h-3" />
                In Progress
              </Badge>
            </div>
          </div>
        </CardItem>

        <CardItem translateZ="30" className="w-full mt-3">
          <hr className="border-gray-200" />
        </CardItem>

        {/* Outlook API Section */}
        <CardItem translateZ="40" className="w-full mt-4">
          <div className="space-y-3">
            {/* Outlook API Header */}
            <div className="flex items-center gap-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg" alt="Outlook" className="w-4 h-4" />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Outlook API</span>
            </div>

            {/* Activity Cards */}
            <div className="space-y-2 ml-4 border-l-2 border-gray-200 dark:border-gray-600 pl-3">
              {/* Read Email Card */}
              <div className="bg-gray-200/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-md p-3">
                <div className="flex items-center justify-between">
                  <div className="text-left flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <div>
                      <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Read incoming email</h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">Subject: Introducing Terraview Capital Partners.</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs text-green-700 border-green-300">
                    ✓ Complete
                  </Badge>
                </div>
              </div>

              {/* Detected Body Text Card */}
              <div className="bg-gray-200/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-md p-3">
                <div className="flex items-center justify-between">
                  <div className="flex-1 text-left flex items-start gap-2">
                    <FileText className="w-4 h-4 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Detected body text + 1 attachments</h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">Email summary generated. Parsed .pdf file</p>
                      <div className="flex items-center gap-2 mt-1">
                        <FileText className="w-3 h-3 text-red-600" />
                        <span className="text-xs text-neutral-600 dark:text-neutral-300">Terraview CP 2024 Performance YTD</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs text-green-700 border-green-300">
                    ✓ Complete
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </CardItem>

        {/* IRIS CRM Management Section */}
        <CardItem translateZ="40" className="w-full mt-4">
          <div className="space-y-3">
            {/* IRIS CRM Header */}
            <div className="flex items-center gap-2">
              <img src="/public/lovable-uploads/c6f05c4c-ee88-4c86-a4f7-98e6e90e6071.png" alt="IRIS CRM" className="w-4 h-4" />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">IRIS CRM Management</span>
            </div>

            {/* CRM Activity Cards */}
            <div className="space-y-2 ml-4 border-l-2 border-gray-200 dark:border-gray-600 pl-3">
              {/* New Contact Card */}
              <div className="bg-gray-200/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-md p-3">
                <div className="flex items-center justify-between">
                  <div className="text-left flex items-start gap-2">
                    <UserPlus className="w-4 h-4 text-purple-600 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-200">New Contact & Company Created</h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">Terraview and Jordan Noah did not already exist. Updated contact using email details.</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs text-green-700 border-green-300">
                    ✓ Complete
                  </Badge>
                </div>
              </div>

              {/* Associated File Card */}
              <div className="bg-gray-200/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-md p-3">
                <div className="flex items-center justify-between">
                  <div className="flex-1 text-left flex items-start gap-2">
                    <Link className="w-4 h-4 text-purple-600 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Associated File to Jordan Noah</h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">Uploaded file, summarized, and tagged to profile.</p>
                      <div className="flex items-center gap-2 mt-1">
                        <FileText className="w-3 h-3 text-red-600" />
                        <span className="text-xs text-neutral-600 dark:text-neutral-300">Terraview CP 2024 Performance YTD</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs text-green-700 border-green-300">
                    ✓ Complete
                  </Badge>
                </div>
              </div>

              {/* Sending Email Card */}
              <div className="bg-gray-200/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-md p-3">
                <div className="flex items-center justify-between">
                  <div className="flex-1 text-left flex items-start gap-2">
                    <Send className="w-4 h-4 text-purple-600 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Sending email introduction</h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">Logical next step is to introduce Jordan to</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                        <span className="text-xs text-neutral-600 dark:text-neutral-300">Misha Fuentes @ Demarquay Family Office</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs text-blue-700 border-blue-300">
                    <Send className="w-3 h-3 mr-1" />
                    Sending Email
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}