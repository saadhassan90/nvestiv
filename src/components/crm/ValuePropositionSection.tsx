import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Mail, 
  FileText, 
  Bot, 
  ListChecks, 
  Puzzle, 
  RefreshCw, 
  Shield 
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Private-Market Native",
    description: "Profiles for investors, fund managers, startups, SPVs, brokers."
  },
  {
    icon: Mail,
    title: "Zero Manual Entry",
    description: "Emails, meetings, and notes update CRM automatically."
  },
  {
    icon: FileText,
    title: "Files That Work",
    description: "Ingest, vectorize, and link docs to deals and contacts."
  },
  {
    icon: Bot,
    title: "AI-First Design",
    description: "IRIS knows every datapoint, ready to retrieve and act."
  },
  {
    icon: ListChecks,
    title: "Smart Lists & Ops",
    description: "AI builds and maintains lists, tasks, and reminders."
  },
  {
    icon: Puzzle,
    title: "Deep Integrations",
    description: "Connects to fund admins, custodians, PM tools, cloud drives."
  },
  {
    icon: RefreshCw,
    title: "Always Current Data",
    description: "Continuous monitoring keeps every record fresh and complete."
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Your data encrypted, controlled, and investment-grade safe."
  }
];

const ValuePropositionSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="h2 mb-6">
            The Private Investments CRM That Fixes{" "}
            <span className="text-primary">"Garbage In, Garbage Out"</span>
          </h2>
        </div>
        
        <Card className="border border-border shadow-lg bg-card">
          <div className="p-6">
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              {/* Left Column - Text Content */}
              <div className="space-y-6 flex flex-col justify-between border border-border rounded-xl p-6 h-full">
                <div>
                  <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                    Most CRMs fail because they rely on people to keep data clean. The result? 
                    Incomplete, outdated, unreliable records. Nvestiv flips the model: we automate 
                    every input so your CRM updates itself—structured, complete, and always current.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-foreground">Key Features</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {features.slice(0, 4).map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                          <li key={index} className="flex items-start gap-3">
                            <Icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span><strong>{feature.title}</strong> - {feature.description}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column - Feature Grid Visual */}
              <div className="lg:pl-8">
                <div className="relative rounded-2xl">
                  <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-cyan-500 rounded-[18px] blur-md opacity-15"></div>
                  <div className="relative z-10 bg-card rounded-2xl p-6 shadow-none">
                    <div className="grid grid-cols-2 gap-4">
                      {features.slice(4).map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                          <div 
                            key={index} 
                            className="group p-4 border border-muted/50 rounded-lg hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
                          >
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                              <Icon className="w-4 h-4 text-primary" />
                            </div>
                            <h5 className="text-sm font-semibold mb-1">{feature.title}</h5>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {feature.description}
                            </p>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-lg" />
                          </div>
                        );
                      })}
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

export default ValuePropositionSection;