import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { scaleIn } from '@/animations/presets';

interface PortraitCardProps {
  title: string;
  image: string;
  rating?: number;
  duration?: string;
  onPlay?: () => void;
}

export const PortraitCard = ({ title, image, rating, duration, onPlay }: PortraitCardProps) => (
  <motion.div
    variants={scaleIn}
    className="relative flex-shrink-0 overflow-hidden rounded-lg aspect-[2/3] group cursor-pointer"
    whileHover={{ scale: 1.05, y: -4 }}
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
      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500 ease-out"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
      <motion.div
        className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
      >
        <Play className="w-7 h-7 text-white fill-white" />
      </motion.div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 bg-gradient-to-t from-black to-transparent">
      <p className="text-white text-sm font-semibold truncate">{title}</p>
      <div className="flex items-center gap-2 text-xs text-white/65 mt-1">
        {rating && <span>⭐ {rating}</span>}
        {duration && <span>{duration}</span>}
      </div>
    </div>

    <div className="absolute inset-0 border border-white/10 rounded-lg group-hover:border-white/40 transition-colors duration-400" />
  </motion.div>
);
