import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Database, Bot, Sparkles as SparklesIcon, Search, ArrowRight, FolderOpen, Grid3X3, Settings, Users, FileText, Zap, Circle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
            Book Demo
          </Button>
          <Button size="sm" className="bg-black text-white hover:bg-black/90">
            Log In
          </Button>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-[1080px] mx-auto">
        {/* Hero Section */}
        <section className="w-full h-[calc(100vh-8rem)] flex items-center justify-center px-6 relative overflow-hidden bg-gradient-to-br from-slate-900 from-70% via-slate-800 via-80% to-blue-700 rounded-3xl my-4" aria-labelledby="hero-heading">
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
                <h2 className="h4 text-blue-400 leading-tight flex items-center justify-center gap-4">
                  <span>AI CRM</span>
                  <SparklesIcon className="w-4 h-4 text-blue-400/60" />
                  <span>Agentic Operating System</span>
                </h2>
                <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
                  Finally, an AI Operating System that centralizes your scattered work. Emails, files, and software—unified, intelligent, and always at your fingertips.
                </p>
              </div>
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

        {/* Companies Marquee Section */}
        <section className="w-full py-6 overflow-hidden rounded-3xl mb-4">
          <div className="w-full px-6">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Trusted by Leading Investment Firms
              </h3>
              
            </div>
            
            <div className="relative">
              <div className="flex animate-marquee space-x-16">
                {/* First set of companies */}
                <div className="flex items-center space-x-4 min-w-max">
                  <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-lg">KKR</span>
                  </div>
                  <span className="text-gray-700 font-medium whitespace-nowrap">KKR & Co</span>
                </div>
                
                <div className="flex items-center space-x-4 min-w-max">
                  <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-lg">TPG</span>
                  </div>
                  <span className="text-gray-700 font-medium whitespace-nowrap">TPG Capital</span>
                </div>
                
                <div className="flex items-center space-x-4 min-w-max">
                  <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-lg">CVC</span>
                  </div>
                  <span className="text-gray-700 font-medium whitespace-nowrap">CVC Capital</span>
                </div>
                
                <div className="flex items-center space-x-4 min-w-max">
                  <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-lg">BC</span>
                  </div>
                  <span className="text-gray-700 font-medium whitespace-nowrap">Bain Capital</span>
                </div>
                
                <div className="flex items-center space-x-4 min-w-max">
                  <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-lg">A16Z</span>
                  </div>
                  <span className="text-gray-700 font-medium whitespace-nowrap">Andreessen Horowitz</span>
                </div>
                
                <div className="flex items-center space-x-4 min-w-max">
                  <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-lg">SV</span>
                  </div>
                  <span className="text-gray-700 font-medium whitespace-nowrap">Sequoia Capital</span>
                </div>
                
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center space-x-4 min-w-max">
                  <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-lg">KKR</span>
                  </div>
                  <span className="text-gray-700 font-medium whitespace-nowrap">KKR & Co</span>
                </div>
                
                <div className="flex items-center space-x-4 min-w-max">
                  <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-lg">TPG</span>
                  </div>
                  <span className="text-gray-700 font-medium whitespace-nowrap">TPG Capital</span>
                </div>
                
                <div className="flex items-center space-x-4 min-w-max">
                  <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-lg">CVC</span>
                  </div>
                  <span className="text-gray-700 font-medium whitespace-nowrap">CVC Capital</span>
                </div>
                
                <div className="flex items-center space-x-4 min-w-max">
                  <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-lg">BC</span>
                  </div>
                  <span className="text-gray-700 font-medium whitespace-nowrap">Bain Capital</span>
                </div>
                
                <div className="flex items-center space-x-4 min-w-max">
                  <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-lg">A16Z</span>
                  </div>
                  <span className="text-gray-700 font-medium whitespace-nowrap">Andreessen Horowitz</span>
                </div>
                
                <div className="flex items-center space-x-4 min-w-max">
                  <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-lg">SV</span>
                  </div>
                  <span className="text-gray-700 font-medium whitespace-nowrap">Sequoia Capital</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Features Section */}
        <section className="w-full py-16" aria-labelledby="features-heading">
          <div className="px-6">
            <div className="text-center mb-12">
              <h2 id="features-heading" className="h2 mb-4">
                Complete AI Operating System
              </h2>
              	<p className="text-secondary max-w-2xl mx-auto">
                Discover how IRIS transforms your private investment workflow with intelligent automation and seamless integration.
              </p>
            </div>

            <Tabs defaultValue="ai-crm" className="w-full max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="ai-crm" className="flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  <span className="hidden sm:inline">AI CRM</span>
                </TabsTrigger>
                <TabsTrigger value="ai-agents" className="flex items-center gap-2">
                  <Bot className="w-4 h-4" />
                  <span className="hidden sm:inline">AI Agents</span>
                </TabsTrigger>
                <TabsTrigger value="files" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span className="hidden sm:inline">Files</span>
                </TabsTrigger>
                <TabsTrigger value="integrations" className="flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  <span className="hidden sm:inline">Integrations</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="ai-crm" className="mt-0">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Database className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">01</span>
                        </div>
                        <div>
                          <h3 className="h3 mb-4">AI CRM for Private Markets</h3>
                          <p className="text-lg leading-relaxed mb-6">
                            Centralize all your relationships, deals, and communications in one intelligent platform. 
                            Our AI automatically enriches contact data, tracks deal progress, and surfaces the most relevant opportunities.
                          </p>
                          <Button className="btn-hero">
                            Explore CRM Features
                          </Button>
                        </div>
                      </div>
                      <div className="lg:pl-8">
                        <div className="bg-muted/30 rounded-2xl p-6 h-64 flex items-center justify-center">
                          <div className="text-center space-y-4">
                            <Users className="w-16 h-16 text-primary mx-auto" />
                            <p className="text-muted-foreground">CRM Interface Preview</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="ai-agents" className="mt-0">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Bot className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">02</span>
                        </div>
                        <div>
                          <h3 className="h3 mb-4">Intelligent AI Agents</h3>
                          <p className="text-lg leading-relaxed mb-6">
                            Deploy specialized AI agents that work 24/7 to screen deals, conduct due diligence, 
                            and automate routine tasks. Each agent learns from your preferences and improves over time.
                          </p>
                          <Button className="btn-hero">
                            Deploy Agents
                          </Button>
                        </div>
                      </div>
                      <div className="lg:pl-8">
                        <div className="bg-muted/30 rounded-2xl p-6 h-64 flex items-center justify-center">
                          <div className="text-center space-y-4">
                            <Zap className="w-16 h-16 text-primary mx-auto" />
                            <p className="text-muted-foreground">AI Agents Dashboard</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="files" className="mt-0">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <FileText className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">03</span>
                        </div>
                        <div>
                          <h3 className="h3 mb-4">Smart File Management</h3>
                          <p className="text-lg leading-relaxed mb-6">
                            Organize and search through thousands of documents with AI-powered insights. 
                            Automatically categorize files, extract key information, and find what you need instantly.
                          </p>
                          <Button className="btn-hero">
                            Organize Files
                          </Button>
                        </div>
                      </div>
                      <div className="lg:pl-8">
                        <div className="bg-muted/30 rounded-2xl p-6 h-64 flex items-center justify-center">
                          <div className="text-center space-y-4">
                            <FolderOpen className="w-16 h-16 text-primary mx-auto" />
                            <p className="text-muted-foreground">File System Interface</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="integrations" className="mt-0">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Settings className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">04</span>
                        </div>
                        <div>
                          <h3 className="h3 mb-4">Seamless Integrations</h3>
                          <p className="text-lg leading-relaxed mb-6">
                            Connect your existing tools and platforms seamlessly. From Bloomberg to your favorite 
                            spreadsheet software, IRIS integrates with your entire investment technology stack.
                          </p>
                          <Button className="btn-hero">
                            View Integrations
                          </Button>
                        </div>
                      </div>
                      <div className="lg:pl-8">
                        <div className="bg-muted/30 rounded-2xl p-6 h-64 flex items-center justify-center">
                          <div className="text-center space-y-4">
                            <Grid3X3 className="w-16 h-16 text-primary mx-auto" />
                            <p className="text-muted-foreground">Integration Hub</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
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