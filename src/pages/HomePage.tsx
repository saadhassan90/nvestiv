import { useState, useEffect } from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AsSeenOnCarousel from "@/components/AsSeenOnCarousel";
import { GridBackground } from "@/components/GridBackground";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

import { Button } from "@/components/ui/button";
import { Users, Play, Sparkles as SparklesIcon, CheckCircle } from "lucide-react";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";

const HomePage = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  
  const audienceTypes = [
    "Family Offices",
    "Institutions", 
    "Asset Managers",
    "Startups",
    "Brokers",
    "Service Providers"
  ];

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
    <div className="min-h-screen bg-background relative">
      {/* Custom Grid Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section with Black Background */}
      <main className="pt-24 md:pt-28 lg:pt-32 relative z-10">
        <div className="min-h-[calc(100vh-8rem)] w-full relative bg-black flex flex-col items-center justify-center overflow-hidden">
          <Spotlight className="top-40 left-0 md:left-60 md:-top-20" fill="white" />
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            
            {/* Hero Content */}
            <section className="w-full min-h-[calc(100vh-8rem)] flex items-center justify-center py-8 sm:py-12 lg:py-16">
              
              {/* Horizontal Layout Container */}
              <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                
                {/* Left Side - Existing Content */}
                <div className="text-center lg:text-left w-full lg:w-1/2">
                  <div className="space-y-8">
                    
                    {/* Main Headline with Typewriter */}
                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                      Private Investments AI
                      <br />
                      <span className="inline-flex items-baseline lg:justify-start justify-center">
                        for <span className="text-primary ml-3 inline-block w-[600px] text-left">{currentText}</span>
                        {showCursor && <span className="animate-pulse text-primary ml-1">|</span>}
                      </span>
                    </h1>
                    
                    {/* Static Text */}
                    <div className="flex lg:justify-start justify-center">
                      <div className="w-max">
                        <h2 className="text-xl lg:text-2xl font-semibold text-white relative border-none pb-0">
                          AI CRM. AI Agents
                        </h2>
                      </div>
                    </div>
                    
                    {/* Description Text */}
                    <p className="text-lg text-gray-300 leading-relaxed max-w-2xl lg:mx-0 mx-auto">
                      Streamline your deal flow with an investment-specific CRM that uses AI for deal screening and due diligence.
                    </p>
                    
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                      <Button size="lg" className="px-8 py-4 text-lg bg-white text-black hover:bg-gray-100">
                        <Play className="h-5 w-5" />
                        <span>Try for FREE</span>
                      </Button>
                      <Button size="lg" className="px-8 py-4 text-lg bg-gray-600 text-white hover:bg-gray-500 border-0">
                        <SparklesIcon className="h-5 w-5" />
                        <span>Discover IRIS</span>
                      </Button>
                    </div>
                    
                    {/* Trust Indicators */}
                    <div className="flex flex-wrap lg:justify-start justify-center gap-6">
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
                
                {/* Right Side - 3D Card */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <ThreeDCardDemo />
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