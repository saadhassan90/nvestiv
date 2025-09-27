import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// Import logos
import addepar from "@/assets/logos/addepar-logo.png";
import allvue from "@/assets/logos/allvue-logo.png";
import bloomberg from "@/assets/logos/bloomberg-logo.png";
import carta from "@/assets/logos/carta-logo.png";
import dropbox from "@/assets/logos/dropbox-logo.png";
import efront from "@/assets/logos/efront-logo.png";
import excel from "@/assets/logos/excel-logo.png";
import fintrx from "@/assets/logos/fintrx-logo.png";
import gmail from "@/assets/logos/gmail-logo.png";
import juniper from "@/assets/logos/juniper-square-logo.png";
import outlook from "@/assets/logos/outlook-logo.png";
import pinnacle from "@/assets/logos/pinnacle-logo.png";
import pitchbook from "@/assets/logos/pitchbook-logo.png";
import preqin from "@/assets/logos/preqin-logo.jpeg";
import quickbooks from "@/assets/logos/quickbooks-logo.png";
import sage from "@/assets/logos/sage-logo.png";
import ssc from "@/assets/logos/ssc-logo.jpeg";
import trello from "@/assets/logos/trello-logo.png";
import zoom from "@/assets/logos/zoom-logo.jpeg";
import zoominfo from "@/assets/logos/zoominfo-logo.png";

const integrations = [
  // Productivity Apps
  { name: "Gmail", logo: gmail, category: "Productivity", hasMCP: false },
  { name: "Outlook", logo: outlook, category: "Productivity", hasMCP: false },
  { name: "Zoom", logo: zoom, category: "Productivity", hasMCP: false },
  { name: "Trello", logo: trello, category: "Productivity", hasMCP: false },
  { name: "Dropbox", logo: dropbox, category: "Productivity", hasMCP: false },
  { name: "Excel", logo: excel, category: "Productivity", hasMCP: false },
  
  // Investment Tools (MCP)
  { name: "PitchBook", logo: pitchbook, category: "Investment", hasMCP: true },
  { name: "Preqin", logo: preqin, category: "Investment", hasMCP: true },
  { name: "Bloomberg", logo: bloomberg, category: "Investment", hasMCP: true },
  { name: "ZoomInfo", logo: zoominfo, category: "Investment", hasMCP: true },
  { name: "FinTrx", logo: fintrx, category: "Investment", hasMCP: true },
  
  // Fund Admin & PM Tools (MCP)
  { name: "Addepar", logo: addepar, category: "Fund Admin", hasMCP: true },
  { name: "Allvue", logo: allvue, category: "Fund Admin", hasMCP: true },
  { name: "Carta", logo: carta, category: "Fund Admin", hasMCP: true },
  { name: "Juniper Square", logo: juniper, category: "Fund Admin", hasMCP: true },
  { name: "eFront", logo: efront, category: "Fund Admin", hasMCP: true },
  { name: "Pinnacle", logo: pinnacle, category: "Fund Admin", hasMCP: true },
  { name: "SSC", logo: ssc, category: "Fund Admin", hasMCP: true },
  { name: "Sage", logo: sage, category: "Fund Admin", hasMCP: true },
  { name: "QuickBooks", logo: quickbooks, category: "Fund Admin", hasMCP: true }
];

const IntegrationsSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="h2 mb-6">Your Stack, Now Intelligent</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We don't just connect Slack and calendars. Nvestiv integrates the tools private markets actually run on.
          </p>
        </div>

        {/* Integration Categories */}
        <div className="space-y-12">
          {/* Productivity Apps */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-center">Productivity Apps</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {integrations.filter(app => app.category === "Productivity").map((app, index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-shadow group">
                  <CardContent className="p-0 text-center">
                    <img 
                      src={app.logo} 
                      alt={app.name}
                      className="w-12 h-12 mx-auto mb-2 object-contain group-hover:scale-110 transition-transform"
                    />
                    <p className="text-xs font-medium">{app.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Linked via MCPs for cross-app workflows
            </p>
          </div>

          {/* Investment Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-center">Investment Intelligence</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {integrations.filter(app => app.category === "Investment").map((app, index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-shadow group relative">
                  <CardContent className="p-0 text-center">
                    <img 
                      src={app.logo} 
                      alt={app.name}
                      className="w-12 h-12 mx-auto mb-2 object-contain group-hover:scale-110 transition-transform"
                    />
                    <p className="text-xs font-medium">{app.name}</p>
                    {app.hasMCP && (
                      <Badge className="absolute -top-2 -right-2 text-xs bg-primary/20 text-primary">
                        MCP
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Fund Admin & PM Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-center">Fund Administration & Portfolio Management</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-6">
              {integrations.filter(app => app.category === "Fund Admin").map((app, index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-shadow group relative">
                  <CardContent className="p-0 text-center">
                    <img 
                      src={app.logo} 
                      alt={app.name}
                      className="w-12 h-12 mx-auto mb-2 object-contain group-hover:scale-110 transition-transform"
                    />
                    <p className="text-xs font-medium">{app.name}</p>
                    {app.hasMCP && (
                      <Badge className="absolute -top-2 -right-2 text-xs bg-primary/20 text-primary">
                        MCP
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Where APIs don't exist, we build MCPs
            </p>
          </div>
        </div>

        <div className="text-center mt-16 p-8 bg-muted/30 rounded-2xl">
          <h4 className="text-lg font-semibold mb-4">Cross-App Orchestration</h4>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            IRIS chains workflows across systems, so you can act from one place. 
            Move from deal discovery in PitchBook to contact creation in your CRM, 
            all with natural language commands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;