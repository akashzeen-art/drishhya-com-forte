import { AnimatedScrollRow } from '@/components/ui/AnimatedScrollRow';
import { LandscapeCard } from '@/components/ui/LandscapeCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DESI_CONTENT } from '@shared/desiContent';
import { useVideoPlayer } from '@/context/VideoPlayerContext';

const OTT_ORIGINALS = [...DESI_CONTENT.slice(96), ...DESI_CONTENT.slice(0, 2)];

export const VodLandscapeSection3 = () => {
  const { playVideo } = useVideoPlayer();

  return (
    <section className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="OTT Originals" subtitle="Exclusive streaming" />

        <AnimatedScrollRow>
          {OTT_ORIGINALS.map((item) => (
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
