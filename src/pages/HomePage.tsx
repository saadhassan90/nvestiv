import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Database, Bot, Sparkles as SparklesIcon, Search, ArrowRight, FolderOpen, Grid3X3, Settings, Users, FileText, Zap, Circle, TrendingUp, Plus, Folder, Link, Cpu } from "lucide-react";
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
          <img src="/lovable-uploads/nvestiv-logo.png" alt="Nvestiv Logo" className="w-8 h-8" />
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
          <Button variant="secondary" size="sm">
            Book Demo
          </Button>
          <Button variant="default" size="sm">
            Log In
          </Button>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto">
        {/* Hero Section */}
        <section className="w-full h-[700px] flex items-center justify-center px-6 relative overflow-hidden rounded-3xl my-4" style={{ background: 'linear-gradient(to bottom right, #150b36 70%, #19226d)' }} aria-labelledby="hero-heading">
          {/* Request early access button */}
          <div className="absolute top-8 left-8">
            
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
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                {/* Input Area - Full Width at Top */}
                <div className="p-4">
                  <textarea 
                    placeholder="Ask IRIS anything about private investments..." 
                    className="w-full bg-transparent text-white placeholder:text-white/50 text-sm focus:outline-none resize-none min-h-[60px] max-h-[200px] py-3 px-3 overflow-y-auto"
                    rows={2}
                  />
                </div>

                {/* Bottom Row - Side by Side Containers */}
                <div className="flex items-center justify-between px-4 pb-4">
                  {/* Left Side - Action Buttons */}
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-2 text-xs bg-white/5 text-white/70 rounded-lg hover:bg-white/10 transition-colors border border-white/10 flex items-center gap-2">
                      <Database className="w-3 h-3" />
                      <span className="hidden sm:inline">AI CRM</span>
                    </button>
                    <button className="px-3 py-2 text-xs bg-white/5 text-white/70 rounded-lg hover:bg-white/10 transition-colors border border-white/10 flex items-center gap-2">
                      <Bot className="w-3 h-3" />
                      <span className="hidden sm:inline">AI Agents</span>
                    </button>
                    <button className="px-3 py-2 text-xs bg-white/5 text-white/70 rounded-lg hover:bg-white/10 transition-colors border border-white/10 flex items-center gap-2">
                      <FolderOpen className="w-3 h-3" />
                      <span className="hidden sm:inline">Files</span>
                    </button>
                    <button className="px-3 py-2 text-xs bg-white/5 text-white/70 rounded-lg hover:bg-white/10 transition-colors border border-white/10 flex items-center gap-2">
                      <Grid3X3 className="w-3 h-3" />
                      <span className="hidden sm:inline">Apps</span>
                    </button>
                    <button className="px-3 py-2 text-xs bg-white/5 text-white/70 rounded-lg hover:bg-white/10 transition-colors border border-white/10 flex items-center gap-2">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Right Side - Send Button */}
                  <Button size="icon" variant="default" className="w-10 h-10 rounded-lg">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
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
            {/* Section Label */}
            <div className="flex justify-center mb-8">
              <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3137fd] from-0% via-[#3137fd] via-70% to-[#3137fd]/10 to-100% p-[1px]">
                  <div className="h-full w-full rounded-full bg-gray-100"></div>
                </div>
                <div className="relative z-10 flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  <span className="text-sm font-medium">AI Operating System</span>
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 id="features-heading" className="h2 mb-4">Complete 360° Intelligence Across Your Investment Operations</h2>
            </div>

            <Tabs defaultValue="ai-crm" className="w-full max-w-6xl mx-auto">
              <TabsContent value="ai-crm" className="mt-0">
                <Card className="border-0 shadow-lg bg-gray-50">
                  <div className="p-6 pb-0">
                    <TabsList className="grid w-full grid-cols-4">
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
                  </div>
                  <CardContent className="p-16 pt-6">
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                       <div className="space-y-6 flex flex-col justify-start">
                        <div>
                          <h3 className="h3 mb-4">The CRM That Updates Itself</h3>
                          <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                            Every email, every interaction—IRIS reads it all and updates your CRM automatically. Just ask IRIS anything through voice or chat. No manual entry, ever.
                          </p>
                          
                          <div className="space-y-3 mb-6">
                            <h4 className="font-semibold text-foreground">Key Features</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Auto-syncing emails</strong> - Past and incoming emails automatically update contacts</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Voice & chat interface</strong> - Talk to IRIS through the floating chat bubble</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Self-managing database</strong> - IRIS creates and updates records autonomously</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Instant relationship insights</strong> - Ask about any contact or deal pattern</span>
                              </li>
                            </ul>
                          </div>
                          
                          <Button variant="default">
                            Learn More
                          </Button>
                        </div>
                      </div>
                      <div className="lg:pl-8">
                        <div className="relative rounded-2xl">
                          <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-cyan-500 rounded-[18px] blur-md opacity-30"></div>
                          <div className="relative z-10 bg-white rounded-2xl p-6 h-[500px] flex flex-col shadow-none">
                          
                          {/* Chat History Container */}
                          <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
                            {/* User Message */}
                            <div className="flex justify-end gap-2">
                              <div className="flex flex-col items-end max-w-[80%]">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-xs text-gray-500">12:34 PM</span>
                                  <span className="text-xs font-medium text-gray-700">You</span>
                                  <div className="w-6 h-6 bg-slate-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-medium text-xs">Y</span>
                                  </div>
                                </div>
                                <div className="bg-slate-600 text-white rounded-2xl px-4 py-2">
                                  <p className="text-sm text-white">Who do I know that looks at healthcare rollups in Florida?</p>
                                </div>
                              </div>
                            </div>
                            
                            {/* IRIS Response */}
                            <div className="flex justify-start gap-2">
                              <div className="flex flex-col items-start max-w-[85%]">
                                <div className="flex items-center gap-2 mb-1">
                                  <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                                    <span className="text-white font-medium text-xs">I</span>
                                  </div>
                                  <span className="text-xs font-medium text-gray-700">IRIS</span>
                                  <span className="text-xs text-gray-500">12:34 PM</span>
                                </div>
                                <div className="bg-gray-100 rounded-2xl px-4 py-2">
                                  <p className="text-sm text-gray-800">Searched the CRM and found Jason Ozler, who told you in 2024 that he likes to invest in US healthcare PE strategies.</p>
                                  <p className="text-sm text-gray-800 mt-2 font-medium">Want me to email him requesting a meeting?</p>
                                </div>
                              </div>
                            </div>
                            
                            {/* Contact Card */}
                            <div className="flex justify-start">
                              <div className="bg-white border border-gray-200 rounded-lg p-3 max-w-[85%] shadow-sm">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-medium text-sm">JO</span>
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-medium text-sm text-gray-900">Jason Ozler</h4>
                                    <p className="text-xs text-gray-500">Partner @ Florida Health Ventures</p>
                                    <p className="text-xs text-gray-400">Last contact: March 2024</p>
                                  </div>
                                </div>
                                <div className="mt-2 pt-2 border-t border-gray-100">
                                  <p className="text-xs text-gray-600">"Looking for healthcare PE opportunities in Southeast US markets"</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Chat Widget */}
                          <div className="bg-black/5 backdrop-blur-sm rounded-xl p-1 border border-gray-200">
                            <div className="flex items-center gap-2 p-2">
                              <div className="flex-1 relative">
                                <input 
                                  type="text" 
                                  placeholder="Ask IRIS something..." 
                                  className="w-full bg-transparent text-gray-700 placeholder:text-gray-400 text-xs focus:outline-none py-1 px-2" 
                                  disabled
                                />
                              </div>
                              <Button size="icon" variant="default" className="w-8 h-8 rounded-lg">
                                <ArrowRight className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="ai-agents" className="mt-0">
                <Card className="border-0 shadow-lg bg-gray-50">
                  <div className="p-6 pb-0">
                    <TabsList className="grid w-full grid-cols-4">
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
                  </div>
                  <CardContent className="p-16 pt-6">
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                       <div className="space-y-6 flex flex-col justify-start">
                        <div>
                           <h3 className="h3 mb-4">Speak Your Workflow Into Existence</h3>
                           <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                            Create custom AI agents using plain English. Tell IRIS what you need done, which tools to connect, and how—she builds the entire workflow for you. No code, no complexity.
                          </p>
                          
                          <div className="space-y-3 mb-6">
                            <h4 className="font-semibold text-foreground">Key Features</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Natural language agent creation</strong> - Describe your workflow, IRIS builds it</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Zero technical skills required</strong> - Just talk through what you want to achieve</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Auto-vectorized outputs</strong> - Agent work feeds back into IRIS for complete business context</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Pre-built agent catalog</strong> - Ready-made agents for family offices, institutions, and asset managers</span>
                              </li>
                            </ul>
                          </div>
                          
                          <Button variant="default">
                            See Agent Catalog
                          </Button>
                        </div>
                      </div>
                      <div className="lg:pl-8">
                        <div className="relative rounded-2xl">
                          <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-cyan-500 rounded-[18px] blur-md opacity-30"></div>
                          <div className="relative z-10 bg-white rounded-2xl p-6 h-[500px] flex flex-col shadow-none">
                          
                          {/* Agent Dashboard */}
                          <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="font-semibold text-gray-900">Active AI Agents</h4>
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">3 Active</span>
                            </div>
                            
                            {/* Agent Cards */}
                            <div className="space-y-3">
                              <div className="bg-gray-50 rounded-lg p-4">
                                <div className="flex items-start justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                      <Bot className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                      <h5 className="font-medium text-gray-900 text-sm">Deal Screener</h5>
                                      <p className="text-xs text-gray-500">Processing 12 new deals</p>
                                    </div>
                                  </div>
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                </div>
                              </div>
                              
                              <div className="bg-gray-50 rounded-lg p-4">
                                <div className="flex items-start justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                      <Search className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                      <h5 className="font-medium text-gray-900 text-sm">Due Diligence</h5>
                                      <p className="text-xs text-gray-500">Analyzing HealthTech Inc.</p>
                                    </div>
                                  </div>
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                </div>
                              </div>
                              
                              <div className="bg-gray-50 rounded-lg p-4">
                                <div className="flex items-start justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                                      <TrendingUp className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                      <h5 className="font-medium text-gray-900 text-sm">Market Intel</h5>
                                      <p className="text-xs text-gray-500">Tracking SaaS trends</p>
                                    </div>
                                  </div>
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Quick Actions */}
                          <div className="bg-black/5 backdrop-blur-sm rounded-xl p-1 border border-gray-200">
                            <div className="flex items-center gap-2 p-2">
                              <div className="flex-1 relative">
                                <input 
                                  type="text" 
                                  placeholder="Configure new agent..." 
                                  className="w-full bg-transparent text-gray-700 placeholder:text-gray-400 text-xs focus:outline-none py-1 px-2" 
                                  disabled
                                />
                              </div>
                              <Button size="icon" variant="default" className="w-6 h-6 rounded-md">
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="files" className="mt-0">
                <Card className="border-0 shadow-lg bg-gray-50">
                  <div className="p-6 pb-0">
                    <TabsList className="grid w-full grid-cols-4">
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
                  </div>
                  <CardContent className="p-16 pt-6">
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                       <div className="space-y-6 flex flex-col justify-start">
                        <div>
                           <h3 className="h3 mb-4">Your Files, Intelligently Connected</h3>
                           <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                            Upload directly or connect Google Drive, Microsoft, Dropbox—IRIS reads every file and connects the dots. Auto-organized storage that links documents to contacts, powers your agents, and fuels smarter decisions.
                          </p>
                          
                          <div className="space-y-3 mb-6">
                            <h4 className="font-semibold text-foreground">Key Features</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Universal file integration</strong> - Upload directly or sync cloud drives seamlessly</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Complete file intelligence</strong> - IRIS processes every document for full context</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Smart auto-organization</strong> - Files sorted and linked to relevant CRM contacts</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Agent-ready knowledge</strong> - All files available for automation and research tasks</span>
                              </li>
                            </ul>
                          </div>
                          
                          <Button variant="default">
                            Learn More
                          </Button>
                        </div>
                      </div>
                      <div className="lg:pl-8">
                        <div className="relative rounded-2xl">
                          <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-cyan-500 rounded-[18px] blur-md opacity-30"></div>
                          <div className="relative z-10 bg-white rounded-2xl p-6 h-[500px] flex flex-col shadow-none">
                          
                          {/* File Explorer */}
                          <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="font-semibold text-gray-900">Document Library</h4>
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">2,847 Files</span>
                            </div>
                            
                            {/* Folder Structure */}
                            <div className="space-y-2">
                              <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                                <Folder className="w-4 h-4 text-blue-500" />
                                <span className="text-sm text-gray-900">Active Deals</span>
                                <span className="text-xs text-gray-500 ml-auto">127 files</span>
                              </div>
                              
                              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg">
                                <Folder className="w-4 h-4 text-purple-500" />
                                <span className="text-sm text-gray-900">Due Diligence</span>
                                <span className="text-xs text-gray-500 ml-auto">89 files</span>
                              </div>
                              
                              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg">
                                <FileText className="w-4 h-4 text-green-500" />
                                <span className="text-sm text-gray-900">HealthTech_Financials.pdf</span>
                                <span className="text-xs text-gray-500 ml-auto">2.4 MB</span>
                              </div>
                              
                              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg">
                                <FileText className="w-4 h-4 text-red-500" />
                                <span className="text-sm text-gray-900">Market_Analysis_Q4.xlsx</span>
                                <span className="text-xs text-gray-500 ml-auto">1.8 MB</span>
                              </div>
                              
                              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg">
                                <FileText className="w-4 h-4 text-orange-500" />
                                <span className="text-sm text-gray-900">Legal_Review_Summary.docx</span>
                                <span className="text-xs text-gray-500 ml-auto">956 KB</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Search Bar */}
                          <div className="bg-black/5 backdrop-blur-sm rounded-xl p-1 border border-gray-200">
                            <div className="flex items-center gap-2 p-2">
                              <div className="flex-1 relative">
                                <input 
                                  type="text" 
                                  placeholder="Search files and documents..." 
                                  className="w-full bg-transparent text-gray-700 placeholder:text-gray-400 text-xs focus:outline-none py-1 px-2" 
                                  disabled
                                />
                              </div>
                              <Button size="icon" variant="default" className="w-6 h-6 rounded-md">
                                <Search className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="integrations" className="mt-0">
                <Card className="border-0 shadow-lg bg-gray-50">
                  <div className="p-6 pb-0">
                    <TabsList className="grid w-full grid-cols-4">
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
                  </div>
                  <CardContent className="p-16 pt-6">
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                       <div className="space-y-6 flex flex-col justify-start">
                         <div>
                           <h3 className="h3 mb-4">One OS, Every Tool</h3>
                           <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                             Connect your entire tech stack into one unified workspace. IRIS doesn't just pull data—she works directly in your connected tools, breaking down silos and orchestrating multi-platform workflows from a single command center.
                           </p>
                           
                           <div className="space-y-3 mb-6">
                             <h4 className="font-semibold text-foreground">Key Features</h4>
                             <ul className="space-y-2 text-sm text-muted-foreground">
                               <li className="flex items-start gap-2">
                                 <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                 <span><strong>Complete tech stack integration</strong> - Connect every software you use</span>
                               </li>
                               <li className="flex items-start gap-2">
                                 <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                 <span><strong>Deep tool connectivity</strong> - IRIS works directly in connected platforms, not just through APIs</span>
                               </li>
                               <li className="flex items-start gap-2">
                                 <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                 <span><strong>Cross-platform workflows</strong> - Bridge data silos and create seamless pathways</span>
                               </li>
                               <li className="flex items-start gap-2">
                                 <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                 <span><strong>Multi-tool orchestration</strong> - Engage multiple systems to complete complex tasks</span>
                               </li>
                             </ul>
                           </div>
                           
                           <Button variant="default">
                             See Available Integrations
                           </Button>
                         </div>
                      </div>
                      <div className="lg:pl-8">
                        <div className="relative rounded-2xl">
                          <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-cyan-500 rounded-[18px] blur-md opacity-30"></div>
                          <div className="relative z-10 bg-white rounded-2xl p-6 h-[500px] flex flex-col shadow-none">
                          
                          {/* Integration Hub */}
                          <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="font-semibold text-gray-900">Connected Services</h4>
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">12 Active</span>
                            </div>
                            
                            {/* Integration Cards */}
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="w-6 h-6 bg-blue-500 rounded-sm"></div>
                                  <span className="text-xs font-medium text-gray-900">Bloomberg</span>
                                </div>
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              </div>
                              
                              <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="w-6 h-6 bg-orange-500 rounded-sm"></div>
                                  <span className="text-xs font-medium text-gray-900">PitchBook</span>
                                </div>
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              </div>
                              
                              <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="w-6 h-6 bg-purple-500 rounded-sm"></div>
                                  <span className="text-xs font-medium text-gray-900">Outlook</span>
                                </div>
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              </div>
                              
                              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="w-6 h-6 bg-green-500 rounded-sm"></div>
                                  <span className="text-xs font-medium text-gray-900">Excel</span>
                                </div>
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              </div>
                              
                              <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="w-6 h-6 bg-red-500 rounded-sm"></div>
                                  <span className="text-xs font-medium text-gray-900">CapIQ</span>
                                </div>
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                              </div>
                              
                              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 flex items-center justify-center">
                                <Plus className="w-4 h-4 text-gray-400" />
                              </div>
                            </div>
                          </div>
                          
                          {/* Integration Search */}
                          <div className="bg-black/5 backdrop-blur-sm rounded-xl p-1 border border-gray-200">
                            <div className="flex items-center gap-2 p-2">
                              <div className="flex-1 relative">
                                <input 
                                  type="text" 
                                  placeholder="Add new integration..." 
                                  className="w-full bg-transparent text-gray-700 placeholder:text-gray-400 text-xs focus:outline-none py-1 px-2" 
                                  disabled
                                />
                              </div>
                              <Button size="icon" variant="default" className="w-6 h-6 rounded-md">
                                <Link className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
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