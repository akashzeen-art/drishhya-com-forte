import { AnimatedScrollRow } from '@/components/ui/AnimatedScrollRow';
import { PortraitCard } from '@/components/ui/PortraitCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getDesiContentRange } from '@shared/desiContent';
import { useVideoPlayer } from '@/context/VideoPlayerContext';

const VOD_STREAMS = getDesiContentRange(11, 10);

export const VodPortraitSection2 = () => {
  const { playVideo } = useVideoPlayer();

  return (
    <section className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="VOD Streams" subtitle="Watch on demand" />

        <AnimatedScrollRow className="w-full">
          {VOD_STREAMS.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-48">
              <PortraitCard
                title={item.title}
                image={item.portraitThumbnail}
                onPlay={() => playVideo({ title: item.title, video: item.video })}
              />
            </div>
          ))}
        </AnimatedScrollRow>
      </div>
    </section>
  );
};
