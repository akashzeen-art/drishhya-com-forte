import { PortraitCard } from '@/components/ui/PortraitCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedGrid } from '@/components/ui/AnimatedGrid';
import { getDesiContentRange } from '@shared/desiContent';
import { useVideoPlayer } from '@/context/VideoPlayerContext';

const VOD_GRID = getDesiContentRange(69, 12);

export const VodGridSection = () => {
  const { playVideo } = useVideoPlayer();

  return (
    <section className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="VOD Highlights" subtitle="More to stream" />

        <AnimatedGrid>
          {VOD_GRID.map((item) => (
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
