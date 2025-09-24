import { Helmet } from "react-helmet-async";
import { SEOPageConfig } from "@/lib/seo-config";

interface SEOHeadProps extends SEOPageConfig {
  children?: React.ReactNode;
}

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage = "/lovable-uploads/nvestiv-logo.png",
  type = "website",
  structuredData,
  children 
}: SEOHeadProps) => {
  const keywordsString = keywords.join(", ");
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <meta name="author" content="Nvestiv" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Nvestiv" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:creator" content="@nvestiv" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#8215E0" />
      <meta name="msapplication-navbutton-color" content="#8215E0" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {children}
    </Helmet>
  );
};

export default SEOHead;