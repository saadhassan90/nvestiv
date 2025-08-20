import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AsSeenOnCarousel from "@/components/AsSeenOnCarousel";
import { GridBackground } from "@/components/GridBackground";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Button } from "@/components/ui/button";
import { Users, Play, Sparkles as SparklesIcon, CheckCircle } from "lucide-react";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
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

  return (
    <div className="min-h-screen relative">
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
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
                          <span className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                            Private Investments AI for
                          </span>
                        </h1>
                      </div>
                      
                      {/* Typewriter Container */}
                      <div className="w-full">
                        <div className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                          <span className="bg-gradient-to-r from-[#2B32B2] to-[#1488CC] bg-clip-text text-transparent">
                            {currentText}
                          </span>
                          {showCursor && <span className="animate-pulse text-gray-600 ml-1">|</span>}
                        </div>
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
                
                {/* 3D Card */}
                <div className="w-full">
                  <ThreeDCardDemo />
                </div>
                
              </div>
              
            </section>
            
          </div>
        </div>
      </main>
      
      {/* As Seen On Carousel - Separate Section */}
      <section className="py-16 bg-gray-50 dark:bg-background/50">
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
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted rounded-full text-sm font-medium text-muted-foreground mb-4">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
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
            <div className="card-dark-premium text-center transition-all duration-500 hover:scale-[1.02]">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-full text-sm font-medium text-muted-foreground mb-6">
                <div className="w-2 h-2 bg-foreground rounded-full"></div>
                AI CRM
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Purpose built for Private Investments
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Fully AI data backbone for all contacts, deals, files and insights—to eliminate silos and spreadsheets.
              </p>
              
              {/* Enhanced CRM Contact Profile Mockup */}
              <div className="card-nested p-4 text-left">
                {/* Contact Header */}
                <div className="flex items-center gap-3 mb-3 pb-2 border-b border-border/10">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                    SJ
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground text-xs">Sarah Johnson</h4>
                    <p className="text-xs text-muted-foreground truncate">Managing Partner • Blackstone Capital</p>
                  </div>
                  <div className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs">
                    Active
                  </div>
                </div>
                
                {/* Investment Profile */}
                <div className="space-y-2 mb-3">
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
                <div className="mb-3">
                  <p className="text-xs font-medium text-muted-foreground mb-1.5">Asset Classes</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">Private Equity</span>
                    <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs">Real Estate</span>
                    <span className="px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded text-xs">Infrastructure</span>
                  </div>
                </div>

                {/* Investment Vehicles */}
                <div className="mb-3">
                  <p className="text-xs font-medium text-muted-foreground mb-1.5">Investment Vehicles</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs">Direct Investment</span>
                    <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs">Fund of Funds</span>
                  </div>
                </div>
                
                {/* Recent Activity */}
                <div className="pt-2 border-t border-border/10">
                  <p className="text-xs font-medium text-muted-foreground mb-1.5">Recent Activity</p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                      <span className="text-foreground">Reviewed Series A deck</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                      <span className="text-foreground">Scheduled follow-up call</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Learn More Button */}
              <div className="mt-6">
                <Button variant="ghost" size="sm" className="w-full text-xs h-8">
                  Learn More
                </Button>
              </div>
            </div>

            {/* AI Agents Column */}
            <div className="card-dark-premium text-center transition-all duration-500 hover:scale-[1.02]">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-full text-sm font-medium text-muted-foreground mb-6">
                <div className="w-2 h-2 bg-foreground rounded-full"></div>
                AI Agents
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Deploy Pre-Built AI Agents in One Click
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Curated library of agents that work 24/7 for you to automate and scale your business.
              </p>
              
              {/* Agents Preview Mockup */}
              <div className="card-nested p-4">
                <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-3 rounded-lg text-center">
                    <div className="w-6 h-6 bg-blue-500 rounded-full mx-auto mb-1"></div>
                    <div className="font-semibold text-foreground text-xs">Due Diligence</div>
                    <div className="text-muted-foreground text-xs mt-0.5">Portfolio Management</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-3 rounded-lg text-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full mx-auto mb-1"></div>
                    <div className="font-semibold text-foreground text-xs">Risk Analysis</div>
                    <div className="text-muted-foreground text-xs mt-0.5">Capital Raising</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 p-3 rounded-lg text-center">
                    <div className="w-6 h-6 bg-purple-500 rounded-full mx-auto mb-1"></div>
                    <div className="font-semibold text-foreground text-xs">Market Research</div>
                    <div className="text-muted-foreground text-xs mt-0.5">Deal Sourcing</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-3 rounded-lg text-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full mx-auto mb-1"></div>
                    <div className="font-semibold text-foreground text-xs">Compliance</div>
                    <div className="text-muted-foreground text-xs mt-0.5">Reporting</div>
                  </div>
                </div>
              </div>
              
              {/* Learn More Button */}
              <div className="mt-6">
                <Button variant="ghost" size="sm" className="w-full text-xs h-8">
                  Learn More
                </Button>
              </div>
            </div>

            {/* IRIS Column */}
            <div className="card-dark-premium text-center transition-all duration-500 hover:scale-[1.02]">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-full text-sm font-medium text-muted-foreground mb-6">
                <div className="w-2 h-2 bg-foreground rounded-full"></div>
                IRIS
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Conversational AI in your CRM
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Talk to IRIS—generate memos, run analyses or pull up any deal data in seconds.
              </p>
              
              {/* IRIS Chat Preview Mockup */}
              <div className="card-nested p-4 text-left mb-4">
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">I</div>
                    <div className="flex-1 bg-muted/50 rounded-lg p-2 text-xs text-muted-foreground">
                      Hello! I'm IRIS, your AI assistant. How can I help you today?
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <div className="bg-primary/10 rounded-lg p-2 text-xs text-foreground max-w-xs">
                      Show me the top 5 deals by value this quarter
                    </div>
                    <div className="w-5 h-5 bg-muted rounded-full"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">I</div>
                    <div className="flex-1 bg-muted/50 rounded-lg p-2 text-xs text-muted-foreground">
                      Here are your top 5 deals this quarter by transaction value...
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Learn More Button */}
              <div className="mt-6">
                <Button variant="ghost" size="sm" className="w-full text-xs h-8">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
          
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;