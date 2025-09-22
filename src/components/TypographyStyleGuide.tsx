import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TypographyStyleGuide = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-display">Nvestiv Typography Style Guide</h1>
        <p className="text-hero-body text-secondary max-w-2xl mx-auto">
          A comprehensive typography system designed for SEO optimization, accessibility, and brand consistency across the Nvestiv platform.
        </p>
      </header>

      {/* Display Typography */}
      <section className="space-y-6">
        <h2>Display Typography</h2>
        <Card>
          <CardHeader>
            <CardTitle>Hero & Display Text</CardTitle>
            <CardDescription>For major headlines and hero sections</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-small text-muted mb-2">Default Display (.text-display)</p>
              <div className="text-display">Invest Smarter, Grow Faster</div>
            </div>
            <div>
              <p className="text-small text-muted mb-2">Display with Accent (.text-display-accent)</p>
              <div className="text-display-accent">AI-Powered Investment Platform</div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Heading Hierarchy */}
      <section className="space-y-6">
        <h2>SEO-Optimized Heading Hierarchy</h2>
        <Card>
          <CardHeader>
            <CardTitle>Semantic HTML Structure</CardTitle>
            <CardDescription>Proper heading nesting for search engine optimization</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-small text-muted mb-2">H1 - Page Title (One per page)</p>
              <h1>Main Page Title - Private Investment CRM</h1>
            </div>
            <div>
              <p className="text-small text-muted mb-2">H2 - Section Headers</p>
              <h2>Platform Features & Capabilities</h2>
            </div>
            <div>
              <p className="text-small text-muted mb-2">H3 - Subsection Headers</p>
              <h3>AI-Powered Deal Screening</h3>
            </div>
            <div>
              <p className="text-small text-muted mb-2">H4 - Content Block Headers</p>
              <h4>Automated Due Diligence</h4>
            </div>
            <div>
              <p className="text-small text-muted mb-2">H5 - Subheadings</p>
              <h5>Document Analysis & Risk Assessment</h5>
            </div>
            <div>
              <p className="text-small text-muted mb-2">H6 - Minor Headings</p>
              <h6>Technical Implementation Details</h6>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Body Typography */}
      <section className="space-y-6">
        <h2>Body Text & Content</h2>
        <Card>
          <CardHeader>
            <CardTitle>Text Variants</CardTitle>
            <CardDescription>Different text styles for various content types</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-small text-muted mb-2">Hero Body Text (.text-hero-body)</p>
              <p className="text-hero-body">
                Your entire business on one AI CRM — speak custom agents into existence and automate everything.
              </p>
            </div>
            <div>
              <p className="text-small text-muted mb-2">Regular Body Text (p, .text-body)</p>
              <p>
                Nvestiv unifies relationships, files, and investments into a single platform built for private markets. 
                Our AI agents handle complex workflows while you focus on strategic decisions.
              </p>
            </div>
            <div>
              <p className="text-small text-muted mb-2">Secondary Text (.text-secondary)</p>
              <p className="text-secondary">
                Supporting information and descriptions that provide additional context without overwhelming the main content.
              </p>
            </div>
            <div>
              <p className="text-small text-muted mb-2">Muted Text (.text-muted)</p>
              <p className="text-muted">
                Subtle text for captions, metadata, and supplementary information.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Interactive Elements */}
      <section className="space-y-6">
        <h2>Interactive Elements</h2>
        <Card>
          <CardHeader>
            <CardTitle>Buttons & Links</CardTitle>
            <CardDescription>Typography for interactive components</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <p className="text-small text-muted">Button Variants</p>
              <div className="flex flex-wrap gap-3">
                <Button>Primary Action</Button>
                <Button variant="secondary">Secondary Action</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
            </div>
            <div>
              <p className="text-small text-muted mb-2">Link Text</p>
              <p>
                This paragraph contains <a href="#" className="text-brand-accent">branded accent links</a> and 
                regular <a href="#">underlined links</a> that follow our design system.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Brand Colors */}
      <section className="space-y-6">
        <h2>Brand Color Application</h2>
        <Card>
          <CardHeader>
            <CardTitle>Nvestiv Color Palette</CardTitle>
            <CardDescription>Electric Blue and Deep Navy brand colors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-brand-accent">Electric Blue Accent</h3>
                <p className="text-secondary">
                  Used for primary actions, highlights, and interactive elements.
                </p>
                <div className="w-full h-16 bg-brand-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-medium">#007BFF</span>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-foreground">Deep Navy Background</h3>
                <p className="text-secondary">
                  Used for dark mode backgrounds and overlays.
                </p>
                <div className="w-full h-16 bg-brand-navy rounded-lg flex items-center justify-center">
                  <span className="text-white font-medium">#0B0E1F</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-6">
        <h2>SEO & Accessibility Guidelines</h2>
        <Card>
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
            <CardDescription>Ensuring optimal search engine visibility and user experience</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3>SEO Hierarchy Rules</h3>
                <ul className="list-disc list-inside space-y-2 text-secondary mt-2">
                  <li>Use only one H1 per page (page title)</li>
                  <li>Follow logical heading sequence (H1 → H2 → H3 → H4)</li>
                  <li>Include target keywords naturally in headings</li>
                  <li>Use semantic HTML elements (header, main, section, article)</li>
                </ul>
              </div>
              <div>
                <h3>Accessibility Standards</h3>
                <ul className="list-disc list-inside space-y-2 text-secondary mt-2">
                  <li>Maintain WCAG AA contrast ratios (4.5:1 for normal text)</li>
                  <li>Use relative units for responsive typography</li>
                  <li>Provide clear visual hierarchy through size and spacing</li>
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