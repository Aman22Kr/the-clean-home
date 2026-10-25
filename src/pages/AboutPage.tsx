import React from 'react';
import { Link } from 'react-router-dom';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { ShieldCheck, Heart, Award, CheckCircle2, ArrowRight, Wind, Sparkles } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FBFBFA] pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Section */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider">
            <span>Our Heritage & Purpose</span>
            <span>·</span>
            <span>Founded in the UAE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#083838] tracking-tight font-display">
            Restoring Indoor Environmental Wellness
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            the clean home was established to pioneer certified, chemical-free sanitization protocols tailored specifically for the harsh environmental realities of the Arabian Gulf.
          </p>
        </div>

        {/* Story & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#083838] font-display">
              Why Traditional Cleaning Wasn’t Enough
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                In the UAE, extreme outdoor heat means families spend upwards of 90% of their lives in climate-controlled indoor spaces. While rooms may appear clean on the surface, closed air conditioning loops circulate microscopic desert dust, volatile organic compounds (VOCs), and humidity-driven mold spores thousands of times every day.
              </p>
              <p>
                Standard hourly cleaners scrub floors with fragrant chemical detergents that actually increase airborne toxicity. We took the opposite approach: utilizing hospital-grade physical extraction, German high-frequency pulsation, medical UV-C germicidal light, and 100% natural Australian tea-tree extracts.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <span className="font-extrabold text-[#083838] text-xl block">150,000+</span>
                <span className="text-slate-500">GCC homes safeguarded</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <span className="font-extrabold text-[#083838] text-xl block">100%</span>
                <span className="text-slate-500">Chemical-free bio-formulations</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl aspect-4/3 bg-slate-100">
              <img
                src="/src/assets/images/service_ac_duct_cleaning_1792897222434.jpg"
                alt="Certified technicians at the clean home"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#083838]/80 via-transparent to-transparent flex items-end p-6 text-white">
                <div>
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block">
                    Certified Technicians
                  </span>
                  <span className="text-sm font-semibold">
                    Trained under strict NADCA and BICSc international protocols
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The 4 Principles of the clean home */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
              Our Commitments
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#083838] font-display">
              Built on Scientific Rigor & Family Safety
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-800 text-emerald-300 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-display">
                Certified Zero Toxicity
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero synthetic fragrances, zero chlorine bleach, and zero toxic chemical runoff. Completely safe for infants and companion animals.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-800 text-emerald-300 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-display">
                International Accreditations
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full compliance with the National Air Duct Cleaners Association (NADCA), IAQA, and approved by the Dubai Municipality.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-800 text-emerald-300 flex items-center justify-center">
                <Wind className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-display">
                Proven Allergen Removal
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Medical-grade HEPA filtration extracting 99.8% of microscopic dust mite protein Der p 1, pollen, and airborne fungal colonies.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-800 text-emerald-300 flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-display">
                100% Satisfaction Guarantee
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If you are not entirely satisfied with your indoor air purity or surface sanitization, our team returns for a complimentary re-treatment.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="bg-[#083838] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-bold font-display">
              Ready to experience truly clean indoor living?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Schedule an AC duct decontamination or mattress sanitization appointment in under two minutes.
            </p>
          </div>
          <Link
            to="/book"
            className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-sm transition-colors shadow-md whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>Book Your Service Online</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <AdPlaceholder />
      </div>
    </div>
  );
};
