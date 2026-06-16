import { RankCard } from '@/components/ui/RankCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedScrollRow } from '@/components/ui/AnimatedScrollRow';
import { getDesiContentRange } from '@shared/desiContent';
import { useVideoPlayer } from '@/context/VideoPlayerContext';

const TRENDING = getDesiContentRange(1, 10);

export const TrendingSection = () => {
  const { playVideo } = useVideoPlayer();

  return (
    <section className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Trending" subtitle="Right now worldwide" />

        <AnimatedScrollRow>
          {TRENDING.map((item, i) => (
            <RankCard
              key={item.id}
              rank={i + 1}
              title={item.title}
              image={item.portraitThumbnail}
              onPlay={() => playVideo({ title: item.title, video: item.video })}
            />
          ))}
        </AnimatedScrollRow>
      </div>
    </section>
  );
};
