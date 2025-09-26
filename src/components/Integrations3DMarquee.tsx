import React from 'react';
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
  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-card/80 backdrop-blur-sm rounded-lg shadow-sm border border-border/50 flex items-center justify-center p-2 sm:p-3 mb-3 sm:mb-4 group relative overflow-hidden">
    {/* Gradient glow effect */}
    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
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
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];
  
  return (
    <div className={cn("flex flex-col", className)}>
      <div 
        className={cn(
          "flex flex-col",
          direction === 'up' ? 'animate-marquee-up' : 'animate-marquee-down'
        )}
        style={{
          animationDuration: `${duration}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
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
}

export const Integrations3DMarquee: React.FC<Integrations3DMarqueeProps> = ({ className }) => {
  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {/* 3D Container with isometric perspective */}
      <div 
        className="absolute inset-0 flex justify-center items-center px-4 sm:px-0"
        style={{
          perspective: '1000px',
          perspectiveOrigin: 'center center',
        }}
      >
        <div
          className="flex gap-3 sm:gap-6 h-full"
          style={{
            transform: 'rotateX(55deg) rotateZ(-45deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Column 1 - Moving Up */}
          <MarqueeColumn 
            logos={logosColumn1} 
            direction="up" 
            duration={15}
            className="opacity-90"
          />
          
          {/* Column 2 - Moving Down */}
          <MarqueeColumn 
            logos={logosColumn2} 
            direction="down" 
            duration={10}
            className="opacity-95"
          />
          
          {/* Column 3 - Moving Up */}
          <MarqueeColumn 
            logos={logosColumn3} 
            direction="up" 
            duration={12}
            className="opacity-90"
          />
          
          {/* Column 4 - Moving Down */}
          <MarqueeColumn 
            logos={logosColumn4} 
            direction="down" 
            duration={18}
            className="opacity-85"
          />
        </div>
      </div>
      
      {/* Gradient overlay for depth and theme compatibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none" />
      
      {/* Additional border glow effect */}
      <div className="absolute inset-0 rounded-lg opacity-30">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      </div>
    </div>
  );
};

export default Integrations3DMarquee;