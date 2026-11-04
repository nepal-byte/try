import PlaceholderImage from '../components/PlaceholderImage';
import WhatGuidesSection from '../components/WhatGuidesSection';
import WhatWeDoSection from '../components/WhatWeDoSection';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-neutral-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-px bg-black" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">About Us</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-6">
                Our Story &<br /><span className="text-neutral-400">Mission</span>
              </h1>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl">
                Tharlam Manjushree Community School is a unique educational center nestled within the peaceful grounds of historic Tharlam Monastery in Boudha-6, Kathmandu.
              </p>
            </div>
            <div>
              <PlaceholderImage label="School Campus" className="aspect-[16/10] w-full rounded-2xl sm:rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Roots */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28 sticky-slide-left">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-px bg-black" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Our Roots</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05] mb-6 sm:mb-8">
                From Ancient Roots<br /><span className="text-neutral-400">to New Horizons.</span>
              </h2>
              <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-200 mb-3 sm:mb-4">
                <PlaceholderImage label="Tharlam Monastery" className="aspect-[4/5] w-full" />
              </div>
              <p className="text-xs text-neutral-400 text-center">Tharlam Monastery — Near Boudhanath Stupa, Kathmandu</p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 space-y-0">
              <div className="py-6 sm:py-8 md:py-10 border-b border-neutral-200">
                <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-200">1436</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold mt-3 mb-3 sm:mb-4">The Sacred Origins in Tibet</h3>
                <p className="text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                  Shree Tharlam Sasang Namgyal Ling Monastery, warmly known around the world as Tharlam Monastery, carries a profound lineage that spans nearly six centuries. Tracing its rich heritage back to 1436, the monastery was originally founded by the illustrious master Ga Rabjampa Kunga Yeshe in the region of Kham, Eastern Tibet.
                </p>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  From its earliest days, Tharlam stood as a premier seat of higher Buddhist learning, meditation, and spiritual practice—a sanctuary where scholars and practitioners gathered to study, contemplate, and preserve the deep wisdom of the Sakya tradition.
                </p>
              </div>

              <div className="py-6 sm:py-8 md:py-10 border-b border-neutral-200">
                <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-200">1981</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold mt-3 mb-3 sm:mb-4">Preserving the Flame & Re-establishment in Nepal</h3>
                <p className="text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                  As centuries passed, the world underwent immense transformations, yet the light of the Tharlam lineage never flickered. In 1981, the monastery's enduring legacy was faithfully reborn on sacred ground in Boudhanath, Kathmandu, Nepal.
                </p>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  Guided by unwavering devotion and the profound instructions of his venerated guru, Gaton Dorjechang, H.E. Dezhung Rinpoche re-established Tharlam Monastery in exile. This sacred restoration was not merely the building of a physical structure, but the preservation of a living spiritual treasure.
                </p>
              </div>

              <div className="py-6 sm:py-8 md:py-10">
                <span className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-200">Today</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold mt-3 mb-3 sm:mb-4">A Legacy Growing into the Future</h3>
                <p className="text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                  Today, standing near the great Boudhanath Stupa, Tharlam Monastery continues to flourish as a vibrant center for spiritual study, cultural preservation, and compassionate action.
                </p>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  Through the sacred restoration led by H.E. Dezhung Rinpoche and the continued vision of our present leaders, the monastery fulfills its educational and spiritual mission every single day. By nurturing both monastic practitioners and young students at Tharlam Manjushree Community School, we honor our ancient roots while opening new horizons of wisdom and hope for future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-neutral-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="relative">
            <div className="float-left w-full lg:w-[45%] mr-0 lg:mr-8 xl:mr-12 mb-6 sm:mb-8 sticky-slide-left">
              <PlaceholderImage label="School Campus" className="aspect-[16/9] rounded-2xl sm:rounded-3xl" />
            </div>
            <div className="sticky-slide-right">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 sm:w-12 h-px bg-black" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Who We Are</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.05] mb-4 sm:mb-6">
                A sanctuary of learning in the heart of the monastery.
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                Tharlam Manjushree Community School is a unique educational center nestled within the peaceful grounds of historic Tharlam Monastery in Boudha-6, Kathmandu. As an integral part of the monastery's living community, we combine a secular academic curriculum with the timeless wisdom of Sakya Buddhist traditions, creating an environment where children develop intellectually, morally, and spiritually.
              </p>
              <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                Our school serves around 85 students from diverse backgrounds—bringing together local neighborhood children and young monastics under the gentle mentorship of 8 dedicated faculty members. We provide a strong academic foundation while nurturing each child's innate compassion, self-discipline, and natural curiosity.
              </p>
              <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
                Named after Manjushree—the Bodhisattva of Wisdom—our school embodies the principle that learning should illuminate the intellect and awaken the heart. Every aspect of our community program is designed to harmonize academic growth with deep cultural roots and active kindness toward all.
              </p>
            </div>
            <div className="clear-both"></div>
          </div>
        </div>
      </section>

      {/* Our Guidance */}
      <WhatGuidesSection />

      {/* What We Do */}
      <WhatWeDoSection />

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black text-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 sm:mb-6 sticky-fade-in">
            Want to learn more?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 px-4 sticky-fade-in">
            Visit our campus, meet our teachers, and discover how Tharlam Manjushree School can shape your child's future.
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-2 bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-semibold hover:bg-neutral-100 transition-all sticky-scale-in">
            Contact Us
            <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
