import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { showToast } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('AC Duct Cleaning');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    // Save inquiry to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('thecleanhome_inquiries') || '[]');
      existing.push({
        id: `INQ-${Date.now()}`,
        name,
        email,
        phone,
        service,
        message,
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('thecleanhome_inquiries', JSON.stringify(existing));
    } catch {
      // ignore
    }

    setSubmitted(true);
    showToast('Your message has been sent to our consulting team!');
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider">
            <span>Customer Experience & Technical Advisory</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#083838] tracking-tight font-display">
            Contact the clean home
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Reach our regional dispatch and wellness specialists across Dubai, Abu Dhabi, and the Northern Emirates.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Branch Locations & Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6 shadow-xs">
              <h3 className="text-base font-bold text-[#083838] font-display">
                Regional Hubs & Hotlines
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="p-4 bg-slate-50 rounded-xl space-y-1 border border-slate-100">
                  <div className="flex items-center gap-2 text-[#083838] font-bold">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <span>Dubai Headquarters & Operations Hub</span>
                  </div>
                  <p className="text-slate-500 pl-6">
                    Al Quoz Industrial Area 1, Behind Times Square Center, Dubai, UAE
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl space-y-1 border border-slate-100">
                  <div className="flex items-center gap-2 text-[#083838] font-bold">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <span>Abu Dhabi Service Center</span>
                  </div>
                  <p className="text-slate-500 pl-6">
                    Mussafah Industrial & Al Reem Island Support Facility, Abu Dhabi, UAE
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl space-y-1 border border-slate-100">
                  <div className="flex items-center gap-2 text-[#083838] font-bold">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <span>Sharjah & Northern Emirates</span>
                  </div>
                  <p className="text-slate-500 pl-6">
                    Al Majaz Waterfront District, Sharjah, UAE
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3 text-xs sm:text-sm">
                <div className="flex items-center gap-3 text-slate-700">
                  <Phone className="w-4 h-4 text-teal-700" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Toll-Free Booking:</span>
                    <a href="tel:800253264" className="font-bold text-[#083838] hover:underline">
                      800 CLEANHOME (800 253264)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-700">
                  <Mail className="w-4 h-4 text-teal-700" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Inquiries:</span>
                    <a href="mailto:info@thecleanhome.me" className="font-bold text-[#083838] hover:underline">
                      info@thecleanhome.me
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-700">
                  <Clock className="w-4 h-4 text-teal-700" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Dispatch Hours:</span>
                    <span className="font-semibold text-slate-800">
                      Monday to Sunday: 8:00 AM – 8:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#083838]">Inquiry Received</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you, <span className="font-semibold">{name}</span>. An indoor wellness advisor will contact you shortly via phone or WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setPhone('');
                    setMessage('');
                  }}
                  className="px-5 py-2.5 bg-[#083838] text-white text-xs font-semibold rounded-lg"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-[#083838] font-display">
                  Request a Callback or Quote
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Maya Al-Saleh"
                      className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      UAE Contact Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+971 50 987 6543"
                      className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="maya@example.com"
                      className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Treatment Needed
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800"
                    >
                      <option value="AC Duct Cleaning">AC Duct Cleaning & Sanitization</option>
                      <option value="Mattress Sanitization">Mattress Dust Mite Extraction</option>
                      <option value="Home Deep Cleaning">Full Home Deep Clean</option>
                      <option value="Sofa Upholstery">Sofa & Upholstery Care</option>
                      <option value="Water Tank Disinfection">Water Tank Cleaning</option>
                      <option value="Eco Pest Control">Eco Pest Control</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Property Details or Questions
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your home (e.g. 4-bedroom villa in Dubai Hills, looking for AC and mattress sanitization before moving in)..."
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#083838] hover:bg-[#0c4e4e] text-white font-bold rounded-xl text-xs sm:text-sm transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-emerald-300" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>

        <AdPlaceholder />
      </div>
    </div>
  );
};
