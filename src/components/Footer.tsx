import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#052626] text-slate-300 pt-16 pb-12 border-t border-teal-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-teal-900/50">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-teal-800 flex items-center justify-center text-emerald-400 font-bold text-lg shadow-sm">
                c
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight font-display">
                the clean home
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              UAE’s trusted indoor environmental wellness company. We specialize in medical-grade AC duct cleaning, chemical-free mattress sanitization, deep cleaning, and water safety for modern homes.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Non-Toxic, Child & Pet Friendly Formulations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dubai Municipality & NADCA Certified Technicians</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transparent Upfront Pricing & Real-Time Booking</span>
              </div>
            </div>
          </div>

          {/* Pillars & Services */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Pillars & Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/services/ac-duct-cleaning-sanitization" className="hover:text-emerald-300 transition-colors">
                  Pure Air® AC Duct Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services/mattress-cleaning-sanitization" className="hover:text-emerald-300 transition-colors">
                  Pure Sleep® Mattress Sanitization
                </Link>
              </li>
              <li>
                <Link to="/services/home-deep-cleaning" className="hover:text-emerald-300 transition-colors">
                  Pure Living® Home Deep Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services/sofa-upholstery-deep-cleaning" className="hover:text-emerald-300 transition-colors">
                  Sofa & Upholstery Care
                </Link>
              </li>
              <li>
                <Link to="/services/water-tank-cleaning-disinfection" className="hover:text-emerald-300 transition-colors">
                  Water Tank Disinfection
                </Link>
              </li>
              <li>
                <Link to="/services/eco-friendly-pest-control" className="hover:text-emerald-300 transition-colors">
                  Eco-Friendly Pest Control
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Knowledge */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Company & Guides
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/about" className="hover:text-emerald-300 transition-colors">
                  About Our Philosophy
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-emerald-300 transition-colors">
                  Indoor Wellness Journal
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-emerald-300 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/book" className="hover:text-emerald-300 transition-colors">
                  Schedule Service Online
                </Link>
              </li>
              <li>
                <Link to="/saved" className="hover:text-emerald-300 transition-colors">
                  My Saved Services & Drafts
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-300 transition-colors">
                  Contact & Branch Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* UAE Regional Hubs & Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              UAE Operations
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Dubai HQ</span>
                  <span>Al Quoz Industrial Area 1, Dubai, UAE</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Abu Dhabi Hub</span>
                  <span>Mussafah Industrial & Reem Support Center</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 pt-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:800253264" className="text-white font-medium hover:text-emerald-300">
                  800 CLEANHOME
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:info@thecleanhome.me" className="hover:text-emerald-300">
                  info@thecleanhome.me
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Strip */}
        <div className="py-8 flex flex-wrap items-center justify-between gap-6 border-b border-teal-900/50 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-slate-300 font-medium">Standards & Certifications:</span>
            <span>NADCA Clean Air Certified · IAQA Member · Dubai Municipality Approved · ECARF Allergy Friendly</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Operating Hours: Mon - Sun (8:00 AM – 8:00 PM)</span>
          </div>
        </div>

        {/* Bottom Copyright & LocalStorage Note */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} the clean home UAE. All rights reserved. Recreated from thehealthyhome.me for demonstration & static deployment.
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Client State: Browser localStorage</span>
            <span>·</span>
            <span>Deployment: GitHub Pages via GitHub Actions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
