import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "mailto:contact@nvestiv.com", label: "Email" },
  ];

  const pageLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Solutions", href: "/solutions" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  const resourceLinks = [
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/api" },
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Help Center", href: "/help" },
    { name: "Downloads", href: "/downloads" },
  ];

  const legalLinks = [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Data Processing", href: "/data-processing" },
    { name: "Security", href: "/security" },
    { name: "Compliance", href: "/compliance" },
  ];

  return (
    <footer className="bg-black text-white border-t border-gray-800 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#8080803a_1px,transparent_1px),linear-gradient(to_bottom,#8080803a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-slate-600 opacity-15 blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/lovable-uploads/c6f05c4c-ee88-4c86-a4f7-98e6e90e6071.png" 
                    alt="Nvestiv Logo" 
                    className="h-8 w-8"
                  />
                  <h2 className="text-2xl font-bold text-white font-harabara lowercase">
                    nvestiv
                  </h2>
                </div>
                <p className="text-gray-300 max-w-md leading-relaxed">
                  AI-powered solutions for private investments. Revolutionizing how institutional investors manage deal flow, due diligence, and portfolio optimization.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>contact@nvestiv.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                      <Button
                        key={label}
                        variant="ghost"
                        size="sm"
                        asChild
                        className="p-2 hover:bg-gray-800 rounded-xl text-gray-300 hover:text-white"
                      >
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Pages Section */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Pages
              </h3>
              <ul className="space-y-3">
                {pageLinks.map(({ name, href }) => (
                  <li key={name}>
                      <Link
                        to={href}
                        className="text-sm text-gray-300 hover:text-white transition-colors"
                      >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                {resourceLinks.map(({ name, href }) => (
                  <li key={name}>
                      <Link
                        to={href}
                        className="text-sm text-gray-300 hover:text-white transition-colors"
                      >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                {legalLinks.map(({ name, href }) => (
                  <li key={name}>
                      <Link
                        to={href}
                        className="text-sm text-gray-300 hover:text-white transition-colors"
                      >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <Separator className="bg-gray-800" />
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              © {currentYear} Nvestiv. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <span>Made with ❤️ for institutional investors</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;