import { useEffect, useRef } from "react";
import bloombergLogo from "@/assets/logos/bloomberg-logo.png";
import forbesLogo from "@/assets/logos/forbes-logo.png";
import cbsLogo from "@/assets/logos/cbs-logo.png";
import businessInsiderLogo from "@/assets/logos/business-insider-logo.png";
import marketwatchLogo from "@/assets/logos/marketwatch-logo.png";
import financialPostLogo from "@/assets/logos/financial-post-logo.png";

const AsSeenOnCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const logos = [
    { src: financialPostLogo, alt: "Financial Post", name: "Financial Post" },
    { src: marketwatchLogo, alt: "MarketWatch", name: "MarketWatch" },
    { src: bloombergLogo, alt: "Bloomberg", name: "Bloomberg" },
    { src: businessInsiderLogo, alt: "Business Insider", name: "Business Insider" },
    { src: cbsLogo, alt: "CBS", name: "CBS" },
    { src: forbesLogo, alt: "Forbes", name: "Forbes" },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Auto-scroll animation
    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled through half the logos (original set)
      if (scrollPosition >= carousel.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      carousel.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-16 bg-background border-y border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h3 className="text-lg font-medium text-muted-foreground">As Seen On</h3>
          
          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div
              ref={carouselRef}
              className="flex space-x-12 lg:space-x-16 overflow-x-hidden"
              style={{ scrollBehavior: 'auto' }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-16 w-32 lg:w-40"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain opacity-60 hover:opacity-80 transition-opacity filter grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
            
            {/* Gradient Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AsSeenOnCarousel;