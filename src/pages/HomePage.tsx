import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Database, Bot, Sparkles as SparklesIcon, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const HomePage = () => {
  const [crmModalOpen, setCrmModalOpen] = useState(false);
  const [agentsModalOpen, setAgentsModalOpen] = useState(false);
  const [irisModalOpen, setIrisModalOpen] = useState(false);
  return <div className="min-h-screen bg-background">
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
      <main className="max-w-screen-xl mx-auto">
        {/* Hero Section */}
        <section className="h-[calc(100vh-8rem)] flex items-center justify-center px-6 relative overflow-hidden bg-gradient-to-br from-slate-900 from-30% via-blue-900 via-50% via-blue-800 via-70% via-slate-600 via-80% to-blue-600 rounded-3xl mx-4 my-4">
          {/* Request early access button */}
          <div className="absolute top-8 left-8">
            <Button variant="outline" size="sm" className="bg-black/20 border-white/20 text-white hover:bg-white/10">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
              Request early access
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="text-left space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Invest <span className="text-emerald-400">Smarter</span>
                  <br />
                  Grow <span className="text-emerald-400">Faster</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-lg">
                  Unlock your portfolio's full potential with AI agents that save time, cut costs, and scale with you — no code, no clutter, just results.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-medium">
                  Explore Platform
                </Button>
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 font-medium">
                  Book a Demo
                </Button>
              </div>

              {/* Feature highlights */}
              
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative">
              <div className="bg-gray-900/50 backdrop-blur rounded-2xl p-6 border border-white/10">
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-medium">Portfolio Analytics</h3>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-emerald-500/20 border border-emerald-500/30 rounded p-3">
                      <div className="text-emerald-400 text-2xl font-bold">$2.4M</div>
                      <div className="text-gray-300 text-sm">Total AUM</div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-700 rounded p-3">
                        <div className="text-white font-medium">125</div>
                        <div className="text-gray-400 text-sm">Active Deals</div>
                      </div>
                      <div className="bg-gray-700 rounded p-3">
                        <div className="text-white font-medium">18%</div>
                        <div className="text-gray-400 text-sm">IRR</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="min-h-screen py-20">
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <div className="w-full max-w-4xl mx-auto text-center space-y-8">
              
              {/* Main Search Box */}
              <div className="mt-12 max-w-2xl mx-auto">
                <div className="relative">
                  <input type="text" placeholder="Ask about your investments, portfolio, or create AI agents..." className="w-full px-4 py-3 pr-12 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
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
                <Card className="card-perplexity cursor-pointer hover:bg-muted/20" onClick={() => setCrmModalOpen(true)}>
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
                
                <Card className="card-perplexity cursor-pointer hover:bg-muted/20" onClick={() => setAgentsModalOpen(true)}>
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
                
                <Card className="card-perplexity cursor-pointer hover:bg-muted/20" onClick={() => setIrisModalOpen(true)}>
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
        </section>
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
    </div>;
};
export default HomePage;