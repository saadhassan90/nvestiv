import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { seoPages } from "@/lib/seo-config";

const Terms = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <SEOHead {...seoPages.terms} />
      <Navigation />
      
      <main className="max-w-[1200px] mx-auto mt-24 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <header className="text-center space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                Terms of Service
              </h1>
              <p className="text-xl text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </header>
            
            <div className="bg-card border border-border rounded-xl p-8 space-y-6">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using Nvestiv's services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">2. Use License</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Permission is granted to temporarily use Nvestiv's platform for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                </p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">3. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement industry-standard security measures to protect your data. All investment data is encrypted and stored securely in compliance with financial regulations.
                </p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">4. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at legal@nvestiv.com.
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

export default Terms;