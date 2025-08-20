import { useEffect, useRef } from "react";

const AsSeenOnCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const logos = [
    { src: "/lovable-uploads/de6798b4-d76f-4fd1-b15b-0d23d3d6cf39.png", alt: "Financial Post", name: "Financial Post" },
    { src: "/lovable-uploads/632be4bf-2422-4044-bb35-bdc1297e2a7c.png", alt: "MarketWatch", name: "MarketWatch" },
    { src: "/lovable-uploads/f21a6d0a-679a-4d9f-8868-fd5fd054075b.png", alt: "Bloomberg", name: "Bloomberg" },
    { src: "/lovable-uploads/d2dc2ce4-ee9c-413a-876f-52b2593401c7.png", alt: "Business Insider", name: "Business Insider" },
    { src: "/lovable-uploads/469d1b42-23bf-4a6e-822c-415fef3a34d7.png", alt: "CBS", name: "CBS" },
    { src: "/lovable-uploads/7736c9d6-18c9-451c-8135-9a61754d1b2f.png", alt: "Forbes", name: "Forbes" },
    { src: "/lovable-uploads/c0ad1a8f-2840-497a-8bf1-09b533efd318.png", alt: "Yahoo Finance", name: "Yahoo Finance" },
    { src: "/lovable-uploads/365d1b63-327f-4bf9-a82d-35954fb0b85a.png", alt: "The Globe and Mail", name: "The Globe and Mail" },
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