import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { 
  Bookmark, 
  Trash2, 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  CheckCircle2,
  XCircle
} from 'lucide-react';

export const SavedPage: React.FC = () => {
  const { savedServices, removeSavedService, clearSavedServices, bookings, cancelBooking } = useApp();

  const totalEstimateAED = savedServices.reduce((acc, s) => acc + s.basePriceAED, 0);

  return (
    <div className="min-h-screen bg-[#FBFBFA] pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider">
            <Bookmark className="w-4 h-4" />
            <span>Client Portal & Storage</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#083838] tracking-tight font-display">
            Saved Services & Bookings
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            Review your shortlisted treatments, calculate aggregate packages, and manage existing appointments.
          </p>
        </div>

        {/* Shortlisted Services Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h2 className="text-lg font-bold text-slate-900">
              Shortlisted Treatments ({savedServices.length})
            </h2>
            {savedServices.length > 0 && (
              <button
                type="button"
                onClick={clearSavedServices}
                className="text-xs text-rose-600 hover:text-rose-800 font-semibold cursor-pointer"
              >
                Clear Shortlist
              </button>
            )}
          </div>

          {savedServices.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center space-y-4">
              <Bookmark className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="text-base font-bold text-slate-800">Your shortlist is empty</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Explore our AC duct cleaning, mattress sanitization, or deep cleaning services and click the bookmark icon to save them here.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#083838] text-white text-xs font-semibold rounded-lg"
              >
                <span>Browse Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Items List */}
              <div className="lg:col-span-8 space-y-4">
                {savedServices.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-xs"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-teal-800 uppercase tracking-wider">
                          {service.categoryLabel}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900">
                          <Link to={`/services/${service.slug}`} className="hover:text-teal-800">
                            {service.title}
                          </Link>
                        </h4>
                        <div className="flex items-center gap-3 text-xs text-slate-500">
                          <span>{service.estimatedDuration}</span>
                          <span>·</span>
                          <span>{service.recommendedFrequency}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0">
                      <div className="text-left sm:text-right">
                        <span className="text-base font-extrabold text-[#083838] tabular-nums">
                          AED {service.basePriceAED}
                        </span>
                        <span className="text-[10px] text-slate-400 block">
                          {service.unitLabel}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Link
                          to={`/book?service=${service.id}`}
                          className="px-3.5 py-1.5 bg-[#083838] hover:bg-[#0c4e4e] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1"
                        >
                          <span>Book</span>
                          <Calendar className="w-3 h-3 text-emerald-300" />
                        </Link>
                        <button
                          type="button"
                          onClick={() => removeSavedService(service.id)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Package Summary */}
              <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Combined Package Estimate
                </h3>
                <div className="p-4 bg-[#EBF5F4] rounded-xl border border-teal-800/20 space-y-2">
                  <div className="flex justify-between text-xs text-teal-800">
                    <span>Items count:</span>
                    <span className="font-semibold">{savedServices.length} Treatments</span>
                  </div>
                  <div className="pt-2 border-t border-teal-800/20 flex justify-between font-bold text-sm text-[#083838]">
                    <span>Combined Total:</span>
                    <span>AED {totalEstimateAED}</span>
                  </div>
                  <span className="text-[10px] text-teal-700 block">
                    * Final rate adjusts based on unit count and villa size during booking.
                  </span>
                </div>

                <Link
                  to="/book"
                  className="w-full py-3 bg-[#083838] hover:bg-[#0c4e4e] text-white font-bold rounded-xl text-xs sm:text-sm transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-emerald-300" />
                  <span>Schedule Appointment Now</span>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Existing Bookings Section */}
        <div className="space-y-4 pt-10 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">
              Active Bookings & Appointment Records
            </h2>
            <span className="text-xs font-medium text-slate-500">
              {bookings.length} {bookings.length === 1 ? 'Record' : 'Records'}
            </span>
          </div>

          {bookings.length === 0 ? (
            <div className="p-6 bg-white rounded-xl border border-slate-200 text-xs text-slate-500">
              No appointments scheduled yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bookings.map((b) => (
                <div
                  key={b.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-teal-900">{b.id}</span>
                    <span
                      className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded ${
                        b.status === 'Confirmed'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-rose-50 text-rose-700 border border-rose-200'
                      }`}
                    >
                      {b.status}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{b.serviceTitle}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {b.emirate} · {b.area} · {b.unitType}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                    <span className="text-slate-600">
                      Date: <span className="font-semibold text-slate-800">{b.scheduledDate}</span>
                    </span>
                    <span className="font-extrabold text-[#083838]">AED {b.estimatedPriceAED}</span>
                  </div>

                  {b.status === 'Confirmed' && (
                    <button
                      type="button"
                      onClick={() => cancelBooking(b.id)}
                      className="text-xs text-rose-600 hover:text-rose-800 font-medium pt-1 cursor-pointer"
                    >
                      Cancel Appointment
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <AdPlaceholder />
      </div>
    </div>
  );
};
