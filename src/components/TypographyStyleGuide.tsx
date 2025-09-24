import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TypographyStyleGuide = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-display">Nvestiv Typography Style Guide</h1>
        <p className="text-hero-body text-muted-foreground max-w-2xl mx-auto">
          A comprehensive typography system designed for SEO optimization, accessibility, and brand consistency across the Nvestiv platform.
        </p>
      </header>

      {/* Display Typography */}
      <section className="space-y-6">
        <h2 className="text-foreground">Display Typography</h2>
        <Card>
          <CardHeader>
            <CardTitle>Hero & Display Text</CardTitle>
            <CardDescription>For major headlines and hero sections - clean, dark headers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-small text-muted-foreground mb-2">Default Display (.text-display)</p>
              <div className="text-display text-foreground">Private Investments AI</div>
            </div>
            <div>
              <p className="text-small text-muted-foreground mb-2">Display with Accent (.text-display-accent)</p>
              <div className="text-display-accent">AI CRM ✨ Agentic Operating System</div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Heading Hierarchy */}
      <section className="space-y-6">
        <h2 className="text-foreground">SEO-Optimized Heading Hierarchy</h2>
        <Card>
          <CardHeader>
            <CardTitle>Semantic HTML Structure - Dark Grey Headers</CardTitle>
            <CardDescription>Proper heading nesting for search engine optimization with consistent dark grey styling</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-small text-muted-foreground mb-2">H1 - Page Title (One per page) - Dark Grey</p>
              <h1 className="text-foreground">AI for Private Investments</h1>
            </div>
            <div>
              <p className="text-small text-muted-foreground mb-2">H2 - Section Headers - Dark Grey</p>
              <h2 className="text-foreground">Platform Features & Capabilities</h2>
            </div>
            <div>
              <p className="text-small text-muted-foreground mb-2">H3 - Subsection Headers - Dark Grey</p>
              <h3 className="text-foreground">Meet IRIS, your AI analyst</h3>
            </div>
            <div>
              <p className="text-small text-muted-foreground mb-2">H4 - Content Block Headers - Dark Grey</p>
              <h4 className="text-foreground">Automated Due Diligence</h4>
            </div>
            <div>
              <p className="text-small text-muted-foreground mb-2">H5 - Key Features Headers - Dark Grey</p>
              <h5 className="text-foreground">Key Features</h5>
            </div>
            <div>
              <p className="text-small text-muted-foreground mb-2">H6 - Minor Headings - Dark Grey</p>
              <h6 className="text-foreground">Technical Implementation Details</h6>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Body Typography */}
      <section className="space-y-6">
        <h2 className="text-foreground">Body Text & Content</h2>
        <Card>
          <CardHeader>
            <CardTitle>Text Variants - Grey Body Text</CardTitle>
            <CardDescription>Different text styles for various content types - all using muted grey tones</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-small text-muted-foreground mb-2">Hero Body Text (.text-hero-body) - Grey</p>
              <p className="text-hero-body text-muted-foreground">
                Finally, an AI Operating System that centralizes your scattered work. Emails, files, and software—unified, intelligent, and always at your fingertips.
              </p>
            </div>
            <div>
              <p className="text-small text-muted-foreground mb-2">Regular Body Text (p, .text-body) - Grey</p>
              <p className="text-muted-foreground">
                Nvestiv unifies relationships, files, and investments into a single platform built for private markets. 
                Our AI agents handle complex workflows while you focus on strategic decisions.
              </p>
            </div>
            <div>
              <p className="text-small text-muted-foreground mb-2">Feature Description Text - Grey</p>
              <p className="text-muted-foreground">
                IRIS is your dedicated AI due diligence agent that transforms deal screening. She automates comprehensive analysis, flags potential risks, and benchmarks opportunities.
              </p>
            </div>
            <div>
              <p className="text-small text-muted-foreground mb-2">Subtle/Muted Text (.text-muted-foreground) - Light Grey</p>
              <p className="text-muted-foreground">
                Supporting information and metadata that provide additional context without overwhelming the main content.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Interactive Elements */}
      <section className="space-y-6">
        <h2 className="text-foreground">Interactive Elements</h2>
        <Card>
          <CardHeader>
            <CardTitle>Buttons & Links</CardTitle>
            <CardDescription>Primary and Secondary button variants with distinct dark mode styling</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <p className="text-small text-muted-foreground">Button Variants - Dark Mode Styling</p>
              <div className="flex flex-wrap gap-3">
                <Button>Primary Action</Button>
                <Button variant="secondary">Secondary Action</Button>
              </div>
              <div className="mt-3 p-3 bg-muted/50 rounded-lg">
                <p className="text-xs font-medium text-foreground mb-2">Dark Mode Button Styles:</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Primary buttons: White background with dark text</li>
                  <li>• Secondary buttons: Gray background with border</li>
                  <li>• No blue buttons anywhere in the interface</li>
                </ul>
              </div>
            </div>
            <div>
              <p className="text-small text-muted-foreground mb-2">Link Text - No Underlines, No Blue</p>
              <p className="text-muted-foreground">
                Links are styled as clean text elements without underlines. Navigation and interactive text uses hover states instead of traditional blue link styling.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Brand Colors */}
      <section className="space-y-6">
        <h2 className="text-foreground">Brand Color Application</h2>
        <Card>
          <CardHeader>
            <CardTitle>Nvestiv Color Palette</CardTitle>
            <CardDescription>Electric Violet primary and Deep Navy accents - no blue text</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-foreground">Electric Violet Primary</h3>
                <p className="text-muted-foreground">
                  Used for primary actions, highlights, and interactive elements. Never used for body text.
                </p>
                <div className="w-full h-16 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-medium">#8215E0</span>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-foreground">Deep Navy Background</h3>
                <p className="text-muted-foreground">
                  Used for dark mode backgrounds, gradients, and overlays.
                </p>
                <div className="w-full h-16 rounded-lg flex items-center justify-center" style={{backgroundColor: '#0B0E1F'}}>
                  <span className="text-white font-medium">#0B0E1F</span>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <h4 className="text-foreground mb-2">Text Color Guidelines</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Headers: Dark grey (text-foreground)</li>
                <li>• Body text: Grey (text-muted-foreground)</li>
                <li>• No blue text anywhere</li>
                <li>• No underlined links</li>
                <li>• Primary color used only for buttons and accents</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Brand Component Styles */}
      <section className="space-y-6">
        <h2 className="text-foreground">Brand Component Styles</h2>
        <Card>
          <CardHeader>
            <CardTitle>Reusable Brand Elements</CardTitle>
            <CardDescription>Consistent styling patterns with proper grey text hierarchy</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-small text-muted-foreground mb-2">Section Labels with Gradient Border</p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 backdrop-blur-sm border border-primary/20 text-sm font-medium text-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent font-medium">Beta</span>
                <span className="text-sm font-medium">IRIS</span>
              </div>
            </div>
            <div>
              <p className="text-small text-muted-foreground mb-2">Card Components with Proper Text Hierarchy</p>
              <Card className="border border-border shadow-lg bg-card">
                <div className="p-6">
                  <h3 className="text-foreground mb-2">Dark Grey Header</h3>
                  <p className="text-muted-foreground">
                    Grey body text that provides good contrast and readability without being too bold or attention-grabbing.
                  </p>
                </div>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-6">
        <h2 className="text-foreground">SEO & Accessibility Guidelines</h2>
        <Card>
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
            <CardDescription>Ensuring optimal search engine visibility and user experience with proper text styling</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-foreground">Typography Rules</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-2">
                  <li>All headers use dark grey (text-foreground) for clarity</li>
                  <li>All body text uses grey (text-muted-foreground) for comfortable reading</li>
                  <li>No blue text anywhere in the interface</li>
                  <li>No underlined links - use hover states instead</li>
                  <li>Only primary and secondary button variants</li>
                </ul>
              </div>
              <div>
                <h3 className="text-foreground">SEO Hierarchy Rules</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-2">
                  <li>Use only one H1 per page (page title)</li>
                  <li>Follow logical heading sequence (H1 → H2 → H3 → H4)</li>
                  <li>Include target keywords naturally in headings</li>
                  <li>Use semantic HTML elements (header, main, section, article)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-foreground">Accessibility Standards</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-2">
                  <li>Maintain WCAG AA contrast ratios (4.5:1 for normal text)</li>
                  <li>Dark grey headers provide strong hierarchy</li>
                  <li>Grey body text ensures comfortable reading</li>
                  <li>Ensure text remains readable at 200% zoom</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default TypographyStyleGuide;