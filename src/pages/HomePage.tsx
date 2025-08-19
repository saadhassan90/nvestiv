import Navigation from "@/components/Navigation";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content Area - Blank Slate */}
      <main className="pt-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section Placeholder */}
          <section className="min-h-screen flex items-center justify-center">
            <div className="text-center space-y-6 animate-fade-in">
              <h1 className="text-foreground">
                Nvestiv
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                AI for Private Investments - Ready for content
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-sm text-muted-foreground">
                  Brand foundation & SEO structure complete
                </div>
              </div>
            </div>
          </section>
          
          {/* Content sections will be added here */}
        </div>
      </main>
    </div>
  );
};

export default HomePage;