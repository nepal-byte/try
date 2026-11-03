import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black text-sm">☸</span>
              </div>
              <div>
                <div className="font-display text-sm font-bold">Tharlam Manjushree</div>
                <div className="text-[10px] text-neutral-400">Community School</div>
              </div>
            </div>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Nurturing wisdom and compassion through education rooted in Buddhist values.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-xs sm:text-sm text-neutral-300 hover:text-white">About Us</Link></li>
              <li><Link to="/programs" className="text-xs sm:text-sm text-neutral-300 hover:text-white">Programs</Link></li>
              <li><Link to="/admission" className="text-xs sm:text-sm text-neutral-300 hover:text-white">Admission</Link></li>
              <li><Link to="/gallery" className="text-xs sm:text-sm text-neutral-300 hover:text-white">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/donate" className="text-xs sm:text-sm text-neutral-300 hover:text-white">Donate</Link></li>
              <li><Link to="/contact" className="text-xs sm:text-sm text-neutral-300 hover:text-white">Contact</Link></li>
              <li><Link to="/students-districts" className="text-xs sm:text-sm text-neutral-300 hover:text-white">Our Students</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">Contact</h4>
            <div className="space-y-2 text-xs sm:text-sm text-neutral-300">
              <p>Boudha-6, Kathmandu</p>
              <p>Nepal</p>
              <p>info@tharlamschool.org</p>
              <p>+977-9769400892</p>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-neutral-800 text-center">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Tharlam Manjushree Community School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
