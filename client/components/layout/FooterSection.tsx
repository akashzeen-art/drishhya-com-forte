import { motion } from 'framer-motion';
import { FOOTER_LEGAL_LINKS } from '@/constants/navigation';
import { Logo } from '@/components/ui/Logo';
import { Link } from 'react-router-dom';

export const FooterSection = () => (
  <footer className="bg-black border-t border-white/8 relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-6 py-14 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center mb-5">
          <Logo size="lg" animate={false} />
        </div>
        <p className="text-white/60 text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed">
          Your gateway to premium desi thriller, crime &amp; drama content
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm mb-10">
          {FOOTER_LEGAL_LINKS.map((link, i) => (
            <span key={link.path} className="flex items-center gap-2">
              {i > 0 && <span className="text-white/25">|</span>}
              <Link
                to={link.path}
                className="text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </div>

        <div className="pt-8 border-t border-white/8">
          <p className="text-xs text-white/40">
            Copyright © 2026, Forte Digital Solutions LLP All Rights Reserved
          </p>
        </div>
      </motion.div>
    </div>
  </footer>
);
