import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AsSeenOnCarousel from "@/components/AsSeenOnCarousel";
import { GridBackground } from "@/components/GridBackground";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Button } from "@/components/ui/button";
import { Check, Users } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section with Grid Background */}
      <GridBackground className="min-h-screen">
        <main className="pt-24 md:pt-28 lg:pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Hero Content */}
            <section className="min-h-[calc(100vh-8rem)] flex items-center justify-between py-8 sm:py-12 lg:py-16">
              
              {/* Left Side - Content with Gradient Animation */}
              <BackgroundGradientAnimation 
                className="flex-1 max-w-2xl rounded-3xl border border-border/20 backdrop-blur-sm"
                firstColor="130, 21, 224"
                secondColor="11, 14, 31"
                thirdColor="130, 21, 224"
                fourthColor="11, 14, 31"
                fifthColor="130, 21, 224"
                pointerColor="130, 21, 224"
                size="60%"
                blendingValue="overlay"
                gradientBackgroundStart="hsl(var(--background))"
                gradientBackgroundEnd="hsl(var(--background))"
              >
                <div className="relative z-50 p-8 space-y-8">
                  
                  {/* User Count Badge */}
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span><strong className="text-foreground">4958 Users</strong> and counting</span>
                  </div>
                  
                  {/* Main Headline */}
                  <div className="space-y-6">
                    <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                      AI for Private
                      <br />
                      <span className="text-primary">Investments</span>
                    </h1>
                    
                    <div className="w-max">
                      <h2 className="text-xl lg:text-2xl font-semibold text-foreground animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-foreground pr-2">
                        AI Native CRM. AI Agents
                      </h2>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                      Streamline your deal flow with an investment-specific CRM that uses AI for deal screening and due diligence.
                    </p>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="px-8 py-4 text-lg">
                      Join our BETA
                    </Button>
                    <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                      📞 Book a demo
                    </Button>
                  </div>
                  
                  {/* Trust Indicators */}
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="flex items-center space-x-2">
                        <Check className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium">Family Offices</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium">Institutional Investors</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium">Fund Managers</span>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </BackgroundGradientAnimation>
              
              {/* Right Side - Dashboard Mockup */}
              <div className="hidden lg:flex flex-1 justify-end">
                <div className="max-w-2xl">
                  <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-border/20 p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-foreground">Agent Templates</h3>
                        <div className="text-sm text-muted-foreground">Dashboard • Agent Templates</div>
                      </div>
                      
                      {/* Mock Dashboard Content */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-black text-white p-4 rounded-lg">
                          <div className="text-sm font-medium">Family Offices</div>
                          <div className="text-xs opacity-70 mt-1">Personalized client for family office management</div>
                        </div>
                        <div className="border border-border p-4 rounded-lg">
                          <div className="text-sm font-medium text-foreground">Investment Agent</div>
                          <div className="text-xs text-muted-foreground mt-1">Portfolio optimization</div>
                        </div>
                        <div className="border border-border p-4 rounded-lg">
                          <div className="text-sm font-medium text-foreground">Deal Sourcing Agent</div>
                          <div className="text-xs text-muted-foreground mt-1">Aggregates deal sources</div>
                        </div>
                        <div className="border border-border p-4 rounded-lg">
                          <div className="text-sm font-medium text-foreground">Due Diligence Agent</div>
                          <div className="text-xs text-muted-foreground mt-1">Generates due reports from data rooms</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </section>
            
          </div>
        </main>
      </GridBackground>
      
      {/* As Seen On Carousel - Separate Section */}
      <AsSeenOnCarousel />
          
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;