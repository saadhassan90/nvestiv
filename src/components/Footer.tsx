import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Linkedin, Phone, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    icon: Linkedin,
    href: "http://www.linkedin.com/company/nvestiv",
    label: "LinkedIn"
  }];
  const pageLinks = [{
    name: "Home",
    href: "/"
  }, {
    name: "About",
    href: "/about"
  }, {
    name: "Solutions",
    href: "/solutions"
  }, {
    name: "Features",
    href: "/features"
  }, {
    name: "Pricing",
    href: "/pricing"
  }, {
    name: "Contact",
    href: "/contact"
  }];
  const resourceLinks = [{
    name: "Documentation",
    href: "/docs"
  }, {
    name: "API Reference",
    href: "/api"
  }, {
    name: "Blog",
    href: "/blog"
  }, {
    name: "Case Studies",
    href: "/case-studies"
  }, {
    name: "Help Center",
    href: "/help"
  }, {
    name: "Downloads",
    href: "/downloads"
  }];
  const legalLinks = [{
    name: "Terms of Service",
    href: "/terms"
  }, {
    name: "Privacy Policy",
    href: "/privacy"
  }, {
    name: "Cookie Policy",
    href: "/cookies"
  }, {
    name: "Data Processing",
    href: "/data-processing"
  }, {
    name: "Security",
    href: "/security"
  }, {
    name: "Compliance",
    href: "/compliance"
  }];
  return <footer className="bg-[#0B0E1F] text-white border-t border-gray-800 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#0B0E1F] bg-[linear-gradient(to_right,#8080803a_1px,transparent_1px),linear-gradient(to_bottom,#8080803a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-slate-600 opacity-15 blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <img src="/lovable-uploads/c6f05c4c-ee88-4c86-a4f7-98e6e90e6071.png" alt="Nvestiv AI CRM for Private Investments Logo" className="h-8 w-8 rounded-lg" />
                  <h2 className="text-2xl font-bold text-white font-harabara lowercase leading-none">
                    nvestiv
                  </h2>
                </div>
                <p className="text-gray-300 max-w-md leading-relaxed">Finally, an AI Operating System that centralizes your scattered work. Emails, files, and software—unified, intelligent, and always at your fingertips.</p>
                
                {/* Contact Info */}
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>80 Atlantic Ave 4th Floor, Toronto, Ontario, Canada, M6K 1X9</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>info@nvestiv.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>1 (888) 831-9886</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map(({
                  icon: Icon,
                  href,
                  label
                }) => <Button key={label} variant="ghost" size="sm" asChild className="p-2 hover:bg-gray-800 rounded-xl text-gray-300 hover:text-white">
                      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                        <Icon className="h-4 w-4" />
                      </a>
                    </Button>)}
                </div>
              </div>
            </div>

            {/* Pages Section */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Pages
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors no-underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors no-underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-sm text-gray-300 hover:text-white transition-colors no-underline">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-gray-300 hover:text-white transition-colors no-underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products Section - Split into 2 columns */}
            <div className="md:col-span-2">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Products
              </h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/iris" className="text-sm text-gray-300 hover:text-white transition-colors no-underline">
                        IRIS
                      </Link>
                    </li>
                    <li>
                      <Link to="/ai-crm" className="text-sm text-gray-300 hover:text-white transition-colors no-underline">
                        CRM
                      </Link>
                    </li>
                    <li>
                      <Link to="/notetaker" className="text-sm text-gray-300 hover:text-white transition-colors no-underline">
                        Notetaker
                      </Link>
                    </li>
                    <li>
                      <Link to="/agents" className="text-sm text-gray-300 hover:text-white transition-colors no-underline">
                        Agents
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/due-diligence" className="text-sm text-gray-300 hover:text-white transition-colors no-underline">
                        Due Diligence
                      </Link>
                    </li>
                    <li>
                      <Link to="/portfolio-management" className="text-sm text-gray-300 hover:text-white transition-colors no-underline">
                        Portfolio Management
                      </Link>
                    </li>
                    <li>
                      <Link to="/marketplace" className="text-sm text-gray-300 hover:text-white transition-colors no-underline">
                        Marketplace
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/terms" className="text-sm text-gray-300 hover:text-white transition-colors no-underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-sm text-gray-300 hover:text-white transition-colors no-underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-sm text-gray-300 hover:text-white transition-colors no-underline">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link to="/data-processing" className="text-sm text-gray-300 hover:text-white transition-colors no-underline">
                    Data Processing
                  </Link>
                </li>
                <li>
                  <Link to="/security" className="text-sm text-gray-300 hover:text-white transition-colors no-underline">
                    Security
                  </Link>
                </li>
                <li>
                  <Link to="/compliance" className="text-sm text-gray-300 hover:text-white transition-colors no-underline">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <Separator className="bg-gray-800" />
        <div className="py-6">
          <div className="flex justify-center w-full">
            <div className="text-sm text-gray-300">
              © {currentYear} Nvestiv. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;