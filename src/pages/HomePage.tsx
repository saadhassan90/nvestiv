import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Database, Bot, Sparkles as SparklesIcon, Search, ArrowRight, ChevronDown, FolderOpen, Grid3X3, Settings, Users, FileText, Zap, Circle, TrendingUp, Plus, Folder, Link, Cpu, Calendar, LogIn, Plug, Play } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoBackground } from "@/components/VideoBackground";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const HomePage = () => {
  console.log("HomePage component is rendering");
  const [crmModalOpen, setCrmModalOpen] = useState(false);
  const [agentsModalOpen, setAgentsModalOpen] = useState(false);
  const [irisModalOpen, setIrisModalOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-transparent">
      <Navigation />
      
      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto">
        {/* Hero Section */}
        <VideoBackground 
          videoUrl="https://cdn.midjourney.com/video/59ad271f-d702-49b6-b74f-ee4f4d2e5e86/3.mp4"
          className="w-full h-[700px] rounded-3xl my-4 flex items-center justify-center"
        >
          <section className="w-full px-8" aria-labelledby="hero-heading">
            
            {/* Request early access button */}
            <div className="absolute top-8 left-8 z-10">
              
            </div>

            <div className="w-full max-w-6xl mx-auto text-center space-y-8 flex flex-col justify-center h-full relative z-10">
            <div className="space-y-4">
              <div className="space-y-6">
                {/* Large headline */}
                <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight font-harabara">
                  Your entire business
                  <br />
                  on one{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
                    AI CRM
                  </span>
                </h1>
                
                {/* Subtitle */}
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
                  Speak custom agents into existence and automate everything. No code, just plain english commands that transform how you work.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Button size="lg" className="text-lg px-8 py-4 font-semibold">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Get Started Free
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4 font-semibold border-white/20 text-white hover:bg-white hover:text-black">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button>
                </div>
              </div>
            </div>

            {/* Demo Input Section */}
            <div className="mt-16 max-w-3xl mx-auto">
              <div className="relative">
                <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                  <div className="space-y-4">
                    <p className="text-white/90 text-lg font-medium">Try it yourself:</p>
                    
                    <div className="relative">
                      <div className="bg-gray-900/50 border border-gray-600/50 rounded-xl p-4 min-h-[60px] flex items-center">
                        <input
                          type="text"
                          placeholder="Type your command... e.g., 'Create a deal tracker for Series A investments'"
                          className="w-full bg-transparent text-white placeholder-gray-400 text-base border-none outline-none resize-none"
                        />
                      </div>
                      
                      {/* Right Side - Send Button */}
                      <Button size="icon" variant="default" className="w-10 h-10 rounded-lg">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </VideoBackground>

        {/* Companies Marquee Section */}
        <section className="w-full py-6 overflow-hidden rounded-3xl mb-4">
          <div className="w-full px-8">
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
                    <span className="text-gray-600 font-bold text-lg">BX</span>
                  </div>
                  <span className="text-gray-700 font-medium whitespace-nowrap">Blackstone</span>
                </div>
                
                <div className="flex items-center space-x-4 min-w-max">
                  <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-lg">CB</span>
                  </div>
                  <span className="text-gray-700 font-medium whitespace-nowrap">Carlyle Group</span>
                </div>
                
                <div className="flex items-center space-x-4 min-w-max">
                  <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-lg">AQR</span>
                  </div>
                  <span className="text-gray-700 font-medium whitespace-nowrap">AQR Capital</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Tabs Section */}
        <section className="w-full py-16">
          <div className="w-full px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Everything you need in one platform
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Nvestiv unifies relationships, files, and investments into a single platform built for private markets
              </p>
            </div>
            
            <Tabs defaultValue="ai-crm" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto p-2 gap-2 bg-gray-100 rounded-2xl">
                <TabsTrigger 
                  value="ai-crm" 
                  className="flex items-center gap-3 p-4 text-left justify-start data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl transition-all"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">AI CRM</div>
                    <div className="text-xs text-muted-foreground">Intelligent relationships</div>
                  </div>
                </TabsTrigger>
                
                <TabsTrigger 
                  value="agents" 
                  className="flex items-center gap-3 p-4 text-left justify-start data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl transition-all"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">AI Agents</div>
                    <div className="text-xs text-muted-foreground">Custom automation</div>
                  </div>
                </TabsTrigger>
                
                <TabsTrigger 
                  value="files" 
                  className="flex items-center gap-3 p-4 text-left justify-start data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl transition-all"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Smart Files</div>
                    <div className="text-xs text-muted-foreground">Intelligent document management</div>
                  </div>
                </TabsTrigger>
                
                <TabsTrigger 
                  value="integrations" 
                  className="flex items-center gap-3 p-4 text-left justify-start data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl transition-all"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Integrations</div>
                    <div className="text-xs text-muted-foreground">Connect everything</div>
                  </div>
                </TabsTrigger>
              </TabsList>

              {/* AI CRM Tab Content */}
              <TabsContent value="ai-crm" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Database className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">AI-Powered CRM</h3>
                            <p className="text-gray-600">Built specifically for private markets</p>
                          </div>
                        </div>
                        
                        <p className="text-lg text-gray-700 leading-relaxed">
                          Manage relationships, deals, and workflows with AI that understands private investment patterns. Get instant insights, automated follow-ups, and intelligent deal scoring.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Key Features:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Smart contact enrichment</strong> - Auto-populate profiles with investment history and preferences</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Deal flow automation</strong> - Track opportunities from sourcing to closing</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Intelligent pipeline management</strong> - AI-powered deal scoring and prioritization</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Instant relationship insights</strong> - Ask about any contact or deal pattern</span>
                          </li>
                        </ul>
                      </div>
                      
                      <Button variant="default" asChild>
                        <a href="/ai-crm" className="text-white no-underline flex items-center gap-2">
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="lg:pl-8">
                    <div className="relative rounded-2xl">
                      <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-cyan-500 rounded-[18px] blur-md opacity-15"></div>
                       <div className="relative z-10 bg-white rounded-2xl p-8 border border-gray-200 h-[500px] flex flex-col shadow-none">
                      
                      {/* Chat History Container */}
                      <div className="flex-1 space-y-4 mb-4">
                        {/* Sample deal card */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <Database className="w-4 h-4 text-blue-600" />
                              </div>
                              <span className="font-medium text-sm">TechStart Series A</span>
                            </div>
                            <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">Hot Lead</span>
                          </div>
                          <div className="text-sm text-gray-600">
                            <p>Valuation: $50M • Stage: Series A</p>
                            <p>Contact: Sarah Chen, CEO</p>
                          </div>
                        </div>
                        
                        {/* Contact card */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                              <Users className="w-5 h-5 text-purple-600" />
                            </div>
                            <div>
                              <div className="font-medium text-sm">Michael Rodriguez</div>
                              <div className="text-xs text-gray-600">Managing Partner @ Acme Ventures</div>
                              <div className="text-xs text-gray-500">Last contact: 3 days ago</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Quick stats */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-blue-50 p-3 rounded-lg text-center">
                            <div className="text-lg font-bold text-blue-600">24</div>
                            <div className="text-xs text-gray-600">Active Deals</div>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg text-center">
                            <div className="text-lg font-bold text-green-600">$2.1M</div>
                            <div className="text-xs text-gray-600">Pipeline Value</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* AI Agents Tab Content */}
              <TabsContent value="agents" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Bot className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">AI Investment Agents</h3>
                            <p className="text-gray-600">Custom automation for every workflow</p>
                          </div>
                        </div>
                        
                        <p className="text-lg text-gray-700 leading-relaxed">
                          Design and deploy specialized AI agents that automate complex investment tasks. From deal sourcing to due diligence, create agents that work 24/7 to accelerate your investment process.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Agent Capabilities:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Deal sourcing agents</strong> - Automatically identify and qualify investment opportunities</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Research automation</strong> - Generate comprehensive market analysis and competitive insights</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Due diligence assistants</strong> - Review documents and flag potential issues</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Pre-built agent catalog</strong> - Ready-made agents for family offices, institutions, and asset managers</span>
                          </li>
                        </ul>
                      </div>
                      
                      <Button variant="default">
                        <Bot className="h-4 w-4 mr-2" />
                        See Agent Catalog
                      </Button>
                    </div>
                  </div>
                  <div className="lg:pl-8">
                    <div className="relative rounded-2xl">
                      <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-cyan-500 rounded-[18px] blur-md opacity-15"></div>
                       <div className="relative z-10 bg-white rounded-2xl p-8 border border-gray-200 h-[500px] flex flex-col shadow-none">
                      
                      {/* Agent Dashboard */}
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-900">Active Agents</h4>
                          <Button size="sm" variant="outline">
                            <Plus className="w-3 h-3 mr-1" />
                            New Agent
                          </Button>
                        </div>
                        
                        {/* Agent cards */}
                        <div className="space-y-3">
                          <div className="border border-gray-200 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                  <Circle className="w-3 h-3 fill-green-600 text-green-600" />
                                </div>
                                <span className="font-medium text-sm">Deal Sourcer Pro</span>
                              </div>
                              <span className="text-xs text-green-600">Running</span>
                            </div>
                            <p className="text-xs text-gray-600 mb-2">Monitors 47 data sources for Series A opportunities</p>
                            <div className="text-xs text-gray-500">Found 3 new deals today</div>
                          </div>
                          
                          <div className="border border-gray-200 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                  <Circle className="w-3 h-3 fill-blue-600 text-blue-600" />
                                </div>
                                <span className="font-medium text-sm">Research Assistant</span>
                              </div>
                              <span className="text-xs text-blue-600">Working</span>
                            </div>
                            <p className="text-xs text-gray-600 mb-2">Analyzing TechStart competitive landscape</p>
                            <div className="text-xs text-gray-500">Report ready in 2 hours</div>
                          </div>
                          
                          <div className="border border-gray-200 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                                  <Circle className="w-3 h-3 fill-gray-400 text-gray-400" />
                                </div>
                                <span className="font-medium text-sm">DD Reviewer</span>
                              </div>
                              <span className="text-xs text-gray-500">Idle</span>
                            </div>
                            <p className="text-xs text-gray-600 mb-2">Reviews legal documents for red flags</p>
                            <div className="text-xs text-gray-500">Waiting for documents</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Smart Files Tab Content */}
              <TabsContent value="files" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                            <FileText className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">Intelligent File Management</h3>
                            <p className="text-gray-600">AI-powered document intelligence</p>
                          </div>
                        </div>
                        
                        <p className="text-lg text-gray-700 leading-relaxed">
                          Transform your documents into intelligent, searchable knowledge. AI extracts key information, creates summaries, and makes every document instantly queryable and actionable.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Smart Features:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Automatic extraction</strong> - Pull key data points, dates, and entities from any document</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Intelligent search</strong> - Find information across all documents with natural language queries</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Smart categorization</strong> - Auto-organize files by deal, contact, or investment stage</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Agent-ready knowledge</strong> - All files available for automation and research tasks</span>
                          </li>
                        </ul>
                      </div>
                      
                      <Button variant="default">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        Learn More
                      </Button>
                    </div>
                  </div>
                  <div className="lg:pl-8">
                    <div className="relative rounded-2xl">
                      <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-cyan-500 rounded-[18px] blur-md opacity-15"></div>
                       <div className="relative z-10 bg-white rounded-2xl p-8 border border-gray-200 h-[500px] flex flex-col shadow-none">
                      
                      {/* File Explorer */}
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-900">Document Intelligence</h4>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="outline">
                              <FolderOpen className="w-3 h-3 mr-1" />
                              Upload
                            </Button>
                          </div>
                        </div>
                        
                        {/* File list with AI insights */}
                        <div className="space-y-2">
                          <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                            <div className="flex items-start justify-between">
                              <div className="flex items-start gap-3">
                                <FileText className="w-4 h-4 text-blue-600 mt-0.5" />
                                <div>
                                  <div className="font-medium text-sm">TechStart_Pitch_Deck.pdf</div>
                                  <div className="text-xs text-gray-600">Series A • $50M valuation • SaaS</div>
                                  <div className="text-xs text-green-600 mt-1">✓ Key metrics extracted</div>
                                </div>
                              </div>
                              <span className="text-xs text-gray-500">2h ago</span>
                            </div>
                          </div>
                          
                          <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                            <div className="flex items-start justify-between">
                              <div className="flex items-start gap-3">
                                <FileText className="w-4 h-4 text-green-600 mt-0.5" />
                                <div>
                                  <div className="font-medium text-sm">Market_Analysis_Q4.docx</div>
                                  <div className="text-xs text-gray-600">Market size: $2.3B • Growth: 34% YoY</div>
                                  <div className="text-xs text-blue-600 mt-1">📊 Charts & data identified</div>
                                </div>
                              </div>
                              <span className="text-xs text-gray-500">1d ago</span>
                            </div>
                          </div>
                          
                          <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                            <div className="flex items-start justify-between">
                              <div className="flex items-start gap-3">
                                <FileText className="w-4 h-4 text-purple-600 mt-0.5" />
                                <div>
                                  <div className="font-medium text-sm">Due_Diligence_Report.pdf</div>
                                  <div className="text-xs text-gray-600">Legal • Financial • Technical review</div>
                                  <div className="text-xs text-orange-600 mt-1">⚠ 3 items flagged for review</div>
                                </div>
                              </div>
                              <span className="text-xs text-gray-500">3d ago</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Search bar */}
                        <div className="border-t pt-4">
                          <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                              type="text"
                              placeholder="Ask about any document..."
                              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Integrations Tab Content */}
              <TabsContent value="integrations" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Zap className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">Seamless Integrations</h3>
                            <p className="text-gray-600">Connect your entire investment stack</p>
                          </div>
                        </div>
                        
                        <p className="text-lg text-gray-700 leading-relaxed">
                          Nvestiv integrates with your existing tools and data sources. From portfolio management systems to market data providers, create a unified workflow that amplifies your team's efficiency.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Integration Features:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Data synchronization</strong> - Real-time sync with portfolio management and accounting systems</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Market data feeds</strong> - Connect to Bloomberg, Refinitiv, and other data providers</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Communication tools</strong> - Seamless integration with email, Slack, and video conferencing</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Multi-tool orchestration</strong> - Engage multiple systems to complete complex tasks</span>
                          </li>
                        </ul>
                      </div>
                      
                      <Button variant="default">
                        <Plug className="h-4 w-4 mr-2" />
                        See Available Integrations
                      </Button>
                    </div>
                  </div>
                  <div className="lg:pl-8">
                    <div className="relative rounded-2xl">
                      <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-cyan-500 rounded-[18px] blur-md opacity-15"></div>
                       <div className="relative z-10 bg-white rounded-2xl p-8 border border-gray-200 h-[500px] flex flex-col shadow-none">
                      
                      {/* Integration Dashboard */}
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-900">Connected Systems</h4>
                          <Button size="sm" variant="outline">
                            <Plus className="w-3 h-3 mr-1" />
                            Add Integration
                          </Button>
                        </div>
                        
                        {/* Integration grid */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="border border-gray-200 rounded-lg p-3 text-center hover:bg-gray-50 cursor-pointer">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                              <TrendingUp className="w-4 h-4 text-blue-600" />
                            </div>
                            <div className="text-sm font-medium">Bloomberg</div>
                            <div className="text-xs text-green-600">Connected</div>
                          </div>
                          
                          <div className="border border-gray-200 rounded-lg p-3 text-center hover:bg-gray-50 cursor-pointer">
                            <div className="w-8 h-8 bg-green-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                              <Grid3X3 className="w-4 h-4 text-green-600" />
                            </div>
                            <div className="text-sm font-medium">Salesforce</div>
                            <div className="text-xs text-green-600">Synced</div>
                          </div>
                          
                          <div className="border border-gray-200 rounded-lg p-3 text-center hover:bg-gray-50 cursor-pointer">
                            <div className="w-8 h-8 bg-purple-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                              <Zap className="w-4 h-4 text-purple-600" />
                            </div>
                            <div className="text-sm font-medium">Slack</div>
                            <div className="text-xs text-green-600">Active</div>
                          </div>
                          
                          <div className="border border-gray-200 rounded-lg p-3 text-center hover:bg-gray-50 cursor-pointer">
                            <div className="w-8 h-8 bg-orange-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                              <Settings className="w-4 h-4 text-orange-600" />
                            </div>
                            <div className="text-sm font-medium">DocuSign</div>
                            <div className="text-xs text-blue-600">Pending</div>
                          </div>
                        </div>
                        
                        {/* Integration stats */}
                        <div className="border-t pt-4">
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Data Sync Status</span>
                              <span className="text-green-600">✓ Up to date</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Last Sync</span>
                              <span className="text-gray-900">2 minutes ago</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Active Workflows</span>
                              <span className="text-gray-900">12 running</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
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

      <Footer />
    </div>
  );
};

export default HomePage;