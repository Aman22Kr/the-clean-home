import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { SERVICES_DATA, UAE_LOCATIONS } from '../data/servicesData';
import { VideoPlaceholder } from '../components/VideoPlaceholder';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { 
  Wind, 
  Bed, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Star, 
  Award, 
  Droplet, 
  ChevronRight,
  Bookmark
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { toggleSaveService, isServiceSaved, selectedEmirate } = useApp();
  const navigate = useNavigate();

  // Instant Quote / Quick Booking State
  const [selectedServiceId, setSelectedServiceId] = useState(SERVICES_DATA[0].id);
  const [selectedArea, setSelectedArea] = useState('Dubai Marina & JBR');
  const [selectedPropertySize, setSelectedPropertySize] = useState('2-Bedroom');

  const activeService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  // Calculate quick estimate
  const multiplier =
    selectedPropertySize === 'Studio / 1-Bed'
      ? 1
      : selectedPropertySize === '2-Bedroom'
      ? 1.5
      : selectedPropertySize === '3-Bedroom'
      ? 2.1
      : 3.2; // 4+ Bed Villa

  const estimatedAED = Math.round(activeService.basePriceAED * multiplier);

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/book?service=${selectedServiceId}&property=${encodeURIComponent(selectedPropertySize)}&area=${encodeURIComponent(selectedArea)}`);
  };

  const currentEmirateData = UAE_LOCATIONS.find((e) => e.emirate === selectedEmirate) || UAE_LOCATIONS[0];

  return (
    <div className="min-h-screen bg-[#FBFBFA]">
      {/* 1. Hero Section with 16:9 Visual Asset & Quick Booking Calculator */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-[#F4F8F7] to-[#FBFBFA] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Unboxed Metadata Tag */}
              <div className="flex items-center gap-2 text-xs font-semibold text-teal-900 tracking-wider uppercase">
                <span className="text-emerald-700">●</span>
                <span>Eco-Friendly Indoor Environmental Wellness</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-600">Dubai & Abu Dhabi</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#083838] tracking-tight leading-[1.15] font-display">
                Pure air to breathe.<br />
                Pure mattress to sleep.<br />
                <span className="text-teal-700">Pure spaces to live.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                The Middle East’s pioneer in chemical-free AC duct decontamination, high-frequency mattress sanitization, and deep home wellness treatments.
              </p>

              {/* Fast Trust Row */}
              <div className="grid grid-cols-3 gap-4 pt-2 border-y border-slate-200/80 py-4 max-w-xl text-xs sm:text-sm">
                <div>
                  <div className="font-bold text-[#083838] text-lg sm:text-xl tabular-nums">99.8%</div>
                  <div className="text-slate-500 text-xs">Dust Mites & Mold Eradication</div>
                </div>
                <div>
                  <div className="font-bold text-[#083838] text-lg sm:text-xl tabular-nums">150,000+</div>
                  <div className="text-slate-500 text-xs">UAE Homes Serviced</div>
                </div>
                <div>
                  <div className="font-bold text-[#083838] text-lg sm:text-xl tabular-nums">0 Chemicals</div>
                  <div className="text-slate-500 text-xs">Baby & Pet Certified Safe</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/book"
                  className="px-6 py-3.5 bg-[#083838] hover:bg-[#0c4e4e] text-white text-sm font-semibold rounded-xl shadow-md transition-all flex items-center gap-2 whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4 text-emerald-300" />
                  <span>Book Sanitization Online</span>
                </Link>
                <Link
                  to="/services"
                  className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold rounded-xl border border-slate-200 transition-colors flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span>Explore All Services</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </Link>
              </div>
            </div>

            {/* Right Hero Column: Real-Time Instant Quote Estimator Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xl shadow-teal-950/5 relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-base font-bold text-[#083838]">Instant Service Estimate</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Select service & home size for live pricing</p>
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
                    Transparent AED
                  </span>
                </div>

                <form onSubmit={handleQuickBook} className="mt-5 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      1. Select Sanitization Service
                    </label>
                    <select
                      value={selectedServiceId}
                      onChange={(e) => setSelectedServiceId(e.target.value)}
                      className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:bg-white focus:border-teal-700 focus:outline-hidden"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.id}>
                          {srv.title} ({srv.categoryLabel})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        2. Property Size
                      </label>
                      <select
                        value={selectedPropertySize}
                        onChange={(e) => setSelectedPropertySize(e.target.value)}
                        className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:bg-white focus:border-teal-700 focus:outline-hidden"
                      >
                        <option value="Studio / 1-Bed">Studio / 1-Bed</option>
                        <option value="2-Bedroom">2-Bedroom</option>
                        <option value="3-Bedroom">3-Bedroom</option>
                        <option value="4+ Bed Villa">4+ Bed Villa</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        3. Neighborhood
                      </label>
                      <select
                        value={selectedArea}
                        onChange={(e) => setSelectedArea(e.target.value)}
                        className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:bg-white focus:border-teal-700 focus:outline-hidden"
                      >
                        {currentEmirateData.areas.map((area) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Calculated Price Display */}
                  <div className="bg-[#EBF5F4] border border-teal-800/20 rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-teal-800 font-medium block">Estimated Upfront Cost:</span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-2xl sm:text-3xl font-extrabold text-[#083838] tabular-nums">
                          AED {estimatedAED}
                        </span>
                        <span className="text-xs text-teal-700">inclusive of VAT</span>
                      </div>
                    </div>
                    <div className="text-right text-[11px] text-teal-800">
                      <div>Est. Duration</div>
                      <div className="font-semibold">{activeService.estimatedDuration}</div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#083838] hover:bg-[#0c4e4e] text-white rounded-xl font-semibold text-sm transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Proceed to Book This Service</span>
                    <ArrowRight className="w-4 h-4 text-emerald-300" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Visual Hero Showcase: Pure Living Environment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg aspect-16/9 sm:aspect-[21/9]">
          <img
            src="/src/assets/images/hero_indoor_wellness_1792897222616.jpg"
            alt="Pristine Dubai living room with healthy pure air and natural light"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-6 sm:p-10">
            <div className="max-w-2xl text-white space-y-2">
              <span className="text-xs font-semibold tracking-wider uppercase text-emerald-400">
                Pristine Environmental Hygiene
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white font-display">
                Transforming Houses into Certified Healthy Homes
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                We combine Swiss ultrasonic air disinfection with German high-frequency extraction to protect your loved ones from invisible airborne contaminants and dust mites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Three Core Pillars: Pure Air®, Pure Sleep®, Pure Living® */}
      <section className="py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
              Our Core Pillars
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#083838] font-display">
              Engineered For Complete Indoor Well-Being
            </h2>
            <p className="text-sm text-slate-600">
              Unlike superficial cleaning services, our protocols decontaminate the invisible systems that directly affect your respiratory and immune health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Pure Air® */}
            <div className="rounded-2xl border border-slate-200 bg-[#FBFBFA] p-7 flex flex-col justify-between hover:border-teal-700/60 transition-all hover:shadow-md">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-teal-800 text-emerald-300 flex items-center justify-center shadow-xs">
                  <Wind className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">Pillar 01</span>
                  <h3 className="text-xl font-bold text-[#083838] mt-1 font-display">Pure Air®</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  AC duct rotary brush cleaning, coil sanitization, and 100% natural tea-tree bio-fogging that eliminates 99.8% of mold and bacterial spores.
                </p>
                <div className="pt-2 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Eliminates musty AC odors & morning sneezing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Reduces DEWA power bills by improving airflow</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block">From</span>
                  <span className="text-base font-bold text-[#083838]">AED 590</span>
                </div>
                <Link
                  to="/services/ac-duct-cleaning-sanitization"
                  className="text-xs font-semibold text-teal-800 hover:text-teal-950 flex items-center gap-1"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 2: Pure Sleep® */}
            <div className="rounded-2xl border border-slate-200 bg-[#FBFBFA] p-7 flex flex-col justify-between hover:border-teal-700/60 transition-all hover:shadow-md">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-teal-800 text-emerald-300 flex items-center justify-center shadow-xs">
                  <Bed className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">Pillar 02</span>
                  <h3 className="text-xl font-bold text-[#083838] mt-1 font-display">Pure Sleep®</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  German pulsating dry-extraction technology paired with medical UV-C light to eradicate millions of microscopic dust mites living in your mattress.
                </p>
                <div className="pt-2 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% dry process — sleep immediately after</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Relief from nighttime coughing & itchy skin</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block">From</span>
                  <span className="text-base font-bold text-[#083838]">AED 240</span>
                </div>
                <Link
                  to="/services/mattress-cleaning-sanitization"
                  className="text-xs font-semibold text-teal-800 hover:text-teal-950 flex items-center gap-1"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 3: Pure Living® */}
            <div className="rounded-2xl border border-slate-200 bg-[#FBFBFA] p-7 flex flex-col justify-between hover:border-teal-700/60 transition-all hover:shadow-md">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-teal-800 text-emerald-300 flex items-center justify-center shadow-xs">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">Pillar 03</span>
                  <h3 className="text-xl font-bold text-[#083838] mt-1 font-display">Pure Living®</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Full villa & apartment deep cleaning, sofa upholstery restoration, and municipal certified water tank disinfection for safe cooking and bathing.
                </p>
                <div className="pt-2 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>High-temperature 180°C steam disinfection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Food-grade water tank cleaning certificates</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block">From</span>
                  <span className="text-base font-bold text-[#083838]">AED 850</span>
                </div>
                <Link
                  to="/services/home-deep-cleaning"
                  className="text-xs font-semibold text-teal-800 hover:text-teal-950 flex items-center gap-1"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Services Grid with Dynamic Image Assets */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
              Signature Treatments
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#083838] mt-1 font-display">
              Most Requested Treatments in {selectedEmirate}
            </h2>
          </div>
          <Link
            to="/services"
            className="text-xs sm:text-sm font-semibold text-teal-800 hover:text-teal-950 flex items-center gap-1"
          >
            <span>View All 6 Specialized Services</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_DATA.slice(0, 3).map((service) => {
            const saved = isServiceSaved(service.id);
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
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

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-[#083838] group-hover:text-teal-700 transition-colors">
                      <Link to={`/services/${service.slug}`}>{service.title}</Link>
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-slate-500 pt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{service.estimatedDuration}</span>
                      </span>
                      <span>·</span>
                      <span>{service.recommendedFrequency}</span>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Starting from</span>
                    <span className="text-base font-extrabold text-[#083838] tabular-nums">
                      AED {service.basePriceAED}
                    </span>
                  </div>
                  <Link
                    to={`/book?service=${service.id}`}
                    className="px-3.5 py-2 bg-slate-900 hover:bg-[#083838] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. The 7-Stage Sanitization Protocol */}
      <section className="py-16 bg-[#083838] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              The Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
              Our 7-Stage Mechanical & Biological Sanitization Standard
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Every appointment follows a strict step-by-step certified scientific process to guarantee indoor air and surface purity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-teal-900/40 border border-teal-800/60 space-y-2">
              <span className="text-xs font-bold text-emerald-400">01 / AUDIT</span>
              <h4 className="text-sm font-semibold text-white">Endoscopic Scope Inspection</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                HD internal cameras assess contamination depth, mold clusters, and airflow restriction.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-teal-900/40 border border-teal-800/60 space-y-2">
              <span className="text-xs font-bold text-emerald-400">02 / CONTAINMENT</span>
              <h4 className="text-sm font-semibold text-white">HEPA Negative Pressure</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Industrial extractors seal duct branches to ensure zero dust leaks into your living areas.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-teal-900/40 border border-teal-800/60 space-y-2">
              <span className="text-xs font-bold text-emerald-400">03 / MECHANICAL</span>
              <h4 className="text-sm font-semibold text-white">Motorized Rotary Brushing</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Flexible rotary shafts scrub inner duct walls, dislodging stubborn sand crusts and dust cakes.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-teal-900/40 border border-teal-800/60 space-y-2">
              <span className="text-xs font-bold text-emerald-400">04 / DISINFECTION</span>
              <h4 className="text-sm font-semibold text-white">Tea-Tree Bio-Fogging</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Cold ultrasonic fogging with 100% plant extracts eliminates airborne spores with zero harsh chemical fumes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Video Demonstration Showcase (Blank Video Placeholder per instruction) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
              See the Difference
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#083838] font-display">
              Witness the German-Engineered Extraction in Action
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Watch how our certified team isolates, cleans, and disinfects air conditioning ducts and king mattresses without leaving behind dust, moisture, or chemical residues.
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Before-and-after live endoscopic camera evidence included with every AC service</span>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Pet and baby safe: 0% bleach, 0% chlorine fumes, 100% natural bio-sanitizers</span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                to="/services/ac-duct-cleaning-sanitization"
                className="inline-flex items-center gap-2 text-xs font-semibold text-teal-800 hover:text-teal-950 underline underline-offset-4"
              >
                <span>Read technical equipment specifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <VideoPlaceholder
              title="Endoscopic AC Duct Brushing & Cold Ultrasonic Bio-Sanitization"
              duration="03:12"
              aspectRatio="16:9"
            />
          </div>
        </div>
      </section>

      {/* 7. Attributable UAE Client Testimonials */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
              Client Experiences
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#083838] font-display">
              Trusted by 150,000+ Families Across the UAE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FBFBFA] border border-slate-200 space-y-4">
              <div className="flex items-center gap-1 text-emerald-600">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-emerald-500" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                &ldquo;My 4-year-old son woke up every morning with allergic sneezing and blocked sinuses. After the clean home sanitized our AC ducts and all bedroom mattresses, his nighttime coughing completely stopped within two days.&rdquo;
              </p>
              <div className="pt-2 border-t border-slate-200/60 text-xs">
                <span className="font-bold text-slate-900 block">Natasha Henderson</span>
                <span className="text-slate-500">Arabian Ranches 2, Dubai · AC Duct & Pure Sleep®</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBFBFA] border border-slate-200 space-y-4">
              <div className="flex items-center gap-1 text-emerald-600">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-emerald-500" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                &ldquo;The endoscopic camera photos they showed me before and after the cleaning were staggering. The ducts in our Marina apartment were caked with construction dust. The air smells completely neutral and crisp now.&rdquo;
              </p>
              <div className="pt-2 border-t border-slate-200/60 text-xs">
                <span className="font-bold text-slate-900 block">Faisal Al-Tamimi</span>
                <span className="text-slate-500">Dubai Marina · Full AC Duct Decontamination</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBFBFA] border border-slate-200 space-y-4">
              <div className="flex items-center gap-1 text-emerald-600">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-emerald-500" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                &ldquo;Booking online took two minutes and the crew arrived precisely on time with heavy German extraction machinery. Professional, courteous, and no chemical smell whatsoever. Absolutely the gold standard.&rdquo;
              </p>
              <div className="pt-2 border-t border-slate-200/60 text-xs">
                <span className="font-bold text-slate-900 block">Elena Rossi</span>
                <span className="text-slate-500">Saadiyat Island, Abu Dhabi · Move-In Deep Clean</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Compact Advertisement Section (Global Requirement) */}
      <AdPlaceholder />
    </div>
  );
};
