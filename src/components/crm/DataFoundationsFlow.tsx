import { Mail, Calendar, FileText, Database, Brain, Users, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const DataFoundationsFlow = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="h2 mb-6">Automated Data Foundations</h2>
        </div>
        
        <Card className="border border-border shadow-lg bg-card">
          <div className="p-6">
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              {/* Left Column - Text Content */}
              <div className="space-y-6 flex flex-col justify-between border border-border rounded-xl p-6 h-full">
                <div>
                  <h3 className="h3 mb-4 text-card-heading">From Email to Intelligent CRM</h3>
                  <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                    Connect your email once and IRIS automatically builds your entire CRM foundation—
                    extracting contacts, relationships, and deal context from years of communications.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-500" />
                      <span className="text-sm"><strong>Secure Email Connection</strong> - Gmail, Outlook, IMAP supported</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Brain className="w-5 h-5 text-green-500" />
                      <span className="text-sm"><strong>AI Entity Extraction</strong> - Contacts, companies, deals identified</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Database className="w-5 h-5 text-foreground" />
                      <span className="text-sm"><strong>Auto-Populated CRM</strong> - Clean, structured data ready to use</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Process Flow Visual */}
              <div className="lg:pl-8">
                <div className="relative rounded-2xl">
                  <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-cyan-500 rounded-[18px] blur-md opacity-15"></div>
                  <div className="relative z-10 bg-card rounded-2xl p-6 shadow-none">
                    <div className="space-y-6">
                      {/* Step 1 */}
                      <div className="border border-muted/50 rounded-lg p-4 bg-blue-500/5">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                            <Mail className="w-4 h-4 text-blue-500" />
                          </div>
                          <span className="text-sm font-semibold">Email Analysis</span>
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse ml-auto"></div>
                        </div>
                        <div className="text-xs text-muted-foreground">Found 2,847 relevant messages</div>
                      </div>

                      {/* Step 2 */}
                      <div className="border border-muted/50 rounded-lg p-4 bg-green-500/5">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                            <Brain className="w-4 h-4 text-green-500" />
                          </div>
                          <span className="text-sm font-semibold">AI Processing</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="flex items-center gap-2">
                            <Users className="w-3 h-3 text-green-500" />
                            <span>147 contacts</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Building className="w-3 h-3 text-green-500" />
                            <span>73 firms</span>
                          </div>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="border border-muted/50 rounded-lg p-4 bg-primary/5">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                            <Database className="w-4 h-4 text-foreground" />
                          </div>
                          <span className="text-sm font-semibold">CRM Ready</span>
                          <div className="w-2 h-2 bg-green-500 rounded-full ml-auto"></div>
                        </div>
                        <div className="text-xs text-muted-foreground">All records synchronized</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DataFoundationsFlow;