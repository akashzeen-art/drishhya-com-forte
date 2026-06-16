import { BackToHome } from '@/components/layout/BackToHome';
import { useVideoPlayer } from '@/context/VideoPlayerContext';
import { getStoredMobile, hasSubscriptionAccess } from '@/lib/subscription';
import { Link } from 'react-router-dom';

export default function MyAccount() {
  const { openSubscription, hasAccess } = useVideoPlayer();
  const mobile = getStoredMobile();

  if (hasAccess || hasSubscriptionAccess()) {
    return (
      <div className="pt-24 pb-16 px-4 max-w-lg mx-auto">
        <BackToHome />
        <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8 text-center">
          <h1 className="text-2xl font-black text-white mb-1">My Account</h1>
          <p className="text-primary text-sm font-bold mb-6">Active Subscription</p>
          {mobile && (
            <p className="text-white/70 text-base font-semibold mb-2">+91 {mobile}</p>
          )}
          <p className="text-white/40 text-sm mb-8">
            You have full access to our premium content library. Enjoy unlimited streaming.
          </p>
          <Link
            to="/"
            className="inline-block w-full bg-primary text-black py-3 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
          >
            Browse Content
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-4 max-w-lg mx-auto">
      <BackToHome />
      <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8 text-center">
        <h1 className="text-2xl font-black text-white mb-1">My Account</h1>
        <p className="text-primary text-sm font-bold mb-6">Sign In</p>
        <p className="text-white/70 text-base font-semibold mb-2">Access your account</p>
        <p className="text-white/40 text-sm mb-8">
          Sign in with your registered mobile number to access your subscription and enjoy
          unlimited content.
        </p>
        <button
          type="button"
          onClick={openSubscription}
          className="w-full bg-primary text-black py-3 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors mb-3"
        >
          Sign In / Subscribe
        </button>
        <p className="text-white/30 text-xs">New here? Subscribe now to get started.</p>
      </div>
    </div>
  );
}
