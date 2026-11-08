import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const pathNames: Record<string, string> = {
  '/': 'Home',
  '/about': 'About Us',
  '/programs': 'Programs',
  '/admission': 'Admission',
  '/gallery': 'Gallery',
  '/donate': 'Donate',
  '/contact': 'Contact',
};

export default function Breadcrumb() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  if (location.pathname === '/') return null;

  return (
    <div className="relative h-28 sm:h-36 md:h-40 lg:h-48 overflow-hidden mt-28">
      <div className="absolute inset-0 bg-neutral-200" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 h-full flex items-end pb-3 sm:pb-4 md:pb-5">
        <div className="max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-10">
          <nav className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-white/70 flex-wrap">
            <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home size={10} className="sm:w-3 sm:h-3" />
              <span>Home</span>
            </Link>
            {pathSegments.map((segment, index) => {
              const path = `/${segment}`;
              const name = pathNames[path] || segment.charAt(0).toUpperCase() + segment.slice(1);
              const isLast = index === pathSegments.length - 1;

              return (
                <span key={path} className="flex items-center gap-1 sm:gap-2">
                  <ChevronRight size={10} className="sm:w-3 sm:h-3 text-white/40" />
                  {isLast ? (
                    <span className="text-white font-medium">{name}</span>
                  ) : (
                    <Link to={path} className="hover:text-white transition-colors">
                      {name}
                    </Link>
                  )}
                </span>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
