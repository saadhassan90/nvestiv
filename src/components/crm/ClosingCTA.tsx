import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

const ClosingCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Label */}
        <div className="flex justify-center mb-12">
          <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary from-0% via-primary via-70% to-primary/10 to-100% p-[1px]">
              <div className="h-full w-full rounded-full bg-muted"></div>
            </div>
            <div className="relative z-10 flex items-center gap-2">
              <Rocket className="w-4 h-4" />
              <span className="text-sm font-medium">Get Started</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background with gradient and network lines */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-primary/5" />
        
        {/* Abstract network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 400">
          {/* Network nodes */}
          {[...Array(20)].map((_, i) => {
            const x = (i % 5) * 200 + 100 + Math.random() * 100;
            const y = Math.floor(i / 5) * 100 + 50 + Math.random() * 50;
            return (
              <g key={i}>
                <circle 
                  cx={x} 
                  cy={y} 
                  r="3" 
                  fill="hsl(var(--primary))" 
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
                {/* Connection lines to nearby nodes */}
                {i < 15 && (
                  <line
                    x1={x}
                    y1={y}
                    x2={((i + 5) % 5) * 200 + 100 + Math.random() * 100}
                    y2={Math.floor((i + 5) / 5) * 100 + 50 + Math.random() * 50}
                    stroke="hsl(var(--primary))"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                )}
              </g>
            );
          })}
        </svg>
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center px-4">
        <h2 className="h2 mb-6">
          Nvestiv CRM. The foundation of your{" "}
          <span className="text-primary">AI-powered investment OS</span>.
        </h2>
        
        <div className="mb-8">
          <Button 
            size="lg" 
            className="text-lg px-12 py-4 shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
          >
            Try the AI-Native CRM
            <ArrowRight className="ml-2 h-5 w-5" />
            
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-primary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
          </Button>
        </div>
        
        <p className="text-muted-foreground">
          Start your free trial today. No credit card required.
        </p>
      </div>
    </section>
  );
};

export default ClosingCTA;