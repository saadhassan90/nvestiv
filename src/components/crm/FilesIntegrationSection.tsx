import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Link2, Folder } from "lucide-react";
import googleDriveLogo from "@/assets/google-drive-logo.png";
import { useState, useEffect } from "react";

const FilesIntegrationSection = () => {
  const [animateFiles, setAnimateFiles] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateFiles(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const fileProviders = [
    { name: "Google Drive", icon: googleDriveLogo },
    { name: "Dropbox", icon: "📁" },
    { name: "OneDrive", icon: "📂" },
    { name: "DataRooms", icon: "🔐" }
  ];

  const sampleFiles = [
    { name: "Investor_Deck.pdf", linkedTo: "Startup X", type: "Pitch Deck" },
    { name: "Due_Diligence.xlsx", linkedTo: "Series B Round", type: "Financial" },
    { name: "Term_Sheet.docx", linkedTo: "TechFlow Inc.", type: "Legal" },
    { name: "Market_Analysis.pptx", linkedTo: "Growth Equity", type: "Research" }
  ];

  return (
    <section className="py-20 bg-muted/30 rounded-2xl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="h2 mb-6">Files That Fuel Your CRM (Not Just Attach to It)</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Other CRMs treat documents as static. Nvestiv makes them actionable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* File Providers */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Direct Integration With</h3>
              <div className="grid grid-cols-2 gap-4">
                {fileProviders.map((provider, index) => (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="flex flex-col items-center gap-3">
                      {provider.icon.includes('.png') ? (
                        <img src={provider.icon} alt={provider.name} className="w-8 h-8" />
                      ) : (
                        <span className="text-2xl">{provider.icon}</span>
                      )}
                      <span className="font-medium">{provider.name}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">How It Works:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Direct integration with Google Drive, OneDrive, Dropbox, and DataRooms
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Files ingested, vectorized, and linked to other objects in the CRM
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  IRIS understands what's inside files, when to use it, and organizes for you
                </li>
              </ul>
            </div>
          </div>

          {/* File Flow Visualization */}
          <div className="relative">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-center">Intelligent File Processing</h3>
              
              {/* File Tiles */}
              <div className="grid grid-cols-2 gap-4">
                {sampleFiles.map((file, index) => (
                  <div 
                    key={index}
                    className={`transition-all duration-500 ${
                      animateFiles ? 'transform translate-x-2 scale-105' : ''
                    }`}
                  >
                    <Card className="p-4 hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="flex items-center gap-3 mb-3">
                          <FileText className="w-5 h-5 text-primary" />
                          <span className="text-sm font-medium truncate">{file.name}</span>
                        </div>
                        <Badge variant="outline" className="text-xs mb-2">
                          {file.type}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Link2 className="w-3 h-3" />
                          <span>Linked to {file.linkedTo}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Connection Lines */}
              <div className="relative h-20">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 80">
                  {[0, 1, 2, 3].map((index) => (
                    <line
                      key={index}
                      x1={50 + (index % 2) * 150}
                      y1={Math.floor(index / 2) * 40 + 20}
                      x2={200}
                      y2={60}
                      stroke="hsl(var(--primary))"
                      strokeWidth="1"
                      opacity="0.5"
                      className={`transition-all duration-500 ${
                        animateFiles ? 'opacity-100' : 'opacity-30'
                      }`}
                    />
                  ))}
                </svg>
              </div>

              {/* Central Graph Node */}
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto rounded-xl bg-primary/10 border-2 border-primary flex items-center justify-center transition-all duration-500 ${
                  animateFiles ? 'shadow-lg shadow-primary/25 scale-110' : ''
                }`}>
                  <Folder className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">Knowledge Graph</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilesIntegrationSection;