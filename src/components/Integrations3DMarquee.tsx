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

interface LogoItem {
  src: string;
  alt: string;
  name: string;
}

// Define logo arrays for each column
const logosColumn1: LogoItem[] = [
  { src: pitchbookLogo, alt: 'PitchBook', name: 'PitchBook' },
  { src: quickbooksLogo, alt: 'QuickBooks', name: 'QuickBooks' },
  { src: allvueLogo, alt: 'Allvue', name: 'Allvue' },
  { src: preqinLogo, alt: 'Preqin', name: 'Preqin' },
  { src: fintrxLogo, alt: 'FINTRx', name: 'FINTRx' },
];

const logosColumn2: LogoItem[] = [
  { src: addepar_logo, alt: 'Addepar', name: 'Addepar' },
  { src: sageLogo, alt: 'Sage', name: 'Sage' },
  { src: trelloLogo, alt: 'Trello', name: 'Trello' },
  { src: outlookLogo, alt: 'Outlook', name: 'Outlook' },
  { src: dropboxLogo, alt: 'Dropbox', name: 'Dropbox' },
];

const logosColumn3: LogoItem[] = [
  { src: fintrxLogo, alt: 'FINTRx', name: 'FINTRx' },
  { src: pitchbookLogo, alt: 'PitchBook', name: 'PitchBook' },
  { src: sageLogo, alt: 'Sage', name: 'Sage' },
  { src: allvueLogo, alt: 'Allvue', name: 'Allvue' },
  { src: quickbooksLogo, alt: 'QuickBooks', name: 'QuickBooks' },
];

const logosColumn4: LogoItem[] = [
  { src: dropboxLogo, alt: 'Dropbox', name: 'Dropbox' },
  { src: addepar_logo, alt: 'Addepar', name: 'Addepar' },
  { src: preqinLogo, alt: 'Preqin', name: 'Preqin' },
  { src: trelloLogo, alt: 'Trello', name: 'Trello' },
  { src: outlookLogo, alt: 'Outlook', name: 'Outlook' },
];

interface LogoCardProps {
  logo: LogoItem;
}

const LogoCard: React.FC<LogoCardProps> = ({ logo }) => (
  <div className="flex-shrink-0 w-20 h-20 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center p-3 mb-4">
    <img
      src={logo.src}
      alt={logo.alt}
      className="max-w-full max-h-full object-contain"
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
        className="absolute inset-0 flex justify-center items-center"
        style={{
          perspective: '1000px',
          perspectiveOrigin: 'center center',
        }}
      >
        <div
          className="flex gap-6 h-full"
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
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20 pointer-events-none" />
    </div>
  );
};

export default Integrations3DMarquee;