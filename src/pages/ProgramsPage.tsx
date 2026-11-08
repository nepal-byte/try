import PlaceholderImage from '../components/PlaceholderImage';
import SchoolLifeSection from '../components/SchoolLifeSection';

export default function ProgramsPage() {
  return (
    <div>
      {/* Academic Excellence */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-neutral-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-px bg-black" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Academic Excellence</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] mb-6">
                Rigorous Academic Foundation<br /><span className="text-neutral-400">& Classroom Learning.</span>
              </h2>
              <PlaceholderImage label="Classroom Learning" className="aspect-[16/10] w-full rounded-2xl sm:rounded-3xl mt-4" />
            </div>
            
            <div className="lg:col-span-6 lg:col-start-7 space-y-8 sm:space-y-10">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-3">National Curriculum Alignment</h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  We follow official national educational standards, ensuring our students receive a solid, recognized academic foundation. Our structured curriculum prepares them for higher education and competitive examinations while maintaining the highest academic standards.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-3">Core Subjects Offered</h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-4">
                  Our comprehensive academic curriculum covers key learning areas to ensure well-rounded intellectual growth:
                </p>
                <ul className="space-y-2 text-neutral-600 text-sm sm:text-base">
                  <li className="flex items-start gap-2"><span className="text-black mt-1">•</span><span>Mathematics & Sciences</span></li>
                  <li className="flex items-start gap-2"><span className="text-black mt-1">•</span><span>English & Nepali Languages</span></li>
                  <li className="flex items-start gap-2"><span className="text-black mt-1">•</span><span>Social Studies & Population</span></li>
                  <li className="flex items-start gap-2"><span className="text-black mt-1">•</span><span>Computer Science & Digital Literacy</span></li>
                  <li className="flex items-start gap-2"><span className="text-black mt-1">•</span><span>Physical Education & Health</span></li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-3">Dedicated Teaching Approach</h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  Our eight dedicated teachers bring years of classroom experience, employing engaging and supportive teaching methods tailored for every age level. Because of our tight-knit student community, every child receives individualized attention, encouraging guidance, and steady feedback to grow at their own pace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Development */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-px bg-black" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Spiritual Development</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] mb-6">
                Buddhist Wisdom & Values<br /><span className="text-neutral-400">in Daily Life.</span>
              </h2>
              <PlaceholderImage label="Meditation Practice" className="aspect-[16/10] w-full rounded-2xl sm:rounded-3xl mt-4" />
            </div>
            
            <div className="lg:col-span-6 lg:col-start-7 space-y-8 sm:space-y-10">
              <div>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  At the heart of our educational approach is the gentle integration of Buddhist wisdom into daily learning. We support our students so they grow not just intellectually, but morally, emotionally, and spiritually.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-3">Daily Meditation & Reflection Practice</h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  Each morning begins with quiet reflection and simple breathing exercises. These daily practices help students clear their minds, build self-discipline, and start every school day with focus, calm, and clarity.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-3">Sakya Lineage & Ethical Values</h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  Age-appropriate lessons in fundamental Buddhist values instill core principles of right action, honesty, and the transformative power of "Good Deeds and Good Karma." Students naturally connect with the sacred Sakya lineage and its rich spiritual heritage.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-3">Sakya Sacred Arts & Scripture Studies</h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  Students actively preserve our living Sakya traditions through daily Pecha reading, chanting, and text memorization. They also learn traditional ritual music, sacred movement, and ceremonial hand dances (mudras), keeping our rich cultural and spiritual arts alive for future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Levels */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-neutral-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-px bg-black" />
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Grade Levels</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05]">
              Education for<br /><span className="text-neutral-400">Every Stage.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2">Pre-primary</h3>
              <p className="text-neutral-500 text-sm mb-6">Class 4 to 6</p>
              <div className="space-y-4">
                <div className="border-l-2 border-black pl-4">
                  <p className="text-neutral-700 text-sm sm:text-base">Tibetan language: Basic reading and writing</p>
                </div>
                <div className="border-l-2 border-black pl-4">
                  <p className="text-neutral-700 text-sm sm:text-base">Basic English: Mathematics</p>
                </div>
                <div className="border-l-2 border-black pl-4">
                  <p className="text-neutral-700 text-sm sm:text-base">Daily prayer, creative activities, physical activities</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2">Primary</h3>
              <p className="text-neutral-500 text-sm mb-6">Class 1 to 5</p>
              <div className="space-y-4">
                <div className="border-l-2 border-black pl-4">
                  <p className="text-neutral-700 text-sm sm:text-base">Tibetan and English language, Math, Science, Social Studies</p>
                </div>
                <div className="border-l-2 border-black pl-4">
                  <p className="text-neutral-700 text-sm sm:text-base">Introduction to Buddhist studies and ritual practices</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2">Secondary</h3>
              <p className="text-neutral-500 text-sm mb-6">Class 6 to 8</p>
              <div className="space-y-4">
                <div className="border-l-2 border-black pl-4">
                  <p className="text-neutral-700 text-sm sm:text-base">Advanced Tibetan grammar, English composition, Math, Science</p>
                </div>
                <div className="border-l-2 border-black pl-4">
                  <p className="text-neutral-700 text-sm sm:text-base">Buddhist studies: Four Noble Truths, Eightfold Path</p>
                </div>
                <div className="border-l-2 border-black pl-4">
                  <p className="text-neutral-700 text-sm sm:text-base">Ritual training: Torma, Puja, Sutra chanting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Programs & Enriching Activities */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-px bg-black" />
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Beyond the Classroom</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05]">
              Special Programs &<br /><span className="text-neutral-400">Enriching Activities.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-6">Sports & Physical Training</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-black pl-4">
                  <p className="text-neutral-700 text-sm sm:text-base">
                    <span className="font-semibold">Football Ground & Coaching:</span> Dedicated access to our football grounds with structured training sessions to foster athletic skill, physical health, sportsmanship, and teamwork.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-6">Intellectual & Digital Skills</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-black pl-4">
                  <p className="text-neutral-700 text-sm sm:text-base">
                    <span className="font-semibold">Chess Class:</span> Strategic chess instruction that builds logic, focus, critical thinking, and problem-solving abilities.
                  </p>
                </div>
                <div className="border-l-2 border-black pl-4">
                  <p className="text-neutral-700 text-sm sm:text-base">
                    <span className="font-semibold">Computer Class:</span> Practical digital literacy and technology training, equipping students with essential skills for the modern world.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-6">Sacred Arts & Spiritual Wellness</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-black pl-4">
                  <p className="text-neutral-700 text-sm sm:text-base">
                    <span className="font-semibold">Thangka Painting Class:</span> Hands-on instruction in classical Buddhist sacred art, preserving traditional painting techniques, patience, and visual geometry.
                  </p>
                </div>
                <div className="border-l-2 border-black pl-4">
                  <p className="text-neutral-700 text-sm sm:text-base">
                    <span className="font-semibold">Monthly Meditation Retreats:</span> Dedicated monthly meditation sessions for all students to practice inner reflection, mental peace, and emotional balance.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-6">Experiential Learning & Holidays</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-black pl-4">
                  <p className="text-neutral-700 text-sm sm:text-base">
                    <span className="font-semibold">Annual Holy Pilgrimage & Excursions:</span> Yearly educational tours and spiritual trips to sacred pilgrimage sites, historical landmarks, and joyful recreational spots across Nepal.
                  </p>
                </div>
                <div className="border-l-2 border-black pl-4">
                  <p className="text-neutral-700 text-sm sm:text-base">
                    <span className="font-semibold">Special Event & Festival Holidays:</span> Observance of sacred Buddhist anniversaries, traditional cultural festivals, and national holidays throughout the academic year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Life & Student Activities */}
      <SchoolLifeSection />
    </div>
  );
}
