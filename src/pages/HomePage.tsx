import { useState, useEffect } from "react";
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
    <div className="min-h-screen bg-background relative">
      {/* Custom Grid Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section with Black Background */}
      <main className="pt-24 md:pt-28 lg:pt-32 relative z-10 bg-white">
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
                          <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent">
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
      <AsSeenOnCarousel />
          
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;