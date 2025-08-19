import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";

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
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4 sm:px-6">
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
            <div className="flex-shrink-0">
              <h1 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
                Nvestiv
              </h1>
            </div>

            {/* Desktop Navigation Menu - Centered */}
            <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              {/* Navigation links will be added here */}
              <div className="flex items-center space-x-8">
                <a href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Home
                </a>
                <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  About
                </a>
                <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Services
                </a>
                <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
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
              <div className="hidden md:block">
                <Button
                  size="sm"
                  className="text-sm font-medium px-4 py-2"
                  asChild
                >
                  <a href="https://iris.nvestiv.com" target="_blank" rel="noopener noreferrer">
                    Log In
                  </a>
                </Button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
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
                <a href="#about" className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
                  About
                </a>
                <a href="#services" className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
                  Services
                </a>
                <a href="#contact" className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
                  Contact
                </a>
                {/* Mobile Login Button */}
                <div className="pt-2 border-t border-border/20">
                  <Button
                    size="sm"
                    className="w-full text-sm font-medium"
                    asChild
                  >
                    <a href="https://iris.nvestiv.com" target="_blank" rel="noopener noreferrer">
                      Log In
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