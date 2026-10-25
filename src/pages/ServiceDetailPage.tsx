import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { SERVICES_DATA, ServiceItem } from '../data/servicesData';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { 
  ShieldCheck, 
  Clock, 
  Calendar, 
  Bookmark, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  Wrench, 
  AlertCircle,
  HelpCircle
} from 'lucide-react';

export const ServiceDetailPage: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const { toggleSaveService, isServiceSaved, selectedEmirate } = useApp();
  const navigate = useNavigate();

  const service = SERVICES_DATA.find((s) => s.slug === serviceSlug);

  // Estimator State
  const [unitCount, setUnitCount] = useState<number>(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#FBFBFA] flex items-center justify-center p-4">
        <div className="max-w-md bg-white p-8 rounded-2xl border border-slate-200 text-center shadow-lg space-y-4">
          <AlertCircle className="w-12 h-12 text-teal-800 mx-auto" />
          <h2 className="text-xl font-bold text-slate-800 font-display">Service Not Found</h2>
          <p className="text-xs text-slate-600">
            We couldn't locate the sanitization service you requested. It may have been updated or moved.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#083838] text-white text-xs font-semibold rounded-lg"
          >
            <span>Back to All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  const isSaved = isServiceSaved(service.id);
  const estimatedPrice = service.basePriceAED * unitCount;

  const handleBookNow = () => {
    navigate(`/book?service=${service.id}&units=${unitCount}`);
  };

  const relatedServices = SERVICES_DATA.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FBFBFA] pb-16">
      {/* 1. Breadcrumbs & Service Header */}
      <div className="bg-[#083838] text-white pt-8 pb-14 border-b border-teal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-teal-300/80 mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white font-medium">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-teal-900/60 border border-teal-700/60 px-2.5 py-1 rounded-md">
                  {service.categoryLabel}
                </span>
                <span className="text-xs text-slate-300">
                  Certified UAE Indoor Treatment
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl font-light">
                {service.tagline}
              </p>

              {/* Certifications row */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {service.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center gap-1.5 text-xs text-teal-200 bg-teal-900/40 border border-teal-800/80 px-3 py-1 rounded-full"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{cert}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Actions Card in Header */}
            <div className="lg:col-span-4 bg-teal-950/70 border border-teal-800/70 rounded-2xl p-6 text-white space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Base Price</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                      AED {service.basePriceAED}
                    </span>
                    <span className="text-xs text-slate-300">/ unit</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => toggleSaveService(service.id)}
                  className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
                    isSaved
                      ? 'bg-emerald-600 border-emerald-500 text-white'
                      : 'bg-teal-900/40 border-teal-700/50 text-slate-200 hover:bg-teal-900'
                  }`}
                  title={isSaved ? 'Saved in Shortlist' : 'Save to Shortlist'}
                >
                  <Bookmark className="w-5 h-5" fill={isSaved ? 'currentColor' : 'none'} />
                </button>
              </div>

              <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-teal-900">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Duration:</span>
                  <span className="font-semibold text-white">{service.estimatedDuration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Recommended:</span>
                  <span className="font-semibold text-white">{service.recommendedFrequency}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Region:</span>
                  <span className="font-semibold text-emerald-300">{selectedEmirate}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleBookNow}
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule This Service</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Full Details, Process, Equipment */}
          <div className="lg:col-span-8 space-y-12">
            {/* Visual Hero Feature Image */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-16/9 bg-slate-100">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Overview & Clinical Benefits */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#083838] font-display">
                Service Overview & Health Impact
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {service.fullDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                {service.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-start gap-3 shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 font-medium leading-snug">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Sanitization Protocol */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
                    Scientific Methodology
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#083838] mt-1 font-display">
                    Step-by-Step Process & Quality Controls
                  </h3>
                </div>
                <span className="text-xs font-medium text-slate-500">
                  {service.stages.length} Verified Stages
                </span>
              </div>

              <div className="space-y-4">
                {service.stages.map((stage) => (
                  <div
                    key={stage.step}
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#083838] text-emerald-300 font-bold text-xs flex items-center justify-center shrink-0">
                      0{stage.step}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {stage.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment & Standards Used */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-2 text-teal-900">
                <Wrench className="w-5 h-5 text-emerald-600" />
                <h3 className="text-lg font-bold font-display">Certified Medical & Industrial Equipment</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We invest in specialized German, Swiss, and American decontaminating machinery to ensure microscopic dust extraction without harmful chemicals.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.equipment.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service FAQs */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#083838]">
                <HelpCircle className="w-5 h-5 text-teal-700" />
                <h3 className="text-xl font-bold font-display">Frequently Asked Questions</h3>
              </div>

              <div className="space-y-3">
                {service.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-slate-200 overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <span className="text-xs sm:text-sm font-bold text-slate-900">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform ${
                            isOpen ? 'rotate-180 text-teal-700' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Live Price Calculator & Instant Book Widget */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 bg-white rounded-2xl border border-slate-200 p-6 shadow-lg space-y-5">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-teal-800">
                  Custom Estimate Calculator
                </span>
                <h3 className="text-lg font-bold text-[#083838] mt-0.5">
                  Customize Units & Volume
                </h3>
              </div>

              {/* Unit Counter */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Quantity / Units
                </label>
                <div className="flex items-center justify-between border border-slate-200 rounded-xl p-2 bg-slate-50">
                  <button
                    type="button"
                    onClick={() => setUnitCount((prev) => Math.max(1, prev - 1))}
                    className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <div className="text-center">
                    <span className="text-lg font-extrabold text-[#083838] tabular-nums">
                      {unitCount}
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      {service.unitLabel}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setUnitCount((prev) => prev + 1)}
                    className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price Calculation Box */}
              <div className="p-4 rounded-xl bg-[#EBF5F4] border border-teal-800/20 space-y-2">
                <div className="flex items-center justify-between text-xs text-teal-800">
                  <span>Unit Rate:</span>
                  <span className="font-semibold">AED {service.basePriceAED}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-teal-800">
                  <span>Units Selected:</span>
                  <span className="font-semibold">{unitCount}</span>
                </div>
                <div className="pt-2 border-t border-teal-800/20 flex items-center justify-between">
                  <span className="text-xs font-bold text-teal-900">Total Estimate:</span>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-[#083838] tabular-nums">
                      AED {estimatedPrice}
                    </span>
                    <span className="text-[10px] text-teal-700 block">incl. 5% VAT</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleBookNow}
                className="w-full py-3.5 bg-[#083838] hover:bg-[#0c4e4e] text-white font-bold rounded-xl text-sm transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-emerald-300" />
                <span>Confirm & Pick Date / Time</span>
              </button>

              <div className="text-center">
                <p className="text-[11px] text-slate-500">
                  No payment required today. Pay after service completion via card or cash.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Free reschedule up to 12 hours prior</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>100% Satisfaction or free re-clean</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Related Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-slate-200">
        <h3 className="text-xl font-bold text-[#083838] mb-6 font-display">
          Frequently Paired Indoor Wellness Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((rel) => (
            <Link
              key={rel.id}
              to={`/services/${rel.slug}`}
              className="bg-white rounded-xl border border-slate-200 p-5 hover:border-teal-700/60 transition-all hover:shadow-xs group"
            >
              <span className="text-[10px] font-bold text-teal-800 uppercase tracking-wider block mb-1">
                {rel.categoryLabel}
              </span>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                {rel.title}
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                {rel.shortDescription}
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-extrabold text-[#083838]">From AED {rel.basePriceAED}</span>
                <span className="text-teal-800 font-semibold group-hover:underline">View Details →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Reusable Advertisement Banner */}
      <AdPlaceholder />
    </div>
  );
};
