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
  const [selectedAgentCategory, setSelectedAgentCategory] = useState("Family Offices");
  
  const audienceTypes = ["Family Offices", "Institutions", "Asset Managers", "Startups", "Brokers", "Service Providers"];

  // Agent categories and their agents
  const agentCategories = {
    "Family Offices": [
      {
        name: "Portfolio Management Agent",
        description: "Consolidates holdings across accounts to deliver a real-time snapshot of performance and exposures."
      },
      {
        name: "Succession Planning Agent",
        description: "Models wealth transfer strategies and tax impacts for multi-generational planning."
      },
      {
        name: "Risk Analyst Agent",
        description: "Scans portfolios against market, macro, and concentration risks with proactive alerts."
      },
      {
        name: "Co-Investment Screener Agent",
        description: "Sources and evaluates direct deal opportunities alongside other families."
      },
      {
        name: "Investor Reporting Agent",
        description: "Automates quarterly reporting packages tailored for family principals and trustees."
      },
      {
        name: "Discover 15+ More Agents",
        description: "Unlock specialized tools for tax optimization, board management, philanthropy tracking, and family governance—all tailored for your office.",
        isMoreCard: true
      }
    ],
    "Institutional Investors": [
      {
        name: "Mandate Fit Screener Agent",
        description: "Evaluates incoming deals against mandate rules and IPS criteria."
      },
      {
        name: "Regulatory Compliance Agent",
        description: "Monitors portfolios for evolving pension, SEC, and global regulations."
      },
      {
        name: "Asset Allocation Optimizer Agent",
        description: "Suggests allocation shifts based on models, benchmarks, and risk targets."
      },
      {
        name: "Stress Testing Agent",
        description: "Runs scenario analyses across economic downturns, rate changes, and shocks."
      },
      {
        name: "ESG Scoring Agent",
        description: "Scores assets on ESG metrics and integrates with sustainability frameworks."
      },
      {
        name: "Explore 20+ More Solutions",
        description: "Access advanced tools for liability modeling, peer benchmarking, alternative data integration, and regulatory reporting automation.",
        isMoreCard: true
      }
    ],
    "Real Estate Funds": [
      {
        name: "Deal Underwriting Agent",
        description: "Automates property underwriting with income, expense, and comps analysis."
      },
      {
        name: "Market Area Analysis Agent",
        description: "Uses Google Maps and datasets to evaluate neighborhood drivers and risks."
      },
      {
        name: "Lease & Cashflow Agent",
        description: "Projects lease rollovers, rent escalations, and stabilized NOI."
      },
      {
        name: "Construction Risk Agent",
        description: "Flags permitting, budget, and contractor risks during development."
      },
      {
        name: "Exit Scenario Agent",
        description: "Models multiple sale and refinance exit strategies with projected returns."
      },
      {
        name: "Browse 12+ Property Tools",
        description: "Discover agents for zoning analysis, environmental due diligence, tenant screening, and REIT performance optimization.",
        isMoreCard: true
      }
    ],
    "Venture Capital": [
      {
        name: "Startup Screening Agent",
        description: "Scores startups on team, traction, market, and financials."
      },
      {
        name: "Founder Background Agent",
        description: "Surfaces founder track record, experience, and credibility."
      },
      {
        name: "Cap Table Analyzer Agent",
        description: "Reviews ownership structures, dilution, and investor alignment."
      },
      {
        name: "Growth Metrics Agent",
        description: "Analyzes revenue, user growth, retention, and customer metrics."
      },
      {
        name: "Exit Mapping Agent",
        description: "Identifies potential acquirers and IPO scenarios for portfolio companies."
      },
      {
        name: "Access 18+ Startup Intelligence",
        description: "Unlock tools for patent analysis, competitive intelligence, market sizing, and accelerator program evaluation.",
        isMoreCard: true
      }
    ],
    "Private Equity": [
      {
        name: "Buyout Due Diligence Agent",
        description: "Automates diligence across financials, contracts, and market position."
      },
      {
        name: "LBO Model Agent",
        description: "Builds leveraged buyout models with debt and return scenarios."
      },
      {
        name: "Fund Terms Analyzer Agent",
        description: "Reviews GP/LP terms, fees, and waterfall structures."
      },
      {
        name: "Debt Structure Optimizer Agent",
        description: "Suggests optimal financing mix for acquisitions."
      },
      {
        name: "Co-Investor Alignment Agent",
        description: "Assesses deal alignment and syndication opportunities."
      },
      {
        name: "View 25+ Deal Tools",
        description: "Explore agents for management team assessment, industry comps, operational improvements, and portfolio company monitoring.",
        isMoreCard: true
      }
    ],
    "Private Credit": [
      {
        name: "Credit Underwriter Agent",
        description: "Scores borrowers using cash flows, collateral, and covenants."
      },
      {
        name: "Covenant Monitoring Agent",
        description: "Tracks covenant compliance across loan portfolios."
      },
      {
        name: "Collateral Valuation Agent",
        description: "Estimates collateral liquidation and recovery values."
      },
      {
        name: "Default Probability Agent",
        description: "Projects default risk under base and stress scenarios."
      },
      {
        name: "Loan Portfolio Diversification Agent",
        description: "Recommends allocations to balance credit exposures."
      },
      {
        name: "Discover 14+ Credit Solutions",
        description: "Access specialized tools for distressed debt analysis, mezzanine structuring, and direct lending optimization.",
        isMoreCard: true
      }
    ],
    "Hedge Funds & Alternatives": [
      {
        name: "Macro Risk Analyst Agent",
        description: "Monitors global markets, rates, and commodities for risk signals."
      },
      {
        name: "Quant Signal Agent",
        description: "Generates alpha signals from structured and alternative datasets."
      },
      {
        name: "Derivative Hedging Agent",
        description: "Structures options and futures strategies to protect downside."
      },
      {
        name: "Cross-Asset Arbitrage Agent",
        description: "Identifies arbitrage opportunities across equities, credit, and FX."
      },
      {
        name: "Investor Relations Agent",
        description: "Prepares tailored updates, decks, and letters for LPs."
      },
      {
        name: "Unlock 22+ Alpha Generators",
        description: "Explore cutting-edge tools for crypto analysis, volatility trading, event-driven strategies, and systematic risk management.",
        isMoreCard: true
      }
    ],
    "Wealth Managers": [
      {
        name: "Client Mandate Builder Agent",
        description: "Extracts client goals and builds customized investment policies."
      },
      {
        name: "Portfolio Rebalancer Agent",
        description: "Suggests timely rebalancing to keep client portfolios aligned with targets."
      },
      {
        name: "Financial Planning Agent",
        description: "Integrates income, expenses, taxes, and insurance into holistic plans."
      },
      {
        name: "Product Matching Agent",
        description: "Matches clients with funds, SMAs, or alternatives suited to their profile."
      },
      {
        name: "Client Reporting Agent",
        description: "Generates white-labeled performance and planning reports."
      },
      {
        name: "Explore 16+ Client Solutions",
        description: "Access tools for estate planning, tax-loss harvesting, alternative investments screening, and high-net-worth family services.",
        isMoreCard: true
      }
    ],
    "Investment Bankers": [
      {
        name: "Sell-Side Deal Preparation Agent",
        description: "Structures CIMs, teasers, and data rooms for companies going to market."
      },
      {
        name: "Valuation & Modeling Agent",
        description: "Builds comps, precedent transaction, and DCF analyses."
      },
      {
        name: "Investor Targeting Agent",
        description: "Identifies and ranks likely acquirers or capital providers."
      },
      {
        name: "Due Diligence Agent",
        description: "Coordinates and flags red flags across buyer/seller diligence processes."
      },
      {
        name: "Placement Agent Assistant",
        description: "Personalizes outreach campaigns and tracks investor engagement."
      },
      {
        name: "Access 19+ Deal Makers",
        description: "Discover tools for pitch book automation, roadshow optimization, regulatory filing assistance, and cross-border transaction support.",
        isMoreCard: true
      }
    ]
  };

  const categoryIcons = {
    "Family Offices": Users,
    "Institutional Investors": BarChart3,
    "Real Estate Funds": FileText,
    "Venture Capital": Zap,
    "Private Equity": Target,
    "Private Credit": BarChart3,
    "Hedge Funds & Alternatives": Zap,
    "Wealth Managers": Users,
    "Investment Bankers": FileText
  };
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
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden">
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
            <div className="flex gap-6">
              {/* Sidebar - 25% */}
              <div className="w-1/4 bg-muted/30 rounded-lg p-4">
                <h3 className="font-semibold mb-3 text-sm">Categories</h3>
                <nav className="space-y-1">
                  {Object.keys(agentCategories).map((category) => {
                    const IconComponent = categoryIcons[category as keyof typeof categoryIcons];
                    const isSelected = selectedAgentCategory === category;
                    
                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedAgentCategory(category)}
                        className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors flex items-center gap-2 ${
                          isSelected
                            ? 'bg-primary text-primary-foreground font-medium'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                      >
                        <IconComponent className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{category}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
              
              {/* Main content - 75% */}
              <div className="flex-1">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    {(() => {
                      const IconComponent = categoryIcons[selectedAgentCategory as keyof typeof categoryIcons];
                      return (
                        <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                          <IconComponent className="w-4 h-4 text-background" />
                        </div>
                      );
                    })()}
                    <h3 className="text-lg font-semibold">{selectedAgentCategory}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {agentCategories[selectedAgentCategory as keyof typeof agentCategories].map((agent, index) => (
                      <div
                        key={index}
                        className={`p-4 border border-border rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02] ${
                          agent.isMoreCard 
                            ? 'bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:border-primary/30' 
                            : 'bg-card hover:bg-muted/50'
                        }`}
                      >
                        <h4 className={`font-semibold mb-2 ${
                          agent.isMoreCard ? 'text-primary' : 'text-foreground'
                        }`}>
                          {agent.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {agent.description}
                        </p>
                        {agent.isMoreCard && (
                          <div className="mt-3 pt-3 border-t border-primary/20">
                            <Button variant="outline" size="sm" className="w-full text-xs">
                              View Full Library
                            </Button>
                          </div>
                        )}
                      </div>
                    ))}
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
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden">
          <div className="grid grid-cols-2 gap-8 h-[75vh]">
            {/* Left Column - Information */}
            <div className="space-y-6 overflow-y-auto pr-2">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">IRIS AI Assistant</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Meet your intelligent investment companion. IRIS understands private markets and instantly accesses your deal data to provide intelligent insights, generate documents, and automate workflows.
                </p>
              </div>
              
              {/* Features */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Key Capabilities</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mt-0.5">
                      <FileText className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Document Generation</h4>
                      <p className="text-sm text-muted-foreground">Generate investment memos, reports, and analyses instantly</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mt-0.5">
                      <BarChart3 className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Data Analysis</h4>
                      <p className="text-sm text-muted-foreground">Query your entire deal database with natural language</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mt-0.5">
                      <Calendar className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Task Automation</h4>
                      <p className="text-sm text-muted-foreground">Schedule meetings, send emails, and manage workflows</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex gap-3 pt-4">
                <Button size="lg" className="flex-1">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start Chat
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  Watch Demo
                </Button>
              </div>
            </div>
            
            {/* Right Column - Chat Window */}
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-semibold text-center mb-4">Live Chat Preview: NYC Trip Planning</h3>
              <div className="bg-muted/30 rounded-lg p-4 flex-1 overflow-hidden">
                <div className="bg-background rounded-lg p-4 border h-full overflow-y-auto">
                  <div className="space-y-4 pb-4">
                  
                  {/* User Message 1 */}
                  <div className="flex gap-3 justify-end">
                    <div className="bg-primary/10 rounded-lg p-3 text-sm max-w-xs">
                      I'm going to be in NYC April 15-17 for business. Who should I prioritize meeting with while I'm there?
                    </div>
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-4 h-4 bg-muted-foreground rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* IRIS Response 1 */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                      <img src="/lovable-uploads/e84fc1b3-aa69-4b05-bb30-566bd7f37da6.png" alt="IRIS AI Assistant" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 bg-muted/50 rounded-lg p-3 text-sm">
                      <div className="space-y-2">
                        <p>Great opportunity for face-to-face meetings! Let me analyze your NYC contacts and prioritize based on relationship value and current opportunities.</p>
                        <p className="text-xs italic">*Analyzing 89 NYC-based contacts for meeting priority…*</p>
                        <p>Found <strong>23 high-value contacts</strong> in NYC. Here are your <strong>top 6 meeting priorities</strong>:</p>
                        <div className="text-xs space-y-1 mt-2">
                          <div><strong>1. James Wilson - Blackstone Real Estate</strong> ⭐⭐⭐⭐⭐</div>
                          <div className="ml-2">• Why urgent: Mentioned co-investment opportunities in February</div>
                          <div><strong>2. Patricia Lee - NYC Teachers' Retirement</strong> ⭐⭐⭐⭐⭐</div>
                          <div className="ml-2">• Why urgent: Decision committee meeting April 22nd</div>
                          <div><strong>3. Robert Chen - Empire Family Office</strong> ⭐⭐⭐⭐</div>
                          <div className="ml-2">• Why important: Last met 8 months ago, relationship cooling</div>
                        </div>
                        <p className="font-medium text-xs">Recommendation: James and Patricia are must-reaches. Start with them today.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* User Message 2 */}
                  <div className="flex gap-3 justify-end">
                    <div className="bg-primary/10 rounded-lg p-3 text-sm max-w-xs">
                      Perfect! Can you draft outreach messages and suggest meeting logistics?
                    </div>
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-4 h-4 bg-muted-foreground rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* IRIS Response 2 */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                      <img src="/lovable-uploads/e84fc1b3-aa69-4b05-bb30-566bd7f37da6.png" alt="IRIS AI Assistant" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 bg-muted/50 rounded-lg p-3 text-sm">
                      <div className="space-y-2">
                        <p><strong>Outreach Messages Ready:</strong></p>
                        <div className="text-xs space-y-2">
                          <div><strong>For James Wilson:</strong> <em>"James, I'll be in NYC April 15-17 and remembered our February conversation about co-investment opportunities..."</em></div>
                          <div><strong>For Patricia Lee:</strong> <em>"Patricia, I'll be in the city April 15-17, right before your committee meeting on the 22nd..."</em></div>
                        </div>
                        <p><strong>Suggested Meeting Flow:</strong></p>
                        <div className="text-xs">
                          <div>• Day 1: James (Midtown) + Sarah (Financial District)</div>
                          <div>• Day 2: Patricia (Lower Manhattan) + Robert (Upper East)</div>
                          <div>• Day 3: Michael (informal) + buffer time</div>
                        </div>
                        <p className="text-xs">Should I create the calendar invites once you send these messages?</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* User Message 3 */}
                  <div className="flex gap-3 justify-end">
                    <div className="bg-primary/10 rounded-lg p-3 text-sm max-w-xs">
                      Yes, and what's my backup plan if some people can't meet?
                    </div>
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-4 h-4 bg-muted-foreground rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* IRIS Response 3 */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                      <img src="/lovable-uploads/e84fc1b3-aa69-4b05-bb30-566bd7f37da6.png" alt="IRIS AI Assistant" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 bg-muted/50 rounded-lg p-3 text-sm">
                      <div className="space-y-2">
                        <p><strong>Backup Contact Strategy:</strong></p>
                        <div className="text-xs space-y-1">
                          <div><strong>7. David Park - Manhattan Family Office</strong></div>
                          <div>• Why good backup: Always responsive, could introduce you to others</div>
                          <div><strong>8. Lisa Chen - Riverside Capital</strong></div>
                          <div>• Why backup: Interested in real estate deals, easier to book short notice</div>
                        </div>
                        <p><strong>Alternative Meeting Strategies:</strong></p>
                        <div className="text-xs">
                          <div>• Group meetings: Combine 2-3 contacts for efficiency</div>
                          <div>• Breakfast meetings: 7:30 AM slots often available last-minute</div>
                          <div>• Airport meetings: Day 3 departure timing</div>
                        </div>
                        <p className="text-xs">You'll have a full schedule either way - start with the top 6 outreach today.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* User Message 4 */}
                  <div className="flex gap-3 justify-end">
                    <div className="bg-primary/10 rounded-lg p-3 text-sm max-w-xs">
                      Perfect, IRIS. Can you go ahead and send those outreach emails to James, Patricia, and Robert?
                    </div>
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-4 h-4 bg-muted-foreground rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* IRIS Response 4 */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                      <img src="/lovable-uploads/e84fc1b3-aa69-4b05-bb30-566bd7f37da6.png" alt="IRIS AI Assistant" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 bg-muted/50 rounded-lg p-3 text-sm">
                      <div className="space-y-2">
                        <p>Absolutely! Sending your priority outreach emails now…</p>
                        <div className="text-xs space-y-1">
                          <div>✅ <strong>Email sent to James Wilson</strong> (Blackstone Real Estate)</div>
                          <div>✅ <strong>Email sent to Patricia Lee</strong> (NYC Teachers' Retirement)</div>
                          <div>✅ <strong>Email sent to Robert Chen</strong> (Empire Family Office)</div>
                        </div>
                        <p className="text-xs">All three emails have been delivered. I will monitor for responses and alert you by text when they reply.</p>
                        <p className="text-xs font-medium">Expected timeline: Responses typically within 24-48 hours for these contacts.</p>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>;
};
export default HomePage;