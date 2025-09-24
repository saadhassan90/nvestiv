import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { seoPages } from "@/lib/seo-config";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead {...seoPages.privacy} />
      <Navigation />
      
      <main className="pt-24 md:pt-28 lg:pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <header className="text-center space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                Privacy Policy
              </h1>
              <p className="text-xl text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </header>
            
            <div className="bg-card border border-border rounded-xl p-8 space-y-6">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">1. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
                </p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">2. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
                </p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">3. Data Protection</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
                </p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">4. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to access, update, or delete your personal information. Contact us at privacy@nvestiv.com to exercise these rights.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;