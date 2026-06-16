import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '@/constants/navigation';
import { cn } from '@/lib/utils';
import { DrishhyaticEase } from '@/animations/presets';

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, close]);

  const menuPortal =
    typeof document !== 'undefined'
      ? createPortal(
          <AnimatePresence>
            {open && (
              <div key="burger-menu-root" className="fixed inset-0 z-[120]">
                <motion.button
                  type="button"
                  aria-label="Close menu"
                  className="absolute inset-0 bg-black/75 backdrop-blur-sm cursor-default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={close}
                />

                <motion.aside
                  role="dialog"
                  aria-modal="true"
                  aria-label="Navigation menu"
                  className="absolute top-0 right-0 h-full w-[min(100vw,20rem)] bg-zinc-950 border-l border-white/10 shadow-2xl flex flex-col"
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ duration: 0.35, ease: DrishhyaticEase }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between px-5 h-16 border-b border-white/10 shrink-0">
                    <span className="text-lg font-display font-bold text-white tracking-wide">
                      Drishhya
                    </span>
                    <button
                      type="button"
                      onClick={close}
                      className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                      aria-label="Close menu"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <nav className="flex-1 overflow-y-auto py-4 px-3">
                    <ul className="space-y-1">
                      {NAV_ITEMS.map((item, i) => {
                        const isActive =
                          item.path === '/'
                            ? location.pathname === '/'
                            : location.pathname === item.path;

                        return (
                          <motion.li
                            key={item.path}
                            initial={{ opacity: 0, x: 16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.04 + i * 0.03, ease: DrishhyaticEase }}
                          >
                            <Link
                              to={item.path}
                              onClick={close}
                              className={cn(
                                'block px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200',
                                isActive
                                  ? 'bg-white text-black'
                                  : 'text-white/75 hover:text-white hover:bg-white/10',
                              )}
                            >
                              {item.label}
                            </Link>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </nav>

                  <div className="p-5 border-t border-white/10 shrink-0">
                    <p className="text-white/40 text-xs text-center">
                      Premium desi thriller &amp; drama streaming
                    </p>
                  </div>
                </motion.aside>
              </div>
            )}
          </AnimatePresence>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative z-10 p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
        aria-label="Open menu"
        aria-expanded={open}
      >
        <Menu className="w-6 h-6" />
      </button>
      {menuPortal}
    </>
  );
};
