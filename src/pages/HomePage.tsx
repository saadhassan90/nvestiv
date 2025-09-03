import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AsSeenOnCarousel from "@/components/AsSeenOnCarousel";
import { GridBackground } from "@/components/GridBackground";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Users, Play, Sparkles as SparklesIcon, CheckCircle, Eye, Database, Bot, MessageCircle, X, Calendar, FileText, BarChart3, Zap, Target, Settings } from "lucide-react";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
import { MacBrowser } from "@/components/ui/mac-browser";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import crmContactProfile from "@/assets/crm-contact-profile-hd.jpg";
const HomePage = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [crmModalOpen, setCrmModalOpen] = useState(false);
  const [agentsModalOpen, setAgentsModalOpen] = useState(false);
  const [irisModalOpen, setIrisModalOpen] = useState(false);
  const audienceTypes = ["Family Offices", "Institutions", "Asset Managers", "Startups", "Brokers", "Service Providers"];
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentPhrase = audienceTypes[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentPhrase.length) {
        setCurrentText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % audienceTypes.length);
      }
    }, typeSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, currentIndex, isDeleting, audienceTypes]);
  return <div className="min-h-screen relative">
      {/* Light Mode Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:hidden"></div>
      
      {/* Dark Mode Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-[#05081b] to-[#0a0e1f] hidden dark:block"></div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section with Black Background */}
      <main className="pt-24 md:pt-28 lg:pt-32 relative z-10 bg-white dark:bg-transparent">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="w-full relative flex flex-col items-center justify-center overflow-hidden">
          <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            
            {/* Hero Content */}
            <section className="w-full flex items-center justify-center pt-8 sm:pt-12 lg:pt-16 pb-5">
              
              {/* Vertical Layout Container - Centered */}
              <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
                
                {/* Reduced gap before content */}
                <div className="h-8"></div>
                
                {/* Text Content - Centered */}
                <div className="flex flex-col items-center justify-center w-full max-w-4xl">
                  <div className="space-y-6">
                    
                    {/* Main Headlines */}
                    <div className="space-y-6">
                      {/* Main Headline - Single Line */}
                      <div className="w-full flex justify-center">
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight" style={{
                        fontWeight: 900
                      }}>
                          <span className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                            <PointerHighlight rectangleClassName="bg-gradient-to-r from-blue-100/80 to-sky-100/80 dark:from-blue-800/40 dark:to-sky-800/40 border border-blue-300/50 dark:border-blue-600/50 leading-loose" pointerClassName="text-blue-500 h-3 w-3" containerClassName="inline-block mr-1" className="text-gray-900 dark:text-white">
                              <span className="relative z-20">AI Operating System</span>
                            </PointerHighlight>
                            {" "}for Private Investment Firms
                          </span>
                        </h1>
                      </div>
                      
                      {/* Typewriter Container */}
                      <div className="w-full">
                        <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                          <span className="text-gray-500">Trusted by </span>
                          <span className="bg-gradient-to-r from-[#2B32B2] to-[#1488CC] bg-clip-text text-transparent">
                            {currentText}
                          </span>
                          {showCursor && <span className="animate-pulse text-gray-600 ml-1">|</span>}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Small gap */}
                    <div className="h-4"></div>
                    
                  </div>
                </div>
                
                {/* Medium gap */}
                <div className="h-8"></div>
                
                {/* Secondary Content Group */}
                <div className="flex flex-col items-center justify-center w-full max-w-4xl space-y-8">
                  {/* Static Text */}
                  <div className="flex justify-center">
                    <div className="w-max">
                      <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 relative border-none pb-0 flex items-center gap-4">
                        <span>AI CRM</span>
                        <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-400 to-transparent"></div>
                        <span>AI Agents</span>
                      </h2>
                    </div>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="px-8 py-4 text-lg overflow-visible">
                      <Play className="h-5 w-5 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
                      <span>Try for FREE</span>
                    </Button>
                    <Button variant="secondary" size="lg" className="px-8 py-4 text-lg overflow-visible">
                      <SparklesIcon className="h-5 w-5 transition-all duration-300 group-hover:scale-125 group-hover:rotate-180" />
                      <span>Discover IRIS</span>
                    </Button>
                  </div>
                  
                  {/* Description Text */}
                  <p className="text-lg text-gray-600 leading-relaxed w-full">
                    Your entire business on one AI CRM — speak custom agents into existence and automate everything. No code, just plain english commands that transform how you work. Nvestiv unifies relationships, files, and investments into a single platform built for private markets.
                  </p>
                </div>
                
                {/* 3D Card in Mac Browser */}
                <div className="w-full mt-12">
                  <MacBrowser>
                    <ThreeDCardDemo />
                  </MacBrowser>
                </div>
                
              </div>
              
            </section>
            
          </div>
        </div>
      </main>
      
      {/* As Seen On Carousel - Separate Section */}
      <section className="py-8 bg-gray-50 dark:bg-background/50">
        <AsSeenOnCarousel />
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-slate-400 opacity-20 blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted border border-border rounded-lg shadow-sm text-sm font-medium text-black mb-4">
              <Eye className="w-3 h-3 text-black" />
              Overview
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Unlock{" "}
              <PointerHighlight rectangleClassName="bg-gradient-to-r from-blue-100/80 to-sky-100/80 dark:from-blue-800/40 dark:to-sky-800/40 border border-blue-300/50 dark:border-blue-600/50 leading-loose" pointerClassName="text-blue-500 h-3 w-3" containerClassName="inline-block mr-1" className="text-foreground">
                <span className="relative z-20">Private Investments</span>
              </PointerHighlight>
              {" "}with AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Centralize your data and deploy AI agents to automate critical tasks—so you never miss an opportunity or risk because of workplace slog
            </p>
          </div>

          {/* Features Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* AI CRM Column */}
            <div className="card-dark-premium text-center transition-all duration-500 hover:scale-[1.02] flex flex-col h-full">
              {/* Header Content - Fixed Height */}
              <div className="flex-shrink-0 px-8 pt-8 pb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/50 border border-border rounded-lg shadow-sm text-sm font-medium text-black mb-6">
                  <Database className="w-3 h-3 text-black" />
                  AI CRM
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Purpose built for Private Investments
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fully AI data backbone for all contacts, deals, files and insights—to eliminate silos and spreadsheets.
                </p>
              </div>
              
              {/* Mockup Content - Fixed Height */}
              <div className="flex-1 flex flex-col px-8 pb-8">
                <div className="card-nested p-4 text-left h-[280px] flex flex-col overflow-hidden mb-6 cursor-pointer hover:bg-muted/5 transition-all duration-300" onClick={() => setCrmModalOpen(true)}>
                  {/* Contact Header */}
                  <div className="flex items-center gap-3 mb-3 pb-2 border-b border-border/10 min-h-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                      SJ
                    </div>
                    <div className="flex-1 min-w-0 overflow-hidden">
                      <h4 className="font-semibold text-foreground text-xs truncate">Sarah Johnson</h4>
                      <p className="text-xs text-muted-foreground truncate">Managing Partner • Blackstone</p>
                    </div>
                    <div className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs flex-shrink-0">
                      Active
                    </div>
                  </div>
                  
                  {/* Investment Profile */}
                  <div className="space-y-2 mb-3 overflow-hidden">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">AUM:</span>
                      <span className="text-foreground font-medium">$2.4B</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Check Size:</span>
                      <span className="text-foreground">$50M-$200M</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Stage:</span>
                      <span className="text-foreground">Growth, Buyout</span>
                    </div>
                  </div>

                  {/* Asset Classes */}
                  <div className="mb-3 overflow-hidden">
                    <p className="text-xs font-medium text-muted-foreground mb-1.5">Asset Classes</p>
                    <div className="flex flex-wrap gap-1 overflow-hidden">
                      <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs whitespace-nowrap">Private Equity</span>
                      <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs whitespace-nowrap">Real Estate</span>
                      <span className="px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded text-xs whitespace-nowrap">Infrastructure</span>
                    </div>
                  </div>

                  {/* Investment Vehicles */}
                  <div className="mb-3 overflow-hidden">
                    <p className="text-xs font-medium text-muted-foreground mb-1.5">Investment Vehicles</p>
                    <div className="flex flex-wrap gap-1 overflow-hidden">
                      <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs whitespace-nowrap">Direct Investment</span>
                      <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs whitespace-nowrap">Fund of Funds</span>
                    </div>
                  </div>
                  
                  {/* Recent Activity */}
                  <div className="pt-2 border-t border-border/10 flex-1 overflow-hidden">
                    <p className="text-xs font-medium text-muted-foreground mb-1.5">Recent Activity</p>
                    <div className="space-y-1 overflow-hidden">
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-1 h-1 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-foreground truncate">Reviewed Series A deck</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-1 h-1 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-foreground truncate">Scheduled follow-up call</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Learn More Button - Always at bottom */}
                <div className="mt-auto">
                  <Button variant="outline" size="sm" className="w-full text-xs h-8" onClick={() => setCrmModalOpen(true)}>
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* AI Agents Column */}
            <div className="card-dark-premium text-center transition-all duration-500 hover:scale-[1.02] flex flex-col h-full">
              {/* Header Content - Fixed Height */}
              <div className="flex-shrink-0 px-8 pt-8 pb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/50 border border-border rounded-lg shadow-sm text-sm font-medium text-black mb-6">
                  <Bot className="w-3 h-3 text-black" />
                  AI Agents
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Deploy Pre-Built AI Agents in One Click
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Curated library of agents that work 24/7 for you to automate and scale your business.
                </p>
              </div>
              
              {/* Mockup Content - Fixed Height */}
              <div className="flex-1 flex flex-col px-8 pb-8">
                <div className="card-nested p-4 h-[280px] flex flex-col justify-center mb-6 cursor-pointer hover:bg-muted/5 transition-all duration-300" onClick={() => setAgentsModalOpen(true)}>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg text-center">
                      <div className="w-10 h-10 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div className="font-semibold text-foreground text-xs">Due Diligence</div>
                      <div className="text-muted-foreground text-xs mt-1">Portfolio Management</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg text-center">
                      <div className="w-10 h-10 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-white" />
                      </div>
                      <div className="font-semibold text-foreground text-xs">Fund Raising</div>
                      <div className="text-muted-foreground text-xs mt-1">LP Relations</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 p-4 rounded-lg text-center">
                      <div className="w-10 h-10 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <div className="font-semibold text-foreground text-xs">Deal Sourcing</div>
                      <div className="text-muted-foreground text-xs mt-1">Market Analysis</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-4 rounded-lg text-center">
                      <div className="w-10 h-10 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div className="font-semibold text-foreground text-xs">Automation</div>
                      <div className="text-muted-foreground text-xs mt-1">Workflow Builder</div>
                    </div>
                  </div>
                </div>
                
                {/* Learn More Button - Always at bottom */}
                <div className="mt-auto">
                  <Button variant="outline" size="sm" className="w-full text-xs h-8" onClick={() => setAgentsModalOpen(true)}>
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* IRIS Column */}
            <div className="card-dark-premium text-center transition-all duration-500 hover:scale-[1.02] flex flex-col h-full">
              {/* Header Content - Fixed Height */}
              <div className="flex-shrink-0 px-8 pt-8 pb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/50 border border-border rounded-lg shadow-sm text-sm font-medium text-black mb-6">
                  <MessageCircle className="w-3 h-3 text-black" />
                  IRIS
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Conversational AI in your CRM
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Talk to IRIS—generate memos, run analyses or pull up any deal data in seconds.
                </p>
              </div>
              
              {/* Mockup Content - Fixed Height */}
              <div className="flex-1 flex flex-col px-8 pb-8">
                <div className="card-nested p-4 text-left h-[280px] flex flex-col justify-center mb-6 cursor-pointer hover:bg-muted/5 transition-all duration-300" onClick={() => setIrisModalOpen(true)}>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">I</div>
                      <div className="flex-1 bg-muted/50 rounded-lg p-3 text-xs text-muted-foreground">
                        Hello! I'm IRIS, your AI assistant. How can I help you today?
                      </div>
                    </div>
                    <div className="flex gap-3 justify-end">
                      <div className="bg-primary/10 rounded-lg p-3 text-xs text-foreground max-w-[200px]">
                        Show me the top 5 deals by value this quarter
                      </div>
                      <div className="w-8 h-8 bg-muted rounded-full"></div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">I</div>
                      <div className="flex-1 bg-muted/50 rounded-lg p-3 text-xs text-muted-foreground">
                        Here are your top 5 deals this quarter by transaction value...
                      </div>
                    </div>
                    <div className="flex gap-3 justify-end">
                      <div className="bg-primary/10 rounded-lg p-3 text-xs text-foreground max-w-[180px]">
                        Generate investment memo for TechCorp
                      </div>
                      <div className="w-8 h-8 bg-muted rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Learn More Button - Always at bottom */}
                <div className="mt-auto">
                  <Button variant="outline" size="sm" className="w-full text-xs h-8" onClick={() => setIrisModalOpen(true)}>
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
          
      
      {/* Footer */}
      <Footer />
      
      {/* AI CRM Modal */}
      <Dialog open={crmModalOpen} onOpenChange={setCrmModalOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Database className="w-5 h-5 text-white" />
              </div>
              AI CRM for Private Investments
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Purpose-built CRM for private markets with unified data and AI-powered insights.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Profile Demo */}
            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Live Profile Example</h3>
              <div className="bg-background rounded-lg border p-6 space-y-6">
                {/* Header */}
                <div className="flex items-start gap-4 pb-4 border-b">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    CFA
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold text-foreground">Central Family Advisors</h4>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-sm font-medium">
                        Active
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-2">Family Office • Diversified Investor</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>contact@centralfamilyadvisors.com</span>
                      <span>•</span>
                      <span>AUM: $579.18M</span>
                    </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Investment Profile */}
                  <div className="space-y-4">
                    <h5 className="font-semibold text-foreground">Investment Profile</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Total AUM:</span>
                        <span className="text-foreground font-medium">$579.18M</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Investor Type:</span>
                        <span className="text-foreground">Family Office</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Profile Type:</span>
                        <span className="text-foreground">Investor</span>
                      </div>
                    </div>
                    
                    <div className="pt-3 border-t border-border/20">
                      <p className="text-sm font-medium text-muted-foreground mb-2">Preferred Asset Classes</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">Buyout</span>
                        <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs">Private Equity</span>
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs">Growth/Expansion</span>
                        <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded text-xs">VC Early Stage</span>
                        <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded text-xs">VC Later Stage</span>
                      </div>
                    </div>
                  </div>

                  {/* Geographic & Preferences */}
                  <div className="space-y-4">
                    <h5 className="font-semibold text-foreground">Geographic & Preferences</h5>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-2">Geographic Focus</p>
                        <div className="flex flex-wrap gap-1">
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs">Global</span>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs">Americas</span>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs">Europe</span>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs">Asia</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Co-Investment:</span>
                          <span className="text-red-600 dark:text-red-400">No</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Tax Incentives:</span>
                          <span className="text-red-600 dark:text-red-400">No</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Market Recs:</span>
                          <span className="text-red-600 dark:text-red-400">No</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-medium">Contact Management</p>
                    <p className="text-sm text-muted-foreground">Comprehensive contact and company profiles with detailed investment preferences</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-medium">AI Bulk Uploads</p>
                    <p className="text-sm text-muted-foreground">Intelligent data extraction from CSVs, and documents</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-medium">Lists and Tasks Auto Maintained Using AI</p>
                    <p className="text-sm text-muted-foreground">Smart task creation and list management based on deal flow</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-medium">AI Notetaker</p>
                    <p className="text-sm text-muted-foreground">Automatically fills meeting data and updates contact profiles from meeting recordings and notes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-medium">Files Management & Cloud Integration</p>
                    <p className="text-sm text-muted-foreground">Seamless integration with cloud storage and document management for a 360 degree view of your business.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-medium">Advanced Analytics</p>
                    <p className="text-sm text-muted-foreground">Real-time insights and performance tracking across your portfolio and teams.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="flex gap-4 pt-4 border-t">
              <Button size="lg" className="flex-1">
                <Play className="w-4 h-4 mr-2" />
                Try CRM Free
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Schedule Demo
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* AI Agents Library Modal */}
      <Dialog open={agentsModalOpen} onOpenChange={setAgentsModalOpen}>
        <DialogContent className="max-w-7xl max-h-[90vh] overflow-hidden">
          <DialogHeader className="pb-6">
            <DialogTitle className="text-2xl font-bold flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              AI Agents Library
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Specialized AI agents pre-trained for private market investments
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-muted-foreground leading-relaxed">
                Nvestiv's AI Agents are intelligent assistants that understand your business context and investment mandates. 
                Each agent has been pre-trained on private alternatives data and industry best practices, enabling them to 
                analyze opportunities through the lens of your specific investment strategy and risk parameters.
              </p>
            </div>
            
            {/* Two-column layout */}
            <div className="flex gap-6 h-[500px]">
              {/* Sidebar - 20% */}
              <div className="w-1/5 bg-muted/30 rounded-lg p-4">
                <h3 className="font-semibold mb-3 text-sm">Categories</h3>
                <nav className="space-y-1">
                  <button className="w-full text-left px-3 py-2 text-sm font-medium bg-primary/10 text-primary rounded-md transition-colors">
                    Family Offices
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md transition-colors">
                    Institutional Investors
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md transition-colors">
                    Real Estate Funds
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md transition-colors">
                    Venture Capital
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md transition-colors">
                    Private Equity
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md transition-colors">
                    Private Credit
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md transition-colors">
                    Hedge Funds & Alternatives
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md transition-colors">
                    Wealth Managers
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md transition-colors">
                    Investment Bankers
                  </button>
                </nav>
              </div>
              
              {/* Main content - 80% - Scrollable */}
              <div className="flex-1 overflow-y-auto pr-2">
                <div className="space-y-8">
                  
                  {/* Family Offices */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold">Family Offices</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Portfolio Management Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Consolidates holdings across accounts to deliver a real-time snapshot of performance and exposures.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Succession Planning Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Models wealth transfer strategies and tax impacts for multi-generational planning.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Risk Analyst Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Scans portfolios against market, macro, and concentration risks with proactive alerts.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border border-purple-200 dark:border-purple-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Co-Investment Screener Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Sources and evaluates direct deal opportunities alongside other families.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 border border-teal-200 dark:border-teal-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Investor Reporting Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Automates quarterly reporting packages tailored for family principals and trustees.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Institutional Investors */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold">Institutional Investors</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Mandate Fit Screener Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Evaluates incoming deals against mandate rules and IPS criteria.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Regulatory Compliance Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Monitors portfolios for evolving pension, SEC, and global regulations.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border border-purple-200 dark:border-purple-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Asset Allocation Optimizer Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Suggests allocation shifts based on models, benchmarks, and risk targets.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border border-orange-200 dark:border-orange-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Stress Testing Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Runs scenario analyses across economic downturns, rate changes, and shocks.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">ESG Scoring Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Scores assets on ESG metrics and integrates with sustainability frameworks.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Real Estate Funds */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold">Real Estate Funds</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Deal Underwriting Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Automates property underwriting with income, expense, and comps analysis.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 border border-teal-200 dark:border-teal-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Market Area Analysis Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Uses Google Maps and datasets to evaluate neighborhood drivers and risks.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Lease & Cashflow Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Projects lease rollovers, rent escalations, and stabilized NOI.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Construction Risk Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Flags permitting, budget, and contractor risks during development.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Exit Scenario Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Models multiple sale and refinance exit strategies with projected returns.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Venture Capital */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold">Venture Capital</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 border border-violet-200 dark:border-violet-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-violet-700 dark:text-violet-300 mb-2">Startup Screening Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Scores startups on team, traction, market, and financials.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Founder Background Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Surfaces founder track record, experience, and credibility.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 border border-cyan-200 dark:border-cyan-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">Cap Table Analyzer Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Reviews ownership structures, dilution, and investor alignment.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">Growth Metrics Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Analyzes revenue, user growth, retention, and customer metrics.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 border border-rose-200 dark:border-rose-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-rose-700 dark:text-rose-300 mb-2">Exit Mapping Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Identifies potential acquirers and IPO scenarios for portfolio companies.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Private Equity */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-slate-500 to-gray-600 rounded-lg flex items-center justify-center">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold">Private Equity</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20 border border-slate-200 dark:border-slate-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Buyout Due Diligence Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Automates diligence across financials, contracts, and market position.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">LBO Model Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Builds leveraged buyout models with debt and return scenarios.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border border-purple-200 dark:border-purple-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Fund Terms Analyzer Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Reviews GP/LP terms, fees, and waterfall structures.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Debt Structure Optimizer Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Suggests optimal financing mix for acquisitions.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border border-orange-200 dark:border-orange-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Co-Investor Alignment Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Assesses deal alignment and syndication opportunities.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Private Credit */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-rose-600 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold">Private Credit</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 border border-red-200 dark:border-red-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Credit Underwriter Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Scores borrowers using cash flows, collateral, and covenants.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Covenant Monitoring Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Tracks covenant compliance across loan portfolios.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 border border-teal-200 dark:border-teal-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Collateral Valuation Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Estimates collateral liquidation and recovery values.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border border-purple-200 dark:border-purple-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Default Probability Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Projects default risk under base and stress scenarios.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Loan Portfolio Diversification Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Recommends allocations to balance credit exposures.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hedge Funds & Alternatives */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold">Hedge Funds & Alternatives</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 border border-pink-200 dark:border-pink-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-2">Macro Risk Analyst Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Monitors global markets, rates, and commodities for risk signals.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 border border-cyan-200 dark:border-cyan-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">Quant Signal Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Generates alpha signals from structured and alternative datasets.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 border border-violet-200 dark:border-violet-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-violet-700 dark:text-violet-300 mb-2">Derivative Hedging Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Structures options and futures strategies to protect downside.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Cross-Asset Arbitrage Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Identifies arbitrage opportunities across equities, credit, and FX.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">Investor Relations Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Prepares tailored updates, decks, and letters for LPs.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Wealth Managers */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold">Wealth Managers</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">Client Mandate Builder Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Extracts client goals and builds customized investment policies.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Portfolio Rebalancer Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Suggests timely rebalancing to keep client portfolios aligned with targets.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border border-purple-200 dark:border-purple-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Financial Planning Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Integrates income, expenses, taxes, and insurance into holistic plans.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Product Matching Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Matches clients with funds, SMAs, or alternatives suited to their profile.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 border border-teal-200 dark:border-teal-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Client Reporting Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Generates white-labeled performance and planning reports.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Investment Bankers / Advisors */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold">Investment Bankers / Advisors</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Sell-Side Deal Preparation Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Structures CIMs, teasers, and data rooms for companies going to market.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Valuation & Modeling Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Builds comps, precedent transaction, and DCF analyses.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 border border-violet-200 dark:border-violet-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-violet-700 dark:text-violet-300 mb-2">Investor Targeting Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Identifies and ranks likely acquirers or capital providers.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 border border-rose-200 dark:border-rose-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-rose-700 dark:text-rose-300 mb-2">Due Diligence Agent</h4>
                        <p className="text-sm text-muted-foreground">
                          Coordinates and flags red flags across buyer/seller diligence processes.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border border-amber-200 dark:border-amber-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                        <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Placement Agent Assistant</h4>
                        <p className="text-sm text-muted-foreground">
                          Personalizes outreach campaigns and tracks investor engagement.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-4 pt-6 border-t">
              <Button size="lg" className="flex-1">
                <Bot className="w-4 h-4 mr-2" />
                Deploy Agents
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* IRIS Modal */}
      <Dialog open={irisModalOpen} onOpenChange={setIrisModalOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              IRIS AI Assistant
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Conversational AI that understands private markets and instantly accesses your deal data.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Chat Demo */}
            <div className="bg-muted/30 rounded-lg p-4">
              <div className="bg-background rounded-lg p-4 border space-y-3 h-48 overflow-y-auto">
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">I</div>
                  <div className="flex-1 bg-muted/50 rounded-lg p-2 text-xs">
                    Hello! I can analyze deals, generate reports, and answer questions about your portfolio.
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-primary/10 rounded-lg p-2 text-xs max-w-xs">
                    Show me top 5 Series B deals over $20M this quarter
                  </div>
                  <div className="w-6 h-6 bg-muted rounded-full"></div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">I</div>
                  <div className="flex-1 bg-muted/50 rounded-lg p-2 text-xs">
                    Found 5 deals: TechCorp ($35M), HealthTech ($28M), FinanceAI ($45M)...
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-primary/10 rounded-lg p-2 text-xs max-w-xs">
                    Generate investment memo for TechCorp
                  </div>
                  <div className="w-6 h-6 bg-muted rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Capabilities */}
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-sm">Document Generation</h3>
                <p className="text-xs text-muted-foreground">Instant memos & reports</p>
              </div>
              
              <div>
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <BarChart3 className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-semibold text-sm">Data Analysis</h3>
                <p className="text-xs text-muted-foreground">Query entire database</p>
              </div>
              
              <div>
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Calendar className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-semibold text-sm">Task Automation</h3>
                <p className="text-xs text-muted-foreground">Schedule & manage</p>
              </div>
            </div>
            
            {/* CTA */}
            <div className="flex gap-4 pt-4 border-t">
              <Button size="lg" className="flex-1">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat with IRIS
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Watch Demo
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>;
};
export default HomePage;