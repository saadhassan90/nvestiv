import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Database, Bot, Sparkles as SparklesIcon, Search, ArrowRight, FolderOpen, Grid3X3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const HomePage = () => {
  console.log("HomePage component is rendering");
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
        <nav className="flex items-center gap-8" role="navigation" aria-label="Main navigation">
          <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors no-underline">Home</a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors no-underline">Products</a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors no-underline">About</a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors no-underline">Integrations</a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors no-underline">Pricing</a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors no-underline">Contact</a>
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
        <section className="h-[calc(100vh-8rem)] flex items-center justify-center px-6 relative overflow-hidden bg-gradient-to-br from-slate-900 from-70% via-slate-800 via-80% to-blue-700 rounded-3xl mx-4 my-4" aria-labelledby="hero-heading">
          {/* Request early access button */}
          <div className="absolute top-8 left-8">
            <Button variant="outline" size="sm" className="bg-black/20 border-white/20 text-white hover:bg-white/10">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" aria-hidden="true"></div>
              Request early access
            </Button>
          </div>

          <div className="w-full max-w-6xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="space-y-6">
                <div>
                  <h1 id="hero-heading" className="text-display text-white leading-tight">
                    Private Investments AI
                  </h1>
                </div>
                <h2 className="h2 text-blue-400 leading-tight">
                  IRIS Is Your Second Brain.
                </h2>
                <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
                  Finally, an AI Operating System that centralizes your scattered work. Emails, files, and software—unified, intelligent, and always at your fingertips.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-medium">
                Explore Platform
              </Button>
              <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 font-medium border border-gray-600">
                Book a Demo
              </Button>
            </div>

            {/* Subtle Divider */}
            <div className="mt-16 mb-8 max-w-2xl mx-auto">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </div>

            {/* AI Chat Interface */}
            <div className="mt-40 max-w-3xl mx-auto">
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-1 border border-white/10">
                <div className="flex items-center gap-3 p-3">
                  {/* Main Input Area */}
                  <div className="flex-1 relative">
                    <input type="text" placeholder="Ask IRIS anything about private investments..." className="w-full bg-transparent text-white placeholder:text-white/50 text-sm focus:outline-none py-2 px-2" />
                  </div>

                  {/* Send Button */}
                  <button className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg flex items-center justify-center transition-all shadow-lg">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Suggestion Pills */}
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                <button className="px-4 py-2 text-xs bg-white/5 text-white/70 rounded-full hover:bg-white/10 transition-colors border border-white/10 flex items-center gap-2">
                  <Database className="w-3 h-3" />
                  AI CRM
                </button>
                <button className="px-4 py-2 text-xs bg-white/5 text-white/70 rounded-full hover:bg-white/10 transition-colors border border-white/10 flex items-center gap-2">
                  <Bot className="w-3 h-3" />
                  AI Agents
                </button>
                <button className="px-4 py-2 text-xs bg-white/5 text-white/70 rounded-full hover:bg-white/10 transition-colors border border-white/10 flex items-center gap-2">
                  <FolderOpen className="w-3 h-3" />
                  File System
                </button>
                <button className="px-4 py-2 text-xs bg-white/5 text-white/70 rounded-full hover:bg-white/10 transition-colors border border-white/10 flex items-center gap-2">
                  <Grid3X3 className="w-3 h-3" />
                  Integrated Apps
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features Section */}
        
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