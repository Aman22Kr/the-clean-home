import React from 'react';
import { Link } from 'react-router-dom';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { Home, Compass, ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] bg-[#FBFBFA] flex flex-col justify-between pt-12 pb-16">
      <div className="max-w-2xl mx-auto px-4 text-center space-y-6 my-auto">
        <div className="inline-block px-3 py-1 bg-teal-50 border border-teal-200/80 rounded-full text-xs font-bold text-teal-900 uppercase tracking-wider">
          Error 404
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#083838] font-display">
          Page Not Found
        </h1>

        <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
          The page or service you are trying to reach does not exist or may have been updated. Explore our certified sanitization directory below.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="px-5 py-2.5 bg-[#083838] text-white rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 hover:bg-[#0c4e4e] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>
          <Link
            to="/services"
            className="px-5 py-2.5 bg-white border border-slate-200 text-slate-800 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 hover:bg-slate-50 transition-colors"
          >
            <Compass className="w-4 h-4 text-teal-800" />
            <span>All Services</span>
          </Link>
        </div>
      </div>

      <AdPlaceholder />
    </div>
  );
};
