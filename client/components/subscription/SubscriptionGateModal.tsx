import { AnimatePresence, motion } from 'framer-motion';
import { Check, Smartphone, X } from 'lucide-react';
import { useState } from 'react';
import { DrishhyaticEase } from '@/animations/presets';
import {
  PACKS,
  type SubscriptionPack,
  isValidMobile,
} from '@/lib/subscription';
import { cn } from '@/lib/utils';

type Step = 'mobile' | 'pack' | 'success';

interface SubscriptionGateModalProps {
  open: boolean;
  onClose: () => void;
  onComplete: (mobile: string, pack: SubscriptionPack) => void;
}

export const SubscriptionGateModal = ({
  open,
  onClose,
  onComplete,
}: SubscriptionGateModalProps) => {
  const [step, setStep] = useState<Step>('mobile');
  const [mobile, setMobile] = useState('');
  const [selectedPack, setSelectedPack] = useState<SubscriptionPack>('weekly');
  const [error, setError] = useState('');

  const handleMobileChange = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    setMobile(digits);
    setError('');
  };

  const handleContinue = () => {
    if (!isValidMobile(mobile)) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    setStep('pack');
  };

  const handleSubscribe = () => {
    setStep('success');
    setTimeout(() => {
      onComplete(mobile, selectedPack);
      setStep('mobile');
      setMobile('');
      setSelectedPack('weekly');
      setError('');
    }, 1200);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep('mobile');
      setMobile('');
      setSelectedPack('weekly');
      setError('');
    }, 300);
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: DrishhyaticEase }}
        onClick={handleClose}
      >
        <motion.div
          className="relative w-full max-w-md rounded-2xl border border-white/10 bg-zinc-950 p-6 md:p-8 pt-12 shadow-2xl"
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 12 }}
          transition={{ duration: 0.4, ease: DrishhyaticEase }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 right-4 p-1.5 text-white/50 hover:text-white transition-colors rounded-full hover:bg-white/10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <AnimatePresence mode="wait">
            {step === 'mobile' && (
              <motion.div
                key="mobile"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: DrishhyaticEase }}
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 border border-white/20 mb-6 mx-auto">
                  <Smartphone className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-display font-bold text-white text-center mb-2">
                  Enter Mobile Number
                </h2>
                <p className="text-white/60 text-sm text-center mb-6">
                  Subscribe to unlock unlimited streaming
                </p>

                <div className="space-y-2 mb-6">
                  <label htmlFor="mobile-number" className="sr-only">
                    Mobile number
                  </label>
                  <div className="flex items-stretch rounded-xl border border-white/25 bg-zinc-900/80 overflow-hidden focus-within:border-white/55 focus-within:ring-2 focus-within:ring-white/10 transition-all">
                    <div className="flex items-center justify-center gap-2 px-4 sm:px-5 bg-white/[0.06] border-r border-white/15 shrink-0 min-w-[5.5rem]">
                      <span className="text-base leading-none select-none" aria-hidden>
                        🇮🇳
                      </span>
                      <span className="text-white font-bold text-lg tabular-nums tracking-tight">
                        +91
                      </span>
                    </div>
                    <input
                      id="mobile-number"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      placeholder="98765 43210"
                      value={mobile}
                      onChange={(e) => handleMobileChange(e.target.value)}
                      className="flex-1 min-w-0 h-14 sm:h-[3.75rem] px-4 bg-transparent text-white text-lg sm:text-xl font-medium tracking-[0.2em] placeholder:text-white/30 placeholder:tracking-[0.08em] placeholder:font-normal placeholder:text-base focus:outline-none"
                      maxLength={10}
                      autoFocus
                    />
                  </div>
                  {error && (
                    <p className="text-red-400 text-xs font-medium px-1">{error}</p>
                  )}
                  <p className="text-white/40 text-xs px-1">
                    {mobile.length}/10 digits · India only
                  </p>
                </div>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={!isValidMobile(mobile)}
                  onClick={handleContinue}
                  className="w-full py-3.5 bg-white text-black font-semibold rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/90 transition-colors"
                >
                  Continue
                </motion.button>
              </motion.div>
            )}

            {step === 'pack' && (
              <motion.div
                key="pack"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: DrishhyaticEase }}
              >
                <h2 className="text-2xl font-display font-bold text-white text-center mb-2">
                  Select Your Pack
                </h2>
                <p className="text-white/60 text-sm text-center mb-6">
                  Choose a plan for{' '}
                  <span className="text-white font-semibold tabular-nums">+91 {mobile}</span>
                </p>

                <div className="space-y-3 mb-6">
                  {(Object.values(PACKS) as (typeof PACKS.weekly)[]).map((pack) => (
                    <button
                      key={pack.id}
                      type="button"
                      onClick={() => setSelectedPack(pack.id)}
                      className={cn(
                        'w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 text-left',
                        selectedPack === pack.id
                          ? 'border-white bg-white/10 shadow-lg shadow-white/5'
                          : 'border-white/15 bg-black/40 hover:border-white/30',
                      )}
                    >
                      <div>
                        <p className="text-white font-semibold">{pack.label}</p>
                        <p className="text-white/50 text-sm">{pack.period} access</p>
                      </div>
                      <p className="text-2xl font-display font-bold text-white">
                        ₹{pack.price}
                      </p>
                    </button>
                  ))}
                </div>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubscribe}
                  className="w-full py-3.5 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors"
                >
                  Subscribe · ₹{PACKS[selectedPack].price}
                </motion.button>

                <button
                  type="button"
                  onClick={() => setStep('mobile')}
                  className="w-full mt-3 py-2 text-sm text-white/50 hover:text-white transition-colors"
                >
                  ← Change mobile number
                </button>
              </motion.div>
            )}

            {step === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: DrishhyaticEase }}
                className="py-8 text-center"
              >
                <motion.div
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 mb-6 mx-auto"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Check className="w-8 h-8 text-green-400" />
                </motion.div>
                <h2 className="text-2xl font-display font-bold text-white mb-2">
                  Access Granted
                </h2>
                <p className="text-white/60 text-sm">Starting playback…</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
