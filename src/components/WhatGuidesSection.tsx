import { useState } from 'react';
import PlaceholderImage from './PlaceholderImage';

const guidanceItems = [
  {
    id: 1,
    title: 'Sakya Tradition',
    content: 'Grounded within the historic lineage of Tharlam Monastery (founded in 1436), we are dedicated to preserving and honoring the rich heritage of the Sakya tradition. We ensure that these time-tested values, cultural customs, and ancestral wisdom continue to flourish naturally within the next generation.'
  },
  {
    id: 2,
    title: 'Buddhist Philosophy',
    content: 'The foundational teachings of the Buddha form the core of our approach to education, emphasizing compassion, wisdom, and the interconnectedness of all living beings. Core Buddhist ethics guide our commitment to mindfulness, self-discipline, and moral conduct in daily school life.'
  },
  {
    id: 3,
    title: 'Manjushree Wisdom',
    content: 'Named in honor of Manjushree—the Bodhisattva of Wisdom—our school embodies the belief that true wisdom arises from uniting diligent study with practical application. We encourage students to cultivate clear critical thinking and deep understanding, learning to overcome ignorance with clarity.'
  },
  {
    id: 4,
    title: "Rinpoche's Vision",
    content: "His Eminence Dezhung Rinpoche's vision of harmonizing sacred monastic wisdom with modern secular education guides every aspect of our school's development. His teachings remind us that genuine education should always serve a higher purpose: nurturing individuals who contribute positively to society."
  },
  {
    id: 5,
    title: 'Community Service',
    content: 'Inspired by the Buddhist ideal of benefiting all sentient beings, we instill a deep sense of social responsibility in our students. Through practical school activities and caring for our local surroundings in Boudha, children learn to put compassion into active practice.'
  }
];

export default function WhatGuidesSection() {
  const [activeItem, setActiveItem] = useState(1);
  const currentItem = guidanceItems.find(item => item.id === activeItem);

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-neutral-50">
      <div className="max-w-[1600px] mx-auto px-2 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-10 sm:mb-12 items-center">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-px bg-black" />
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Our Guidance</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.05]">
              What Guides<br /><span className="text-neutral-400">Our Practice.</span>
            </h2>
          </div>
          <div>
            <PlaceholderImage label="Students in Activity" className="aspect-[16/10] w-full rounded-2xl sm:rounded-3xl" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
          <div className="md:col-span-2">
            <PlaceholderImage label={currentItem?.title || ''} className="aspect-[16/9] w-full rounded-2xl sm:rounded-3xl" />
          </div>

          <div className="md:col-span-3">
            <div className="mb-3 sm:mb-4">
              <span className="font-display text-4xl sm:text-5xl font-bold text-neutral-200">
                {String(activeItem).padStart(2, '0')}
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold mt-1">{currentItem?.title}</h3>
            </div>
            <p className="text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed">
              {currentItem?.content}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3 mt-12">
          {guidanceItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full font-display font-bold text-sm sm:text-base transition-all flex items-center justify-center ${
                activeItem === item.id
                  ? 'bg-black text-white scale-110 shadow-lg'
                  : 'bg-white text-neutral-400 border border-neutral-200 hover:border-black hover:text-black'
              }`}
            >
              {String(item.id).padStart(2, '0')}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
