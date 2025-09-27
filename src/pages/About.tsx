import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { seoPages } from "@/lib/seo-config";

const About = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <SEOHead {...seoPages.about} />
      <Navigation />
      
      <main className="max-w-[1200px] mx-auto mt-24 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <header className="text-center space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                About Nvestiv
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Revolutionizing private investment management through AI-powered intelligence
              </p>
            </header>
            
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <div className="bg-card border border-border rounded-xl p-8 space-y-6">
                <h2 className="text-2xl font-semibold text-foreground">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Nvestiv, we're transforming how institutional investors approach private markets. Our AI-powered platform streamlines deal flow management, enhances due diligence processes, and optimizes portfolio performance for private equity, venture capital, and family offices worldwide.
                </p>
                
                <h2 className="text-2xl font-semibold text-foreground">Why We Built This</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Private investment professionals spend countless hours on manual processes that could be automated. We believe AI can unlock tremendous value by augmenting human expertise, not replacing it. Our platform empowers investors to make better decisions faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;