import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-[32px] left-0 right-0 z-50 bg-white border-b border-neutral-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-sm md:text-base">☸</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-sm md:text-base font-bold">Tharlam Manjushree</div>
              <div className="text-[10px] md:text-xs text-neutral-500">Community School</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-neutral-600">Home</Link>
            <Link to="/about" className="text-sm font-medium hover:text-neutral-600">About</Link>
            <Link to="/programs" className="text-sm font-medium hover:text-neutral-600">Programs</Link>
            <Link to="/admission" className="text-sm font-medium hover:text-neutral-600">Admission</Link>
            <Link to="/gallery" className="text-sm font-medium hover:text-neutral-600">Gallery</Link>
            <Link to="/donate" className="text-sm font-medium hover:text-neutral-600">Donate</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-neutral-600">Contact</Link>
            <Link to="/calendar" className="text-sm font-medium hover:text-neutral-600">Calendar</Link>
            <Link to="/admin" className="text-sm font-medium hover:text-neutral-600">Admin</Link>
          </div>

          <button 
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-sm font-medium py-2" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/about" className="text-sm font-medium py-2" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/programs" className="text-sm font-medium py-2" onClick={() => setIsOpen(false)}>Programs</Link>
              <Link to="/admission" className="text-sm font-medium py-2" onClick={() => setIsOpen(false)}>Admission</Link>
              <Link to="/gallery" className="text-sm font-medium py-2" onClick={() => setIsOpen(false)}>Gallery</Link>
              <Link to="/donate" className="text-sm font-medium py-2" onClick={() => setIsOpen(false)}>Donate</Link>
              <Link to="/contact" className="text-sm font-medium py-2" onClick={() => setIsOpen(false)}>Contact</Link>
              <Link to="/calendar" className="text-sm font-medium py-2" onClick={() => setIsOpen(false)}>Calendar</Link>
              <Link to="/admin" className="text-sm font-medium py-2" onClick={() => setIsOpen(false)}>Admin</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
