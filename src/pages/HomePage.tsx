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
      
      {/* Hero Section with Black Background */}
      <main className="pt-24 md:pt-28 lg:pt-32 relative z-10">
        <div className="min-h-[calc(100vh-8rem)] w-full bg-black flex flex-col items-center justify-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            
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
                  
                  {/* Main Headline with Sparkles underneath */}
                  <div className="space-y-6">
                    <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight relative z-20">
                      AI for Private
                      <br />
                      <span className="text-primary">Investments</span>
                    </h1>
                    
                    {/* Sparkles Area - Only under the headline */}
                    <div className="w-[40rem] h-40 relative">
                      {/* Gradients */}
                      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                      {/* Core component */}
                      <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                      />

                      {/* Radial Gradient to prevent sharp edges */}
                      <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                    </div>
                    
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