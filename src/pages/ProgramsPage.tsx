import PlaceholderImage from '../components/PlaceholderImage';

export default function ProgramsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-neutral-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-px bg-black" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Programs</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-6">
                Our Programs &<br /><span className="text-neutral-400">Curriculum</span>
              </h1>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl">
                Discover our comprehensive curriculum blending academic excellence with spiritual development.
              </p>
            </div>
            <div>
              <PlaceholderImage label="Classroom Learning" className="aspect-[16/10] w-full rounded-2xl sm:rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Excellence */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32">
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
    </div>
  );
}
