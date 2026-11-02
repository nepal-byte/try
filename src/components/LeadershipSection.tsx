import { useState } from 'react';
import PlaceholderImage from './PlaceholderImage';

const leaders = [
  {
    name: 'H.E. Dezhun Rinpoche',
    role: 'Head of Tharlam Monastery',
    image: 'H.E. Dezhun Rinpoche',
    message: [
      "To nourish a child's heart with the Sakya tradition is to keep the flame of dharma burning brightly for generations to come. In establishing a sacred haven for learning, we pass down not only ancient wisdom, but also the eternal virtues of peace, patience, and altruism.",
      "Education rooted in spiritual integrity serves as a protective light for young minds, guiding them through life's complexities with grace and clarity. When our children learn to act with selfless intention and moral awareness, their knowledge becomes a tool for healing and harmony across society.",
      "May your support bring peace, wisdom, and boundless merit to all. We offer our heartfelt blessings to every teacher, student, and benefactor who walks alongside us in this noble effort."
    ],
    inspiration: "Just as a single raindrop contributes to a vast ocean, every act of generosity creates waves of benefit across the world."
  },
  {
    name: 'Tenpa Gyaltsen',
    role: 'Principal',
    image: 'Principal Tenpa Gyaltsen',
    message: [
      "Supporting a child's education is like planting the seed of wisdom in this world. At Tharlam Manjushree Community School, we nurture every child with great care, ensuring that their intellectual growth is deeply rooted in loving-kindness, discipline, and moral integrity.",
      "In an ever-changing world, our goal is to provide a balanced learning environment where traditional Sakya Buddhist values walk hand-in-hand with modern academic excellence. By fostering both academic curiosity and spiritual grounding, we empower our students to walk through life with confidence, clarity, and genuine compassion for others.",
      "We warmly invite you to walk this path with us—gently, generously, and with joy. Together, as a dedicated community of teachers, parents, and supporters, we can light the way for the next generation to make a positive impact on the world around them."
    ],
    inspiration: "As a lamp lights another lamp, thousands of lamps can be lit from one. So too, wisdom shared spreads boundless benefit."
  },
  {
    name: 'Yanze Sherpa',
    role: 'Vice Principal',
    image: 'Vice Principal Yanze Sherpa',
    message: [
      "True education is not merely about gaining knowledge, but about cultivating a compassionate heart and a grounded mind. Our daily commitment is to create a welcoming and encouraging space where every student feels seen, valued, and inspired to reach their fullest potential.",
      "We work closely with our dedicated faculty to ensure that our secular subjects are taught with rigor, creativity, and modern methodology. By harmonizing academic discipline with mindful self-reflection, we guide our young learners to develop strong critical thinking skills while remaining deeply anchored in their cultural values.",
      "Together, we guide our students to grow with confidence and kindness. It is a true honor to partner with our families and local community to shape strong, resilient, and caring future leaders."
    ],
    inspiration: "When compassion guides our actions, every small deed becomes a stepping stone toward peace for all beings."
  }
];

export default function LeadershipSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 sm:w-12 h-px bg-black" />
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                Leadership
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.05]">
              Messages from
              <br />
              <span className="text-neutral-400">our leaders.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {leaders.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full font-display font-bold text-sm sm:text-base transition-all flex items-center justify-center ${
                  activeIndex === index
                    ? 'bg-black text-white'
                    : 'bg-white text-neutral-400 border border-neutral-200 hover:border-black hover:text-black'
                }`}
              >
                {String(index + 1).padStart(2, '0')}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 items-start">
          <div className="md:col-span-2">
            <PlaceholderImage 
              label={leaders[activeIndex].image} 
              className="aspect-square w-full rounded-xl sm:rounded-2xl" 
            />
          </div>

          <div className="md:col-span-3">
            <div className="mb-3 sm:mb-4">
              <span className="font-display text-4xl sm:text-5xl font-bold text-neutral-200">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold mt-1">{leaders[activeIndex].name}</h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">{leaders[activeIndex].role}</p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {leaders[activeIndex].message.map((paragraph, idx) => (
                <p key={idx} className="text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-neutral-200">
              <p className="text-neutral-500 text-xs sm:text-sm italic">
                "{leaders[activeIndex].inspiration}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
