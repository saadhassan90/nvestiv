// SEO Configuration for Nvestiv
export const seoKeywords = [
  "AI for private investments",
  "Private equity CRM", 
  "AI CRM for private markets",
  "Deal flow management software",
  "AI due diligence software",
  "Family office investment platform",
  "Fund manager CRM",
  "AI investment agents",
  "Mandate fit scoring",
  "Data room software for investors",
  "Institutional investor CRM",
  "AI deal screening",
  "Venture capital CRM",
  "Investor relations automation",
  "AI investment research platform",
  "Private market data enrichment",
  "Alternative investment software",
  "Placement agent CRM",
  "Pension fund investment platform",
  "Insurance company asset management software",
  "Iris",
  "ai agents",
  "affinity crm",
  "f2",
  "hebbia"
];

export interface SEOPageConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage?: string;
  type?: string;
  structuredData?: any;
}

export const seoPages: Record<string, SEOPageConfig> = {
  home: {
    title: "Nvestiv - AI for Private Investments | IRIS AI CRM Platform",
    description: "Transform private investment management with Nvestiv's AI-powered CRM, deal flow automation, and IRIS AI agents. Trusted by leading investment firms worldwide.",
    keywords: seoKeywords.slice(0, 15),
    canonical: "https://nvestiv.com/",
    ogImage: "/lovable-uploads/nvestiv-logo.png",
    type: "website",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Nvestiv",
      "description": "AI-powered private investment management platform",
      "url": "https://nvestiv.com",
      "logo": "https://nvestiv.com/lovable-uploads/nvestiv-logo.png",
      "sameAs": [
        "https://www.linkedin.com/company/nvestiv"
      ],
      "founder": {
        "@type": "Person",
        "name": "Nvestiv Team"
      }
    }
  },
  aiCrm: {
    title: "AI CRM for Private Markets | Nvestiv Investment Platform",
    description: "Streamline deal flow, automate due diligence, and manage investor relations with Nvestiv's AI-powered CRM designed for private equity, VC, and family offices.",
    keywords: ["AI CRM for private markets", "Private equity CRM", "AI investment agents", "Deal flow management software", "Venture capital CRM"],
    canonical: "https://nvestiv.com/ai-crm",
    ogImage: "/lovable-uploads/nvestiv-logo.png",
    type: "product"
  },
  about: {
    title: "About Nvestiv | AI Private Investment Management Platform",
    description: "Learn how Nvestiv revolutionizes private investment management through AI-powered intelligence, helping institutional investors optimize deal flow and portfolio performance.",
    keywords: ["AI for private investments", "Private investment platform", "Institutional investor CRM", "AI investment research platform"],
    canonical: "https://nvestiv.com/about",
    ogImage: "/lovable-uploads/nvestiv-logo.png",
    type: "website"
  },
  contact: {
    title: "Contact Nvestiv | AI Investment Platform Demo & Support",
    description: "Get in touch with Nvestiv for a personalized demo of our AI-powered private investment management platform. Contact our team for support and inquiries.",
    keywords: ["Nvestiv contact", "AI investment platform demo", "Private equity software", "Investment CRM support"],
    canonical: "https://nvestiv.com/contact",
    ogImage: "/lovable-uploads/nvestiv-logo.png",
    type: "website"
  },
  terms: {
    title: "Terms of Service | Nvestiv AI Investment Platform",
    description: "Read Nvestiv's Terms of Service for our AI-powered private investment management platform, including usage rights, data security, and compliance information.",
    keywords: ["Nvestiv terms", "AI investment platform", "Private investment software", "Investment CRM"],
    canonical: "https://nvestiv.com/terms",
    ogImage: "/lovable-uploads/nvestiv-logo.png",
    type: "website"
  },
  privacy: {
    title: "Privacy Policy | Nvestiv Secure AI Investment Platform", 
    description: "Learn about Nvestiv's privacy practices and data protection measures for our AI-powered private investment management platform. Your data security is our priority.",
    keywords: ["Nvestiv privacy", "AI investment platform security", "Private investment data protection", "Investment CRM privacy"],
    canonical: "https://nvestiv.com/privacy",
    ogImage: "/lovable-uploads/nvestiv-logo.png",
    type: "website"
  },
  notFound: {
    title: "Page Not Found | Nvestiv AI Investment Platform",
    description: "The page you're looking for doesn't exist. Return to Nvestiv's AI-powered private investment management platform to explore our solutions.",
    keywords: ["Nvestiv", "AI investment platform", "Private investment management"],
    canonical: "https://nvestiv.com/404",
    ogImage: "/lovable-uploads/nvestiv-logo.png",
    type: "website"
  }
};