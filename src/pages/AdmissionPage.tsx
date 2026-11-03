import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import PlaceholderImage from '../components/PlaceholderImage';
import { ArrowUpRight, Check, Trash2, Plus, Minus } from 'lucide-react';

interface Application {
  id: string;
  studentName: string;
  age: string;
  grade: string;
  parentName: string;
  email: string;
  phone: string;
  submittedAt: string;
}

export default function AdmissionPage() {
  const [applications, setApplications] = useLocalStorage<Application[]>('tharlam-applications', []);
  const [formData, setFormData] = useState({
    studentName: '', age: '', grade: '', parentName: '', email: '', phone: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newApp: Application = {
      ...formData,
      id: Date.now().toString(),
      submittedAt: new Date().toISOString(),
    };
    setApplications([newApp, ...applications]);
    setFormData({ studentName: '', age: '', grade: '', parentName: '', email: '', phone: '' });
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  const removeApplication = (id: string) => {
    setApplications(applications.filter((a: Application) => a.id !== id));
  };

  const faqs = [
    { q: 'What is the admission age requirement?', a: 'We welcome students aged 5 to 19 years old across all grade levels, from pre-primary through secondary education.' },
    { q: 'Do students need to be Buddhist?', a: 'No, we welcome students from all backgrounds and faiths. However, all students participate in our mindfulness and values program as part of our holistic educational approach.' },
    { q: 'What is the tuition fee?', a: 'Tharlam Manjushree Community School provides completely free education. There are no tuition fees, and all learning materials, meals, and resources are provided at no cost to families.' },
    { q: 'What documents are needed to apply?', a: 'To begin the application process, we only require a recent photograph of the student. Our admissions team will contact you with any additional documentation needed as we proceed.' },
    { q: 'What is the student-teacher ratio?', a: 'We maintain a maximum ratio of 20:1 to ensure personalized attention for every student.' },
  ];

  return (
    <div>
      {/* Header with Image */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-neutral-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-px bg-black" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Admission</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-6">
                Join our<br /><span className="text-neutral-400">community.</span>
              </h1>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl">
                Begin your journey with Tharlam Manjushree Community School. We welcome students from all backgrounds who seek holistic education rooted in wisdom and compassion.
              </p>
            </div>
            <div>
              <PlaceholderImage label="School Campus" className="aspect-[16/10] w-full rounded-2xl sm:rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-px bg-black" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Apply Now</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] mb-10">
                Submit Your Application
              </h2>

              <div className="bg-neutral-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
                {isSubmitted && (
                  <div className="mb-8 bg-green-50 border border-green-200 rounded-2xl p-5 flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-900">Application submitted!</p>
                      <p className="text-sm text-green-700 mt-1">We'll review your application and contact you soon.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Student Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Age *</label>
                      <input
                        type="number"
                        required
                        min="3"
                        max="18"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                        placeholder="Age"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Grade Applying For *</label>
                      <select
                        required
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                      >
                        <option value="">Select grade</option>
                        <option value="pre-primary">Pre-Primary (Class 4-6)</option>
                        <option value="primary">Primary (Class 1-5)</option>
                        <option value="secondary">Secondary (Class 6-8)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Parent/Guardian Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                        placeholder="Parent name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                        placeholder="+977-9769400892"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-neutral-800 hover:gap-3 transition-all"
                  >
                    Submit Application
                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </form>
              </div>
            </div>

            {/* FAQ */}
            <div className="lg:col-span-4">
              <div className="sticky top-28">
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-6">Frequently Asked Questions</h3>
                <div className="space-y-0">
                  {faqs.map((faq, index) => (
                    <div key={index} className={`py-5 ${index !== 0 ? 'border-t border-neutral-200' : ''}`}>
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full flex items-start justify-between gap-3 text-left"
                      >
                        <h4 className="font-semibold text-sm sm:text-base text-neutral-900">{faq.q}</h4>
                        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                          {openFaq === index ? (
                            <Minus size={16} className="text-black" />
                          ) : (
                            <Plus size={16} className="text-neutral-400" />
                          )}
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40 mt-2' : 'max-h-0'}`}>
                        <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
