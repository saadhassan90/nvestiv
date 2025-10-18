import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Moon, Sun, Menu, X, ArrowRight, Brain, Database, ChartBar, Shield } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleProductsMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsProductsOpen(true);
  };

  const handleProductsMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 100); // Small delay to allow cursor movement to submenu
  };

  const handleSubmenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleSubmenuMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 100);
  };

  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4 sm:px-6 overflow-visible">
      <div
        className={`navbar-floating transition-all duration-300 ${
          isScrolled
            ? "shadow-glow scale-[0.98]"
            : "shadow-elegant scale-100"
        }`}
      >
        <div className="px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Centered on mobile, left on desktop */}
            <div className="flex-shrink-0 flex items-center space-x-3">
              <img 
                src="/lovable-uploads/c6f05c4c-ee88-4c86-a4f7-98e6e90e6071.png" 
                alt="Nvestiv AI for Private Investments Platform Logo" 
                className="h-8 w-8 md:h-10 md:w-10 rounded-lg"
              />
              <h1 className="text-xl md:text-2xl font-bold text-foreground tracking-tight font-harabara lowercase">
                nvestiv
              </h1>
            </div>

            {/* Desktop Navigation Menu - Centered */}
            <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2 z-[60]">
              <nav className="flex items-center space-x-1">
                <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2 no-underline">
                  Home
                </Link>
                
                <div 
                  className="relative"
                  onMouseEnter={handleProductsMouseEnter}
                  onMouseLeave={handleProductsMouseLeave}
                >
                  <button className="text-sm font-medium text-foreground hover:text-primary transition-colors bg-transparent hover:bg-muted/50 px-4 py-2 flex items-center gap-1 no-underline">
                    Products
                    <ArrowRight className={`h-3 w-3 transition-transform duration-200 ${isProductsOpen ? 'rotate-90' : 'rotate-0'}`} />
                  </button>
                  
                  {isProductsOpen && (
                    <div 
                      className="absolute top-full left-0 mt-2 z-[70]"
                      onMouseEnter={handleSubmenuMouseEnter}
                      onMouseLeave={handleSubmenuMouseLeave}
                    >
                      <div className="p-8 w-[720px] bg-popover border border-border rounded-lg shadow-xl">
                        <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                          <div className="space-y-6">
                            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Platform</div>
                            
                            <a href="#iris" className="flex items-start gap-3 hover:opacity-70 transition-opacity duration-200 cursor-pointer group no-underline">
                              <Brain className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-sm text-foreground mb-1">IRIS</div>
                                <div className="text-xs text-muted-foreground leading-relaxed">One AI bot to action all your investment workflows automatically</div>
                              </div>
                            </a>
                            
                            <a href="/ai-crm" className="flex items-start gap-3 hover:opacity-70 transition-opacity duration-200 cursor-pointer group no-underline">
                              <Database className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-sm text-foreground mb-1">AI CRM</div>
                                <div className="text-xs text-muted-foreground leading-relaxed">Intelligent relationship management platform built for private markets</div>
                              </div>
                            </a>
                          </div>
                          
                          <div className="space-y-6">
                            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Features</div>
                            
                            <a href="#ai-agents" className="flex items-start gap-3 hover:opacity-70 transition-opacity duration-200 cursor-pointer group no-underline">
                              <ChartBar className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-sm text-foreground mb-1">AI Agents</div>
                                <div className="text-xs text-muted-foreground leading-relaxed">Design custom AI agents with specific capabilities for your investment process</div>
                              </div>
                            </a>
                            
                            <a href="#ai-notetaker" className="flex items-start gap-3 hover:opacity-70 transition-opacity duration-200 cursor-pointer group no-underline">
                              <Shield className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-sm text-foreground mb-1">AI Notetaker</div>
                                <div className="text-xs text-muted-foreground leading-relaxed">Intelligent meeting assistant that captures, organizes, and actions your calls</div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2 no-underline">
                  About
                </Link>
                
                <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2 no-underline">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Theme Toggle */}
              <Button
                variant="theme-toggle"
                size="sm"
                onClick={toggleTheme}
                className="p-2 hover:bg-muted/50 rounded-xl"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>

              {/* Login Button - Desktop */}
              <div className="hidden md:block overflow-visible">
                <Button
                  variant="login"
                  size="sm"
                  className="text-sm font-medium px-6 py-2 overflow-visible"
                  asChild
                >
                  <a href="https://iris.nvestiv.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 overflow-visible no-underline">
                    <span>Log In</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-3 group-hover:scale-110" />
                  </a>
                </Button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button
                  variant="nav-mobile"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 hover:bg-muted/50 rounded-xl"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-4 w-4" />
                  ) : (
                    <Menu className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-border/20">
              <div className="space-y-3">
                <Link to="/" className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2 no-underline">
                  Home
                </Link>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-foreground py-2">Products</div>
                  <div className="pl-4 space-y-2">
                    <a href="/ai-crm" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1 no-underline">
                      AI CRM
                    </a>
                    <a href="#data-enrichment" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1 no-underline">
                      Data Enrichment
                    </a>
                    <a href="#analytics" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1 no-underline">
                      Analytics Suite
                    </a>
                    <a href="#security" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1 no-underline">
                      Security Center
                    </a>
                  </div>
                </div>
                <Link to="/about" className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2 no-underline">
                  About
                </Link>
                <Link to="/contact" className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2 no-underline">
                  Contact
                </Link>
                {/* Mobile Login Button */}
                <div className="pt-2 border-t border-border/20">
                  <Button
                    variant="login"
                    size="sm"
                    className="w-full text-sm font-medium overflow-visible"
                    asChild
                  >
                    <a href="https://iris.nvestiv.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 overflow-visible no-underline">
                      <span>Log In</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-3 group-hover:scale-110" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;