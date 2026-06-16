import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { DrishhyaticEase } from '@/animations/presets';
import { SubscriptionGateModal } from '@/components/subscription/SubscriptionGateModal';
import {
  grantSubscriptionAccess,
  hasSubscriptionAccess,
  type SubscriptionPack,
} from '@/lib/subscription';

export interface VideoItem {
  title: string;
  video: string;
}

interface VideoPlayerContextValue {
  playVideo: (item: VideoItem) => void;
  openSubscription: () => void;
  hasAccess: boolean;
}

const VideoPlayerContext = createContext<VideoPlayerContextValue | null>(null);

export const useVideoPlayer = () => {
  const context = useContext(VideoPlayerContext);
  if (!context) {
    throw new Error('useVideoPlayer must be used within VideoPlayerProvider');
  }
  return context;
};

export const VideoPlayerProvider = ({ children }: { children: ReactNode }) => {
  const [active, setActive] = useState<VideoItem | null>(null);
  const [hasAccess, setHasAccess] = useState(false);
  const [showSubscription, setShowSubscription] = useState(false);
  const [pendingVideo, setPendingVideo] = useState<VideoItem | null>(null);

  useEffect(() => {
    setHasAccess(hasSubscriptionAccess());
  }, []);

  const playVideo = useCallback(
    (item: VideoItem) => {
      if (hasSubscriptionAccess()) {
        setHasAccess(true);
        setActive(item);
        return;
      }
      setPendingVideo(item);
      setShowSubscription(true);
    },
    [],
  );

  const openSubscription = useCallback(() => {
    setPendingVideo(null);
    setShowSubscription(true);
  }, []);

  const handleSubscriptionComplete = (mobile: string, pack: SubscriptionPack) => {
    grantSubscriptionAccess(mobile, pack);
    setHasAccess(true);
    setShowSubscription(false);
    if (pendingVideo) {
      setActive(pendingVideo);
      setPendingVideo(null);
    }
  };

  const handleCloseSubscription = () => {
    setShowSubscription(false);
    setPendingVideo(null);
  };

  return (
    <VideoPlayerContext.Provider value={{ playVideo, openSubscription, hasAccess }}>
      {children}

      <SubscriptionGateModal
        open={showSubscription}
        onClose={handleCloseSubscription}
        onComplete={handleSubscriptionComplete}
      />

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: DrishhyaticEase }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.9, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 16 }}
              transition={{ duration: 0.45, ease: DrishhyaticEase }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors"
                aria-label="Close video"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-white text-lg font-semibold mb-3">{active.title}</h3>
              <video
                key={active.video}
                src={active.video}
                controls
                controlsList="nodownload"
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
                autoPlay
                className="w-full rounded-lg aspect-video bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </VideoPlayerContext.Provider>
  );
};
