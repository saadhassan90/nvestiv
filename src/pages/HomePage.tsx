import Navigation from "@/components/Navigation";

const HomePage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden parallax">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content Area - Fully Responsive with Parallax */}
      <main className="pt-24 md:pt-28 lg:pt-32">
        {/* Container with proper responsive padding */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section - Mobile First Responsive with Parallax */}
          <section className="min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] flex items-center justify-center py-8 sm:py-12 lg:py-16 relative">
            
            {/* Clean hero content */}
            <div className="text-center space-y-6 w-full max-w-4xl mx-auto px-4 relative z-10">
              
              {/* Clean typography */}
              <h1 className="text-foreground animate-fade-in">
                Nvestiv
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                AI for Private Investments
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <button className="btn-hero">
                  Get Started
                </button>
                <button className="btn-ghost-hero">
                  Learn More
                </button>
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