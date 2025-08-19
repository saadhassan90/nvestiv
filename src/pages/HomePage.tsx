import Navigation from "@/components/Navigation";

const HomePage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden parallax">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content Area - Fully Responsive with Parallax */}
      <main className="pt-16 md:pt-20 lg:pt-24">
        {/* Container with proper responsive padding */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section - Mobile First Responsive with Parallax */}
          <section className="min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] flex items-center justify-center py-8 sm:py-12 lg:py-16 relative">
            
            {/* Parallax Background Elements */}
            <div className="absolute inset-0 parallax-element parallax-slow opacity-10 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-br from-primary/5 to-transparent"></div>
            </div>
            
            <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 w-full max-w-4xl mx-auto px-2 sm:px-4 relative z-10 parallax-element">
              
              {/* Responsive Typography with Parallax */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-tight animate-fade-in">
                Nvestiv
              </h1>
              
              {/* Responsive Subtitle with Parallax */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed animate-parallax-float">
                AI for Private Investments - Ready for content
              </p>
              
              {/* Responsive Action Area */}
              <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6">
                <div className="text-xs sm:text-sm md:text-base text-muted-foreground text-center max-w-xs sm:max-w-sm md:max-w-md">
                  Brand foundation & SEO structure complete
                </div>
              </div>
              
            </div>
          </section>
          
          {/* Future Content Sections - Responsive Grid Container with Parallax Support */}
          <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 parallax-element">
            {/* All future sections will inherit responsive spacing, layout, and parallax */}
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default HomePage;