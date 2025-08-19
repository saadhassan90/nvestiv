import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 md:pt-28 lg:pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <header className="text-center space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get in touch to learn more about how Nvestiv can transform your investment process
              </p>
            </header>
            
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground">Get Started Today</h2>
                  <p className="text-muted-foreground">
                    Ready to revolutionize your private investment workflow? Contact our team to schedule a personalized demo.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-foreground">Email</h3>
                      <p className="text-muted-foreground">contact@nvestiv.com</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Office</h3>
                      <p className="text-muted-foreground">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground">Send us a message</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                    ></textarea>
                    <Button
                      type="submit"
                      className="w-full"
                      size="default"
                    >
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </Button>
                  </form>
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