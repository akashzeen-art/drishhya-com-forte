import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 pt-24 pb-16">
      <div className="text-center">
        <h1 className="text-6xl font-display font-bold text-white mb-4">404</h1>
        <p className="text-xl text-white/60 mb-8">Oops! Page not found</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
