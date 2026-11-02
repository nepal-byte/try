import { useState } from 'react';

const pillars = [
  {
    id: 1,
    title: 'Academic Excellence',
    items: [
      { heading: 'National Curriculum Alignment', content: 'We follow official national educational standards, giving our students a solid, recognized academic foundation to prepare them for higher education and competitive examinations.' },
      { heading: 'Dedicated & Experienced Faculty', content: 'Our team of eight dedicated teachers brings years of classroom experience, employing engaging and supportive teaching methods tailored for every age level.' },
      { heading: 'Personalized Learning Support', content: 'Because of our tight-knit student community, every child receives individualized attention, encouraging guidance, and steady feedback to grow at their own pace.' },
      { heading: 'Practical & Modern Learning', content: 'Students develop critical thinking and problem-solving skills through hands-on classroom projects, practical exercises, and essential digital learning tools.' }
    ]
  },
  {
    id: 2,
    title: 'Spiritual Development',
    items: [
      { heading: 'Daily Morning Reflection & Quiet Practice', content: 'We begin each morning with quiet reflection and simple breathing exercises, helping students clear their minds, build self-discipline, and start the school day with focus and calm.' },
      { heading: 'Essential Sakya Wisdom & Ethics', content: 'Age-appropriate lessons in fundamental Buddhist values, instilling core principles of right action, honesty, and the power of "Good Deeds and Good Karma."' },
      { heading: 'Mindfulness, Compassion & Self-Discipline', content: 'Practical daily routines that cultivate emotional balance, mental peace, and genuine compassion for classmates, family, and society.' },
      { heading: 'Monastery Surroundings & Shared Heritage', content: 'Learning within the serene atmosphere of Tharlam Monastery, allowing students to observe sacred traditions naturally as part of their everyday educational environment.' }
    ]
  },
  {
    id: 3,
    title: 'Character Building',
    items: [
      { heading: 'Community & Social Responsibility', content: 'Students learn the value of service and social responsibility through collaborative school activities and caring for their local surroundings in Boudha.' },
      { heading: 'Ethics & Values Education', content: 'Core guidance rooted in integrity, honesty, respect, and making thoughtful, moral choices in daily life.' },
      { heading: 'Leadership & Personal Responsibility', content: 'Building self-confidence, accountability, and strong decision-making skills by giving students meaningful roles within the school community.' },
      { heading: 'Peer Support & Mutual Respect', content: 'Fostering a warm, inclusive school family where students of different ages support each other, build lifelong friendships, and practice mutual respect.' }
    ]
  },
  {
    id: 4,
    title: 'Cultural Preservation',
    items: [
      { heading: 'Heritage & Traditional Arts', content: 'Introducing students to traditional artistic expressions and cultural crafts, keeping regional heritage alive for the younger generation.' },
      { heading: 'Cultural Observances & Festivals', content: 'Celebrating major traditional holidays, seasonal events, and community gatherings together as a unified school family.' },
      { heading: 'Language & Customs', content: 'Honoring local languages, ancestral customs, and traditional etiquette alongside modern secular studies.' },
      { heading: 'Connecting Roots with the Future', content: 'Ensuring our young learners remain proudly rooted in their rich cultural lineage while gaining the knowledge needed for the modern world.' }
    ]
  }
];

export default function WhatWeDoSection() {
  const [activePillar, setActivePillar] = useState(1);
  const currentPillar = pillars.find(p => p.id === activePillar);

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-neutral-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="w-8 sm:w-12 h-px bg-black" />
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">What We Do</span>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.05] mb-3 sm:mb-4">
          Holistic Education<br /><span className="text-neutral-400">for the Whole Child.</span>
        </h2>

        <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mb-6 sm:mb-8 md:mb-10">
          Our approach integrates four pillars of development to nurture well-rounded individuals.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-3">
            <div className="flex flex-row lg:flex-col gap-2 sm:gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 lg:sticky lg:top-28">
              {pillars.map((pillar) => (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id)}
                  className={`group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-left transition-all whitespace-nowrap lg:whitespace-normal ${
                    activePillar === pillar.id
                      ? 'bg-black text-white'
                      : 'bg-white text-neutral-500 border border-neutral-200 hover:border-black hover:text-black'
                  }`}
                >
                  <span className={`font-display font-bold text-sm sm:text-base ${activePillar === pillar.id ? 'text-white' : 'text-neutral-400'}`}>
                    {String(pillar.id).padStart(2, '0')}
                  </span>
                  <span className={`text-xs sm:text-sm font-medium ${activePillar === pillar.id ? 'text-white' : 'text-neutral-700'}`}>
                    {pillar.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold">{currentPillar?.title}</h3>
            </div>

            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {currentPillar?.items.map((item, index) => (
                <div key={index} className="border-l-2 border-black pl-3 sm:pl-4 lg:pl-6">
                  <h4 className="font-semibold text-neutral-900 text-sm sm:text-base mb-1.5 sm:mb-2">{item.heading}</h4>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
