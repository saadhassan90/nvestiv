import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

// Import all integration logos
import allvueLogo from '@/assets/logos/allvue-logo.png';
import outlookLogo from '@/assets/logos/outlook-logo.png';
import pitchbookLogo from '@/assets/logos/pitchbook-logo.png';
import sageLogo from '@/assets/logos/sage-logo.png';
import addepar_logo from '@/assets/logos/addepar-logo.png';
import fintrxLogo from '@/assets/logos/fintrx-logo.png';
import dropboxLogo from '@/assets/logos/dropbox-logo.png';
import trelloLogo from '@/assets/logos/trello-logo.png';
import quickbooksLogo from '@/assets/logos/quickbooks-logo.png';
import preqinLogo from '@/assets/logos/preqin-logo.jpeg';
import cartaLogo from '@/assets/logos/carta-logo.png';
import gmailLogo from '@/assets/logos/gmail-logo.png';
import juniperSquareLogo from '@/assets/logos/juniper-square-logo.png';
import zoomLogo from '@/assets/logos/zoom-logo.jpeg';
import sscLogo from '@/assets/logos/ssc-logo.jpeg';
import efrontLogo from '@/assets/logos/efront-logo.png';
import zoominfoLogo from '@/assets/logos/zoominfo-logo.png';
import pinnacleLogo from '@/assets/logos/pinnacle-logo.png';
import excelLogo from '@/assets/logos/excel-logo.png';

interface LogoItem {
  src: string;
  alt: string;
  name: string;
}

// Define logo arrays for each column - no duplicates
const logosColumn1: LogoItem[] = [
  { src: pitchbookLogo, alt: 'PitchBook', name: 'PitchBook' },
  { src: cartaLogo, alt: 'Carta', name: 'Carta' },
  { src: juniperSquareLogo, alt: 'Juniper Square', name: 'Juniper Square' },
  { src: efrontLogo, alt: 'eFront', name: 'eFront' },
  { src: excelLogo, alt: 'Microsoft Excel', name: 'Microsoft Excel' },
];

const logosColumn2: LogoItem[] = [
  { src: addepar_logo, alt: 'Addepar', name: 'Addepar' },
  { src: gmailLogo, alt: 'Gmail', name: 'Gmail' },
  { src: zoomLogo, alt: 'Zoom', name: 'Zoom' },
  { src: pinnacleLogo, alt: 'Pinnacle Financial Partners', name: 'Pinnacle Financial Partners' },
  { src: outlookLogo, alt: 'Outlook', name: 'Outlook' },
];

const logosColumn3: LogoItem[] = [
  { src: allvueLogo, alt: 'Allvue', name: 'Allvue' },
  { src: sscLogo, alt: 'SS&C', name: 'SS&C' },
  { src: zoominfoLogo, alt: 'ZoomInfo', name: 'ZoomInfo' },
  { src: sageLogo, alt: 'Sage', name: 'Sage' },
  { src: dropboxLogo, alt: 'Dropbox', name: 'Dropbox' },
];

const logosColumn4: LogoItem[] = [
  { src: fintrxLogo, alt: 'FINTRx', name: 'FINTRx' },
  { src: preqinLogo, alt: 'Preqin', name: 'Preqin' },
  { src: quickbooksLogo, alt: 'QuickBooks', name: 'QuickBooks' },
  { src: trelloLogo, alt: 'Trello', name: 'Trello' },
];

interface LogoCardProps {
  logo: LogoItem;
}

const LogoCard: React.FC<LogoCardProps> = ({ logo }) => (
  <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-xl shadow-lg border border-border/30 flex items-center justify-center p-3 sm:p-4 mb-4 sm:mb-6 group relative overflow-hidden">
    {/* Gradient glow effect */}
    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
    <img
      src={logo.src}
      alt={logo.alt}
      className="max-w-full max-h-full object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
      loading="lazy"
    />
  </div>
);

interface MarqueeColumnProps {
  logos: LogoItem[];
  direction: 'up' | 'down';
  duration: number;
  className?: string;
}

const MarqueeColumn: React.FC<MarqueeColumnProps> = ({ logos, direction, duration, className }) => {
  // Duplicate logos for cascade effect - final position is at bottom
  const duplicatedLogos = [...logos, ...logos];
  
  return (
    <div className={cn("flex flex-col h-full overflow-hidden", className)}>
      <div 
        className="flex flex-col"
        style={{
          transform: 'translateY(100%)', // Start from bottom (resting position)
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <LogoCard key={`${logo.name}-${index}`} logo={logo} />
        ))}
      </div>
    </div>
  );
};

interface Integrations3DMarqueeProps {
  className?: string;
  triggerAnimation?: boolean;
}

export const Integrations3DMarquee: React.FC<Integrations3DMarqueeProps> = ({ className, triggerAnimation = false }) => {
  const [animationStage, setAnimationStage] = useState<'idle' | 'cascading' | 'settled'>('idle');

  useEffect(() => {
    if (triggerAnimation && animationStage === 'idle') {
      setAnimationStage('cascading');
      
      // Settle to final position after cascade
      const timer = setTimeout(() => {
        setAnimationStage('settled');
      }, 2500);
      
      return () => clearTimeout(timer);
    }
  }, [triggerAnimation, animationStage]);

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {/* Studio lighting background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-gradient-to-b from-white/20 via-transparent to-transparent dark:from-white/10 blur-3xl" />
      
      {/* 3D Container with isometric perspective */}
      <div 
        className="absolute inset-0 flex justify-center items-center px-2 sm:px-4"
        style={{
          perspective: '1200px',
          perspectiveOrigin: 'center center',
        }}
      >
        <div
          className="flex gap-2 sm:gap-4 h-full scale-110 sm:scale-125"
          style={{
            transform: 'rotateX(55deg) rotateZ(-45deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Column 1 */}
          <div 
            className={cn(
              "transition-all duration-700 ease-out",
              animationStage === 'cascading' && "animate-cascade-1"
            )}
          >
            <MarqueeColumn 
              logos={logosColumn1} 
              direction="up" 
              duration={1.5}
              className="opacity-90"
            />
          </div>
          
          {/* Column 2 */}
          <div 
            className={cn(
              "transition-all duration-700 ease-out delay-200",
              animationStage === 'cascading' && "animate-cascade-2"
            )}
          >
            <MarqueeColumn 
              logos={logosColumn2} 
              direction="down" 
              duration={1.2}
              className="opacity-95"
            />
          </div>
          
          {/* Column 3 */}
          <div 
            className={cn(
              "transition-all duration-700 ease-out delay-400",
              animationStage === 'cascading' && "animate-cascade-3"
            )}
          >
            <MarqueeColumn 
              logos={logosColumn3} 
              direction="up" 
              duration={1.8}
              className="opacity-90"
            />
          </div>
          
          {/* Column 4 */}
          <div 
            className={cn(
              "transition-all duration-700 ease-out delay-600",
              animationStage === 'cascading' && "animate-cascade-4"
            )}
          >
            <MarqueeColumn 
              logos={logosColumn4} 
              direction="down" 
              duration={2.0}
              className="opacity-85"
            />
          </div>
        </div>
      </div>
      
      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/10 pointer-events-none" />
      
      {/* Border glow effect */}
      <div className="absolute inset-0 rounded-lg opacity-20">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      </div>
    </div>
  );
};

export default Integrations3DMarquee;