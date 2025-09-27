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
        <div className="text-center mb-16">
          <h2 className="h2 mb-6">Profiles That Match the Market</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Generic CRMs can't capture the complexity of private markets. Nvestiv profiles 
            adapt to each stakeholder type—so you always see what matters.
          </p>
        </div>

        {/* Description Cards - Above Carousel */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <Card className="p-6 border-muted/50">
            <p className="text-muted-foreground mb-3">
              Structured fields capture mandates, allocations, deals, and track records.
            </p>
            <p className="text-muted-foreground">
              Profiles change dynamically by role: Investor, Fund Manager, Startup, SPV, Broker.
            </p>
          </Card>
          <Card className="p-6 border-muted/50">
            <p className="text-muted-foreground">
              AI maintains smart lists and keeps groups automatically updated.
            </p>
          </Card>
        </div>

        {/* Continuous Carousel Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex gap-6 animate-scroll-left"
            style={{ width: 'calc(300% + 3rem)' }}
          >
            {[...profiles, ...profiles, ...profiles].map((profile, index) => (
              <Card 
                key={index}
                className="flex-shrink-0 w-full md:w-1/3 border-muted/50 hover:border-primary/20 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-3 h-3 rounded-full ${profile.color}`} />
                    <Badge variant="outline" className="text-xs">
                      {profile.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{profile.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{profile.title}</p>
                  <p className="text-sm font-medium">{profile.organization}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(profile.data).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-1">
                        <span className="text-sm text-muted-foreground">{key}:</span>
                        <span className="text-sm font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilesCarousel;