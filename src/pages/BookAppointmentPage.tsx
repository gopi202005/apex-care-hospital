import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, CheckCircle2, Stethoscope, Video, ChevronRight, ChevronLeft, ShieldCheck } from 'lucide-react';
import { DOCTORS, HOSPITALS } from '../data/mockData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Doctor, HospitalLocation, ConsultationType } from '../types';

interface BookAppointmentPageProps {
  setActiveTab: (tab: string) => void;
  onBookingComplete: (bookingData: any) => void;
  initialDoctorId?: string;
}

export const BookAppointmentPage: React.FC<BookAppointmentPageProps> = ({
  setActiveTab,
  onBookingComplete,
  initialDoctorId,
}) => {
  const [step, setStep] = useState(1);
  const [selectedDocId, setSelectedDocId] = useState<string>(initialDoctorId || DOCTORS[0].id);
  const [selectedHospId, setSelectedHospId] = useState<string>(HOSPITALS[0].id);
  const [selectedDate, setSelectedDate] = useState('2026-08-17');
  const [selectedSlot, setSelectedSlot] = useState('10:30 AM');
  const [consultType, setConsultType] = useState<ConsultationType>('in-person');

  // Form
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | 'other' | ''>('');
  const [reason, setReason] = useState('');
  const [isExisting, setIsExisting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const activeDoc = DOCTORS.find((d) => d.id === selectedDocId) || DOCTORS[0];
  const activeHosp = HOSPITALS.find((h) => h.id === selectedHospId) || HOSPITALS[0];

  const datesList = [
    { dateStr: '2026-08-17', dayName: 'Mon', dayNum: '17 Aug' },
    { dateStr: '2026-08-18', dayName: 'Tue', dayNum: '18 Aug' },
    { dateStr: '2026-08-19', dayName: 'Wed', dayNum: '19 Aug' },
    { dateStr: '2026-08-20', dayName: 'Thu', dayNum: '20 Aug' },
    { dateStr: '2026-08-21', dayName: 'Fri', dayNum: '21 Aug' },
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:30 AM', '02:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'
  ];

  const validateStep4 = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full Name is required';
    if (!mobile.trim() || mobile.length < 10) errs.mobile = 'Enter valid 10-digit mobile number';
    if (!email.trim() || !email.includes('@')) errs.email = 'Valid email is required';
    if (!gender) errs.gender = 'Please select gender';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFinalSubmit = () => {
    if (!validateStep4()) return;
    const bookingId = `APT-2026-${Math.floor(10000 + Math.random() * 90000)}`;
    onBookingComplete({
      bookingId,
      doctor: activeDoc,
      hospital: activeHosp,
      date: selectedDate,
      timeSlot: selectedSlot,
      consultationType: consultType,
      patientDetails: {
        fullName,
        mobile,
        email,
        dob,
        gender,
        reason,
        isExistingPatient: isExisting,
      },
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: 'Book Appointment' }]} setActiveTab={setActiveTab} />

      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900">Book Doctor Appointment</h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
          Follow 4 simple steps to schedule your consultation with senior specialists.
        </p>
      </div>

      {/* Step Indicators Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex items-center justify-between gap-2 overflow-x-auto text-xs font-bold">
        {[
          { num: 1, label: '1. Select Doctor' },
          { num: 2, label: '2. Select Location' },
          { num: 3, label: '3. Date & Time' },
          { num: 4, label: '4. Patient Info' },
        ].map((s) => (
          <div
            key={s.num}
            onClick={() => s.num < step && setStep(s.num)}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl transition ${
              step === s.num
                ? 'bg-brand-600 text-white shadow-sm'
                : step > s.num
                ? 'bg-emerald-50 text-emerald-700 cursor-pointer'
                : 'text-slate-400 bg-slate-50'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[11px]">
              {step > s.num ? '✓' : s.num}
            </span>
            <span className="whitespace-nowrap">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Grid: Main Step Content + Sticky Appointment Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Step Content */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          {/* STEP 1: DOCTOR SELECT */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Step 1: Choose Your Specialist Doctor</h3>
              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                {DOCTORS.map((d) => (
                  <div
                    key={d.id}
                    onClick={() => setSelectedDocId(d.id)}
                    className={`p-4 rounded-2xl border transition cursor-pointer flex items-center justify-between ${
                      selectedDocId === d.id
                        ? 'border-brand-500 bg-brand-50/60 ring-2 ring-brand-500/20'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img src={d.image} alt={d.name} className="w-14 h-14 rounded-2xl object-cover" />
                      <div>
                        <h4 className="font-bold text-sm text-slate-900">{d.name}</h4>
                        <p className="text-xs text-brand-600 font-medium">{d.specialtyName} • {d.experienceYears} Yrs Exp.</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">{d.qualification}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-extrabold text-slate-900 block">₹{d.consultationFee}</span>
                      <span className="text-[10px] text-emerald-600 font-semibold">{d.nextAvailableSlot}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs shadow-md flex items-center gap-1.5"
                >
                  <span>Next: Choose Location</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: HOSPITAL LOCATION */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Step 2: Choose Hospital Location</h3>
              <div className="space-y-3">
                {HOSPITALS.map((h) => (
                  <div
                    key={h.id}
                    onClick={() => setSelectedHospId(h.id)}
                    className={`p-4 rounded-2xl border transition cursor-pointer flex items-center justify-between ${
                      selectedHospId === h.id
                        ? 'border-brand-500 bg-brand-50/60 ring-2 ring-brand-500/20'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img src={h.image} alt={h.name} className="w-16 h-12 rounded-xl object-cover" />
                      <div>
                        <h4 className="font-bold text-sm text-slate-900">{h.name}</h4>
                        <p className="text-xs text-slate-500">{h.address}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-brand-600">📍 {h.city}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs shadow-md flex items-center gap-1.5"
                >
                  <span>Next: Choose Date & Time</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: DATE & TIME */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900">Step 3: Choose Date & Time Slot</h3>

              <div>
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                  Consultation Type
                </label>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <button
                    onClick={() => setConsultType('in-person')}
                    className={`p-3 rounded-xl border font-bold flex items-center justify-center gap-2 cursor-pointer ${
                      consultType === 'in-person'
                        ? 'bg-brand-50 border-brand-500 text-brand-700'
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    <Stethoscope className="w-4 h-4 text-brand-600" />
                    <span>In-Person Hospital Visit</span>
                  </button>
                  <button
                    onClick={() => setConsultType('video')}
                    className={`p-3 rounded-xl border font-bold flex items-center justify-center gap-2 cursor-pointer ${
                      consultType === 'video'
                        ? 'bg-brand-50 border-brand-500 text-brand-700'
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    <Video className="w-4 h-4 text-brand-600" />
                    <span>Online Video Consultation</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                  Select Date
                </label>
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {datesList.map((d) => (
                    <button
                      key={d.dateStr}
                      onClick={() => setSelectedDate(d.dateStr)}
                      className={`px-4 py-3 rounded-2xl border text-center flex-shrink-0 cursor-pointer ${
                        selectedDate === d.dateStr
                          ? 'bg-brand-600 border-brand-600 text-white font-bold shadow-md'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="block text-[10px] uppercase">{d.dayName}</span>
                      <span className="block text-xs font-bold mt-0.5">{d.dayNum}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                  Select Time Slot
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 text-xs">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`p-2.5 rounded-xl border text-center font-bold cursor-pointer ${
                        selectedSlot === slot
                          ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  onClick={() => setStep(4)}
                  className="px-6 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs shadow-md flex items-center gap-1.5"
                >
                  <span>Next: Patient Info</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: PATIENT DETAILS */}
          {step === 4 && (
            <div className="space-y-5">
              <h3 className="text-lg font-bold text-slate-900">Step 4: Enter Patient Details</h3>

              <div className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`w-full p-3 rounded-xl border ${
                        errors.fullName ? 'border-red-500' : 'border-slate-300'
                      } focus:ring-2 focus:ring-brand-500`}
                    />
                    {errors.fullName && <p className="text-[10px] text-red-500 mt-0.5">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className={`w-full p-3 rounded-xl border ${
                        errors.mobile ? 'border-red-500' : 'border-slate-300'
                      } focus:ring-2 focus:ring-brand-500`}
                    />
                    {errors.mobile && <p className="text-[10px] text-red-500 mt-0.5">{errors.mobile}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Email Address *</label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full p-3 rounded-xl border ${
                        errors.email ? 'border-red-500' : 'border-slate-300'
                      } focus:ring-2 focus:ring-brand-500`}
                    />
                    {errors.email && <p className="text-[10px] text-red-500 mt-0.5">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Gender *</label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value as any)}
                      className={`w-full p-3 rounded-xl border ${
                        errors.gender ? 'border-red-500' : 'border-slate-300'
                      } focus:ring-2 focus:ring-brand-500 bg-white`}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && <p className="text-[10px] text-red-500 mt-0.5">{errors.gender}</p>}
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Reason for Visit (Optional)</label>
                  <input
                    type="text"
                    placeholder="Describe main health concerns or symptoms"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="existingCheck"
                    checked={isExisting}
                    onChange={(e) => setIsExisting(e.target.checked)}
                    className="w-4 h-4 text-brand-600 rounded"
                  />
                  <label htmlFor="existingCheck" className="text-slate-600 font-medium cursor-pointer">
                    I am an existing patient at Apex Care Hospital
                  </label>
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => setStep(3)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  onClick={handleFinalSubmit}
                  className="px-8 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-extrabold text-xs shadow-lg shadow-emerald-600/30 flex items-center gap-2 cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirm Appointment</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Sticky Appointment Summary */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-xl space-y-6 sticky top-24">
            <h3 className="text-base font-bold">Appointment Summary</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <img src={activeDoc.image} alt={activeDoc.name} className="w-12 h-12 rounded-xl object-cover" />
                <div>
                  <h4 className="font-bold text-sm">{activeDoc.name}</h4>
                  <p className="text-xs text-brand-400">{activeDoc.specialtyName}</p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0" />
                  <span className="truncate">{activeHosp.name}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Date: <strong>{selectedDate}</strong></span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Slot: <strong>{selectedSlot}</strong></span>
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Consultation Fee</span>
                <span className="text-base font-extrabold text-white">₹{activeDoc.consultationFee}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
