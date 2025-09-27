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
        <div className="text-center mb-16">
          <h2 className="h2 mb-6">
            The Private Investments CRM That Fixes{" "}
            <span className="text-primary">"Garbage In, Garbage Out"</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Most CRMs fail because they rely on people to keep data clean. The result? 
            Incomplete, outdated, unreliable records. Nvestiv flips the model: we automate 
            every input so your CRM updates itself—structured, complete, and always current.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-muted/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
                
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;