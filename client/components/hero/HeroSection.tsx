import { motion } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';
import { VideoBackground } from '@/components/ui/VideoBackground';
import { getDesiContent } from '@shared/desiContent';
import { useVideoPlayer } from '@/context/VideoPlayerContext';
import { DrishhyaticEase, staggerContainer } from '@/animations/presets';

const HERO_CONTENT = getDesiContent(1)!;

const HERO_VIDEO =
  'https://vz-012bcd01-e4e.b-cdn.net/4c7f3961-ceed-4722-aaae-b53eaa826ca6/play_480p.mp4';

const scrollToContent = () => {
  window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' });
};

export const HeroSection = () => {
  const { playVideo } = useVideoPlayer();

  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[1100px] overflow-hidden">
      <VideoBackground
        src={HERO_VIDEO}
        poster={HERO_CONTENT.landscapeThumbnail}
      />

      {/* Letterbox bars */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-black/80 z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black/80 z-10 pointer-events-none" />

      {/* Content — bottom-left cinematic layout */}
      <div className="relative z-20 h-full flex flex-col justify-end pb-16 md:pb-24 pt-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            className="max-w-2xl lg:max-w-3xl"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: DrishhyaticEase } },
              }}
              className="flex flex-wrap items-center gap-3 mb-5"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/25 backdrop-blur-md text-[10px] md:text-xs font-bold text-white uppercase tracking-[0.25em]">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                Now Streaming
              </span>
              <span className="text-white/50 text-xs font-medium tracking-widest uppercase">
                #{HERO_CONTENT.sno} · Thriller
              </span>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.85, ease: DrishhyaticEase },
                },
              }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 leading-[0.95] tracking-wide drop-shadow-2xl"
            >
              {HERO_CONTENT.title}
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: DrishhyaticEase } },
              }}
              className="text-base md:text-lg text-white/70 mb-8 max-w-xl leading-relaxed"
            >
              Curated desi thriller &amp; crime stories. Immersive visuals, edge-of-your-seat
              drama — stream unlimited on any device.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: DrishhyaticEase } },
              }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white text-black font-bold rounded-md hover:bg-white/95 transition-all shadow-lg shadow-black/30"
                onClick={() =>
                  playVideo({ title: HERO_CONTENT.title, video: HERO_VIDEO })
                }
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                </span>
                Watch Now
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.12)' }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 border border-white/40 text-white font-semibold rounded-md backdrop-blur-sm transition-all"
                onClick={scrollToContent}
              >
                Explore Collection
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        type="button"
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Discover</span>
        <ChevronDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
};
