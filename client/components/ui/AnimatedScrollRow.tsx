import type { ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { staggerContainer, viewportOnce } from '@/animations/presets';
import { cn } from '@/lib/utils';

interface AnimatedScrollRowProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
}

export const AnimatedScrollRow = ({
  children,
  className,
  ...props
}: AnimatedScrollRowProps) => (
  <motion.div
    className={cn('flex gap-6 overflow-x-auto scrollbar-hide pb-4', className)}
    initial="hidden"
    whileInView="show"
    viewport={viewportOnce}
    variants={staggerContainer}
    {...props}
  >
    {children}
  </motion.div>
);
