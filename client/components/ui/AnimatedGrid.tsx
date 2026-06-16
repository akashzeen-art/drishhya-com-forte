import type { ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { staggerContainerFast, viewportOnce } from '@/animations/presets';
import { cn } from '@/lib/utils';

interface AnimatedGridProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
}

export const AnimatedGrid = ({
  children,
  className,
  ...props
}: AnimatedGridProps) => (
  <motion.div
    className={cn('grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4', className)}
    initial="hidden"
    whileInView="show"
    viewport={viewportOnce}
    variants={staggerContainerFast}
    {...props}
  >
    {children}
  </motion.div>
);
