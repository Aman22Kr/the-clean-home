import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { SERVICES_DATA, UAE_LOCATIONS } from '../data/servicesData';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  MapPin, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  ArrowRight, 
  ArrowLeft,
  XCircle
} from 'lucide-react';

export const BookPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { addBooking, bookings, cancelBooking, selectedEmirate, setSelectedEmirate } = useApp();

  const preselectedServiceId = searchParams.get('service') || SERVICES_DATA[0].id;
  const preselectedUnits = Number(searchParams.get('units')) || 1;

  // Booking Form State
  const [step, setStep] = useState<number>(1);
  const [serviceId, setServiceId] = useState<string>(preselectedServiceId);
  const [unitCount, setUnitCount] = useState<number>(preselectedUnits);
  const [propertyType, setPropertyType] = useState<string>('Apartment');
  const [emirate, setEmirate] = useState<string>(selectedEmirate);
  const [area, setArea] = useState<string>('Dubai Marina & JBR');
  const [streetAddress, setStreetAddress] = useState<string>('');
  const [scheduledDate, setScheduledDate] = useState<string>('2026-11-02');
  const [scheduledTime, setScheduledTime] = useState<string>('09:00 AM - 12:00 PM');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [specialNotes, setSpecialNotes] = useState<string>('');

  const [confirmedBookingId, setConfirmedBookingId] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Update emirate
  useEffect(() => {
    const loc = UAE_LOCATIONS.find((l) => l.emirate === emirate);
    if (loc && loc.areas.length > 0) {
      setArea(loc.areas[0]);
    }
    setSelectedEmirate(emirate);
  }, [emirate, setSelectedEmirate]);

  const activeService = SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];
  const totalPriceAED = activeService.basePriceAED * unitCount;

  const currentEmirateData = UAE_LOCATIONS.find((l) => l.emirate === emirate) || UAE_LOCATIONS[0];

  const handleNextStep = () => {
    setValidationError(null);
    if (step === 1) {
      if (unitCount < 1) {
        setValidationError('Please select at least 1 unit');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!scheduledDate) {
        setValidationError('Please select your preferred service date');
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!customerName.trim() || !customerPhone.trim() || !customerEmail.trim()) {
        setValidationError('Please fill in your name, contact phone number, and email');
        return;
      }
      setStep(4);
    }
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const newBooking = addBooking({
      serviceId: activeService.id,
      serviceTitle: activeService.title,
      emirate,
      area: streetAddress ? `${area} (${streetAddress})` : area,
      unitType: `${propertyType} (${unitCount} ${activeService.unitLabel})`,
      unitCount,
      scheduledDate,
      scheduledTime,
      estimatedPriceAED: totalPriceAED,
      customerName,
      customerPhone,
      customerEmail,
      specialNotes
    });

    setConfirmedBookingId(newBooking.id);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
          <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
            Real-Time Online Scheduling
          </span>
          <h1 className="text-3xl font-extrabold text-[#083838] font-display">
            Book Certified Sanitization
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            Transparent pricing with zero hidden fees. Pay upon completion after your final inspection.
          </p>
        </div>

        {/* Successful Booking Confirmation View */}
        {confirmedBookingId ? (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 p-8 shadow-xl text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Booking Reference: {confirmedBookingId}
              </span>
              <h2 className="text-2xl font-bold text-[#083838] font-display mt-2">
                Sanitization Appointment Confirmed!
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-slate-800">{customerName}</span>. Your appointment has been recorded. Our team will contact you at <span className="font-semibold text-slate-800">{customerPhone}</span> 24 hours prior to arrival.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 text-left text-xs space-y-2.5">
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Service:</span>
                <span className="font-bold text-slate-900">{activeService.title}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Scheduled Date & Time:</span>
                <span className="font-semibold text-slate-800">{scheduledDate} ({scheduledTime})</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Service Location:</span>
                <span className="font-semibold text-slate-800">{emirate} — {area}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Quantity / Units:</span>
                <span className="font-semibold text-slate-800">{unitCount} {activeService.unitLabel}</span>
              </div>
              <div className="flex justify-between pt-2 text-sm">
                <span className="font-bold text-teal-900">Total Upfront Estimate:</span>
                <span className="font-extrabold text-[#083838]">AED {totalPriceAED} (incl. VAT)</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setConfirmedBookingId(null);
                  setStep(1);
                }}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#083838] text-white rounded-xl text-xs font-semibold hover:bg-[#0c4e4e] transition-colors"
              >
                Schedule Another Service
              </button>
              <Link
                to="/saved"
                className="w-full sm:w-auto px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold transition-colors"
              >
                View Saved Bookings
              </Link>
            </div>
          </div>
        ) : (
          /* Multi-Step Booking Form Container */
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Steps Form */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              {/* Stepper Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                {[
                  { num: 1, label: 'Service' },
                  { num: 2, label: 'Date & Time' },
                  { num: 3, label: 'Contact' },
                  { num: 4, label: 'Review' }
                ].map((s) => (
                  <div key={s.num} className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                        step === s.num
                          ? 'bg-[#083838] text-white ring-2 ring-teal-700/20'
                          : step > s.num
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {s.num}
                    </div>
                    <span
                      className={`text-xs font-medium hidden sm:inline ${
                        step === s.num ? 'text-slate-900 font-bold' : 'text-slate-400'
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {validationError && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-700">
                  {validationError}
                </div>
              )}

              {/* Step 1: Service & Quantity */}
              {step === 1 && (
                <div className="space-y-5">
                  <h3 className="text-base font-bold text-[#083838]">
                    Step 1: Choose Sanitization Service & Scale
                  </h3>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Select Treatment
                    </label>
                    <div className="grid grid-cols-1 gap-2.5">
                      {SERVICES_DATA.map((srv) => (
                        <div
                          key={srv.id}
                          onClick={() => setServiceId(srv.id)}
                          className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                            serviceId === srv.id
                              ? 'border-teal-700 bg-teal-50/40 ring-1 ring-teal-700'
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs sm:text-sm font-bold text-slate-900">
                                {srv.title}
                              </span>
                              <span className="text-[10px] text-teal-800 font-medium bg-teal-100/60 px-2 py-0.5 rounded">
                                {srv.categoryLabel}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                              {srv.shortDescription}
                            </p>
                          </div>
                          <span className="text-xs font-bold text-[#083838] tabular-nums shrink-0 ml-2">
                            AED {srv.basePriceAED}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Property Architecture
                      </label>
                      <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800"
                      >
                        <option value="Apartment">Apartment</option>
                        <option value="Townhouse">Townhouse</option>
                        <option value="Villa">Independent Villa</option>
                        <option value="Penthouse">Penthouse</option>
                        <option value="Commercial Office">Commercial Space</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Count ({activeService.unitLabel})
                      </label>
                      <div className="flex items-center border border-slate-200 rounded-lg p-1 bg-slate-50">
                        <button
                          type="button"
                          onClick={() => setUnitCount((p) => Math.max(1, p - 1))}
                          className="w-8 h-8 rounded bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-700 cursor-pointer"
                        >
                          -
                        </button>
                        <div className="flex-1 text-center font-bold text-sm text-[#083838]">
                          {unitCount}
                        </div>
                        <button
                          type="button"
                          onClick={() => setUnitCount((p) => p + 1)}
                          className="w-8 h-8 rounded bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-700 cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Location & Preferred Date/Time */}
              {step === 2 && (
                <div className="space-y-5">
                  <h3 className="text-base font-bold text-[#083838]">
                    Step 2: Location & Appointment Window
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Emirate
                      </label>
                      <select
                        value={emirate}
                        onChange={(e) => setEmirate(e.target.value)}
                        className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800"
                      >
                        {UAE_LOCATIONS.map((loc) => (
                          <option key={loc.emirate} value={loc.emirate}>
                            {loc.emirate}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Neighborhood / Community
                      </label>
                      <select
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800"
                      >
                        {currentEmirateData.areas.map((a) => (
                          <option key={a} value={a}>
                            {a}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Building / Villa Number & Street
                    </label>
                    <input
                      type="text"
                      value={streetAddress}
                      onChange={(e) => setStreetAddress(e.target.value)}
                      placeholder="e.g. Marina Gate 1, Apartment 1402, Al Marsa St"
                      className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={scheduledDate}
                        onChange={(e) => setScheduledDate(e.target.value)}
                        className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Time Slot Window
                      </label>
                      <select
                        value={scheduledTime}
                        onChange={(e) => setScheduledTime(e.target.value)}
                        className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800"
                      >
                        <option value="08:30 AM - 11:30 AM">Morning (08:30 AM – 11:30 AM)</option>
                        <option value="12:00 PM - 03:00 PM">Midday (12:00 PM – 03:00 PM)</option>
                        <option value="03:30 PM - 06:30 PM">Afternoon (03:30 PM – 06:30 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Details */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-[#083838]">
                    Step 3: Contact & Access Notes
                  </h3>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        UAE Mobile Number *
                      </label>
                      <input
                        type="tel"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="+971 50 123 4567"
                        className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        placeholder="sarah@example.com"
                        className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Access Instructions or Pets at Home (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      placeholder="e.g. Visitor parking gate code 4821. Friendly Golden Retriever in the living room."
                      className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Final Verification Review */}
              {step === 4 && (
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-[#083838]">
                    Step 4: Review & Finalize Booking
                  </h3>

                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-3 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Service:</span>
                      <span className="font-bold text-slate-800">{activeService.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Scale:</span>
                      <span className="font-semibold text-slate-800">
                        {propertyType} · {unitCount} {activeService.unitLabel}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Location:</span>
                      <span className="font-semibold text-slate-800">
                        {emirate}, {area} {streetAddress && `(${streetAddress})`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Scheduled Time:</span>
                      <span className="font-semibold text-slate-800">
                        {scheduledDate} ({scheduledTime})
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Client:</span>
                      <span className="font-semibold text-slate-800">
                        {customerName} · {customerPhone}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-slate-200 flex justify-between text-sm">
                      <span className="font-bold text-teal-900">Total Upfront Estimate:</span>
                      <span className="font-extrabold text-[#083838]">AED {totalPriceAED}</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500">
                    By confirming, your appointment will be saved directly in your browser. Payment is made post-clean upon your satisfaction.
                  </p>
                </div>
              )}

              {/* Navigation Button Bar */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((p) => p - 1)}
                    className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 rounded-lg flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : <div />}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-5 py-2.5 bg-[#083838] hover:bg-[#0c4e4e] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleConfirmBooking}
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Confirm & Schedule</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right Summary Sidebar */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Booking Overview
              </h4>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-800 text-emerald-300 flex items-center justify-center font-bold text-sm shrink-0">
                    c
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900 line-clamp-1">
                      {activeService.title}
                    </h5>
                    <span className="text-xs text-teal-800 font-medium">
                      {activeService.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl space-y-2 text-xs text-slate-600 border border-slate-100">
                  <div className="flex justify-between">
                    <span>Base Unit Rate:</span>
                    <span className="font-semibold text-slate-800">AED {activeService.basePriceAED}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Units / Scale:</span>
                    <span className="font-semibold text-slate-800">{unitCount}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex justify-between font-bold text-sm text-[#083838]">
                    <span>Total AED:</span>
                    <span>AED {totalPriceAED}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-1 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Dubai Municipality certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>0% Toxic chemicals guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Free rescheduling up to 12h prior</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Existing LocalStorage Bookings List */}
        {bookings.length > 0 && (
          <div className="max-w-4xl mx-auto mt-16 pt-10 border-t border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-[#083838] font-display">
                  Your Scheduled Appointments (Persisted in LocalStorage)
                </h3>
                <p className="text-xs text-slate-500">
                  Data stored securely in your browser's local cache
                </p>
              </div>
              <span className="text-xs font-semibold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
                {bookings.length} {bookings.length === 1 ? 'Record' : 'Records'}
              </span>
            </div>

            <div className="space-y-3">
              {bookings.map((b) => (
                <div
                  key={b.id}
                  className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
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
                    <h4 className="text-sm font-bold text-slate-900">{b.serviceTitle}</h4>
                    <p className="text-xs text-slate-500">
                      {b.emirate} · {b.area} · {b.unitType}
                    </p>
                    <p className="text-xs text-slate-600">
                      Scheduled for: <span className="font-semibold">{b.scheduledDate}</span> ({b.scheduledTime})
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0">
                    <span className="text-base font-extrabold text-[#083838] tabular-nums">
                      AED {b.estimatedPriceAED}
                    </span>
                    {b.status === 'Confirmed' && (
                      <button
                        type="button"
                        onClick={() => cancelBooking(b.id)}
                        className="text-xs text-rose-600 hover:text-rose-800 font-semibold cursor-pointer"
                      >
                        Cancel Booking
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <AdPlaceholder />
      </div>
    </div>
  );
};
