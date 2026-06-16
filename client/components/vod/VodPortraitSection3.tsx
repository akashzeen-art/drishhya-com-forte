import { AnimatedScrollRow } from '@/components/ui/AnimatedScrollRow';
import { PortraitCard } from '@/components/ui/PortraitCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getDesiContentRange } from '@shared/desiContent';
import { useVideoPlayer } from '@/context/VideoPlayerContext';

const VOD_PREMIUM = getDesiContentRange(21, 10);

export const VodPortraitSection3 = () => {
  const { playVideo } = useVideoPlayer();

  return (
    <section className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Premium VOD" subtitle="Exclusive titles" />

        <AnimatedScrollRow className="w-full">
          {VOD_PREMIUM.map((item) => (
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
