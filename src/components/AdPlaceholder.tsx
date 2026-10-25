import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AdPlaceholderProps {
  className?: string;
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ className = '' }) => {
  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 ${className}`}>
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-slate-100 via-emerald-50/40 to-slate-100 border border-slate-200/80 p-5 sm:p-6 shadow-xs">
        {/* Discrete Advertisement Tag */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-600 bg-slate-200/60 px-2 py-0.5 rounded">
            Advertisement / Sponsor Partner
          </span>
          <span className="text-[11px] text-slate-600">Eco-Wellness Network UAE</span>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-800 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-semibold text-slate-800">
                PureAir Living Pro Series HEPA Systems
              </h5>
              <p className="text-xs text-slate-600 mt-0.5">
                Certified medical-grade residential air purifiers designed specifically for GCC desert dust & pollen.
              </p>
            </div>
          </div>

          <Link
            to="/services/ac-duct-cleaning-sanitization"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-900 bg-white hover:bg-slate-50 border border-slate-300 px-3.5 py-2 rounded-lg transition-colors shrink-0 shadow-xs"
          >
            <span>Explore Certified Solutions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
