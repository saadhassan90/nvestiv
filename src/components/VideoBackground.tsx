import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface VideoBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  videoUrl?: string;
  fallbackColor?: string;
}

export function VideoBackground({
  children,
  className,
  videoUrl = "https://videos.pexels.com/video-files/3141207/3141207-uhd_2560_1440_25fps.mp4", // Abstract tech background
  fallbackColor = "bg-gray-900"
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.75; // Slower playback for subtle effect
    }
  }, []);

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* Video Background */}
      <div className="absolute inset-0 -z-10">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          onError={() => {
            // Fallback if video fails to load
            if (videoRef.current) {
              videoRef.current.style.display = 'none';
            }
          }}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
        
        {/* Fallback background */}
        <div className={cn("absolute inset-0 -z-10", fallbackColor)} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}