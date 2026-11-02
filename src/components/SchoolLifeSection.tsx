import { useState } from 'react';
import PlaceholderImage from './PlaceholderImage';

export default function SchoolLifeSection() {
  const [activeTab, setActiveTab] = useState<'daily' | 'friday' | 'sports'>('daily');

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-neutral-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-px bg-black" />
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">School Life</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05]">
            School Life &<br /><span className="text-neutral-400">Student Activities.</span>
          </h2>
        </div>

        {/* Content Grid: Left = Tabs + Content, Right = Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Tabs and Content */}
          <div className="lg:col-span-7">
            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
              <button
                onClick={() => setActiveTab('daily')}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'daily'
                    ? 'bg-black text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                Daily Schedule
              </button>
              <button
                onClick={() => setActiveTab('friday')}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'friday'
                    ? 'bg-black text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                Friday Activities
              </button>
              <button
                onClick={() => setActiveTab('sports')}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'sports'
                    ? 'bg-black text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                Monthly Sports
              </button>
            </div>

            {/* Content */}
            <div className="min-h-[400px]">
              {/* Daily Schedule */}
              {activeTab === 'daily' && (
                <div>
                  <div className="space-y-0">
                    <div className="grid grid-cols-12 gap-3 sm:gap-6 pb-4 sm:pb-5 border-b border-neutral-200">
                      <div className="col-span-3 sm:col-span-2">
                        <span className="font-display text-sm sm:text-base font-bold text-neutral-400">5:30 AM</span>
                      </div>
                      <div className="col-span-5 sm:col-span-4">
                        <h4 className="font-semibold text-xs sm:text-sm">Morning Puja & Prayers</h4>
                      </div>
                      <div className="col-span-4 sm:col-span-6">
                        <p className="text-neutral-600 text-xs">Spiritual grounding and traditional monastic chanting</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 gap-3 sm:gap-6 pb-4 sm:pb-5 border-b border-neutral-200">
                      <div className="col-span-3 sm:col-span-2">
                        <span className="font-display text-sm sm:text-base font-bold text-neutral-400">7:00 AM</span>
                      </div>
                      <div className="col-span-5 sm:col-span-4">
                        <h4 className="font-semibold text-xs sm:text-sm">Breakfast</h4>
                      </div>
                      <div className="col-span-4 sm:col-span-6">
                        <p className="text-neutral-600 text-xs">Healthy morning meal and community time</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 gap-3 sm:gap-6 pb-4 sm:pb-5 border-b border-neutral-200">
                      <div className="col-span-3 sm:col-span-2">
                        <span className="font-display text-sm sm:text-base font-bold text-neutral-400">7:40 AM</span>
                      </div>
                      <div className="col-span-5 sm:col-span-4">
                        <h4 className="font-semibold text-xs sm:text-sm">Avalokiteshvara Prayer</h4>
                      </div>
                      <div className="col-span-4 sm:col-span-6">
                        <p className="text-neutral-600 text-xs">Cultivating daily compassion, mindfulness, and mental focus</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 gap-3 sm:gap-6 pb-4 sm:pb-5 border-b border-neutral-200">
                      <div className="col-span-3 sm:col-span-2">
                        <span className="font-display text-sm sm:text-base font-bold text-neutral-400">10:30 AM</span>
                      </div>
                      <div className="col-span-5 sm:col-span-4">
                        <h4 className="font-semibold text-xs sm:text-sm">Academic Classes</h4>
                      </div>
                      <div className="col-span-4 sm:col-span-6">
                        <p className="text-neutral-600 text-xs">Core national curriculum studies and classroom learning</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 gap-3 sm:gap-6 pb-4 sm:pb-5 border-b border-neutral-200">
                      <div className="col-span-3 sm:col-span-2">
                        <span className="font-display text-sm sm:text-base font-bold text-neutral-400">3:30 PM</span>
                      </div>
                      <div className="col-span-5 sm:col-span-4">
                        <h4 className="font-semibold text-xs sm:text-sm">Sports & Play Time</h4>
                      </div>
                      <div className="col-span-4 sm:col-span-6">
                        <p className="text-neutral-600 text-xs">Physical exercise, recreational games, and outdoor fun</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 gap-3 sm:gap-6 pb-4 sm:pb-5 border-b border-neutral-200">
                      <div className="col-span-3 sm:col-span-2">
                        <span className="font-display text-sm sm:text-base font-bold text-neutral-400">6:00 PM</span>
                      </div>
                      <div className="col-span-5 sm:col-span-4">
                        <h4 className="font-semibold text-xs sm:text-sm">Dinner Break</h4>
                      </div>
                      <div className="col-span-4 sm:col-span-6">
                        <p className="text-neutral-600 text-xs">Evening meal and relaxation</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 gap-3 sm:gap-6 pb-4 sm:pb-5 border-b border-neutral-200">
                      <div className="col-span-3 sm:col-span-2">
                        <span className="font-display text-sm sm:text-base font-bold text-neutral-400">8:30 PM</span>
                      </div>
                      <div className="col-span-5 sm:col-span-4">
                        <h4 className="font-semibold text-xs sm:text-sm">Homework & Self-Study</h4>
                      </div>
                      <div className="col-span-4 sm:col-span-6">
                        <p className="text-neutral-600 text-xs">Guided review, quiet reading, and academic preparation</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 gap-3 sm:gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <span className="font-display text-sm sm:text-base font-bold text-neutral-400">9:30 PM</span>
                      </div>
                      <div className="col-span-5 sm:col-span-4">
                        <h4 className="font-semibold text-xs sm:text-sm">Rest & Sleep</h4>
                      </div>
                      <div className="col-span-4 sm:col-span-6">
                        <p className="text-neutral-600 text-xs">Evening rest for healthy daily living</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Friday Activities */}
              {activeTab === 'friday' && (
                <div>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
                    Every Friday afternoon is dedicated to creative expression, public speaking, and critical thinking outside the regular classroom environment.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="border-l-2 border-black pl-3 sm:pl-4">
                      <h4 className="font-display text-sm sm:text-base font-bold mb-2">Speech & Presentation</h4>
                      <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                        Students develop confidence and public speaking skills through structured presentations in English, Nepali, and Tibetan.
                      </p>
                    </div>

                    <div className="border-l-2 border-black pl-3 sm:pl-4">
                      <h4 className="font-display text-sm sm:text-base font-bold mb-2">General Knowledge Quiz</h4>
                      <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                        Engaging inter-class quizzes across science, history, geography, and current events to broaden student curiosity.
                      </p>
                    </div>

                    <div className="border-l-2 border-black pl-3 sm:pl-4">
                      <h4 className="font-display text-sm sm:text-base font-bold mb-2">Creative Project Work</h4>
                      <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                        Collaborative group activities focusing on practical social and environmental themes like water conservation, animal welfare, and natural sciences.
                      </p>
                    </div>

                    <div className="border-l-2 border-black pl-3 sm:pl-4">
                      <h4 className="font-display text-sm sm:text-base font-bold mb-2">Debate & Discussion</h4>
                      <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                        Constructive, structured debates on modern topics such as technology, internet usage, and the true impact of modern education.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Monthly Sports */}
              {activeTab === 'sports' && (
                <div>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
                    A dynamic monthly sports program that builds teamwork, physical fitness, friendly rivalry, and school spirit.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-black">
                          <th className="text-left py-2 sm:py-3 px-2 sm:px-3 font-display text-xs sm:text-sm font-bold">Event / Game</th>
                          <th className="text-left py-2 sm:py-3 px-2 sm:px-3 font-display text-xs sm:text-sm font-bold">Competition Format</th>
                        </tr>
                      </thead>
                      <tbody className="text-xs sm:text-sm">
                        <tr className="border-b border-neutral-200">
                          <td className="py-2 sm:py-3 px-2 sm:px-3 font-semibold">Football</td>
                          <td className="py-2 sm:py-3 px-2 sm:px-3 text-neutral-600">Inter-House Tournament</td>
                        </tr>
                        <tr className="border-b border-neutral-200">
                          <td className="py-2 sm:py-3 px-2 sm:px-3 font-semibold">Relay Race</td>
                          <td className="py-2 sm:py-3 px-2 sm:px-3 text-neutral-600">Inter-House Track Event</td>
                        </tr>
                        <tr className="border-b border-neutral-200">
                          <td className="py-2 sm:py-3 px-2 sm:px-3 font-semibold">Kabaddi</td>
                          <td className="py-2 sm:py-3 px-2 sm:px-3 text-neutral-600">Inter-House Traditional Competition</td>
                        </tr>
                        <tr className="border-b border-neutral-200">
                          <td className="py-2 sm:py-3 px-2 sm:px-3 font-semibold">Volleyball</td>
                          <td className="py-2 sm:py-3 px-2 sm:px-3 text-neutral-600">Inter-House Tournament</td>
                        </tr>
                        <tr className="border-b border-neutral-200">
                          <td className="py-2 sm:py-3 px-2 sm:px-3 font-semibold">High Jump & Long Jump</td>
                          <td className="py-2 sm:py-3 px-2 sm:px-3 text-neutral-600">Inter-House Field Athletics</td>
                        </tr>
                        <tr>
                          <td className="py-2 sm:py-3 px-2 sm:px-3 font-semibold">Recreational Games</td>
                          <td className="py-2 sm:py-3 px-2 sm:px-3 text-neutral-600">Fun team-building games and outdoor challenges</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Photo */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <PlaceholderImage label="Students in Activity" className="aspect-[16/10] w-full rounded-2xl sm:rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
