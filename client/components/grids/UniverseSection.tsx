import { motion } from 'framer-motion';
import { PortraitCard } from '@/components/ui/PortraitCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedGrid } from '@/components/ui/AnimatedGrid';
import { getDesiContentRange } from '@shared/desiContent';
import { useVideoPlayer } from '@/context/VideoPlayerContext';

const UNIVERSE = getDesiContentRange(57, 12);

export const UniverseSection = () => {
  const { playVideo } = useVideoPlayer();

  return (
    <section className="py-20 px-4 md:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`space-star-${i}`}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.05, 0.5, 0.05],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Universe" subtitle="Drishhyatic worlds" />

        <AnimatedGrid>
          {UNIVERSE.map((item) => (
            <PortraitCard
              key={item.id}
              title={item.title}
              image={item.portraitThumbnail}
              onPlay={() => playVideo({ title: item.title, video: item.video })}
            />
          ))}
        </AnimatedGrid>
      </div>
    </section>
  );
};
