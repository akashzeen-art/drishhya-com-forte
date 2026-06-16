import { motion } from 'framer-motion';
import { ScrollProgress } from '@/components/layout/ScrollProgress';

import { HeroSection } from '@/components/hero/HeroSection';
import { FeaturedSection } from '@/components/featured/FeaturedSection';
import { TopPicksSection } from '@/components/grids/TopPicksSection';
import { ActionSection } from '@/components/spotlight/ActionSection';
import { TrendingSection } from '@/components/horizontal/TrendingSection';
import { RomanceSection } from '@/components/spotlight/RomanceSection';
import { MostWatchedSection } from '@/components/horizontal/MostWatchedSection';
import { ThrillerSection } from '@/components/spotlight/ThrillerSection';
import { BestOfWeekSection } from '@/components/horizontal/BestOfWeekSection';
import { CriticsChoiceSection } from '@/components/horizontal/CriticsChoiceSection';
import { OttCollectionSection } from '@/components/grids/OttCollectionSection';
import { StaffPicksSection } from '@/components/horizontal/StaffPicksSection';
import { UniverseSection } from '@/components/grids/UniverseSection';
import { VodGridSection } from '@/components/grids/VodGridSection';

import { VodLandscapeSection } from '@/components/vod/VodLandscapeSection';
import { VodLandscapeSection2 } from '@/components/vod/VodLandscapeSection2';
import { VodLandscapeSection3 } from '@/components/vod/VodLandscapeSection3';
import { VodLandscapeSection4 } from '@/components/vod/VodLandscapeSection4';

import { VodPortraitSection } from '@/components/vod/VodPortraitSection';
import { VodPortraitSection2 } from '@/components/vod/VodPortraitSection2';
import { VodPortraitSection3 } from '@/components/vod/VodPortraitSection3';

export default function Index() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollProgress />

      <HeroSection />
      <FeaturedSection />
      <TopPicksSection />
      <ActionSection />
      <TrendingSection />
      <RomanceSection />
      <MostWatchedSection />
      <ThrillerSection />
      <BestOfWeekSection />
      <CriticsChoiceSection />
      <OttCollectionSection />
      <StaffPicksSection />
      <UniverseSection />
      <VodGridSection />

      <VodLandscapeSection />
      <VodLandscapeSection2 />
      <VodLandscapeSection3 />
      <VodLandscapeSection4 />

      <VodPortraitSection />
      <VodPortraitSection2 />
      <VodPortraitSection3 />
    </motion.div>
  );
}
