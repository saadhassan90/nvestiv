"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody
        className="bg-white/20 backdrop-blur-lg relative group/card shadow-2xl border border-white/30 w-full h-auto rounded-xl p-4">
        
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
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full border border-blue-200">
                🤖 Email Agent
              </span>
              <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full border border-orange-200">
                🔄 In Progress
              </span>
            </div>
          </div>
        </CardItem>

        <CardItem translateZ="30" className="w-full mt-3">
          <hr className="border-gray-200" />
        </CardItem>

        {/* Agent Activity Section */}
        <CardItem translateZ="30" className="w-full mt-3">
          <h2 className="text-base font-semibold text-neutral-800 mb-3">Agent Activity</h2>
        </CardItem>

        {/* Outlook API Section */}
        <CardItem translateZ="40" className="w-full mt-2">
          <div className="space-y-3">
            {/* Outlook API Header */}
            <div className="flex items-center gap-2">
              <span className="text-blue-600 text-sm">📧</span>
              <span className="text-sm font-medium text-neutral-700">Outlook API</span>
            </div>

            {/* Activity Cards */}
            <div className="space-y-2 ml-4 border-l-2 border-gray-200 pl-3">
              {/* Read Email Card */}
              <div className="bg-white/40 backdrop-blur-sm border border-white/50 rounded-md p-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-neutral-700">Read incoming email</h3>
                    <p className="text-xs text-neutral-500">Subject: Introducing Terraview Capital Partners.</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded border border-green-200">
                    ✓ Complete
                  </span>
                </div>
              </div>

              {/* Detected Body Text Card */}
              <div className="bg-white/40 backdrop-blur-sm border border-white/50 rounded-md p-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-neutral-700">Detected body text + 1 attachments</h3>
                    <p className="text-xs text-neutral-500">Email summary generated. Parsed .pdf file</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-red-600 text-xs">📄</span>
                      <span className="text-xs text-neutral-600">Terraview CP 2024 Performance YTD</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded border border-green-200">
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
              <span className="text-purple-600 text-sm">🎯</span>
              <span className="text-sm font-medium text-neutral-700">IRIS CRM Management</span>
            </div>

            {/* CRM Activity Cards */}
            <div className="space-y-2 ml-4 border-l-2 border-gray-200 pl-3">
              {/* New Contact Card */}
              <div className="bg-white/40 backdrop-blur-sm border border-white/50 rounded-md p-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-neutral-700">New Contact & Company Created</h3>
                    <p className="text-xs text-neutral-500">Terraview and Jordan Noah did not already exist. Updated contact using email details.</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded border border-green-200">
                    ✓ Complete
                  </span>
                </div>
              </div>

              {/* Associated File Card */}
              <div className="bg-white/40 backdrop-blur-sm border border-white/50 rounded-md p-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-neutral-700">Associated File to Jordan Noah</h3>
                    <p className="text-xs text-neutral-500">Uploaded file, summarized, and tagged to profile.</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-red-600 text-xs">📄</span>
                      <span className="text-xs text-neutral-600">Terraview CP 2024 Performance YTD</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded border border-green-200">
                    ✓ Complete
                  </span>
                </div>
              </div>

              {/* Sending Email Card */}
              <div className="bg-white/40 backdrop-blur-sm border border-white/50 rounded-md p-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-neutral-700">Sending email introduction</h3>
                    <p className="text-xs text-neutral-500">Logical next step is to introduce Jordan to</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      <span className="text-xs text-neutral-600">Misha Fuentes @ Demarquay Family Office</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded border border-blue-200">
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