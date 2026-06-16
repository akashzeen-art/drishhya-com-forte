import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useParallax } from '@/hooks/useParallax';
import { getDesiContent } from '@shared/desiContent';
import { useVideoPlayer } from '@/context/VideoPlayerContext';

const ROMANCE_CONTENT = getDesiContent(2)!;

export const RomanceSection = () => {
  const { ref, offset } = useParallax(0.18);
  const { playVideo } = useVideoPlayer();

  return (
    <section className="py-20 px-4 md:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Romance" subtitle="Timeless love stories" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h3 className="text-4xl font-display font-bold text-white mb-4">
              {ROMANCE_CONTENT.title}
            </h3>
            <p className="text-white/65 text-lg mb-8">
              Immerse yourself in beautifully crafted love stories. From intimate moments to grand gestures, these films celebrate the complexities and beauty of human connection.
            </p>
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors"
              onClick={() => playVideo({ title: ROMANCE_CONTENT.title, video: ROMANCE_CONTENT.video })}
            >
              Watch Now
            </motion.button>
          </motion.div>

          <motion.div
            ref={ref}
            className="relative h-80 md:h-96 rounded-2xl overflow-hidden order-first md:order-last cursor-pointer"
            style={{ y: offset }}
            onClick={() => playVideo({ title: ROMANCE_CONTENT.title, video: ROMANCE_CONTENT.video })}
          >
            <img
              src={ROMANCE_CONTENT.landscapeThumbnail}
              alt={ROMANCE_CONTENT.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute inset-0 border border-white/10 rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
