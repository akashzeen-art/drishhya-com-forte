export const DrishhyaticEase = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: DrishhyaticEase },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: DrishhyaticEase },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: DrishhyaticEase },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: DrishhyaticEase },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: DrishhyaticEase },
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

export const staggerContainerFast = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.06,
    },
  },
};

export const crossfade = {
  initial: { opacity: 0, scale: 1.04 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
  transition: { duration: 0.55, ease: DrishhyaticEase },
};

export const viewportOnce = { once: true, margin: '-60px' as const };
export const viewportReveal = { once: false, margin: '-80px' as const };
