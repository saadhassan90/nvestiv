import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const CRMHero = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center px-4">
        <h1 className="h1 mb-6 max-w-4xl mx-auto">
          The CRM Built for{" "}
          <span className="text-primary">Private Investments</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          The first AI-native CRM that updates itself. One system to unify your relationships, 
          data, and workflows—built for how investors actually work.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-shadow">
            Try the AI-Native CRM
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4">
            <Play className="mr-2 h-5 w-5" />
            Book a Demo
          </Button>
        </div>
        
        {/* CRM Dashboard Mockup */}
        <div className="relative max-w-5xl mx-auto">
          <div className="aspect-[16/10] bg-gradient-to-br from-background to-muted/50 rounded-2xl border shadow-2xl overflow-hidden">
            <div className="p-8 h-full flex flex-col">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
                  </div>
                  <span className="text-sm text-muted-foreground">IRIS AI Assistant</span>
                </div>
                <div className="text-sm text-green-600 font-medium">
                  ✓ 12 new contacts auto-created
                </div>
              </div>
              
              {/* Dashboard Content Grid */}
              <div className="grid grid-cols-3 gap-6 flex-1">
                <div className="space-y-4">
                  <div className="h-3 bg-muted rounded" />
                  <div className="h-2 bg-muted/60 rounded w-3/4" />
                  <div className="h-2 bg-muted/60 rounded w-1/2" />
                </div>
                <div className="space-y-4">
                  <div className="h-3 bg-primary/20 rounded" />
                  <div className="h-2 bg-primary/10 rounded w-3/4" />
                  <div className="h-2 bg-primary/10 rounded w-5/6" />
                </div>
                <div className="space-y-4">
                  <div className="h-3 bg-muted rounded" />
                  <div className="h-2 bg-muted/60 rounded w-2/3" />
                  <div className="h-2 bg-muted/60 rounded w-3/4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMHero;