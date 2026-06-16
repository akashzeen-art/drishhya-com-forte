import { PortraitCard } from '@/components/ui/PortraitCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedGrid } from '@/components/ui/AnimatedGrid';
import { getDesiContentRange } from '@shared/desiContent';
import { useVideoPlayer } from '@/context/VideoPlayerContext';

const TOP_PICKS = getDesiContentRange(1, 12);

export const TopPicksSection = () => {
  const { playVideo } = useVideoPlayer();

  return (
    <section className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Top Picks" subtitle="Trending this week" />

        <AnimatedGrid>
          {TOP_PICKS.map((item) => (
            <PortraitCard
              key={item.id}
              title={item.title}
              image={item.portraitThumbnail}
              onPlay={() => playVideo({ title: item.title, video: item.video })}
            />
          ))}
        </AnimatedGrid>
      </div>
    </section>
  );
};
