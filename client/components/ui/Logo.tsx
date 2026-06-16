import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const sizeClasses = {
  sm: 'h-12 sm:h-14 max-w-[160px] sm:max-w-[190px]',
  md: 'h-16 sm:h-[4.5rem] max-w-[210px] sm:max-w-[250px]',
  lg: 'h-24 sm:h-28 max-w-[280px] sm:max-w-[320px]',
};

interface LogoProps {
  size?: keyof typeof sizeClasses;
  className?: string;
  linked?: boolean;
  animate?: boolean;
}

export const Logo = ({
  size = 'sm',
  className,
  linked = true,
  animate = true,
}: LogoProps) => {
  const image = (
    <img
      src="/logo.png"
      alt="Drishhya"
      className={cn('w-auto object-contain object-left', sizeClasses[size], className)}
      width={220}
      height={64}
      decoding="async"
    />
  );

  const content = animate ? (
    <motion.span
      className="inline-flex items-center"
      whileHover={{ scale: 1.03, opacity: 0.92 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
    >
      {image}
    </motion.span>
  ) : (
    <span className="inline-flex items-center">{image}</span>
  );

  if (linked) {
    return (
      <Link to="/" className="inline-flex items-center shrink-0" aria-label="Drishhya home">
        {content}
      </Link>
    );
  }

  return content;
};
