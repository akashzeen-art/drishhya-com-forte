import { useScrollProgress } from '@/hooks/useScrollProgress';
import { motion } from 'framer-motion';

export const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-16 left-0 right-0 h-1 bg-white z-40"
      style={{ scaleX: progress / 100 }}
      initial={{ scaleX: 0 }}
    />
  );
};
