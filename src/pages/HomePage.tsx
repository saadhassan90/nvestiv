import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AsSeenOnCarousel from "@/components/AsSeenOnCarousel";
import { GridBackground } from "@/components/GridBackground";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Button } from "@/components/ui/button";
import { Users, Play, Sparkles as SparklesIcon, CheckCircle, Eye, Database, Bot, MessageCircle } from "lucide-react";
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
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight" style={{ fontWeight: 900 }}>
                          <span className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                            <PointerHighlight
                              rectangleClassName="bg-gradient-to-r from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/20 border border-blue-200 dark:border-blue-700 leading-loose"
                              pointerClassName="text-blue-500 h-3 w-3"
                              containerClassName="inline-block mr-1"
                            >
                              <span className="relative z-10">AI Operating System</span>
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
              Unlock Private Investments with AI
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
                <div className="card-nested p-4 text-left h-[280px] flex flex-col overflow-hidden mb-6">
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
                  <Button variant="outline" size="sm" className="w-full text-xs h-8">
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
                <div className="card-nested p-4 h-[280px] flex flex-col justify-center mb-6">
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
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div className="font-semibold text-foreground text-xs">Risk Analysis</div>
                      <div className="text-muted-foreground text-xs mt-1">Capital Raising</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 p-4 rounded-lg text-center">
                      <div className="w-10 h-10 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <SparklesIcon className="w-5 h-5 text-white" />
                      </div>
                      <div className="font-semibold text-foreground text-xs">Market Research</div>
                      <div className="text-muted-foreground text-xs mt-1">Deal Sourcing</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-4 rounded-lg text-center">
                      <div className="w-10 h-10 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Play className="w-5 h-5 text-white" />
                      </div>
                      <div className="font-semibold text-foreground text-xs">Compliance</div>
                      <div className="text-muted-foreground text-xs mt-1">Reporting</div>
                    </div>
                  </div>
                </div>
                
                {/* Learn More Button - Always at bottom */}
                <div className="mt-auto">
                  <Button variant="outline" size="sm" className="w-full text-xs h-8">
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
                <div className="card-nested p-4 text-left h-[280px] flex flex-col justify-center mb-6">
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
                  <Button variant="outline" size="sm" className="w-full text-xs h-8">
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
    </div>;
};
export default HomePage;