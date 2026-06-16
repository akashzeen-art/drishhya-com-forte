import { AnimatedScrollRow } from '@/components/ui/AnimatedScrollRow';
import { LandscapeCard } from '@/components/ui/LandscapeCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getDesiContentRange } from '@shared/desiContent';
import { useVideoPlayer } from '@/context/VideoPlayerContext';

const BEST_OF_WEEK = getDesiContentRange(21, 8);

export const BestOfWeekSection = () => {
  const { playVideo } = useVideoPlayer();

  return (
    <section className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Best of the Week" subtitle="Top rated content" />

        <AnimatedScrollRow>
          {BEST_OF_WEEK.map((item) => (
            <LandscapeCard
              key={item.id}
              title={item.title}
              image={item.landscapeThumbnail}
              onPlay={() => playVideo({ title: item.title, video: item.video })}
            />
          ))}
        </AnimatedScrollRow>
      </div>
    </section>
  );
};
