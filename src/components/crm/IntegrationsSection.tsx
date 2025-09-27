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
        <div className="text-center mb-16">
          <h2 className="h2 mb-6">Your Stack, Now Intelligent</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We don't just connect Slack and calendars. Nvestiv integrates the tools 
            private markets actually run on.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features */}
          <div className="space-y-6">
            <Card className="group relative overflow-hidden border-muted/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 p-6">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-semibold">Productivity apps</h3>
              </div>
              <p className="text-muted-foreground">Linked via MCPs for cross-app workflows.</p>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Card>

            <Card className="group relative overflow-hidden border-muted/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 p-6">
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="w-6 h-6 text-green-500" />
                <h3 className="text-xl font-semibold">Fund admins, custodians, PM tools</h3>
              </div>
              <p className="text-muted-foreground">Where APIs don't exist, we build MCPs.</p>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Card>

            <Card className="group relative overflow-hidden border-muted/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 p-6">
              <div className="flex items-center gap-3 mb-2">
                <Workflow className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Cross-app orchestration</h3>
              </div>
              <p className="text-muted-foreground">
                IRIS chains workflows across systems, so you can act from one place.
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Card>
          </div>

          {/* Right Side - Integration Rings */}
          <div className="relative flex items-center justify-center h-96">
            {/* Central IRIS Hub */}
            <div className="absolute w-24 h-24 bg-primary rounded-2xl flex items-center justify-center z-10 shadow-lg">
              <span className="text-white font-bold text-lg">IRIS</span>
            </div>

            {/* Rotating Integration Rings */}
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
                  const angle = (logoIndex * 90) - 45; // 4 logos per ring, spaced 90 degrees apart
                  const radius = 120 + ringIndex * 20;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <div
                      key={logoIndex}
                      className="absolute w-16 h-16 bg-background rounded-xl border-2 border-muted flex items-center justify-center shadow-md transition-all duration-500 hover:scale-110"
                      style={{
                        left: `calc(50% + ${x}px - 32px)`,
                        top: `calc(50% + ${y}px - 32px)`,
                      }}
                    >
                      <img
                        src={logo}
                        alt="Integration"
                        className="w-8 h-8 object-contain"
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
                  const radius = 120 + ringIndex * 20;
                  const x1 = 50 + (Math.cos((angle * Math.PI) / 180) * radius) / 4; // Percentage for responsive
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

        {/* MCP Badge */}
        <div className="text-center mt-12">
          <Badge variant="outline" className="text-sm px-4 py-2">
            <span className="mr-2">🔗</span>
            Connected via MCP (Model Context Protocol)
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;