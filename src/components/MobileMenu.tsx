import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-[70] transform transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-sm">☸</span>
            </div>
            <div>
              <div className="font-display text-sm font-bold">Tharlam Manjushree</div>
              <div className="text-[10px] text-neutral-500">Community School</div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-6">
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-lg font-medium py-3 border-b border-neutral-100 hover:text-neutral-600 transition-colors" onClick={onClose}>Home</Link>
            <Link to="/about" className="text-lg font-medium py-3 border-b border-neutral-100 hover:text-neutral-600 transition-colors" onClick={onClose}>About</Link>
            <Link to="/programs" className="text-lg font-medium py-3 border-b border-neutral-100 hover:text-neutral-600 transition-colors" onClick={onClose}>Programs</Link>
            <Link to="/admission" className="text-lg font-medium py-3 border-b border-neutral-100 hover:text-neutral-600 transition-colors" onClick={onClose}>Admission</Link>
            <Link to="/gallery" className="text-lg font-medium py-3 border-b border-neutral-100 hover:text-neutral-600 transition-colors" onClick={onClose}>Gallery</Link>
            <Link to="/donate" className="text-lg font-medium py-3 border-b border-neutral-100 hover:text-neutral-600 transition-colors" onClick={onClose}>Donate</Link>
            <Link to="/contact" className="text-lg font-medium py-3 border-b border-neutral-100 hover:text-neutral-600 transition-colors" onClick={onClose}>Contact</Link>
            <Link to="/students-districts" className="text-lg font-medium py-3 border-b border-neutral-100 hover:text-neutral-600 transition-colors" onClick={onClose}>Our Students</Link>
            <Link to="/calendar" className="text-lg font-medium py-3 border-b border-neutral-100 hover:text-neutral-600 transition-colors" onClick={onClose}>Calendar</Link>
            <Link to="/admin" className="text-lg font-medium py-3 border-b border-neutral-100 hover:text-neutral-600 transition-colors" onClick={onClose}>Admin</Link>
          </div>
        </nav>

        {/* Footer Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-neutral-200 bg-neutral-50">
          <div className="text-sm text-neutral-600 space-y-2">
            <p className="font-medium">Contact Us</p>
            <p>+977-9769400892</p>
            <p>info@tharlamschool.org</p>
          </div>
        </div>
      </div>
    </>
  );
}
