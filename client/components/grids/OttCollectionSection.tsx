import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { PortraitCard } from '@/components/ui/PortraitCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedGrid } from '@/components/ui/AnimatedGrid';
import { getDesiContentRange } from '@shared/desiContent';
import { useVideoPlayer } from '@/context/VideoPlayerContext';

const OTT_COLLECTION = getDesiContentRange(37, 12);

export const OttCollectionSection = () => {
  const { playVideo } = useVideoPlayer();

  return (
    <section className="py-20 px-4 md:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.1, 0.8, 0.1] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <SectionHeading title="OTT Collection" subtitle="Watch anywhere, anytime" />

        <AnimatedGrid className="mb-8">
          {OTT_COLLECTION.map((item) => (
            <div key={item.id} className="relative">
              <PortraitCard
                title={item.title}
                image={item.portraitThumbnail}
                onPlay={() => playVideo({ title: item.title, video: item.video })}
              />
              <button
                type="button"
                aria-label={`Save ${item.title}`}
                className="absolute top-3 right-3 p-2 bg-black/60 rounded-full hover:bg-black transition-colors z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <Heart className="w-4 h-4 text-white" />
              </button>
            </div>
          ))}
        </AnimatedGrid>
      </div>
    </section>
  );
};
