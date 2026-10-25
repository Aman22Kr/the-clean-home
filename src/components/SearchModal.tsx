import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { SERVICES_DATA, BLOG_POSTS, FAQ_LIST } from '../data/servicesData';
import { Search, X, ArrowRight, ShieldCheck, FileText, HelpCircle } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen } = useApp();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSearchOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  const matchedServices = SERVICES_DATA.filter(
    (s) =>
      s.title.toLowerCase().includes(normalizedQuery) ||
      s.shortDescription.toLowerCase().includes(normalizedQuery) ||
      s.categoryLabel.toLowerCase().includes(normalizedQuery) ||
      s.tagline.toLowerCase().includes(normalizedQuery)
  );

  const matchedPosts = BLOG_POSTS.filter(
    (p) =>
      p.title.toLowerCase().includes(normalizedQuery) ||
      p.excerpt.toLowerCase().includes(normalizedQuery) ||
      p.category.toLowerCase().includes(normalizedQuery)
  );

  const matchedFaqs = FAQ_LIST.filter(
    (f) =>
      f.question.toLowerCase().includes(normalizedQuery) ||
      f.answer.toLowerCase().includes(normalizedQuery)
  );

  const hasResults =
    matchedServices.length > 0 || matchedPosts.length > 0 || matchedFaqs.length > 0;

  const handleSelectService = (slug: string) => {
    setIsSearchOpen(false);
    navigate(`/services/${slug}`);
  };

  const handleSelectPost = (slug: string) => {
    setIsSearchOpen(false);
    navigate(`/blog/${slug}`);
  };

  const handleSelectFaq = () => {
    setIsSearchOpen(false);
    navigate('/faq');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100 bg-slate-50/50">
          <Search className="w-5 h-5 text-teal-700 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search AC duct cleaning, mattress sanitization, FAQs..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={() => setIsSearchOpen(false)}
            className="px-2 py-1 text-xs font-semibold text-slate-500 hover:text-slate-800 bg-slate-200/60 hover:bg-slate-200 rounded transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Quick Suggestions / Results */}
        <div className="overflow-y-auto p-4 space-y-6">
          {!query && (
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                Popular Searches
              </div>
              <div className="flex flex-wrap gap-2">
                {['AC Duct Cleaning', 'Mattress Dust Mite', 'Deep Cleaning Villa', 'Water Tank Cleaning', 'Eco Pest Control'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setQuery(item)}
                    className="text-xs bg-slate-100 hover:bg-teal-50 text-slate-700 hover:text-teal-900 px-3 py-1.5 rounded-lg border border-slate-200/60 transition-colors cursor-pointer"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && !hasResults && (
            <div className="text-center py-12">
              <p className="text-sm font-medium text-slate-700">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-500 mt-1">Try searching for AC, mattress, deep cleaning, or water tank.</p>
            </div>
          )}

          {/* Matched Services */}
          {matchedServices.length > 0 && (
            <div>
              <div className="text-xs font-semibold text-teal-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Sanitization Services ({matchedServices.length})</span>
              </div>
              <div className="divide-y divide-slate-100 rounded-xl border border-slate-100 overflow-hidden">
                {matchedServices.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => handleSelectService(service.slug)}
                    className="p-3.5 hover:bg-teal-50/50 cursor-pointer transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-900 group-hover:text-teal-900">
                          {service.title}
                        </span>
                        <span className="text-[11px] text-teal-700 font-medium">
                          {service.categoryLabel}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {service.shortDescription}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs font-bold text-[#083838]">
                        From AED {service.basePriceAED}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-teal-800 transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matched Blog Articles */}
          {matchedPosts.length > 0 && (
            <div>
              <div className="text-xs font-semibold text-teal-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>Wellness Journal Articles ({matchedPosts.length})</span>
              </div>
              <div className="divide-y divide-slate-100 rounded-xl border border-slate-100 overflow-hidden">
                {matchedPosts.map((post) => (
                  <div
                    key={post.slug}
                    onClick={() => handleSelectPost(post.slug)}
                    className="p-3 hover:bg-slate-50 cursor-pointer transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-xs font-medium text-slate-800 group-hover:text-teal-900 block">
                        {post.title}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {post.category} · {post.readTime}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-teal-800 transition-colors shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matched FAQs */}
          {matchedFaqs.length > 0 && (
            <div>
              <div className="text-xs font-semibold text-teal-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Questions & Answers ({matchedFaqs.length})</span>
              </div>
              <div className="divide-y divide-slate-100 rounded-xl border border-slate-100 overflow-hidden">
                {matchedFaqs.slice(0, 3).map((faq, idx) => (
                  <div
                    key={idx}
                    onClick={handleSelectFaq}
                    className="p-3 hover:bg-slate-50 cursor-pointer transition-colors flex items-start justify-between group"
                  >
                    <div>
                      <span className="text-xs font-semibold text-slate-800 block">
                        {faq.question}
                      </span>
                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {faq.answer}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-teal-800 transition-colors shrink-0 mt-1" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
