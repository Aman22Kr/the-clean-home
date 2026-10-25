import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { SERVICES_DATA, ServiceItem } from '../data/servicesData';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Bookmark, 
  Search, 
  CheckCircle2, 
  SlidersHorizontal,
  RotateCcw
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { toggleSaveService, isServiceSaved, selectedEmirate } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchFilter, setSearchFilter] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'pure-air', label: 'Pure Air® (AC Care)' },
    { id: 'pure-sleep', label: 'Pure Sleep® (Mattresses)' },
    { id: 'pure-living', label: 'Pure Living® (Deep Clean & Water)' },
    { id: 'specialized', label: 'Specialized Treatments' }
  ];

  // Filtering
  const filtered = SERVICES_DATA.filter((service) => {
    const matchesCategory =
      selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchFilter.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sorting
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-asc') return a.basePriceAED - b.basePriceAED;
    if (sortBy === 'price-desc') return b.basePriceAED - a.basePriceAED;
    return 0; // featured order
  });

  return (
    <div className="min-h-screen bg-[#FBFBFA] pt-6 pb-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider">
            <span>Environmental Sanitization Directory</span>
            <span>·</span>
            <span>Serving {selectedEmirate}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#083838] font-display">
            Certified Wellness & Sanitization Services
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Every service is executed by certified professionals using chemical-free, non-toxic formulations and medical-grade German and Swiss extraction machinery.
          </p>
        </div>

        {/* Filter & Controls Toolbar */}
        <div className="mt-8 p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#083838] text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Filter services..."
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-slate-800 focus:bg-white focus:border-teal-700 focus:outline-hidden"
              />
              {searchFilter && (
                <button
                  type="button"
                  onClick={() => setSearchFilter('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:bg-white focus:border-teal-700 focus:outline-hidden cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {sorted.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <SlidersHorizontal className="w-8 h-8 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No matching services found</h3>
            <p className="text-xs text-slate-500 mt-1">Try selecting another category or clearing your search term.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchFilter('');
              }}
              className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold inline-flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sorted.map((service) => {
              const saved = isServiceSaved(service.id);
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Card Image */}
                    <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <button
                        type="button"
                        onClick={() => toggleSaveService(service.id)}
                        className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer ${
                          saved
                            ? 'bg-emerald-600 text-white shadow-md'
                            : 'bg-white/80 text-slate-700 hover:bg-white'
                        }`}
                        title={saved ? 'Remove from shortlist' : 'Save to shortlist'}
                      >
                        <Bookmark className="w-4 h-4" fill={saved ? 'currentColor' : 'none'} />
                      </button>
                      <div className="absolute bottom-3 left-3 bg-[#083838]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-xs">
                        {service.categoryLabel}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h2 className="text-lg font-bold text-[#083838] group-hover:text-teal-700 transition-colors">
                          <Link to={`/services/${service.slug}`}>{service.title}</Link>
                        </h2>
                        <p className="text-xs text-teal-800 font-medium mt-1">
                          {service.tagline}
                        </p>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {service.shortDescription}
                      </p>

                      {/* Benefits Bullets */}
                      <div className="space-y-1.5 pt-1 text-xs text-slate-700">
                        {service.benefits.slice(0, 2).map((benefit, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 text-xs text-slate-500 pt-2 border-t border-slate-100">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{service.estimatedDuration}</span>
                        </span>
                        <span>·</span>
                        <span>{service.recommendedFrequency}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-6 pt-3 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                        Base Investment
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-extrabold text-[#083838] tabular-nums">
                          AED {service.basePriceAED}
                        </span>
                        <span className="text-[10px] text-slate-500">
                          {service.unitLabel}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        to={`/services/${service.slug}`}
                        className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 rounded-lg transition-colors"
                      >
                        Details
                      </Link>
                      <Link
                        to={`/book?service=${service.id}`}
                        className="px-3.5 py-2 bg-[#083838] hover:bg-[#0c4e4e] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1 shadow-xs"
                      >
                        <span>Book</span>
                        <ArrowRight className="w-3 h-3 text-emerald-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Reusable Advertisement Banner */}
      <AdPlaceholder />
    </div>
  );
};
