import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const BackToHome = () => (
  <Link
    to="/"
    className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors"
  >
    <ArrowLeft className="w-4 h-4" />
    Back to Home
  </Link>
);
