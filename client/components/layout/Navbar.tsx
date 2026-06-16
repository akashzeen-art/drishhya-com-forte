import { Link } from 'react-router-dom';
import { BurgerMenu } from '@/components/layout/BurgerMenu';
import { Logo } from '@/components/ui/Logo';

export const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/8">
    <div className="max-w-7xl mx-auto px-4 md:px-8 h-[4.5rem] flex items-center justify-between gap-4">
      <Logo size="sm" />

      <div className="flex items-center gap-2 md:gap-3">
        {/* <Link
          to="/my-account"
          className="hidden sm:inline-block px-3 md:px-4 py-2 text-sm text-white/65 hover:text-white transition-colors duration-300"
        >
          Sign In
        </Link> */}
        <BurgerMenu />
      </div>
    </div>
  </nav>
);
