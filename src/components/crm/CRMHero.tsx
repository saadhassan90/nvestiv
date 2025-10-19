import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Database } from "lucide-react";

const CRMHero = () => {
  return (
    <section className="relative pt-12 pb-16">
      {/* Section Label */}
      <div className="flex justify-center mb-8">
        <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary from-0% via-primary via-70% to-primary/10 to-100% p-[1px]">
            <div className="h-full w-full rounded-full bg-muted"></div>
          </div>
          <div className="relative z-10 flex items-center gap-2">
            <Database className="w-4 h-4" />
            <span className="text-sm font-medium">AI CRM</span>
          </div>
        </div>
      </div>

      {/* Hero Card with Gradient Background */}
      <div className="w-full h-[700px] rounded-3xl overflow-hidden relative bg-gradient-to-br from-primary/20 via-primary/5 to-background border border-border">
        {/* Gradient overlay effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(130,21,224,0.1),transparent_50%)]" />
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="h1 mb-6">
              THE CRM THAT{" "}
              <span className="text-primary">UPDATES ITSELF</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Relationship intelligence on autopilot. IRIS captures every signal—from emails, meetings, to files—and updates your CRM like magic.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-shadow">
                Try the CRM
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Play className="mr-2 h-5 w-5" />
                Video Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMHero;