import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Zap, 
  Building2, 
  Workflow
} from "lucide-react";
import { useEffect, useState } from "react";

// Import logos
import addepar from "@/assets/logos/addepar-logo.png";
import allvue from "@/assets/logos/allvue-logo.png";
import bloomberg from "@/assets/logos/bloomberg-logo.png";
import carta from "@/assets/logos/carta-logo.png";
import efront from "@/assets/logos/efront-logo.png";
import fintrx from "@/assets/logos/fintrx-logo.png";
import juniper from "@/assets/logos/juniper-square-logo.png";
import pinnacle from "@/assets/logos/pinnacle-logo.png";
import pitchbook from "@/assets/logos/pitchbook-logo.png";
import preqin from "@/assets/logos/preqin-logo.jpeg";
import gmail from "@/assets/logos/gmail-logo.png";
import outlook from "@/assets/logos/outlook-logo.png";
import excel from "@/assets/logos/excel-logo.png";
import trello from "@/assets/logos/trello-logo.png";

const IntegrationsSection = () => {
  const [currentRing, setCurrentRing] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRing((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const integrationCategories = [
    {
      title: "Productivity Apps",
      description: "Linked via MCPs for cross-app workflows",
      logos: [gmail, outlook, excel, trello],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "Fund Admins & Custodians",
      description: "Where APIs don't exist, we build MCPs",
      logos: [addepar, allvue, efront, juniper],
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      title: "PM Tools & Data",
      description: "Real-time sync with your investment stack",
      logos: [bloomberg, pitchbook, preqin, carta],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
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
                      <Workflow className="w-5 h-5 text-primary" />
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
                  <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-cyan-500 rounded-[18px] blur-md opacity-15"></div>
                  <div className="relative z-10 bg-card rounded-2xl p-6 shadow-none flex items-center justify-center h-96">
                    {/* Central IRIS Hub */}
                    <div className="absolute w-20 h-20 bg-primary rounded-2xl flex items-center justify-center z-10 shadow-lg">
                      <span className="text-white font-bold">IRIS</span>
                    </div>

                    {/* Integration Rings */}
                    {integrationCategories.map((category, ringIndex) => (
                      <div
                        key={ringIndex}
                        className={`absolute w-full h-full transition-all duration-1000 ${
                          currentRing === ringIndex ? 'opacity-100 scale-100' : 'opacity-40 scale-95'
                        }`}
                        style={{
                          animation: `rotate-ring-${ringIndex} 20s linear infinite`,
                        }}
                      >
                        {category.logos.map((logo, logoIndex) => {
                          const angle = (logoIndex * 90) - 45;
                          const radius = 100 + ringIndex * 20;
                          const x = Math.cos((angle * Math.PI) / 180) * radius;
                          const y = Math.sin((angle * Math.PI) / 180) * radius;

                          return (
                            <div
                              key={logoIndex}
                              className="absolute w-12 h-12 bg-background rounded-lg border border-muted flex items-center justify-center shadow-sm transition-all duration-500 hover:scale-110"
                              style={{
                                left: `calc(50% + ${x}px - 24px)`,
                                top: `calc(50% + ${y}px - 24px)`,
                              }}
                            >
                              <img
                                src={logo}
                                alt="Integration"
                                className="w-6 h-6 object-contain"
                              />
                            </div>
                          );
                        })}
                      </div>
                    ))}

                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      {integrationCategories.map((category, ringIndex) => 
                        category.logos.map((_, logoIndex) => {
                          const angle = (logoIndex * 90) - 45;
                          const radius = 100 + ringIndex * 20;
                          const x1 = 50 + (Math.cos((angle * Math.PI) / 180) * radius) / 4;
                          const y1 = 50 + (Math.sin((angle * Math.PI) / 180) * radius) / 4;

                          return (
                            <line
                              key={`${ringIndex}-${logoIndex}`}
                              x1="50%"
                              y1="50%"
                              x2={`${x1}%`}
                              y2={`${y1}%`}
                              stroke={currentRing === ringIndex ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"}
                              strokeWidth="1"
                              opacity={currentRing === ringIndex ? "0.6" : "0.2"}
                              className="transition-all duration-500"
                            />
                          );
                        })
                      )}
                    </svg>
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