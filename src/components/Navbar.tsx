import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Search, Bookmark, Phone, MessageCircle, Menu, X, Calendar, ChevronDown, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { savedServiceIds, setIsSearchOpen, selectedEmirate, setSelectedEmirate } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emirateDropdownOpen, setEmirateDropdownOpen] = useState(false);
  const location = useLocation();

  const emirates = ['Dubai', 'Abu Dhabi', 'Sharjah'];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#052626] text-slate-200 text-xs py-2 px-4 border-b border-teal-900/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-teal-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-medium">UAE’s Leading Indoor Wellness & Sanitization Provider</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-slate-300">
              <a href="tel:800253264" className="hover:text-white transition-colors flex items-center gap-1">
                <Phone className="w-3 h-3 text-teal-400" />
                <span>800 CLEANHOME (800 253264)</span>
              </a>
              <a 
                href="https://wa.me/971501234567" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1 text-emerald-400"
              >
                <MessageCircle className="w-3 h-3" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Emirate Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setEmirateDropdownOpen(!emirateDropdownOpen)}
                className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors py-0.5 px-2 rounded bg-teal-950/60 border border-teal-800/40 cursor-pointer"
                aria-label="Select Emirates"
              >
                <span className="text-slate-400">Region:</span>
                <span className="font-semibold text-emerald-300">{selectedEmirate}</span>
                <ChevronDown className="w-3 h-3 ml-0.5 text-slate-400" />
              </button>

              {emirateDropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-36 bg-[#083838] border border-teal-700/50 rounded-md shadow-xl z-50 py-1">
                  {emirates.map((emirate) => (
                    <button
                      key={emirate}
                      type="button"
                      onClick={() => {
                        setSelectedEmirate(emirate);
                        setEmirateDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs transition-colors cursor-pointer ${
                        selectedEmirate === emirate
                          ? 'bg-teal-700/60 text-white font-medium'
                          : 'text-slate-300 hover:bg-teal-900/40 hover:text-white'
                      }`}
                    >
                      {emirate}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="hover:text-white text-slate-300 transition-colors hidden md:inline-block">
              Support
            </Link>
          </div>
        </div>
      </div>

      {/* Primary Top Bar Contract: Brand | 4-5 Nav Links | 1 Primary Action */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element, no subtitle clutter) */}
          <Link
            to="/"
            className="flex items-center gap-2 tracking-tight whitespace-nowrap shrink-0 group focus:outline-hidden"
          >
            <div className="w-9 h-9 rounded-lg bg-[#083838] flex items-center justify-center text-emerald-400 font-bold text-lg shadow-sm group-hover:bg-[#105652] transition-colors">
              c
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold text-[#083838] tracking-tight font-display leading-tight">
                the clean home
              </span>
            </div>
          </Link>

          {/* Zone 2: 4-5 Concise Single-line Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <Link
              to="/services"
              className={`hover:text-[#083838] transition-colors whitespace-nowrap shrink-0 py-1 ${
                isActive('/services') ? 'text-[#083838] font-bold border-b-2 border-teal-700' : ''
              }`}
            >
              Services
            </Link>
            <Link
              to="/services/ac-duct-cleaning-sanitization"
              className={`hover:text-[#083838] transition-colors whitespace-nowrap shrink-0 py-1 ${
                location.pathname.includes('ac-duct') ? 'text-[#083838] font-bold border-b-2 border-teal-700' : ''
              }`}
            >
              Pure Air®
            </Link>
            <Link
              to="/services/mattress-cleaning-sanitization"
              className={`hover:text-[#083838] transition-colors whitespace-nowrap shrink-0 py-1 ${
                location.pathname.includes('mattress') ? 'text-[#083838] font-bold border-b-2 border-teal-700' : ''
              }`}
            >
              Pure Sleep®
            </Link>
            <Link
              to="/services/home-deep-cleaning"
              className={`hover:text-[#083838] transition-colors whitespace-nowrap shrink-0 py-1 ${
                location.pathname.includes('home-deep') ? 'text-[#083838] font-bold border-b-2 border-teal-700' : ''
              }`}
            >
              Pure Living®
            </Link>
            <Link
              to="/about"
              className={`hover:text-[#083838] transition-colors whitespace-nowrap shrink-0 py-1 ${
                isActive('/about') ? 'text-[#083838] font-bold border-b-2 border-teal-700' : ''
              }`}
            >
              About
            </Link>
            <Link
              to="/blog"
              className={`hover:text-[#083838] transition-colors whitespace-nowrap shrink-0 py-1 ${
                isActive('/blog') ? 'text-[#083838] font-bold border-b-2 border-teal-700' : ''
              }`}
            >
              Wellness Journal
            </Link>
          </nav>

          {/* Zone 3: Search, Saved Shortlist, Primary Action CTA */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Global Search Button */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              title="Search services, wellness guides, FAQs"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Saved Services / Shortlist */}
            <Link
              to="/saved"
              className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
              title="Saved Services"
              aria-label="Saved Services"
            >
              <Bookmark className="w-5 h-5" />
              {savedServiceIds.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-emerald-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                  {savedServiceIds.length}
                </span>
              )}
            </Link>

            {/* Primary Action Button */}
            <Link
              to="/book"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#083838] hover:bg-[#0c4e4e] rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0"
            >
              <Calendar className="w-4 h-4 text-emerald-300" />
              <span>Book Service</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Navigation</span>
              <span className="text-xs text-emerald-700 font-medium">Serving {selectedEmirate}</span>
            </div>

            <div className="grid grid-cols-1 gap-1 text-sm font-medium text-slate-800">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-slate-50"
              >
                Home
              </Link>
              <Link
                to="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-slate-50"
              >
                All Services
              </Link>
              <Link
                to="/services/ac-duct-cleaning-sanitization"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Pure Air® (AC Ducts & Coils)</span>
                <span className="text-xs text-teal-700 font-normal">from AED 590</span>
              </Link>
              <Link
                to="/services/mattress-cleaning-sanitization"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Pure Sleep® (Mattresses)</span>
                <span className="text-xs text-teal-700 font-normal">from AED 240</span>
              </Link>
              <Link
                to="/services/home-deep-cleaning"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Pure Living® (Deep Cleaning)</span>
                <span className="text-xs text-teal-700 font-normal">from AED 850</span>
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-slate-50"
              >
                About Us
              </Link>
              <Link
                to="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-slate-50"
              >
                Wellness Journal
              </Link>
              <Link
                to="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-slate-50"
              >
                Frequently Asked Questions
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-slate-50"
              >
                Contact & Branches
              </Link>
              <Link
                to="/saved"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Saved Services</span>
                {savedServiceIds.length > 0 && (
                  <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-0.5 rounded-full font-medium">
                    {savedServiceIds.length} items
                  </span>
                )}
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <Link
                to="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-[#083838] text-white rounded-lg font-semibold text-center flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-emerald-300" />
                <span>Book Service Now</span>
              </Link>
              <a
                href="tel:800253264"
                className="w-full py-2.5 border border-slate-300 text-slate-800 rounded-lg font-medium text-center flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Call 800 CLEANHOME</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
