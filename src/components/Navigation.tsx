import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Moon, Sun, Menu, X, ArrowRight, Brain, Database, ChartBar, Shield } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

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

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4 sm:px-6 overflow-visible">
      <div
        className={`navbar-floating transition-all duration-300 ${
          isScrolled
            ? "shadow-glow scale-[0.98]"
            : "shadow-elegant scale-100"
        }`}
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Centered on mobile, left on desktop */}
            <div className="flex-shrink-0 flex items-center space-x-3">
              <img 
                src="/lovable-uploads/c6f05c4c-ee88-4c86-a4f7-98e6e90e6071.png" 
                alt="Nvestiv Logo" 
                className="h-8 w-8 md:h-10 md:w-10"
              />
              <h1 className="text-xl md:text-2xl font-bold text-foreground tracking-tight font-harabara lowercase">
                nvestiv
              </h1>
            </div>

            {/* Desktop Navigation Menu - Centered */}
            <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2">
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                      Products
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[600px] grid-cols-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg border">
                        <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Brain className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">AI CRM</h3>
                            <p className="text-sm text-muted-foreground">Intelligent customer relationship management powered by AI</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Database className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">Data Enrichment</h3>
                            <p className="text-sm text-muted-foreground">Enhanced data insights and enrichment services</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <ChartBar className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">Analytics Suite</h3>
                            <p className="text-sm text-muted-foreground">Comprehensive analytics and reporting tools</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Shield className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">Security Center</h3>
                            <p className="text-sm text-muted-foreground">Advanced security and compliance management</p>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2">
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2">
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
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
                  variant="default"
                  size="sm"
                  className="text-sm font-medium px-6 py-2 overflow-visible"
                  asChild
                >
                  <a href="https://iris.nvestiv.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 overflow-visible">
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
                <a href="#home" className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
                  Home
                </a>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-foreground py-2">Products</div>
                  <div className="pl-4 space-y-2">
                    <a href="#ai-crm" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                      AI CRM
                    </a>
                    <a href="#data-enrichment" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                      Data Enrichment
                    </a>
                    <a href="#analytics" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                      Analytics Suite
                    </a>
                    <a href="#security" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                      Security Center
                    </a>
                  </div>
                </div>
                <a href="#about" className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
                  About
                </a>
                <a href="#contact" className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
                  Contact
                </a>
                {/* Mobile Login Button */}
                <div className="pt-2 border-t border-border/20">
                  <Button
                    variant="default"
                    size="sm"
                    className="w-full text-sm font-medium overflow-visible"
                    asChild
                  >
                    <a href="https://iris.nvestiv.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 overflow-visible">
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