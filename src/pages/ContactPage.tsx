import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { MapPin, Phone, Mail, Clock, Send, Check, Trash2 } from 'lucide-react';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
}

export default function ContactPage() {
  const [messages, setMessages] = useLocalStorage<ContactMessage[]>('tharlam-messages', []);
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMessage: ContactMessage = {
      ...formData,
      id: Date.now().toString(),
      submittedAt: new Date().toISOString(),
    };
    setMessages([newMessage, ...messages]);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  const removeMessage = (id: string) => {
    setMessages(messages.filter((m: ContactMessage) => m.id !== id));
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-neutral-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-px bg-black" />
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                Contact Us
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-6">
              Get in touch
              <br />
              <span className="text-neutral-400">with us.</span>
            </h1>
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
              Have questions about admissions, programs, or visiting our campus? We're here to help and would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Information */}
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-px bg-black" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  Contact Information
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] mb-10">
                How to reach us
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="border-l-2 border-black pl-4">
                  <MapPin size={24} className="mb-3" />
                  <h3 className="font-display text-lg font-bold mb-2">Address</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Boudha-6, Kathmandu<br />
                    Nepal
                  </p>
                </div>

                <div className="border-l-2 border-black pl-4">
                  <Phone size={24} className="mb-3" />
                  <h3 className="font-display text-lg font-bold mb-2">Phone</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    +977-9769400892
                  </p>
                </div>

                <div className="border-l-2 border-black pl-4">
                  <Mail size={24} className="mb-3" />
                  <h3 className="font-display text-lg font-bold mb-2">Email</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    info@tharlamschool.org<br />
                    admissions@tharlamschool.org
                  </p>
                </div>

                <div className="border-l-2 border-black pl-4">
                  <Clock size={24} className="mb-3" />
                  <h3 className="font-display text-lg font-bold mb-2">Office Hours</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Sunday - Friday<br />
                    9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Send Message Form */}
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-px bg-black" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  Send Message
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] mb-10">
                Write to us
              </h2>

              <div className="bg-neutral-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10">
                {isSubmitted && (
                  <div className="mb-8 bg-green-50 border border-green-200 rounded-2xl p-5 flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-900">Message sent successfully!</p>
                      <p className="text-sm text-green-700 mt-1">We'll get back to you within 24-48 hours.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                        placeholder="Full name"
                      />
                    </div>
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
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Subject *</label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="admission">Admission Question</option>
                      <option value="programs">Programs & Curriculum</option>
                      <option value="visit">Schedule a Visit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Message *</label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-all resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-neutral-800 hover:gap-3 transition-all"
                  >
                    Send Message
                    <Send size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </form>

                {messages.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-neutral-200">
                    <p className="text-sm text-neutral-500 mb-4">
                      {messages.length} message{messages.length > 1 ? 's' : ''} sent from this device
                    </p>
                    <div className="space-y-3">
                      {messages.slice(0, 3).map((msg: ContactMessage) => (
                        <div key={msg.id} className="group p-4 bg-white rounded-xl">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-black truncate">{msg.subject}</p>
                              <p className="text-xs text-neutral-500 mt-0.5">{msg.name} • {msg.email}</p>
                              <p className="text-xs text-neutral-400 mt-1">
                                {new Date(msg.submittedAt).toLocaleDateString()}
                              </p>
                            </div>
                            <button
                              onClick={() => removeMessage(msg.id)}
                              className="opacity-0 group-hover:opacity-100 p-1.5 text-neutral-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Map */}
      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2838583885467!2d85.36194111508198!3d27.72101398279548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d3d3f9f9f9%3A0x9d9d9d9d9d9d9d9d!2sBoudhanath%20Stupa!5e0!3m2!1sen!2snp!4v1234567890123!5m2!1sen!2snp"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </section>
    </div>
  );
}
