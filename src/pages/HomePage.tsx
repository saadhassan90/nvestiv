import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AsSeenOnCarousel from "@/components/AsSeenOnCarousel";
import { GridBackground } from "@/components/GridBackground";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { SparklesCore } from "@/components/ui/sparkles";
import { Button } from "@/components/ui/button";
import { Users, Play, Sparkles as SparklesIcon, CheckCircle } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Custom Grid Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section with Sparkles Background */}
      <main className="pt-24 md:pt-28 lg:pt-32 relative z-10">
        <div className="min-h-[calc(100vh-8rem)] w-full bg-black flex flex-col items-center justify-center overflow-hidden">
          <SparklesCore
            background="black"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full absolute inset-0"
            particleColor="#FFFFFF"
          />
          
          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Hero Content */}
            <section className="min-h-[calc(100vh-8rem)] flex items-center justify-between py-8 sm:py-12 lg:py-16">
              
              {/* Left Side - Content */}
              <div className="flex-1 max-w-2xl">
                <div className="space-y-8">
                  
                  {/* User Count Badge */}
                  <div className="inline-flex items-center space-x-2 bg-white/10 text-sm text-gray-300 px-3 py-1.5 rounded-lg border border-white/20 backdrop-blur-sm">
                    <Users className="h-4 w-4" />
                    <span><strong className="text-white">4958 Users</strong> and counting</span>
                  </div>
                  
                  {/* Main Headline */}
                  <div className="space-y-6">
                    <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                      AI for Private
                      <br />
                      <span className="text-primary">Investments</span>
                    </h1>
                    
                    <div className="w-max">
                      <h2 className="text-xl lg:text-2xl font-semibold text-white animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-2">
                        AI Native CRM. AI Agents
                      </h2>
                    </div>
                    
                    <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                      Streamline your deal flow with an investment-specific CRM that uses AI for deal screening and due diligence.
                    </p>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="animated-primary" size="lg" className="px-8 py-4 text-lg">
                      <Play className="h-5 w-5" />
                      <span>Try for FREE</span>
                    </Button>
                    <Button variant="animated-secondary" size="lg" className="px-8 py-4 text-lg bg-white/10 border-white/20 text-white hover:bg-white/20">
                      <SparklesIcon className="h-5 w-5" />
                      <span>Discover IRIS</span>
                    </Button>
                  </div>
                  
                  {/* Trust Indicators */}
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-gray-300">Family Offices</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-gray-300">Institutional Investors</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-gray-300">Asset Managers</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-gray-300">Service Providers</span>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              
              {/* Right Side - Dashboard Mockup */}
              <div className="hidden lg:flex flex-1 justify-end">
                <div className="max-w-2xl">
                  <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Agent Templates</h3>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Dashboard • Agent Templates</div>
                      </div>
                      
                      {/* Mock Dashboard Content */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-black text-white p-4 rounded-lg">
                          <div className="text-sm font-medium">Family Offices</div>
                          <div className="text-xs opacity-70 mt-1">Personalized client for family office management</div>
                        </div>
                        <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">Investment Agent</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Portfolio optimization</div>
                        </div>
                        <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">Deal Sourcing Agent</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Aggregates deal sources</div>
                        </div>
                        <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">Due Diligence Agent</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Generates due reports from data rooms</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </section>
            
          </div>
        </div>
      </main>
      
      {/* As Seen On Carousel - Separate Section */}
      <AsSeenOnCarousel />
          
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;