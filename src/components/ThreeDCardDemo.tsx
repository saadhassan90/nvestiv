"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody
        className="relative group/card w-full h-auto rounded-xl p-4"
        style={{
          background: "rgba(15, 23, 42, 0.8)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(148, 163, 184, 0.2)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.4)",
        }}>
        
        {/* Header */}
        <CardItem translateZ="20" className="w-full">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-bold text-white">
                New Incoming Email
              </h1>
              <span className="text-xs text-slate-300">from jordan.n@terraview.com</span>
            </div>
            
            {/* Status Badges */}
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-blue-600/80 text-blue-100 text-xs rounded-full border border-blue-400/30">
                🤖 Email Agent
              </span>
              <span className="px-2 py-1 bg-orange-600/80 text-orange-100 text-xs rounded-full border border-orange-400/30">
                🔄 In Progress
              </span>
            </div>
          </div>
        </CardItem>

        <CardItem translateZ="30" className="w-full mt-3">
          <hr className="border-slate-600" />
        </CardItem>

        {/* Agent Activity Section */}
        <CardItem translateZ="30" className="w-full mt-3">
          <h2 className="text-base font-semibold text-white mb-3">Agent Activity</h2>
        </CardItem>

        {/* Outlook API Section */}
        <CardItem translateZ="40" className="w-full mt-2">
          <div className="space-y-3">
            {/* Outlook API Header */}
            <div className="flex items-center gap-2">
              <span className="text-blue-400 text-sm">📧</span>
              <span className="text-sm font-medium text-slate-200">Outlook API</span>
            </div>

            {/* Activity Cards */}
            <div className="space-y-2 ml-4 border-l-2 border-slate-600 pl-3">
              {/* Read Email Card */}
              <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 rounded-md p-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-slate-100">Read incoming email</h3>
                    <p className="text-xs text-slate-300">Subject: Introducing Terraview Capital Partners.</p>
                  </div>
                  <span className="px-2 py-1 bg-green-600/80 text-green-100 text-xs rounded border border-green-400/30">
                    ✓ Complete
                  </span>
                </div>
              </div>

              {/* Detected Body Text Card */}
              <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 rounded-md p-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-slate-100">Detected body text + 1 attachments</h3>
                    <p className="text-xs text-slate-300">Email summary generated. Parsed .pdf file</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-red-400 text-xs">📄</span>
                      <span className="text-xs text-slate-300">Terraview CP 2024 Performance YTD</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-green-600/80 text-green-100 text-xs rounded border border-green-400/30">
                    ✓ Complete
                  </span>
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
              <span className="text-purple-400 text-sm">🎯</span>
              <span className="text-sm font-medium text-slate-200">IRIS CRM Management</span>
            </div>

            {/* CRM Activity Cards */}
            <div className="space-y-2 ml-4 border-l-2 border-slate-600 pl-3">
              {/* New Contact Card */}
              <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 rounded-md p-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-slate-100">New Contact & Company Created</h3>
                    <p className="text-xs text-slate-300">Terraview and Jordan Noah did not already exist. Updated contact using email details.</p>
                  </div>
                  <span className="px-2 py-1 bg-green-600/80 text-green-100 text-xs rounded border border-green-400/30">
                    ✓ Complete
                  </span>
                </div>
              </div>

              {/* Associated File Card */}
              <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 rounded-md p-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-slate-100">Associated File to Jordan Noah</h3>
                    <p className="text-xs text-slate-300">Uploaded file, summarized, and tagged to profile.</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-red-400 text-xs">📄</span>
                      <span className="text-xs text-slate-300">Terraview CP 2024 Performance YTD</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-green-600/80 text-green-100 text-xs rounded border border-green-400/30">
                    ✓ Complete
                  </span>
                </div>
              </div>

              {/* Sending Email Card */}
              <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 rounded-md p-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-slate-100">Sending email introduction</h3>
                    <p className="text-xs text-slate-300">Logical next step is to introduce Jordan to</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-4 h-4 bg-slate-500 rounded-full"></div>
                      <span className="text-xs text-slate-300">Misha Fuentes @ Demarquay Family Office</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-blue-600/80 text-blue-100 text-xs rounded border border-blue-400/30">
                    📧 Sending Email
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}