import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MyAccount from "./pages/MyAccount";
import AboutUs from "./pages/AboutUs";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import { VideoPlayerProvider } from "@/context/VideoPlayerContext";
import { SiteLayout } from "@/components/layout/SiteLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <VideoPlayerProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/my-account" element={<MyAccount />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </VideoPlayerProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
