import { Mail, Facebook, Youtube, Instagram } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-black text-white py-2 fixed top-0 left-0 right-0 z-[60]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between text-xs">
          {/* Left Side - Contact Info */}
          <div className="flex items-center gap-6">
            <a 
              href="mailto:info@tharlamschool.org" 
              className="flex items-center gap-2 hover:text-neutral-300 transition-colors"
            >
              <Mail size={14} />
              <span>info@tharlamschool.org</span>
            </a>
          </div>

          {/* Right Side - Social Media */}
          <div className="flex items-center gap-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-neutral-300 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-neutral-300 transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={16} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-neutral-300 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
