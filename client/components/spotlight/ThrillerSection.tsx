import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useParallax } from '@/hooks/useParallax';
import { getDesiContent } from '@shared/desiContent';
import { useVideoPlayer } from '@/context/VideoPlayerContext';

const THRILLER_CONTENT = getDesiContent(3)!;

export const ThrillerSection = () => {
  const { ref, offset } = useParallax(0.18);
  const { playVideo } = useVideoPlayer();

  return (
    <section className="py-20 px-4 md:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
      </div>

      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Thriller" subtitle="Edge of your seat" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            className="relative h-80 md:h-96 rounded-2xl overflow-hidden cursor-pointer"
            style={{ y: offset }}
            onClick={() => playVideo({ title: THRILLER_CONTENT.title, video: THRILLER_CONTENT.video })}
          >
            <img
              src={THRILLER_CONTENT.landscapeThumbnail}
              alt={THRILLER_CONTENT.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/40" />

            <motion.div
              className="absolute inset-0"
              animate={{ opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ background: 'radial-gradient(ellipse at center, transparent 0%, black 100%)' }}
            />

            <div className="absolute inset-0 border border-white/10 rounded-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h3 className="text-4xl font-display font-bold text-white mb-4">
              {THRILLER_CONTENT.title}
            </h3>
            <p className="text-white/65 text-lg mb-8">
              Prepare for intense psychological explorations. Mysteries unfold, suspense builds, and reality bends in ways you won't expect. Every frame keeps you guessing.
            </p>
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors"
              onClick={() => playVideo({ title: THRILLER_CONTENT.title, video: THRILLER_CONTENT.video })}
            >
              Watch Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
