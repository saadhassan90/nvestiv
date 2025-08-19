import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AsSeenOnCarousel from "@/components/AsSeenOnCarousel";
import { GridBackground } from "@/components/GridBackground";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { SparklesCore } from "@/components/ui/sparkles";
import { Button } from "@/components/ui/button";
import { Users, Play, Sparkles as SparklesIcon, CheckCircle } from "lucide-react";

const HomePage = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  
  const audienceTypes = [
    "Family Offices",
    "Institutions", 
    "Asset Managers",
    "Startups",
    "Brokers",
    "Service Providers"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (charIndex < audienceTypes[currentIndex].length) {
        setCurrentText(audienceTypes[currentIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setCurrentText("");
          setCurrentIndex((currentIndex + 1) % audienceTypes.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [charIndex, currentIndex, audienceTypes]);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Custom Grid Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section with Black Background */}
      <main className="pt-24 md:pt-28 lg:pt-32 relative z-10">
        <div className="min-h-[calc(100vh-8rem)] w-full relative bg-black flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            
            {/* Hero Content */}
            <section className="w-full min-h-[calc(100vh-8rem)] flex items-center justify-center py-8 sm:py-12 lg:py-16">
              
              {/* Centered Content */}
              <div className="text-center w-[95%] mx-auto">
                <div className="space-y-8 w-4/5 mx-auto">
                  
                  {/* Main Headline with Typewriter */}
                  <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                    Private Investments AI
                    <br />
                    for <span className="text-primary">{currentText}</span>
                    <span className="animate-pulse text-primary ml-1">|</span>
                  </h1>
                  
                  {/* Static Text - Centered */}
                  <div className="flex justify-center">
                    <div className="w-max">
                      <h2 className="text-xl lg:text-2xl font-semibold text-white relative border-none pb-0">
                        AI CRM. AI Agents
                      </h2>
                    </div>
                  </div>
                  
                  {/* Description Text - Centered */}
                  <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
                    Streamline your deal flow with an investment-specific CRM that uses AI for deal screening and due diligence.
                  </p>
                  
                  {/* Sparkles Area - Centered */}
                  <div className="flex justify-center">
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
                  </div>
                  
                  {/* CTA Buttons - Centered */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="px-8 py-4 text-lg bg-white text-black hover:bg-gray-100">
                      <Play className="h-5 w-5" />
                      <span>Try for FREE</span>
                    </Button>
                    <Button size="lg" className="px-8 py-4 text-lg bg-gray-600 text-white hover:bg-gray-500 border-0">
                      <SparklesIcon className="h-5 w-5" />
                      <span>Discover IRIS</span>
                    </Button>
                  </div>
                  
                  {/* Trust Indicators - Centered */}
                  <div className="flex flex-wrap justify-center gap-6">
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