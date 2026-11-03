import { useState } from 'react';
import PlaceholderImage from '../components/PlaceholderImage';

const categories = ['All', 'Campus', 'Events', 'Classrooms', 'Activities', 'Ceremonies', 'Sports', 'Arts'];

const galleryItems = [
  { label: 'Main Building', category: 'Campus', size: 'large' },
  { label: 'Morning Assembly', category: 'Ceremonies', size: 'small' },
  { label: 'Science Class', category: 'Classrooms', size: 'small' },
  { label: 'Sports Day', category: 'Sports', size: 'small' },
  { label: 'Meditation Hall', category: 'Campus', size: 'small' },
  { label: 'Art Exhibition', category: 'Arts', size: 'large' },
  { label: 'Library', category: 'Campus', size: 'small' },
  { label: 'Annual Day', category: 'Events', size: 'small' },
  { label: 'Mathematics Class', category: 'Classrooms', size: 'small' },
  { label: 'Prayer Ceremony', category: 'Ceremonies', size: 'small' },
  { label: 'Computer Lab', category: 'Classrooms', size: 'large' },
  { label: 'Community Service', category: 'Activities', size: 'small' },
  { label: 'Playground', category: 'Sports', size: 'small' },
  { label: 'Cultural Program', category: 'Events', size: 'small' },
  { label: 'Yoga Session', category: 'Activities', size: 'small' },
  { label: 'Graduation', category: 'Ceremonies', size: 'small' },
  { label: 'Dining Hall', category: 'Campus', size: 'small' },
  { label: 'Art Workshop', category: 'Arts', size: 'small' },
  { label: 'Basketball Game', category: 'Sports', size: 'small' },
  { label: 'Monastery Visit', category: 'Activities', size: 'large' },
  { label: 'Music Class', category: 'Arts', size: 'small' },
  { label: 'Science Lab', category: 'Classrooms', size: 'small' },
  { label: 'Garden Area', category: 'Campus', size: 'small' },
  { label: 'Festival Celebration', category: 'Events', size: 'small' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-16 md:pt-24">
      {/* Hero */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-neutral-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-px bg-black" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Gallery</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-6">
                Moments from<br /><span className="text-neutral-400">our community.</span>
              </h1>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl">
                Explore our campus, events, and the vibrant life at Tharlam Manjushree Community School through these glimpses of our daily journey.
              </p>
            </div>
            <div>
              <PlaceholderImage label="School Campus" className="aspect-[16/10] w-full rounded-2xl sm:rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-black text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl sm:rounded-2xl ${
                  item.size === 'large' ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <PlaceholderImage
                  label={item.label}
                  className={`w-full ${item.size === 'large' ? 'aspect-square' : 'aspect-square'}`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-medium text-sm">{item.label}</p>
                    <p className="text-white/70 text-xs mt-1">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20 text-neutral-400">
              <p className="text-lg">No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
