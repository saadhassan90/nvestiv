import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Database, Bot, Sparkles as SparklesIcon, Search, ArrowRight, ChevronDown, FolderOpen, Grid3X3, Settings, Users, FileText, Zap, Circle, TrendingUp, Plus, Folder, Link, Cpu, Calendar, LogIn, Plug, Play, BarChart3, Mail, AlertTriangle, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoBackground } from "@/components/VideoBackground";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import { seoPages } from "@/lib/seo-config";
import irisCharacter from "@/assets/iris-character.png";
import { ListeningWaveform } from "@/components/ListeningWaveform";
import { GoogleDriveInterface } from "@/components/GoogleDriveInterface";
import { Integrations3DMarquee } from "@/components/Integrations3DMarquee";
const HomePage = () => {
  console.log("HomePage component is rendering");
  const [crmModalOpen, setCrmModalOpen] = useState(false);
  const [agentsModalOpen, setAgentsModalOpen] = useState(false);
  const [irisModalOpen, setIrisModalOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
            video.currentTime = 0; // Reset to beginning when out of view
          }
        });
      },
      { threshold: 0.5 } // Play when 50% of video is visible
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);
  return <div className="min-h-screen bg-transparent">
      <SEOHead {...seoPages.home} />
      <Navigation />
      
      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto mt-24 px-4">
        {/* Hero Section */}
        <VideoBackground videoUrl="https://cdn.midjourney.com/video/59ad271f-d702-49b6-b74f-ee4f4d2e5e86/3.mp4" className="w-full h-[700px] rounded-3xl my-4 flex items-center justify-center">
          <section className="w-full px-8" aria-labelledby="hero-heading">
            
            {/* Request early access button */}
            <div className="absolute top-8 left-8 z-10">
              
            </div>

            <div className="w-full max-w-6xl mx-auto text-center space-y-8 flex flex-col justify-center h-full relative z-10">
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
            <div className="max-w-2xl mx-auto">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </div>

            {/* AI Chat Interface */}
            <div className="w-full mx-auto">
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                {/* Input Area - Full Width at Top */}
                <div className="p-4">
                  <textarea placeholder="Ask IRIS anything about private investments..." className="w-full bg-transparent text-white placeholder:text-white/50 text-sm focus:outline-none resize-none min-h-[60px] max-h-[200px] py-3 px-3 overflow-y-auto" rows={2} />
                </div>

                {/* Bottom Row - Side by Side Containers */}
                <div className="flex items-center justify-between px-6 pb-4">
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
        </VideoBackground>

        {/* Companies Marquee Section */}
        <section className="w-full py-6 overflow-hidden rounded-3xl mb-4">
          <div className="w-full px-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Trusted by Leading Investment Firms
              </h3>
              
            </div>
            
            <div className="relative">
              <div className="flex animate-marquee space-x-16">
                {/* First set of companies */}
                <div className="flex items-center space-x-4 min-w-max">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground font-bold text-lg">KKR</span>
                  </div>
                  <span className="text-foreground font-medium whitespace-nowrap">KKR & Co</span>
                </div>
                
                <div className="flex items-center space-x-4 min-w-max">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground font-bold text-lg">TPG</span>
                  </div>
                  <span className="text-foreground font-medium whitespace-nowrap">TPG Capital</span>
                </div>
                
                <div className="flex items-center space-x-4 min-w-max">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground font-bold text-lg">CVC</span>
                  </div>
                  <span className="text-foreground font-medium whitespace-nowrap">CVC Capital</span>
                </div>
                
                <div className="flex items-center space-x-4 min-w-max">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground font-bold text-lg">BC</span>
                  </div>
                  <span className="text-foreground font-medium whitespace-nowrap">Bain Capital</span>
                </div>
                
                <div className="flex items-center space-x-4 min-w-max">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground font-bold text-lg">A16Z</span>
                  </div>
                  <span className="text-foreground font-medium whitespace-nowrap">Andreessen Horowitz</span>
                </div>
                
                <div className="flex items-center space-x-4 min-w-max">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground font-bold text-lg">SV</span>
                  </div>
                  <span className="text-foreground font-medium whitespace-nowrap">Sequoia Capital</span>
                </div>
                
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center space-x-4 min-w-max">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground font-bold text-lg">KKR</span>
                  </div>
                  <span className="text-foreground font-medium whitespace-nowrap">KKR & Co</span>
                </div>
                
                <div className="flex items-center space-x-4 min-w-max">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground font-bold text-lg">TPG</span>
                  </div>
                  <span className="text-foreground font-medium whitespace-nowrap">TPG Capital</span>
                </div>
                
                <div className="flex items-center space-x-4 min-w-max">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground font-bold text-lg">CVC</span>
                  </div>
                  <span className="text-foreground font-medium whitespace-nowrap">CVC Capital</span>
                </div>
                
                <div className="flex items-center space-x-4 min-w-max">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground font-bold text-lg">BC</span>
                  </div>
                  <span className="text-foreground font-medium whitespace-nowrap">Bain Capital</span>
                </div>
                
                <div className="flex items-center space-x-4 min-w-max">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground font-bold text-lg">A16Z</span>
                  </div>
                  <span className="text-foreground font-medium whitespace-nowrap">Andreessen Horowitz</span>
                </div>
                
                <div className="flex items-center space-x-4 min-w-max">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground font-bold text-lg">SV</span>
                  </div>
                  <span className="text-foreground font-medium whitespace-nowrap">Sequoia Capital</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Features Section */}
        <section className="w-full py-16" aria-labelledby="features-heading">
          <div className="">
            {/* Section Label */}
            <div className="flex justify-center mb-6">
              <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3137fd] from-0% via-[#3137fd] via-70% to-[#3137fd]/10 to-100% p-[1px]">
                  <div className="h-full w-full rounded-full bg-muted"></div>
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

            <Tabs defaultValue="ai-crm" className="w-full">
              <TabsContent value="ai-crm" className="mt-0">
                <Card className="border border-border shadow-lg bg-card">
                  <div className="p-6">
                    <TabsList className="grid w-full grid-cols-4 mb-6">
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
                        <Plug className="w-4 h-4" />
                        <span className="hidden sm:inline">Integrations</span>
                      </TabsTrigger>
                    </TabsList>
                  
                     <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                          <div className="space-y-6 flex flex-col justify-between border border-border rounded-xl p-6 h-full min-h-[500px]">
                        <div>
                          <h3 className="h3 mb-4 text-card-heading">The CRM That Updates Itself</h3>
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
                          
                          <Button variant="default" asChild>
                            <a href="/ai-crm" className="text-white no-underline flex items-center gap-2">
                              <BookOpen className="h-4 w-4" />
                              Learn More
                            </a>
                          </Button>
                        </div>
                      </div>
                      <div className="lg:pl-8">
                        <div className="relative rounded-2xl">
                          <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-cyan-500 rounded-[18px] blur-md opacity-15"></div>
                           <div className="relative z-10 bg-card rounded-2xl p-6 h-[700px] flex flex-col shadow-none">
                          
                          {/* Chat History Container */}
                          <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
                            {/* User Message */}
                            <div className="flex justify-end gap-2">
                              <div className="flex flex-col items-end max-w-[80%]">
                                <div className="flex items-center gap-2 mb-1">
                                   <span className="text-xs text-muted-foreground">12:34 PM</span>
                                   <span className="text-xs font-medium text-foreground">You</span>
                                   <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                     <span className="text-primary-foreground font-medium text-xs">Y</span>
                                   </div>
                                 </div>
                                 <div className="bg-primary text-primary-foreground rounded-2xl px-4 py-2">
                                   <p className="text-sm text-primary-foreground">Who do I know that looks at healthcare rollups in Florida?</p>
                                </div>
                              </div>
                            </div>
                            
                            {/* IRIS Response */}
                            <div className="flex justify-start gap-2">
                              <div className="flex flex-col items-start max-w-[85%]">
                                <div className="flex items-center gap-2 mb-1">
                                   <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center">
                                     <span className="text-muted-foreground font-medium text-xs">I</span>
                                   </div>
                                   <span className="text-xs font-medium text-foreground">IRIS</span>
                                   <span className="text-xs text-muted-foreground">12:34 PM</span>
                                 </div>
                                 <div className="bg-muted rounded-2xl px-4 py-2">
                                   <p className="text-sm text-foreground">Searched the CRM and found Jason Ozler, who told you in 2024 that he likes to invest in US healthcare PE strategies.</p>
                                   <p className="text-sm text-foreground mt-2 font-medium">Want me to email him requesting a meeting?</p>
                                </div>
                              </div>
                            </div>
                            
                             {/* Contact Card */}
                             <div className="flex justify-start">
                                <div className="bg-gradient-to-br from-muted to-accent/30 border border-border rounded-lg p-2.5 max-w-[85%] shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-center gap-2.5">
                                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-sm">
                                      <span className="text-primary-foreground font-semibold text-xs">JO</span>
                                    </div>
                                    <div className="flex-1 min-w-0 space-y-0.5">
                                      <h4 className="font-semibold text-sm text-foreground truncate leading-none">Jason Ozler</h4>
                                      <p className="text-xs text-primary font-medium truncate leading-none">Partner @ Florida Health Ventures</p>
                                      <p className="text-xs text-muted-foreground leading-none">Last contact: March 2024</p>
                                    </div>
                                  </div>
                                  <div className="mt-2 pt-2 border-t border-border">
                                    <p className="text-xs text-muted-foreground italic leading-tight">"Looking for healthcare PE opportunities in Southeast US markets"</p>
                                 </div>
                               </div>
                             </div>

                             {/* User Message - Enrich */}
                             <div className="flex justify-end gap-2">
                               <div className="flex flex-col items-end max-w-[80%]">
                                 <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs text-muted-foreground">12:35 PM</span>
                                    <span className="text-xs font-medium text-foreground">You</span>
                                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                      <span className="text-primary-foreground font-medium text-xs">Y</span>
                                    </div>
                                  </div>
                                  <div className="bg-primary text-primary-foreground rounded-2xl px-4 py-2">
                                    <p className="text-sm text-primary-foreground">Can you enrich what we know about Jason first?</p>
                                 </div>
                               </div>
                             </div>

                             {/* IRIS Response - Searching */}
                             <div className="flex justify-start gap-2">
                               <div className="flex flex-col items-start max-w-[85%]">
                                 <div className="flex items-center gap-2 mb-1">
                                    <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center">
                                      <span className="text-muted-foreground font-medium text-xs">I</span>
                                    </div>
                                    <span className="text-xs font-medium text-foreground">IRIS</span>
                                    <span className="text-xs text-muted-foreground">12:35 PM</span>
                                  </div>
                                  <div className="bg-muted/50 border border-dashed border-muted-foreground/30 rounded-2xl px-4 py-2">
                                    <div className="flex items-center gap-2">
                                      <Search className="w-3 h-3 text-muted-foreground animate-pulse" />
                                      <p className="text-sm text-muted-foreground italic">Searching PitchBook and web sources for Jason Ozler...</p>
                                    </div>
                                 </div>
                               </div>
                             </div>

                             {/* IRIS Response - Found Information */}
                             <div className="flex justify-start gap-2">
                               <div className="flex flex-col items-start max-w-[85%]">
                                 <div className="flex items-center gap-2 mb-1">
                                    <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center">
                                      <span className="text-muted-foreground font-medium text-xs">I</span>
                                    </div>
                                    <span className="text-xs font-medium text-foreground">IRIS</span>
                                    <span className="text-xs text-muted-foreground">12:35 PM</span>
                                  </div>
                                  <div className="bg-muted rounded-2xl px-4 py-2">
                                    <p className="text-sm text-foreground mb-2 font-medium">Found updated information! Here's what I discovered:</p>
                                    
                                    <div className="space-y-3">
                                      <div>
                                        <p className="text-sm text-foreground font-medium mb-1">From PitchBook:</p>
                                        <ul className="text-xs text-muted-foreground space-y-1 ml-2">
                                          <li>• Recently promoted to Managing Partner (Aug 2024)</li>
                                          <li>• Led 3 healthcare deals in past 6 months totaling $47M</li>
                                          <li>• Focus: ASC rollups, urgent care platforms, behavioral health</li>
                                          <li>• Active in Tampa Bay & Miami markets</li>
                                        </ul>
                                      </div>
                                      
                                      <div>
                                        <p className="text-sm text-foreground font-medium mb-1">From web search:</p>
                                        <ul className="text-xs text-muted-foreground space-y-1 ml-2">
                                          <li>• Speaking at HealthTech Summit Miami - Oct 15</li>
                                          <li>• Recent article in PE Hub about value-based care trends</li>
                                          <li>• Sits on board of 2 portfolio companies in South Florida</li>
                                        </ul>
                                      </div>
                                    </div>
                                    
                                    <p className="text-sm text-foreground mt-3 font-medium">I've updated Jason's CRM profile with all this intel. His investment thesis aligns well with your current pipeline.</p>
                                 </div>
                               </div>
                             </div>

                             {/* User Message - Miami Meeting */}
                             <div className="flex justify-end gap-2">
                               <div className="flex flex-col items-end max-w-[80%]">
                                 <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs text-muted-foreground">12:36 PM</span>
                                    <span className="text-xs font-medium text-foreground">You</span>
                                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                      <span className="text-primary-foreground font-medium text-xs">Y</span>
                                    </div>
                                  </div>
                                  <div className="bg-primary text-primary-foreground rounded-2xl px-4 py-2">
                                    <p className="text-sm text-primary-foreground">I'm going to Miami Sept 30 for 2 days and need a meeting with Jason</p>
                                 </div>
                               </div>
                             </div>

                             {/* IRIS Response - Calendar Check */}
                             <div className="flex justify-start gap-2">
                               <div className="flex flex-col items-start max-w-[85%]">
                                 <div className="flex items-center gap-2 mb-1">
                                    <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center">
                                      <span className="text-muted-foreground font-medium text-xs">I</span>
                                    </div>
                                    <span className="text-xs font-medium text-foreground">IRIS</span>
                                    <span className="text-xs text-muted-foreground">12:36 PM</span>
                                  </div>
                                   <div className="bg-muted rounded-2xl px-4 py-2">
                                     <div className="flex items-center gap-2 px-3 py-2 mb-2 bg-muted/50 border border-dashed border-primary/30 rounded-lg">
                                       <Calendar className="w-4 h-4 text-primary animate-pulse" />
                                       <p className="text-sm text-muted-foreground italic">Checking your calendar for Sept 30 - Oct 1...</p>
                                     </div>
                                    <p className="text-sm text-foreground mb-2">Your calendar is pretty full, but you're free the afternoon of Oct 1st. I'd recommend 2:30 PM - that gives you buffer time from your lunch meeting.</p>
                                    <p className="text-sm text-foreground font-medium">Should I send an email to Jason requesting a meeting?</p>
                                 </div>
                               </div>
                             </div>

                             {/* User Message - Yes */}
                             <div className="flex justify-end gap-2">
                               <div className="flex flex-col items-end max-w-[80%]">
                                 <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs text-muted-foreground">12:36 PM</span>
                                    <span className="text-xs font-medium text-foreground">You</span>
                                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                      <span className="text-primary-foreground font-medium text-xs">Y</span>
                                    </div>
                                  </div>
                                  <div className="bg-primary text-primary-foreground rounded-2xl px-4 py-2">
                                    <p className="text-sm text-primary-foreground">Yes</p>
                                 </div>
                               </div>
                             </div>

                             {/* IRIS Response - Email Sent */}
                             <div className="flex justify-start gap-2">
                               <div className="flex flex-col items-start max-w-[85%]">
                                 <div className="flex items-center gap-2 mb-1">
                                    <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center">
                                      <span className="text-muted-foreground font-medium text-xs">I</span>
                                    </div>
                                    <span className="text-xs font-medium text-foreground">IRIS</span>
                                    <span className="text-xs text-muted-foreground">12:36 PM</span>
                                  </div>
                                  <div className="bg-muted rounded-2xl px-4 py-2">
                                    <p className="text-sm text-foreground mb-2">Done! Just sent email to Jason. I will monitor your inbox and coordinate the meeting. I will let you know when something is on the books.</p>
                                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mt-2">✉️ Sent Email</span>
                                 </div>
                               </div>
                             </div>
                           </div>
                          
                          {/* Chat Widget */}
                           <div className="bg-muted/50 backdrop-blur-sm rounded-xl p-1 border border-border">
                             <div className="flex items-center gap-2 p-2">
                               <div className="flex-1 relative">
                                 <input type="text" placeholder="Ask IRIS something..." className="w-full bg-transparent text-foreground placeholder:text-muted-foreground text-xs focus:outline-none py-1 px-2" disabled />
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
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="ai-agents" className="mt-0">
                <Card className="border border-border shadow-lg bg-card">
                  <div className="p-6">
                    <TabsList className="grid w-full grid-cols-4 mb-6">
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
                        <Plug className="w-4 h-4" />
                        <span className="hidden sm:inline">Integrations</span>
                      </TabsTrigger>
                    </TabsList>
                  
                     <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                        <div className="space-y-6 flex flex-col justify-between border border-border rounded-xl p-6 h-full min-h-[500px]">
                        <div>
                           <h3 className="h3 mb-4 text-card-heading">Speak Your Workflow Into Existence</h3>
                           <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                            Create custom AI agents using plain English. Tell IRIS what you need done, which tools to connect, and how—she builds the entire workflow for you. No code, no complexity.
                          </p>
                          
                            <div className="space-y-3 mb-6">
                             <h4 className="font-semibold text-muted-foreground">Key Features</h4>
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
                            <Bot className="h-4 w-4 mr-2" />
                            See Agent Catalog
                          </Button>
                        </div>
                      </div>
                      <div className="lg:pl-8">
                        <div className="relative rounded-2xl">
                          <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-cyan-500 rounded-[18px] blur-md opacity-15"></div>
                           <div className="relative z-10 bg-card rounded-2xl p-6 h-[700px] flex flex-col shadow-none">
                          
                          {/* Agent Dashboard */}
                          <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="font-semibold text-foreground">Active AI Agents</h4>
                              <span className="text-xs bg-green-500/10 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">3 Active</span>
                            </div>
                            
                            {/* Agent Cards */}
                            <div className="space-y-3">
                              <div className="bg-muted rounded-lg p-4">
                                <div className="flex items-start justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                      <Bot className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                      <h5 className="font-medium text-foreground text-sm">Deal Screener</h5>
                                      <p className="text-xs text-muted-foreground">Processing 12 new deals</p>
                                    </div>
                                  </div>
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                </div>
                              </div>
                              
                              <div className="bg-muted rounded-lg p-4">
                                <div className="flex items-start justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                      <Search className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                      <h5 className="font-medium text-foreground text-sm">Due Diligence</h5>
                                      <p className="text-xs text-muted-foreground">Analyzing HealthTech Inc.</p>
                                    </div>
                                  </div>
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                </div>
                              </div>
                              
                              <div className="bg-muted rounded-lg p-4">
                                <div className="flex items-start justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                                      <TrendingUp className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                      <h5 className="font-medium text-foreground text-sm">Market Intel</h5>
                                      <p className="text-xs text-muted-foreground">Tracking SaaS trends</p>
                                    </div>
                                  </div>
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Quick Actions */}
                          <div className="bg-muted/50 backdrop-blur-sm rounded-xl p-1 border border-border">
                            <div className="flex items-center gap-2 p-2">
                              <div className="flex-1 relative">
                                <input type="text" placeholder="Configure new agent..." className="w-full bg-transparent text-foreground placeholder:text-muted-foreground text-xs focus:outline-none py-1 px-2" disabled />
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
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="files" className="mt-0">
                <Card className="border border-border shadow-lg bg-card">
                  <div className="p-6">
                    <TabsList className="grid w-full grid-cols-4 mb-6">
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
                        <Plug className="w-4 h-4" />
                        <span className="hidden sm:inline">Integrations</span>
                      </TabsTrigger>
                    </TabsList>
                  
                    <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                       <div className="space-y-6 flex flex-col justify-between border border-border rounded-xl p-6 h-full min-h-[500px]">
                        <div>
                           <h3 className="h3 mb-4 text-card-heading">Your Files, Intelligently Connected</h3>
                           <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                            Upload directly or connect Google Drive, Microsoft, Dropbox—IRIS reads every file and connects the dots. Auto-organized storage that links documents to contacts, powers your agents, and fuels smarter decisions.
                          </p>
                          
                           <div className="space-y-3 mb-6">
                             <h4 className="font-semibold text-muted-foreground">Key Features</h4>
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
                            <BookOpen className="h-4 w-4 mr-2" />
                            Learn More
                          </Button>
                        </div>
                      </div>
        <div className="lg:pl-8">
          <div className="relative rounded-2xl">
            <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-cyan-500 rounded-[18px] blur-md opacity-15"></div>
            <div className="relative z-10">
              <GoogleDriveInterface className="w-full" />
            </div>
          </div>
        </div>
                     </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="integrations" className="mt-0">
                <Card className="border border-border shadow-lg bg-card">
                  <div className="p-6">
                    <TabsList className="grid w-full grid-cols-4 mb-6">
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
                        <Plug className="w-4 h-4" />
                        <span className="hidden sm:inline">Integrations</span>
                      </TabsTrigger>
                    </TabsList>
                  
                    <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                       <div className="space-y-6 flex flex-col justify-between border border-border rounded-xl p-6 h-full min-h-[500px]">
                         <div>
                            <h3 className="h3 mb-4 text-card-heading">One OS, Every Tool</h3>
                            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                              Most investment tools don't let AI work inside them. We build the missing connections. IRIS connects to your entire tech stack through custom-built MCPs, letting her work directly in platforms like PitchBook, Addepar, and Black Diamond—not just pull data, but actually do the work.
                            </p>
                            
                             <div className="space-y-3 mb-6">
                               <h4 className="font-semibold text-muted-foreground">Key Features</h4>
                              <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                  <span><strong>Custom MCP development</strong> - We build the AI connections your tools don't have</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                  <span><strong>Direct platform control</strong> - IRIS works inside third-party software, not around it</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                  <span><strong>Investment-specific integrations</strong> - Built for PitchBook, Addepar, QuickBooks, Black Diamond, and more</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                  <span><strong>True workflow automation</strong> - AI that actually completes tasks across multiple platforms</span>
                                </li>
                              </ul>
                            </div>
                            
                             <Button variant="default">
                               <Plug className="h-4 w-4 mr-2" />
                               Explore Integration Library
                            </Button>
                         </div>
                      </div>
                       <div className="lg:pl-8">
                         <div className="relative rounded-2xl aspect-[1/1.75]">
                           {/* Gradient glow border */}
                           <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-[18px] blur-md opacity-50 dark:opacity-70"></div>
                           
                           {/* 3D Marquee Container */}
                           <div className="relative z-10 bg-card/90 backdrop-blur-sm rounded-2xl h-full overflow-hidden border border-border/50 shadow-lg">
                             <Integrations3DMarquee className="w-full h-full" />
                           </div>
                         </div>
                       </div>
                     </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* IRIS AI Future Section */}
        <section className="w-full py-16" aria-labelledby="iris-heading">
          <div className="max-w-[1200px] mx-auto px-0">
             <div className="text-center mb-12 w-full">
              <div className="flex justify-center mb-6">
                <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary from-0% via-primary via-70% to-primary/10 to-100% p-[1px]">
                    <div className="h-full w-full rounded-full bg-muted"></div>
                  </div>
                  <div className="relative z-10 flex items-center gap-2">
                    <Bot className="w-4 h-4" />
                    <span className="text-sm font-medium">IRIS</span>
                  </div>
                </div>
              </div>
              <h2 id="iris-heading" className="h2 mb-4">The Future is AI</h2>
              
            </div>

            {/* Meet IRIS Card */}
            <div className="w-full">
              <Card className="border border-border shadow-lg bg-card dark:bg-card/95 backdrop-blur-sm">
                <div className="p-6">
                  <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                    {/* Left Content */}
                    <div className="space-y-6 flex flex-col justify-between border border-border rounded-xl p-6 h-full min-h-[500px]">
                      <div>
                        <h3 className="h3 mb-4 text-card-heading">Meet IRIS, your second brain</h3>
                        <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                          IRIS isn't just an analyst. She's the AI interface built for private markets.
                        </p>
                        
                        <div className="space-y-3 mb-6">
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>Knows the context—family offices, fund managers, startups.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>Sees everything—emails, notes, cloud drives, data rooms, integrations.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>Acts across systems—inside Nvestiv and the tools you already use.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>Delivers one complete picture of your business, so you can act fast.</span>
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-3 mb-6">
                          <h4 className="font-semibold text-foreground">What IRIS can do:</h4>
                           <div className="flex flex-wrap gap-2">
                             <button className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors border border-border flex items-center gap-2">
                               <BarChart3 className="h-3 w-3 text-muted-foreground" />
                               Deal Screening
                             </button>
                             <button className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors border border-border flex items-center gap-2">
                               <FileText className="h-3 w-3 text-muted-foreground" />
                               Memo Generation
                             </button>
                             <button className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors border border-border flex items-center gap-2">
                               <Folder className="h-3 w-3 text-muted-foreground" />
                               DataRoom Analysis
                             </button>
                             <button className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors border border-border flex items-center gap-2">
                               <Mail className="h-3 w-3 text-muted-foreground" />
                               Email Parsing
                             </button>
                             <button className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors border border-border flex items-center gap-2">
                               <Calendar className="h-3 w-3 text-muted-foreground" />
                               Meeting Notes
                             </button>
                             <button className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors border border-border flex items-center gap-2">
                               <Zap className="h-3 w-3 text-muted-foreground" />
                               Workflow Automation
                             </button>
                             <button className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors border border-border flex items-center gap-2">
                               <TrendingUp className="h-3 w-3 text-muted-foreground" />
                               Portfolio Insights
                             </button>
                             <button className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors border border-border flex items-center gap-2">
                               <AlertTriangle className="h-3 w-3 text-muted-foreground" />
                               Risk Flagging
                             </button>
                             <button className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors border border-border flex items-center gap-2">
                               <Users className="h-3 w-3 text-muted-foreground" />
                               Matchmaking
                             </button>
                           </div>
                        </div>
                        
                        <Button variant="default" asChild>
                          <a href="https://iris.nvestiv.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 no-underline text-white">
                            <Bot className="h-4 w-4" />
                            Test Drive IRIS
                          </a>
                        </Button>
                      </div>
                    </div>
                    
                    {/* Right Video */}
                    <div className="lg:pl-8 h-full">
                      <div className="relative rounded-2xl h-full">
                        <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-cyan-500 rounded-[18px] blur-md opacity-15"></div>
                        <div className="relative z-10 bg-white rounded-2xl h-full min-h-[500px] flex items-center justify-center shadow-none">
                          <div className="relative w-full h-full flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-full blur-3xl opacity-30 dark:opacity-20"></div>
                            <video 
                              ref={videoRef}
                              src="https://cdn.midjourney.com/video/a6591682-b664-466b-b202-9f54adfa6618/3.mp4"
                              autoPlay={false}
                              muted
                              playsInline
                              className="relative z-10 w-full h-full object-contain animate-fade-in transition-all duration-500 rounded-lg"
                              aria-label="IRIS AI agent demonstration video for private investment management"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* AI Agents Section */}
        <section className="w-full py-16" aria-labelledby="ai-agents-heading">
          <div className="">
            {/* Section Label */}
            <div className="flex justify-center mb-6">
              <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3137fd] from-0% via-[#3137fd] via-70% to-[#3137fd]/10 to-100% p-[1px]">
                  <div className="h-full w-full rounded-full bg-muted"></div>
                </div>
                <div className="relative z-10 flex items-center gap-2">
                  <Bot className="w-4 h-4" />
                  <span className="text-sm font-medium">AI Agents</span>
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 id="ai-agents-heading" className="h2 mb-4">Army Of Agents, Trained For Private Markets</h2>
            </div>

            <Card className="border border-border shadow-lg bg-card">
              <div className="p-6">
                <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                  <div className="space-y-6 flex flex-col justify-between border border-border rounded-xl p-6 h-full min-h-[500px]">
                    <div>
                      <h3 className="h3 mb-4 text-card-heading">Build. Deploy. Rest Easy.</h3>
                      <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                        Nvestiv gives you the power to create agents that think and work like your team—without writing a line of code. Speak them into existence using plain english.
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        <ul className="space-y-4 text-sm text-muted-foreground">
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Build from scratch</strong> – Drag-and-drop your workflow. Plug into your data. Make it yours.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Deploy instantly</strong> – Choose from our catalog of private-market specialists: screeners, diligence, portfolio monitors.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Work everywhere</strong> – Agents connect across your CRM, inbox, DataRooms, and third-party apps.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Act autonomously</strong> – They don't just analyze. They execute—24/7, on your behalf.</span>
                          </li>
                        </ul>
                      </div>

                      <p className="text-base leading-relaxed mb-6 text-muted-foreground font-medium">
                        This is the future of private markets: your own AI team, purpose-built for how you invest.
                      </p>
                      
                      <Button variant="default" asChild>
                        <a href="#" className="text-white no-underline flex items-center gap-2">
                          <ArrowRight className="h-4 w-4" />
                          Create Your First Agent
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="lg:pl-8">
                    <div className="relative rounded-2xl">
                      <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-cyan-500 rounded-[18px] blur-md opacity-15"></div>
                      <div className="relative z-10 bg-card rounded-2xl p-6 h-[700px] flex flex-col shadow-none">
                      
                        {/* Agent Builder Interface */}
                        <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-semibold text-card-foreground">Agent Builder</h4>
                            <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">Draft Mode</span>
                          </div>
                          
                          {/* Voice Input Simulation */}
                          <div className="bg-muted/50 rounded-lg p-4 border border-border">
                            <div className="flex items-center gap-3 mb-3">
                              <ListeningWaveform className="w-6" />
                              <span className="text-sm text-muted-foreground">Listening...</span>
                            </div>
                            <div className="bg-card rounded p-3 text-sm text-card-foreground italic">
                              "Create an agent that screens healthcare deals over $10M, checks if they fit our thesis, and automatically schedules intro calls for qualified opportunities."
                            </div>
                          </div>

                          {/* Agent Configuration Preview */}
                          <div className="space-y-3">
                            <div className="bg-muted/30 rounded-lg p-3 border border-border">
                              <div className="flex items-center gap-2 mb-2">
                                <Bot className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-card-foreground">Healthcare Deal Screener</span>
                              </div>
                              <div className="text-xs text-muted-foreground space-y-1">
                                <div>• Screen: Healthcare deals &gt;$10M</div>
                                <div>• Check: Thesis alignment</div>
                                <div>• Action: Schedule qualified intro calls</div>
                              </div>
                            </div>
                            
                            <div className="bg-muted/30 rounded-lg p-3 border border-border">
                              <div className="text-xs text-muted-foreground">
                                <div className="font-medium mb-1">Data Sources:</div>
                                <div>✓ CRM Contacts</div>
                                <div>✓ Email Inbox</div>
                                <div>✓ Deal Pipeline</div>
                                <div>✓ Calendar System</div>
                              </div>
                            </div>

                            <div className="bg-muted/30 rounded-lg p-3 border border-border">
                              <div className="text-xs text-muted-foreground">
                                <div className="font-medium mb-1">Triggers:</div>
                                <div>• New deal email received</div>
                                <div>• Pitch deck uploaded</div>
                                <div>• Contact form submitted</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Action Button */}
                        <div className="bg-black/5 backdrop-blur-sm rounded-xl p-3 border border-border">
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-muted-foreground">
                              Agent configured and ready
                            </div>
                            <Button size="sm" variant="default" className="text-xs">
                              Deploy Agent
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
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
    </div>;
};
export default HomePage;