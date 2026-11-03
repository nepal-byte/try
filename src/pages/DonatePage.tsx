import { useState } from 'react';
import PlaceholderImage from '../components/PlaceholderImage';
import { Copy, Check } from 'lucide-react';

export default function DonatePage() {
  const [activeTab, setActiveTab] = useState<'local' | 'international'>('local');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="pt-16 md:pt-24">
      {/* Hero */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-neutral-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-px bg-black" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  Donate & Support
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-6">
                Support the future
                <br />
                <span className="text-neutral-400">of our students.</span>
              </h1>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl">
                Your generous contribution helps us provide quality education, maintain our facilities, and support students from all backgrounds in their educational journey.
              </p>
            </div>
            <div>
              <PlaceholderImage 
                label="Students Learning" 
                className="aspect-[16/10] w-full rounded-2xl sm:rounded-3xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-px bg-black" />
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Why Donate
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] mb-12">
            Your generosity
            <br />
            <span className="text-neutral-400">transforms lives.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-l-2 border-black pl-4">
              <h3 className="font-display text-lg font-bold mb-2">Education</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Provide books, materials, and resources for students to excel in their studies.
              </p>
            </div>
            <div className="border-l-2 border-black pl-4">
              <h3 className="font-display text-lg font-bold mb-2">Infrastructure</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Help maintain and improve our school facilities for a better learning environment.
              </p>
            </div>
            <div className="border-l-2 border-black pl-4">
              <h3 className="font-display text-lg font-bold mb-2">Meals</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Ensure every student receives nutritious daily meals to support their growth.
              </p>
            </div>
            <div className="border-l-2 border-black pl-4">
              <h3 className="font-display text-lg font-bold mb-2">Scholarships</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Support deserving students who cannot afford educational expenses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Details */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-neutral-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-px bg-black" />
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Bank Details
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] mb-12">
            How to Donate
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left - Buttons */}
            <div className="lg:col-span-3">
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setActiveTab('local')}
                  className={`px-6 py-4 rounded-xl text-left transition-all ${
                    activeTab === 'local'
                      ? 'bg-black text-white'
                      : 'bg-white text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  <span className="block text-sm font-semibold">Local</span>
                  <span className="block text-xs mt-1 opacity-70">Within Nepal</span>
                </button>
                <button
                  onClick={() => setActiveTab('international')}
                  className={`px-6 py-4 rounded-xl text-left transition-all ${
                    activeTab === 'international'
                      ? 'bg-black text-white'
                      : 'bg-white text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  <span className="block text-sm font-semibold">International</span>
                  <span className="block text-xs mt-1 opacity-70">Outside Nepal</span>
                </button>
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-9">
              {activeTab === 'local' && (
                <div className="bg-white rounded-2xl p-6 sm:p-8">
                  <h3 className="font-display text-xl font-bold mb-6">Local Bank Transfer</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Bank Name</p>
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-neutral-900">Nepal Investment Mega Bank Ltd.</p>
                        <button
                          onClick={() => handleCopy('Nepal Investment Mega Bank Ltd.', 'local-bank')}
                          className="flex items-center gap-1 px-2 py-1 text-xs text-neutral-500 hover:text-black hover:bg-neutral-100 rounded transition-all"
                        >
                          {copiedField === 'local-bank' ? <Check size={14} /> : <Copy size={14} />}
                          {copiedField === 'local-bank' ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Account Name</p>
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-neutral-900">Tharlam Sakya Dharma Vihara</p>
                        <button
                          onClick={() => handleCopy('Tharlam Sakya Dharma Vihara', 'local-account-name')}
                          className="flex items-center gap-1 px-2 py-1 text-xs text-neutral-500 hover:text-black hover:bg-neutral-100 rounded transition-all"
                        >
                          {copiedField === 'local-account-name' ? <Check size={14} /> : <Copy size={14} />}
                          {copiedField === 'local-account-name' ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Account Number</p>
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-neutral-900 font-mono">02405020257510</p>
                        <button
                          onClick={() => handleCopy('02405020257510', 'local-account-number')}
                          className="flex items-center gap-1 px-2 py-1 text-xs text-neutral-500 hover:text-black hover:bg-neutral-100 rounded transition-all"
                        >
                          {copiedField === 'local-account-number' ? <Check size={14} /> : <Copy size={14} />}
                          {copiedField === 'local-account-number' ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Branch Name</p>
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-neutral-900">Bouddha</p>
                        <button
                          onClick={() => handleCopy('Bouddha', 'local-branch')}
                          className="flex items-center gap-1 px-2 py-1 text-xs text-neutral-500 hover:text-black hover:bg-neutral-100 rounded transition-all"
                        >
                          {copiedField === 'local-branch' ? <Check size={14} /> : <Copy size={14} />}
                          {copiedField === 'local-branch' ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'international' && (
                <div className="bg-white rounded-2xl p-6 sm:p-8">
                  <h3 className="font-display text-xl font-bold mb-6">International Bank Transfer</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Bank Name</p>
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-neutral-900">Prabhu Bank Limited</p>
                        <button
                          onClick={() => handleCopy('Prabhu Bank Limited', 'intl-bank')}
                          className="flex items-center gap-1 px-2 py-1 text-xs text-neutral-500 hover:text-black hover:bg-neutral-100 rounded transition-all"
                        >
                          {copiedField === 'intl-bank' ? <Check size={14} /> : <Copy size={14} />}
                          {copiedField === 'intl-bank' ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Account Name</p>
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-neutral-900">THARLAM SANSAG NAMAGYAL LING SAKYA DHARMA BIHAR</p>
                        <button
                          onClick={() => handleCopy('THARLAM SANSAG NAMAGYAL LING SAKYA DHARMA BIHAR', 'intl-account-name')}
                          className="flex items-center gap-1 px-2 py-1 text-xs text-neutral-500 hover:text-black hover:bg-neutral-100 rounded transition-all"
                        >
                          {copiedField === 'intl-account-name' ? <Check size={14} /> : <Copy size={14} />}
                          {copiedField === 'intl-account-name' ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Account Number</p>
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-neutral-900 font-mono">3260155862000019</p>
                        <button
                          onClick={() => handleCopy('3260155862000019', 'intl-account-number')}
                          className="flex items-center gap-1 px-2 py-1 text-xs text-neutral-500 hover:text-black hover:bg-neutral-100 rounded transition-all"
                        >
                          {copiedField === 'intl-account-number' ? <Check size={14} /> : <Copy size={14} />}
                          {copiedField === 'intl-account-number' ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">SWIFT/BIC Code</p>
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-neutral-900 font-mono">PRVUNPKA</p>
                        <button
                          onClick={() => handleCopy('PRVUNPKA', 'intl-swift')}
                          className="flex items-center gap-1 px-2 py-1 text-xs text-neutral-500 hover:text-black hover:bg-neutral-100 rounded transition-all"
                        >
                          {copiedField === 'intl-swift' ? <Check size={14} /> : <Copy size={14} />}
                          {copiedField === 'intl-swift' ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black text-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 sm:mb-6">
            Want to donate?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 px-4">
            Have questions about donation or want to know more about how your contribution helps? Reach out to us directly via WhatsApp for quick responses and detailed information.
          </p>
          <a 
            href="https://wa.me/9779769400892" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-semibold hover:bg-green-600 transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
