import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';
import LeadershipSection from '../components/LeadershipSection';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden mt-28">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80"
            alt="School Building"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

        <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-10">
          <div className="max-w-[1600px] mx-auto w-full text-center">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 md:mb-8">
              <div className="w-8 sm:w-12 md:w-16 h-px bg-white/40" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-white/80">
                Tharlam Manjushree School
              </span>
              <div className="w-8 sm:w-12 md:w-16 h-px bg-white/40" />
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter leading-[0.95] text-white mb-4 sm:mb-6">
              Wisdom Through
              <br />
              <span className="bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent">
                Learning
              </span>
            </h1>

            <p className="text-white/70 text-sm sm:text-base md:text-xl max-w-xl sm:max-w-2xl mx-auto leading-relaxed font-light px-4">
              A holistic educational institution rooted in Buddhist values, 
              nurturing young minds with academic excellence and timeless wisdom.
            </p>

            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                to="/admission"
                className="group inline-flex items-center justify-center gap-2 bg-white text-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-semibold hover:bg-neutral-100 transition-all shadow-lg"
              >
                Apply Now
                <ArrowUpRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-semibold hover:bg-white/10 transition-all"
              >
                Explore School
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Strip */}
      <section className="bg-black text-white py-4 sm:py-6 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 sm:gap-12 px-4 sm:px-6">
              {['Compassion', 'Wisdom', 'Mindfulness', 'Discipline', 'Service', 'Community', 'Excellence', 'Heritage'].map((word) => (
                <span key={word} className="flex items-center gap-6 sm:gap-12">
                  <span className="font-display text-xl sm:text-3xl md:text-4xl font-bold tracking-tight">{word}</span>
                  <span className="text-neutral-600">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-px bg-black" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  Introduction
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05] mb-6 sm:mb-8">
                Where wisdom
                <br />
                <span className="text-neutral-400">meets learning.</span>
              </h2>

              <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-200">
                <PlaceholderImage label="School Campus" className="aspect-[4/3] w-full" />
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 lg:pt-2 space-y-4 sm:space-y-6">
              <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
                Located in the heart of the historic Buddhist community in Boudha-6, Kathmandu, 
                Tharlam Manjushree Community School provides a unique education to approximately 
                85 students, seamlessly blending traditional Buddhist wisdom with secular academic learning.
              </p>

              <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
                First established around 1997 as a monastic educational effort, our institution reached 
                a significant milestone in 2024 when it was officially registered as a government-recognized 
                community school. Today, we are proud to offer recognized government certification through 
                Class 8, with ongoing progress toward expanding through Class 10 to provide our students 
                with a complete secondary education foundation.
              </p>

              <div className="border-l-2 sm:border-l-4 border-black pl-4 sm:pl-6 my-6 sm:my-8">
                <p className="font-display text-lg sm:text-xl md:text-2xl font-medium text-black italic">
                  "Education must nurture both the mind and the heart."
                </p>
              </div>

              <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
                Our spiritual curriculum is led by our revered leaders—Principal Tenpa Gyaltsen, 
                Ghen Gyaltsen, and Ghen Karma—who guide our students in daily mindfulness, 
                traditional studies, and compassionate living.
              </p>

              <div className="mt-6 sm:mt-10 flex gap-3 sm:gap-4">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 bg-black text-white px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-semibold hover:bg-neutral-800 transition-all"
                >
                  Learn More About Us
                  <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12 sm:py-16 md:py-20 bg-neutral-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-8 sm:mb-10">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 sm:w-12 h-px bg-black" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  Our Foundation
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.05]">
                Mission, Vision
                <br />
                <span className="text-neutral-400">& Values.</span>
              </h2>
              <PlaceholderImage 
                label="School Building" 
                className="aspect-[16/10] w-full rounded-xl mt-4 sm:mt-6" 
              />
            </div>

            <div className="lg:col-span-9 lg:col-start-4 space-y-0">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-8 py-6 sm:py-8 border-b border-neutral-200">
                <div className="lg:col-span-3">
                  <span className="font-display text-2xl sm:text-3xl font-bold text-neutral-300">01</span>
                  <h3 className="font-display text-base sm:text-lg font-bold mt-2">Our Mission</h3>
                </div>
                <div className="lg:col-span-8 lg:col-start-5">
                  <p className="text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                    To provide exceptional facilities and an empowering learning environment where students grow into capable, confident, and compassionate individuals prepared to make a meaningful difference in the world.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-8 py-6 sm:py-8 border-b border-neutral-200">
                <div className="lg:col-span-3">
                  <span className="font-display text-2xl sm:text-3xl font-bold text-neutral-300">02</span>
                  <h3 className="font-display text-base sm:text-lg font-bold mt-2">Our Vision</h3>
                </div>
                <div className="lg:col-span-8 lg:col-start-5">
                  <p className="text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                    To offer holistic, high-quality education grounded in the spiritual wisdom of the Sakya tradition, instilling the core principles of Good Deeds and Good Karma to guide our students toward lives of purpose and integrity.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-8 py-6 sm:py-8">
                <div className="lg:col-span-3">
                  <span className="font-display text-2xl sm:text-3xl font-bold text-neutral-300">03</span>
                  <h3 className="font-display text-base sm:text-lg font-bold mt-2">Our Core Values</h3>
                </div>
                <div className="lg:col-span-8 lg:col-start-5 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  <div className="border-l-2 border-black pl-3 sm:pl-4">
                    <h4 className="font-display text-sm sm:text-base font-bold mb-1">Heritage & Tradition</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                      Faithfully preserving and honoring the Sakya lineage passed down through generations.
                    </p>
                  </div>
                  <div className="border-l-2 border-black pl-3 sm:pl-4">
                    <h4 className="font-display text-sm sm:text-base font-bold mb-1">Sacred Commitment</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                      Ensuring our traditional practices, sacred rituals, and rich culture continue to thrive.
                    </p>
                  </div>
                  <div className="border-l-2 border-black pl-3 sm:pl-4">
                    <h4 className="font-display text-sm sm:text-base font-bold mb-1">Integrity & Purpose</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                      Fostering personal growth built on right action, ethical living, and community service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <LeadershipSection />

      {/* CTA Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-black text-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-4 sm:mb-6">
            Begin your
            <br />
            <span className="text-neutral-500">journey with us.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
            Join our community of learners and discover the path of wisdom, 
            compassion, and academic excellence.
          </p>
          <Link
            to="/admission"
            className="group inline-flex items-center gap-2 bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-semibold hover:bg-neutral-100 transition-all"
          >
            Apply for Admission
            <ArrowUpRight size={14} className="sm:w-[18px] sm:h-[18px]" />
          </Link>
        </div>
      </section>
    </div>
  );
}
