import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface VideoBackgroundProps {
  src?: string;
  poster?: string;
  className?: string;
}

export const VideoBackground = ({ src, poster, className }: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const play = () => {
      video.play().catch(() => {
        /* autoplay blocked — poster remains visible */
      });
    };

    if (video.readyState >= 2) {
      setReady(true);
      play();
    } else {
      video.addEventListener('loadeddata', () => {
        setReady(true);
        play();
      });
    }
  }, [src]);

  return (
    <div className={cn('absolute inset-0 overflow-hidden bg-black', className)}>
      {poster && (
        <img
          src={poster}
          alt=""
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-1000',
            ready ? 'opacity-0' : 'opacity-100',
          )}
          aria-hidden
        />
      )}

      {src && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={poster}
          className={cn(
            'absolute inset-0 w-full h-full object-cover scale-105 animate-hero-video-zoom',
            ready ? 'opacity-100' : 'opacity-0',
            'transition-opacity duration-1000',
          )}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.45)_100%)]" />

      {/* Cinematic grade */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />

      {/* Subtle film grain */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
