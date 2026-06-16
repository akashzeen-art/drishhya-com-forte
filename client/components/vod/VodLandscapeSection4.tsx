import { AnimatedScrollRow } from '@/components/ui/AnimatedScrollRow';
import { LandscapeCard } from '@/components/ui/LandscapeCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getDesiContentRange } from '@shared/desiContent';
import { useVideoPlayer } from '@/context/VideoPlayerContext';

const OTT_CLASSICS = getDesiContentRange(3, 8);

export const VodLandscapeSection4 = () => {
  const { playVideo } = useVideoPlayer();

  return (
    <section className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="OTT Classics" subtitle="Timeless favourites" />

        <AnimatedScrollRow>
          {OTT_CLASSICS.map((item) => (
            <LandscapeCard
              key={item.id}
              title={item.title}
              image={item.landscapeThumbnail}
              category="OTT"
              onPlay={() => playVideo({ title: item.title, video: item.video })}
            />
          ))}
        </AnimatedScrollRow>
      </div>
    </section>
  );
};
