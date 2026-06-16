import { AnimatePresence, motion } from 'framer-motion';
import { Play, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getDesiContentRange } from '@shared/desiContent';
import { useVideoPlayer } from '@/context/VideoPlayerContext';
import { DrishhyaticEase } from '@/animations/presets';
import { cn } from '@/lib/utils';

const FEATURED_ITEMS = getDesiContentRange(1, 3).map((item) => ({
  ...item,
  image: item.landscapeThumbnail,
  description:
    'A gripping Drishhyatic experience filled with suspense, mystery, and edge-of-your-seat storytelling.',
}));

const AUTO_ADVANCE_MS = 8000;

export const FeaturedSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const selected = FEATURED_ITEMS[selectedIndex];
  const { playVideo } = useVideoPlayer();

  const goTo = useCallback((index: number) => {
    setSelectedIndex(index);
    setProgressKey((k) => k + 1);
  }, []);

  const goNext = useCallback(() => {
    goTo((selectedIndex + 1) % FEATURED_ITEMS.length);
  }, [goTo, selectedIndex]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(goNext, AUTO_ADVANCE_MS);
    return () => clearTimeout(timer);
  }, [selectedIndex, isPaused, goNext]);

  const handlePlay = () => {
    playVideo({ title: selected.title, video: selected.video });
  };

  return (
    <section
      className="py-16 md:py-20 px-4 md:px-8 bg-black relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Featured" subtitle="Handpicked selections" />

        {/* Player + thumbnails — flex row on desktop so heights match */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 mb-8">
          {/* Main player */}
          <div className="w-full lg:flex-[3] lg:min-w-0">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden group shadow-2xl shadow-black/60 ring-1 ring-white/10 bg-zinc-900">
              <AnimatePresence mode="wait">
                <motion.button
                  key={selected.id}
                  type="button"
                  className="absolute inset-0 w-full h-full cursor-pointer text-left"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: DrishhyaticEase }}
                  onClick={handlePlay}
                  aria-label={`Play ${selected.title}`}
                >
                  <motion.img
                    src={selected.image}
                    alt={selected.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.05 }}
                    transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: 'linear' }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

                  {/* Play on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center">
                      <Play className="w-8 h-8 md:w-9 md:h-9 text-white fill-white ml-1" />
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-[10px] md:text-xs font-semibold text-white tracking-wider uppercase">
                    Featured · #{selected.sno}
                  </div>
                </motion.button>
              </AnimatePresence>

              {/* Progress */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-10">
                <div
                  key={progressKey}
                  className="h-full bg-white animate-progress-fill"
                  style={{
                    animationDuration: `${AUTO_ADVANCE_MS}ms`,
                    animationPlayState: isPaused ? 'paused' : 'running',
                  }}
                />
              </div>
            </div>

            {/* Dot indicators — mobile only (thumbnails scroll below) */}
            <div className="flex lg:hidden justify-center gap-2 mt-3">
              {FEATURED_ITEMS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goTo(idx)}
                  className={cn(
                    'h-1.5 rounded-full transition-all duration-300',
                    idx === selectedIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/30',
                  )}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Side thumbnails — equal height slots on desktop */}
          <div className="w-full lg:flex-[2] lg:min-w-0 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible scrollbar-hide snap-x snap-mandatory lg:snap-none pb-1 lg:pb-0">
            {FEATURED_ITEMS.map((item, idx) => {
              const isActive = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTo(idx)}
                  className={cn(
                    'relative shrink-0 snap-start text-left overflow-hidden rounded-xl transition-all duration-300',
                    'w-[72%] sm:w-[48%] h-[120px]',
                    'lg:w-full lg:flex-1 lg:h-auto lg:min-h-0',
                    isActive
                      ? 'ring-2 ring-white shadow-lg shadow-white/10'
                      : 'ring-1 ring-white/15 hover:ring-white/40 opacity-80 hover:opacity-100',
                  )}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div
                    className={cn(
                      'absolute inset-0 transition-colors duration-300',
                      isActive ? 'bg-black/25' : 'bg-black/55',
                    )}
                  />

                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-white" />
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-2.5 md:p-3 bg-gradient-to-t from-black/95 via-black/50 to-transparent">
                    <p
                      className={cn(
                        'text-[11px] md:text-xs font-semibold line-clamp-2 leading-tight',
                        isActive ? 'text-white' : 'text-white/75',
                      )}
                    >
                      {item.title}
                    </p>
                  </div>

                  {isActive && (
                    <div className="absolute top-2 right-2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center">
                      <Play className="w-2.5 h-2.5 md:w-3 md:h-3 text-black fill-black ml-px" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Info & actions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: DrishhyaticEase }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pt-2 border-t border-white/10"
          >
            <div className="min-w-0 flex-1">
              <p className="text-white/45 text-xs uppercase tracking-[0.2em] mb-2">
                Now featuring
              </p>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-white mb-2 tracking-wide truncate">
                {selected.title}
              </h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed line-clamp-2 md:line-clamp-none">
                {selected.description}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <motion.button
                type="button"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors text-sm md:text-base"
                onClick={handlePlay}
              >
                <Play className="w-4 h-4 fill-black shrink-0" />
                Watch Now
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-1 px-4 md:px-5 py-2.5 md:py-3 border border-white/25 text-white font-semibold rounded-lg hover:border-white/60 hover:bg-white/5 transition-all text-sm md:text-base"
                onClick={goNext}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
