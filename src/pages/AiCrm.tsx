import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Bot, TrendingUp, Shield, Users, Zap, Target, BarChart3, ArrowRight } from "lucide-react";

const AiCrm = () => {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Database className="w-4 h-4" />
              <span className="text-sm font-medium">AI CRM Platform</span>
            </div>
          </div>
          
          <h1 className="h1 mb-6 max-w-4xl mx-auto">
            Intelligent CRM Built for 
            <span className="text-primary"> Private Markets</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your investment relationships with AI-powered contact management, 
            deal tracking, and automated workflows designed specifically for private equity, 
            venture capital, and family offices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-4">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Watch Demo
            </Button>
          </div>
          
          {/* Hero Image Placeholder */}
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-[16/10] bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl border shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <Database className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">CRM Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 mb-4">Everything You Need to Manage Relationships</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built specifically for investment professionals who need more than traditional CRM solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Intelligent Contact Management</CardTitle>
                <CardDescription>
                  AI-powered contact enrichment and relationship mapping across your entire network
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Automatic contact enrichment from 50+ data sources</li>
                  <li>• Relationship mapping and connection insights</li>
                  <li>• Mandate fit scoring for targeted outreach</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Deal Flow Management</CardTitle>
                <CardDescription>
                  Track opportunities from first contact to close with intelligent pipeline management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Customizable deal stages and workflows</li>
                  <li>• AI-powered deal scoring and prioritization</li>
                  <li>• Automated follow-up reminders and tasks</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Advanced Analytics</CardTitle>
                <CardDescription>
                  Deep insights into your fundraising performance and investor engagement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Real-time fundraising progress tracking</li>
                  <li>• Investor engagement analytics</li>
                  <li>• Performance benchmarking and reporting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">AI-Powered Automation</CardTitle>
                <CardDescription>
                  Intelligent workflows that adapt to your investment process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Smart email sequences and templates</li>
                  <li>• Automated data entry and updates</li>
                  <li>• Intelligent task prioritization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Enterprise Security</CardTitle>
                <CardDescription>
                  Bank-grade security with compliance built for financial institutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• SOC 2 Type II certified infrastructure</li>
                  <li>• End-to-end encryption at rest and in transit</li>
                  <li>• Granular access controls and audit trails</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Seamless Integrations</CardTitle>
                <CardDescription>
                  Connect with your existing tech stack for a unified workflow
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Native integrations with major data rooms</li>
                  <li>• API connections to portfolio systems</li>
                  <li>• Single sign-on (SSO) support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 mb-4">Built for Investment Professionals</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference of a CRM designed specifically for your industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3x Faster Fundraising</h3>
                  <p className="text-muted-foreground">
                    Accelerate your fundraising process with AI-powered investor matching and automated outreach sequences
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">50% More Qualified Leads</h3>
                  <p className="text-muted-foreground">
                    Identify high-potential investors with our proprietary mandate fit scoring algorithm
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">100% Compliant</h3>
                  <p className="text-muted-foreground">
                    Built-in compliance features ensure you meet all regulatory requirements without extra overhead
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl border shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-20 h-20 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Analytics Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="h2 mb-4">Ready to Transform Your Investment Process?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of investment professionals who trust Nvestiv CRM to manage their most important relationships
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiCrm;