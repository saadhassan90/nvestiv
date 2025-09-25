import React from 'react';

interface ListeningWaveformProps {
  className?: string;
}

export const ListeningWaveform: React.FC<ListeningWaveformProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      <div className="w-0.5 bg-red-500 rounded-full animate-pulse" style={{ 
        height: '6px',
        animationDelay: '0ms',
        animationDuration: '600ms'
      }}></div>
      <div className="w-0.5 bg-red-500 rounded-full animate-pulse" style={{ 
        height: '12px',
        animationDelay: '100ms',
        animationDuration: '600ms'
      }}></div>
      <div className="w-0.5 bg-red-500 rounded-full animate-pulse" style={{ 
        height: '8px',
        animationDelay: '200ms',
        animationDuration: '600ms'
      }}></div>
      <div className="w-0.5 bg-red-500 rounded-full animate-pulse" style={{ 
        height: '14px',
        animationDelay: '300ms',
        animationDuration: '600ms'
      }}></div>
      <div className="w-0.5 bg-red-500 rounded-full animate-pulse" style={{ 
        height: '10px',
        animationDelay: '400ms',
        animationDuration: '600ms'
      }}></div>
      <div className="w-0.5 bg-red-500 rounded-full animate-pulse" style={{ 
        height: '6px',
        animationDelay: '500ms',
        animationDuration: '600ms'
      }}></div>
    </div>
  );
};