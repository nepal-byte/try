import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 md:top-[32px] left-0 right-0 z-50 bg-white border-b border-neutral-200">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-sm">☸</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-display text-sm font-bold">Tharlam Manjushree</div>
                <div className="text-[10px] text-neutral-500">Community School</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <Link to="/" className="text-sm font-medium hover:text-neutral-600">Home</Link>
              <Link to="/about" className="text-sm font-medium hover:text-neutral-600">About</Link>
              <Link to="/programs" className="text-sm font-medium hover:text-neutral-600">Programs</Link>
              <Link to="/admission" className="text-sm font-medium hover:text-neutral-600">Admission</Link>
              <Link to="/gallery" className="text-sm font-medium hover:text-neutral-600">Gallery</Link>
              <Link to="/donate" className="text-sm font-medium hover:text-neutral-600">Donate</Link>
              <Link to="/contact" className="text-sm font-medium hover:text-neutral-600">Contact</Link>
              <Link to="/students-districts" className="text-sm font-medium hover:text-neutral-600">Our Students</Link>
              <Link to="/calendar" className="text-sm font-medium hover:text-neutral-600">Calendar</Link>
              <Link to="/admin" className="text-sm font-medium hover:text-neutral-600">Admin</Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
