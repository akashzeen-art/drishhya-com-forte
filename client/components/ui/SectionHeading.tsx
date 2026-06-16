import { motion } from 'framer-motion';
import { DrishhyaticEase, staggerContainer, viewportOnce } from '@/animations/presets';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={viewportOnce}
    variants={staggerContainer}
    className="mb-8 md:mb-10"
  >
    <motion.div
      variants={{
        hidden: { opacity: 0, scaleX: 0 },
        show: {
          opacity: 1,
          scaleX: 1,
          transition: { duration: 0.6, ease: DrishhyaticEase },
        },
      }}
      className="w-12 h-0.5 bg-white/40 mb-4 origin-left"
    />
    <motion.h2
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: DrishhyaticEase },
        },
      }}
      className="text-4xl md:text-5xl font-display font-bold text-white tracking-wide mb-2"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 16 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.55, ease: DrishhyaticEase, delay: 0.08 },
          },
        }}
        className="text-white/65 text-lg"
      >
        {subtitle}
      </motion.p>
    )}
  </motion.div>
);
