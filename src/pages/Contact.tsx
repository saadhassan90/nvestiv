import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { seoPages } from "@/lib/seo-config";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <SEOHead {...seoPages.contact} />
      <Navigation />
      
      <main className="max-w-[1200px] mx-auto mt-24 px-4">
        <div className="pb-16">
          {/* Page Header */}
          <div className="mb-16 space-y-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted/50 text-muted-foreground text-sm font-medium border border-border/50">
              Contact Us
            </div>
          </div>
          
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Let's talk
                </h1>
                <p className="text-xl text-text-secondary leading-relaxed">
                  We're here to help! Whether you have a question, need support, or want to share feedback, our team is ready to assist you.
                </p>
              </div>
              
              {/* Address */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-1 shrink-0" />
                  <div className="space-y-1">
                    <p className="text-foreground font-medium">80 Atlantic Ave, 4th Floor</p>
                    <p className="text-text-secondary">Toronto, Ontario, Canada</p>
                    <p className="text-text-secondary">M6K 1X9</p>
                  </div>
                </div>
              </div>
              
              {/* Email Section */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Email Us</h3>
                <Button variant="default" asChild>
                  <a href="mailto:info@nvestiv.com?subject=Contact%20from%20Nvestiv.com" className="text-white no-underline flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    info@nvestiv.com
                  </a>
                </Button>
                <p className="text-text-secondary text-sm leading-relaxed">
                  For any inquiries or assistance, feel free to email us. We aim to respond within 24 hours.
                </p>
              </div>
              
              {/* Phone Section */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Call Us</h3>
                <Button variant="default" asChild>
                  <a href="tel:+18888319886" className="text-white no-underline flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    1-888-831-9886
                  </a>
                </Button>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Our customer support team is available Monday to Friday, 9 AM to 6 PM (EST).
                </p>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="space-y-6 lg:justify-self-center">
              <h2 className="text-3xl font-semibold text-foreground">Send Us a Message</h2>
              
              {/* Contact Form Card */}
              <div className="bg-card border border-border rounded-xl p-8 w-full max-w-[560px] mx-auto space-y-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">Get in Touch</h3>
                    <p className="text-text-secondary">
                      Fill out our quick form to get started. We'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
                
                <Button 
                  onClick={() => window.open('https://form.typeform.com/to/SgQ7HmYI', '_blank')}
                  className="w-full h-12 text-white"
                  size="lg"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Open Contact Form
                </Button>
                
                <p className="text-xs text-text-secondary text-center">
                  The form will open in a new window for the best experience.
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

export default Contact;