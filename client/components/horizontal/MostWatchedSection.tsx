import { RankCard } from '@/components/ui/RankCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedScrollRow } from '@/components/ui/AnimatedScrollRow';
import { getDesiContentRange } from '@shared/desiContent';
import { useVideoPlayer } from '@/context/VideoPlayerContext';

const MOST_WATCHED = getDesiContentRange(11, 10);

export const MostWatchedSection = () => {
  const { playVideo } = useVideoPlayer();

  return (
    <section className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Most Watched" subtitle="Audience favorites" />

        <AnimatedScrollRow>
          {MOST_WATCHED.map((item, i) => (
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
