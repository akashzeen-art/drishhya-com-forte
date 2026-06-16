import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useParallax } from '@/hooks/useParallax';
import { getDesiContent } from '@shared/desiContent';
import { useVideoPlayer } from '@/context/VideoPlayerContext';

const ACTION_CONTENT = getDesiContent(1)!;

export const ActionSection = () => {
  const { ref, offset } = useParallax(0.18);
  const { playVideo } = useVideoPlayer();

  return (
    <section className="py-20 px-4 md:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Action" subtitle="High octane adventures" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            className="relative h-80 md:h-96 rounded-2xl overflow-hidden cursor-pointer"
            style={{ y: offset }}
            onClick={() => playVideo({ title: ACTION_CONTENT.title, video: ACTION_CONTENT.video })}
          >
            <img
              src={ACTION_CONTENT.landscapeThumbnail}
              alt={ACTION_CONTENT.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            <motion.div
              className="absolute top-6 right-6 px-4 py-2 border border-white/40 rounded-full text-white text-sm font-semibold backdrop-blur-sm"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              TOP RATED
            </motion.div>

            <div className="absolute inset-0 border border-white/10 rounded-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h3 className="text-4xl font-display font-bold text-white mb-4">
              {ACTION_CONTENT.title}
            </h3>
            <p className="text-white/65 text-lg mb-8">
              Experience heart-pounding adventures that push the boundaries of Drishhya. From high-speed chases to gravity-defying sequences, these films deliver pure adrenaline.
            </p>
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors"
              onClick={() => playVideo({ title: ACTION_CONTENT.title, video: ACTION_CONTENT.video })}
            >
              Watch Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
