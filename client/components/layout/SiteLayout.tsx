import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { FooterSection } from '@/components/layout/FooterSection';
import { ScrollToTop } from '@/components/layout/ScrollToTop';

export const SiteLayout = () => (
  <div className="bg-black min-h-screen">
    <Navbar />
    <Outlet />
    <FooterSection />
    <ScrollToTop />
  </div>
);
