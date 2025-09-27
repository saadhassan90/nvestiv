import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

const profiles = [
  {
    type: "Investor",
    name: "Sarah Chen",
    title: "Managing Partner",
    organization: "Apex Capital Partners",
    color: "bg-blue-500",
    data: {
      "AUM": "$3.2B",
      "Focus": "Growth Equity",
      "Geography": "North America",
      "Stage": "Series B-D",
      "Sector": "Enterprise SaaS"
    }
  },
  {
    type: "Startup",
    name: "TechFlow Inc.",
    title: "Series B Startup",
    organization: "AI Infrastructure",
    color: "bg-green-500",
    data: {
      "Stage": "Series B",
      "Raised": "$45M",
      "Valuation": "$200M", 
      "Employees": "120+",
      "Revenue": "$15M ARR"
    }
  },
  {
    type: "Fund Manager",
    name: "David Kumar",
    title: "General Partner",
    organization: "Venture Growth Fund III",
    color: "bg-purple-500",
    data: {
      "Fund Size": "$500M",
      "Portfolio": "42 companies",
      "IRR": "24.5%",
      "Vintage": "2021",
      "Status": "Fundraising"
    }
  },
  {
    type: "SPV",
    name: "OpenAI SPV 2024",
    title: "Special Purpose Vehicle",
    organization: "Lead: Maria Rodriguez", 
    color: "bg-orange-500",
    data: {
      "Target": "$50M",
      "Committed": "$38M",
      "Investors": "24",
      "Min Check": "$250K",
      "Close Date": "Q2 2024"
    }
  },
  {
    type: "Broker",
    name: "Alex Thompson",
    title: "Investment Banker",
    organization: "Goldman Sachs Private Markets",
    color: "bg-red-500", 
    data: {
      "Deals": "150+ completed",
      "Volume": "$12B lifetime",
      "Specialization": "Tech M&A",
      "Geography": "Global",
      "Recent": "3 deals this quarter"
    }
  }
];

const ProfilesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % profiles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="h2 mb-6">Profiles That Match the Market</h2>
        </div>
        
        <Card className="border border-border shadow-lg bg-card">
          <div className="p-6">
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              {/* Left Column - Text Content */}
              <div className="space-y-6 flex flex-col justify-between border border-border rounded-xl p-6 h-full">
                <div>
                  <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                    Generic CRMs can't capture the complexity of private markets. Nvestiv profiles 
                    adapt to each stakeholder type—so you always see what matters.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">
                        Structured fields capture mandates, allocations, deals, and track records.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Profiles change dynamically by role: Investor, Fund Manager, Startup, SPV, Broker.
                      </p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        AI maintains smart lists and keeps groups automatically updated.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Profile Carousel */}
              <div className="lg:pl-8">
                <div className="relative rounded-2xl">
                  <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-cyan-500 rounded-[18px] blur-md opacity-15"></div>
                  <div className="relative z-10 bg-card rounded-2xl p-6 shadow-none overflow-hidden">
                    <div 
                      className="flex gap-4 animate-scroll-left"
                      style={{ width: 'calc(300% + 2rem)' }}
                    >
                      {[...profiles, ...profiles, ...profiles].map((profile, index) => (
                        <div 
                          key={index}
                          className="flex-shrink-0 w-full border border-muted/50 rounded-lg p-4 bg-background/50"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`w-3 h-3 rounded-full ${profile.color}`} />
                            <Badge variant="outline" className="text-xs">
                              {profile.type}
                            </Badge>
                          </div>
                          <h4 className="text-sm font-semibold mb-1">{profile.name}</h4>
                          <p className="text-xs text-muted-foreground mb-1">{profile.title}</p>
                          <p className="text-xs font-medium mb-3">{profile.organization}</p>
                          
                          <div className="space-y-2">
                            {Object.entries(profile.data).slice(0, 3).map(([key, value]) => (
                              <div key={key} className="flex justify-between items-center">
                                <span className="text-xs text-muted-foreground">{key}:</span>
                                <span className="text-xs font-medium">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
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

export default ProfilesCarousel;