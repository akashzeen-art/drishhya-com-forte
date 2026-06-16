import { motion } from 'framer-motion';
import { scaleIn } from '@/animations/presets';

interface RankCardProps {
  rank: number;
  title: string;
  image: string;
  onPlay?: () => void;
}

export const RankCard = ({ rank, title, image, onPlay }: RankCardProps) => (
  <motion.div
    variants={scaleIn}
    className="relative flex-shrink-0 w-48 rounded-lg overflow-hidden group cursor-pointer"
    whileHover={{ scale: 1.06, y: -4 }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    onClick={onPlay}
    role={onPlay ? 'button' : undefined}
    tabIndex={onPlay ? 0 : undefined}
    onKeyDown={onPlay ? (e) => e.key === 'Enter' && onPlay() : undefined}
  >
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-500 ease-out"
    />

    <motion.div
      className="absolute -top-2 -left-2 text-8xl font-display font-bold text-white/10 pointer-events-none select-none"
      whileHover={{ color: 'rgba(255,255,255,0.15)' }}
    >
      {rank}
    </motion.div>

    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 bg-gradient-to-t from-black to-transparent">
      <p className="text-white text-xs font-semibold line-clamp-2">{title}</p>
    </div>

    <div className="absolute inset-0 border border-white/10 rounded-lg group-hover:border-white/30 transition-colors duration-400" />
  </motion.div>
);
