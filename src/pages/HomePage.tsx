import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Database, Bot, Sparkles as SparklesIcon, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HomePage = () => {
  const [crmModalOpen, setCrmModalOpen] = useState(false);
  const [agentsModalOpen, setAgentsModalOpen] = useState(false);
  const [irisModalOpen, setIrisModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Website Header */}
      <header className="h-16 border-b border-border flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">N</span>
          </div>
          <span className="font-semibold text-xl">nvestiv</span>
        </div>
        
        {/* Center Navigation */}
        <nav className="flex items-center gap-8">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Products</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Integrations</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </nav>
        
        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            Placeholder
          </Button>
          <Button size="sm" className="bg-black text-white hover:bg-black/90">
            Go to App
          </Button>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-20">
          <div className="w-full max-w-4xl mx-auto text-center space-y-8">
            
            {/* Brand Logo/Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                nvestiv
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                AI Operating System for Private Investment Firms
              </p>
            </div>
            
            {/* Main Search Box */}
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask about your investments, portfolio, or create AI agents..."
                  className="w-full px-4 py-3 pr-12 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>
            </div>
            
            {/* Suggestion Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <button className="px-4 py-2 rounded-full border border-border bg-background text-sm text-foreground hover:bg-muted/50 transition-colors flex items-center gap-2">
                <Database className="w-4 h-4" />
                AI CRM Demo
              </button>
              <button className="px-4 py-2 rounded-full border border-border bg-background text-sm text-foreground hover:bg-muted/50 transition-colors flex items-center gap-2">
                <Bot className="w-4 h-4" />
                Investment Agents
              </button>
              <button className="px-4 py-2 rounded-full border border-border bg-background text-sm text-foreground hover:bg-muted/50 transition-colors flex items-center gap-2">
                <SparklesIcon className="w-4 h-4" />
                Portfolio Analytics
              </button>
            </div>
            
            {/* Quick Access Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
              <Card 
                className="card-perplexity cursor-pointer hover:bg-muted/20"
                onClick={() => setCrmModalOpen(true)}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary" />
                    AI CRM
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Unified relationship management for private markets
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card 
                className="card-perplexity cursor-pointer hover:bg-muted/20"
                onClick={() => setAgentsModalOpen(true)}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Bot className="w-5 h-5 text-primary" />
                    AI Agents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Custom agents for every investment workflow
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card 
                className="card-perplexity cursor-pointer hover:bg-muted/20"
                onClick={() => setIrisModalOpen(true)}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <SparklesIcon className="w-5 h-5 text-primary" />
                    IRIS Platform
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Intelligent investment research and analytics
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      {/* Modals */}
      {/* CRM Modal */}
      <Dialog open={crmModalOpen} onOpenChange={setCrmModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <Database className="w-5 h-5 text-primary" />
              AI CRM for Private Markets
            </DialogTitle>
            <DialogDescription className="text-base">
              Comprehensive relationship and deal management platform
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Complete CRM solution built specifically for private investment workflows
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Agents Modal */}
      <Dialog open={agentsModalOpen} onOpenChange={setAgentsModalOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <Bot className="w-5 h-5 text-primary" />
              AI Investment Agents
            </DialogTitle>
            <DialogDescription className="text-base">
              Intelligent automation for every investment workflow
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Deploy specialized AI agents to automate complex investment tasks
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* IRIS Modal */}
      <Dialog open={irisModalOpen} onOpenChange={setIrisModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <SparklesIcon className="w-5 h-5 text-primary" />
              IRIS Platform
            </DialogTitle>
            <DialogDescription className="text-base">
              Intelligent research and analytics platform
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Advanced AI-powered research and analytics for investment decisions
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HomePage;