import React, { useState } from 'react';
import { FAQ_LIST, FaqItem } from '../data/servicesData';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { Search, ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';

export const FaqPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General & Safety' },
    { id: 'ac', label: 'AC Duct Cleaning' },
    { id: 'mattress', label: 'Mattress Sanitization' },
    { id: 'deep-clean', label: 'Home Deep Clean' },
    { id: 'pricing', label: 'Pricing & Booking' }
  ];

  const filteredFaqs = FAQ_LIST.filter((faq) => {
    const matchesCat = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleAccordion = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] pt-8 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Customer Knowledge Base</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#083838] tracking-tight font-display">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Everything you need to know about our non-toxic treatments, medical-grade equipment, scheduling, and satisfaction guarantee.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 bg-white rounded-2xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#083838] text-white'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-slate-800 focus:bg-white focus:border-teal-700 focus:outline-hidden"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-xs">
              No questions found matching your search.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndices.includes(idx);
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors cursor-pointer"
                  >
                    <span className="text-sm font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-teal-800' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Need More Assistance Banner */}
        <div className="bg-[#EBF5F4] border border-teal-800/20 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-[#083838]">
              Have a custom property or technical inquiry?
            </h3>
            <p className="text-xs text-slate-600">
              Speak directly with our indoor environmental wellness consultants.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:800253264"
              className="px-4 py-2.5 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 rounded-xl text-xs font-semibold flex items-center gap-2 shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-teal-700" />
              <span>800 CLEANHOME</span>
            </a>
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        <AdPlaceholder />
      </div>
    </div>
  );
};
