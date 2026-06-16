import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { scaleIn } from '@/animations/presets';

interface LandscapeCardProps {
  title: string;
  image: string;
  rating?: number;
  duration?: string;
  category?: string;
  onPlay?: () => void;
}

export const LandscapeCard = ({
  title,
  image,
  rating,
  duration,
  category,
  onPlay,
}: LandscapeCardProps) => (
  <motion.div
    variants={scaleIn}
    className="relative flex-shrink-0 w-96 rounded-xl overflow-hidden group cursor-pointer aspect-video"
    whileHover={{ scale: 1.03, y: -3 }}
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
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
      <motion.div
        className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
      >
        <Play className="w-8 h-8 text-white fill-white" />
      </motion.div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 bg-gradient-to-t from-black to-transparent">
      {category && (
        <p className="text-white/65 text-xs uppercase tracking-wider mb-1">{category}</p>
      )}
      <p className="text-white text-sm font-semibold truncate">{title}</p>
      <div className="flex items-center gap-3 text-xs text-white/65 mt-2">
        {rating && <span>⭐ {rating}</span>}
        {duration && <span>{duration}</span>}
      </div>
    </div>

    <div className="absolute inset-0 border border-white/10 rounded-xl group-hover:border-white/30 transition-colors duration-400" />
  </motion.div>
);
