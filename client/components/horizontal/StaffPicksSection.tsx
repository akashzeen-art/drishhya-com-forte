import { AnimatedScrollRow } from '@/components/ui/AnimatedScrollRow';
import { LandscapeCard } from '@/components/ui/LandscapeCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getDesiContentRange } from '@shared/desiContent';
import { useVideoPlayer } from '@/context/VideoPlayerContext';

const STAFF_PICKS = getDesiContentRange(49, 8);

export const StaffPicksSection = () => {
  const { playVideo } = useVideoPlayer();

  return (
    <section className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Staff Picks" subtitle="Curated by our team" />

        <AnimatedScrollRow>
          {STAFF_PICKS.map((item) => (
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
