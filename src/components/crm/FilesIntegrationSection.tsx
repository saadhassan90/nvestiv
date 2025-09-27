import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Cloud, Database, Link } from "lucide-react";
import { useEffect, useState } from "react";
import googleDriveLogo from "@/assets/google-drive-logo.png";
import dropboxLogo from "@/assets/logos/dropbox-logo.png";
import outlookLogo from "@/assets/logos/outlook-logo.png";

const FilesIntegrationSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const integrations = [
    { name: "Google Drive", icon: googleDriveLogo },
    { name: "OneDrive", icon: outlookLogo },
    { name: "Dropbox", icon: dropboxLogo },
    { name: "SharePoint", icon: outlookLogo },
    { name: "Box", icon: outlookLogo }
  ];

  const files = [
    { name: "Series A Pitch.pdf", linkedTo: "TechFlow Inc.", type: "Pitch Deck" },
    { name: "LP Agreement.docx", linkedTo: "Venture Growth Fund", type: "Legal Doc" },
    { name: "Due Diligence.xlsx", linkedTo: "Sarah Chen", type: "Analysis" },
    { name: "Market Research.pdf", linkedTo: "AI Infrastructure", type: "Research" }
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="h2 mb-6">Files That Fuel Your CRM</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Other CRMs treat documents as static. Nvestiv makes them actionable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Cloud className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4">Direct Integration</h3>
                <div className="flex gap-3 flex-wrap">
                  {integrations.slice(0, 4).map((integration, index) => (
                    <div key={integration.name} className="w-10 h-10 rounded-lg bg-card dark:bg-card border border-border dark:border-border flex items-center justify-center shadow-sm">
                      <img src={integration.icon} alt={integration.name} className="w-5 h-5" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Smart Processing</h3>
                <p className="text-muted-foreground">
                  Files ingested, vectorized, and linked to other objects in the CRM.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Link className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI Understanding</h3>
                <p className="text-muted-foreground">
                  IRIS understands what's inside files, when to use it, and organizes for you.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Graph Animation */}
          <div className="relative">
            {/* Integration Icons (top of graph) */}
            <div className="flex justify-center space-x-4 mb-8">
              {integrations.map((integration, index) => (
                <div key={integration.name} className="text-center">
                  <div className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all duration-500 ${
                    activeIndex === index 
                      ? 'border-primary bg-primary/10 shadow-lg scale-110' 
                      : 'border-muted-foreground/30 bg-card dark:bg-card'
                  }`}>
                    <img src={integration.icon} alt={integration.name} className="w-6 h-6" />
                  </div>
                </div>
              ))}
            </div>

            {/* Graph Network */}
            <div className="relative h-64">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                {/* Connection Lines */}
                {integrations.map((_, index) => {
                  const startX = 60 + index * 70;
                  const startY = 20;
                  const connections = [
                    { x: 100, y: 120 },
                    { x: 200, y: 100 },
                    { x: 300, y: 140 },
                    { x: 250, y: 160 }
                  ];
                  
                  return connections.map((end, connIndex) => (
                    <line
                      key={`${index}-${connIndex}`}
                      x1={startX}
                      y1={startY}
                      x2={end.x}
                      y2={end.y}
                      stroke={activeIndex === index ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"}
                      strokeWidth="2"
                      className="transition-all duration-500"
                      opacity={activeIndex === index ? "0.8" : "0.2"}
                    />
                  ));
                })}
                
                {/* Document Nodes */}
                {files.map((file, index) => {
                  const positions = [
                    { x: 100, y: 120 },
                    { x: 200, y: 100 },
                    { x: 300, y: 140 },
                    { x: 250, y: 160 }
                  ];
                  const pos = positions[index];
                  
                  return (
                    <g key={file.name}>
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r="20"
                        fill={activeIndex === index ? "hsl(var(--primary))" : "hsl(var(--muted-foreground) / 0.3)"}
                        stroke={activeIndex === index ? "hsl(var(--primary))" : "hsl(var(--border))"}
                        strokeWidth="2"
                        className="transition-all duration-500"
                      />
                      <foreignObject x={pos.x - 8} y={pos.y - 8} width="16" height="16">
                        <FileText className={`w-4 h-4 ${activeIndex === index ? 'text-white dark:text-white' : 'text-foreground'}`} />
                      </foreignObject>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Active File Info */}
            <Card className="mt-6 border-primary/20 bg-primary/5">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{files[activeIndex % files.length].name}</p>
                    <p className="text-xs text-muted-foreground">
                      Linked to {files[activeIndex % files.length].linkedTo}
                    </p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {files[activeIndex % files.length].type}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilesIntegrationSection;