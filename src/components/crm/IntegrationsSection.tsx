import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Zap, 
  Building2, 
  Workflow,
  Plug
} from "lucide-react";
import { Integrations3DMarquee } from "@/components/Integrations3DMarquee";

const IntegrationsSection = () => {


  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Label */}
        <div className="flex justify-center mb-6">
          <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary from-0% via-primary via-70% to-primary/10 to-100% p-[1px]">
              <div className="h-full w-full rounded-full bg-muted"></div>
            </div>
            <div className="relative z-10 flex items-center gap-2">
              <Plug className="w-4 h-4" />
              <span className="text-sm font-medium">Integrations</span>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="h2 mb-6">Your Stack, Now Intelligent</h2>
        </div>
        
        <Card className="border border-border shadow-lg bg-card">
          <div className="p-6">
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              {/* Left Column - Text Content */}
              <div className="space-y-6 flex flex-col justify-between border border-border rounded-xl p-6 h-full">
                <div>
                  <h3 className="h3 mb-4 text-card-heading">Beyond Generic Integrations</h3>
                  <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                    We don't just connect Slack and calendars. Nvestiv integrates the tools 
                    private markets actually run on—fund admins, custodians, PM tools, and data providers.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-blue-500" />
                      <span className="text-sm"><strong>Productivity Apps</strong> - Linked via MCPs for cross-app workflows</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building2 className="w-5 h-5 text-green-500" />
                      <span className="text-sm"><strong>Fund Admins & Custodians</strong> - Where APIs don't exist, we build MCPs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Workflow className="w-5 h-5 text-foreground" />
                      <span className="text-sm"><strong>Cross-App Orchestration</strong> - IRIS chains workflows across systems</span>
                    </div>
                  </div>
                  
                  <Badge variant="outline" className="text-sm px-4 py-2">
                    <span className="mr-2">🔗</span>
                    Connected via MCP (Model Context Protocol)
                  </Badge>
                </div>
              </div>

              {/* Right Column - Integration Visual */}
              <div className="lg:pl-8">
                <div className="relative rounded-2xl">
                  {/* Gradient glow border */}
                  <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-[18px] blur-md opacity-50 dark:opacity-70"></div>
                  
                  {/* 3D Marquee Container */}
                  <div className="relative z-10 bg-card/90 backdrop-blur-sm rounded-2xl h-[700px] overflow-hidden border border-border/50 shadow-lg">
                    <Integrations3DMarquee className="w-full h-full" triggerAnimation={true} />
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

export default IntegrationsSection;