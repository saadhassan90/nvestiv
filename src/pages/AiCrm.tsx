import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { seoPages } from "@/lib/seo-config";
import CRMHero from "@/components/crm/CRMHero";
import ValuePropositionSection from "@/components/crm/ValuePropositionSection";
import ProfilesCarousel from "@/components/crm/ProfilesCarousel";
import DataFoundationsFlow from "@/components/crm/DataFoundationsFlow";
import FilesIntegrationSection from "@/components/crm/FilesIntegrationSection";
import IntegrationsSection from "@/components/crm/IntegrationsSection";
import ClosingCTA from "@/components/crm/ClosingCTA";

const AiCrm = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <SEOHead {...seoPages.aiCrm} />
      <Navigation />
      
      <main className="max-w-[1200px] mx-auto mt-24 px-4">
        <CRMHero />
        <ValuePropositionSection />
        <ProfilesCarousel />
        <DataFoundationsFlow />
        <FilesIntegrationSection />
        <IntegrationsSection />
        <ClosingCTA />
      </main>

      <Footer />
    </div>
  );
};

export default AiCrm;