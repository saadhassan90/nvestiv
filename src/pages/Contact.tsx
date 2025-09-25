import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { seoPages } from "@/lib/seo-config";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead {...seoPages.contact} />
      <Navigation />
      
      <main className="pt-24 md:pt-28 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <Button 
                  variant="default" 
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-3 text-sm font-medium"
                  asChild
                >
                  <a href="mailto:info@nvestiv.com">
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
                <Button 
                  variant="default" 
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-3 text-sm font-medium"
                  asChild
                >
                  <a href="tel:+18888319886">
                    1-888-831-9886
                  </a>
                </Button>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Our customer support team is available Monday to Friday, 9 AM to 6 PM (EST).
                </p>
              </div>
            </div>
            
            {/* Right Column - Form Placeholder */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-foreground">Send Us a Message</h2>
              
              {/* Placeholder for Notion Form */}
              <div className="bg-card border border-border rounded-xl p-8 space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      disabled
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <input
                      type="email"
                      placeholder="john@mail.com"
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      disabled
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="(xxx) xxx - xxxx"
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      disabled
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <textarea
                      placeholder="Message"
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-none"
                      disabled
                    ></textarea>
                  </div>
                  
                  <Button
                    className="w-full bg-foreground text-background hover:bg-foreground/90 py-3 rounded-lg font-medium"
                    disabled
                  >
                    Submit
                  </Button>
                </div>
                
                {/* Placeholder Notice */}
                <div className="bg-muted/30 border border-border/50 rounded-lg p-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    Form placeholder - Notion embed will be added here
                  </p>
                </div>
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