import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, User, Phone, Mail, CheckCircle2, ShieldCheck, Video, Stethoscope } from 'lucide-react';
import { DOCTORS, HOSPITALS } from '../data/mockData';
import { Doctor, HospitalLocation, ConsultationType } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedDoctor?: Doctor | null;
  onBookingSuccess: (bookingData: any) => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preSelectedDoctor,
  onBookingSuccess,
}) => {
  if (!isOpen) return null;

  const [selectedDocId, setSelectedDocId] = useState<string>(preSelectedDoctor?.id || DOCTORS[0].id);
  const [selectedHospId, setSelectedHospId] = useState<string>(HOSPITALS[0].id);
  const [selectedDate, setSelectedDate] = useState<string>('2026-08-17');
  const [selectedSlot, setSelectedSlot] = useState<string>('10:30 AM');
  const [consultType, setConsultType] = useState<ConsultationType>('in-person');

  // Patient form fields
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | 'other' | ''>('');
  const [reason, setReason] = useState('');
  const [isExisting, setIsExisting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const activeDoc = DOCTORS.find((d) => d.id === selectedDocId) || DOCTORS[0];
  const activeHosp = HOSPITALS.find((h) => h.id === selectedHospId) || HOSPITALS[0];

  const datesList = [
    { dateStr: '2026-08-17', dayName: 'Mon', dayNum: '17 Aug' },
    { dateStr: '2026-08-18', dayName: 'Tue', dayNum: '18 Aug' },
    { dateStr: '2026-08-19', dayName: 'Wed', dayNum: '19 Aug' },
    { dateStr: '2026-08-20', dayName: 'Thu', dayNum: '20 Aug' },
    { dateStr: '2026-08-21', dayName: 'Fri', dayNum: '21 Aug' },
    { dateStr: '2026-08-22', dayName: 'Sat', dayNum: '22 Aug' },
  ];

  const timeSlots = [
    '09:00 AM',
    '09:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:30 AM',
    '02:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
  ];

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full Name is required';
    if (!mobile.trim() || mobile.length < 10) errs.mobile = 'Enter valid 10-digit mobile number';
    if (!email.trim() || !email.includes('@')) errs.email = 'Valid email is required';
    if (!gender) errs.gender = 'Please select gender';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const bookingId = `APT-2026-${Math.floor(10000 + Math.random() * 90000)}`;
      onBookingSuccess({
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
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row my-6 max-h-[90vh]">
        {/* Left Side: Summary Panel */}
        <div className="md:w-5/12 bg-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="px-2.5 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-semibold border border-brand-400/30">
                Quick Appointment
              </span>
              <button
                onClick={onClose}
                className="md:hidden text-slate-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="text-xl font-bold">Appointment Summary</h3>
            <p className="text-xs text-slate-400 mt-1">Verify specialist and time slot choices.</p>

            <div className="mt-6 p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={activeDoc.image}
                  alt={activeDoc.name}
                  className="w-12 h-12 rounded-xl object-cover border border-slate-600"
                />
                <div>
                  <h4 className="font-bold text-sm text-white">{activeDoc.name}</h4>
                  <p className="text-xs text-brand-400 font-medium">{activeDoc.specialtyName}</p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300 pt-3 border-t border-slate-700/60">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
                  <span className="truncate">{activeHosp.name}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Date: <strong>{selectedDate}</strong></span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Time Slot: <strong>{selectedSlot}</strong></span>
                </div>

                <div className="flex items-center gap-2">
                  {consultType === 'in-person' ? (
                    <Stethoscope className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                  ) : (
                    <Video className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                  )}
                  <span className="capitalize">{consultType} Consultation</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between">
                <span className="text-xs text-slate-400">Consultation Fee</span>
                <span className="text-base font-extrabold text-white">₹{activeDoc.consultationFee}</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 text-slate-400 text-[11px] space-y-1.5 hidden md:block">
            <p className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Instant SMS & Email confirmation</span>
            </p>
            <p className="text-slate-500">Zero cancellation fee up to 2 hours before slot.</p>
          </div>
        </div>

        {/* Right Side: Form Wizard */}
        <div className="md:w-7/12 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between bg-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-900">Select Date, Slot & Details</h3>
            <button
              onClick={onClose}
              className="hidden md:flex text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 text-xs">
            {/* Step A: Select Doctor */}
            <div>
              <label className="font-bold text-slate-800 block mb-1.5">1. Doctor & Specialty</label>
              <select
                value={selectedDocId}
                onChange={(e) => setSelectedDocId(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-slate-50 font-medium"
              >
                {DOCTORS.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name} — {d.specialtyName} (₹{d.consultationFee})
                  </option>
                ))}
              </select>
            </div>

            {/* Step B: Select Hospital Branch */}
            <div>
              <label className="font-bold text-slate-800 block mb-1.5">2. Hospital Location</label>
              <select
                value={selectedHospId}
                onChange={(e) => setSelectedHospId(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-slate-50 font-medium"
              >
                {HOSPITALS.map((h) => (
                  <option key={h.id} value={h.id}>
                    {h.name} ({h.city})
                  </option>
                ))}
              </select>
            </div>

            {/* Step C: Consultation Type */}
            <div>
              <label className="font-bold text-slate-800 block mb-1.5">3. Consultation Type</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setConsultType('in-person')}
                  className={`p-2.5 rounded-xl border font-semibold flex items-center justify-center gap-2 cursor-pointer transition ${
                    consultType === 'in-person'
                      ? 'bg-brand-50 border-brand-500 text-brand-700 shadow-sm'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Stethoscope className="w-4 h-4 text-brand-600" />
                  <span>Hospital Visit</span>
                </button>

                <button
                  type="button"
                  onClick={() => setConsultType('video')}
                  className={`p-2.5 rounded-xl border font-semibold flex items-center justify-center gap-2 cursor-pointer transition ${
                    consultType === 'video'
                      ? 'bg-brand-50 border-brand-500 text-brand-700 shadow-sm'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Video className="w-4 h-4 text-brand-600" />
                  <span>Video Consultation</span>
                </button>
              </div>
            </div>

            {/* Step D: Choose Date */}
            <div>
              <label className="font-bold text-slate-800 block mb-1.5">4. Choose Date</label>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {datesList.map((d) => (
                  <button
                    key={d.dateStr}
                    type="button"
                    onClick={() => setSelectedDate(d.dateStr)}
                    className={`px-3 py-2 rounded-xl border text-center flex-shrink-0 cursor-pointer transition ${
                      selectedDate === d.dateStr
                        ? 'bg-brand-600 border-brand-600 text-white font-bold shadow-md'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="block text-[10px] uppercase tracking-wider">{d.dayName}</span>
                    <span className="block text-xs font-bold mt-0.5">{d.dayNum}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step E: Choose Time Slot */}
            <div>
              <label className="font-bold text-slate-800 block mb-1.5">5. Choose Time Slot</label>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-2 px-2 rounded-xl border text-center font-medium cursor-pointer transition ${
                      selectedSlot === slot
                        ? 'bg-slate-900 border-slate-900 text-white font-bold'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Step F: Patient Details */}
            <div className="pt-3 border-t border-slate-100 space-y-3">
              <label className="font-bold text-slate-900 block">6. Patient Details</label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={`w-full p-2.5 rounded-xl border ${
                      errors.fullName ? 'border-red-500' : 'border-slate-300'
                    } focus:ring-2 focus:ring-brand-500`}
                  />
                  {errors.fullName && <p className="text-[10px] text-red-500 mt-0.5">{errors.fullName}</p>}
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Mobile Number *"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className={`w-full p-2.5 rounded-xl border ${
                      errors.mobile ? 'border-red-500' : 'border-slate-300'
                    } focus:ring-2 focus:ring-brand-500`}
                  />
                  {errors.mobile && <p className="text-[10px] text-red-500 mt-0.5">{errors.mobile}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full p-2.5 rounded-xl border ${
                      errors.email ? 'border-red-500' : 'border-slate-300'
                    } focus:ring-2 focus:ring-brand-500`}
                  />
                  {errors.email && <p className="text-[10px] text-red-500 mt-0.5">{errors.email}</p>}
                </div>

                <div>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value as any)}
                    className={`w-full p-2.5 rounded-xl border ${
                      errors.gender ? 'border-red-500' : 'border-slate-300'
                    } focus:ring-2 focus:ring-brand-500 bg-white`}
                  >
                    <option value="">Select Gender *</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && <p className="text-[10px] text-red-500 mt-0.5">{errors.gender}</p>}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Reason for Visit / Health Symptoms (Optional)"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="existingPatient"
                  checked={isExisting}
                  onChange={(e) => setIsExisting(e.target.checked)}
                  className="w-4 h-4 text-brand-600 rounded focus:ring-brand-500"
                />
                <label htmlFor="existingPatient" className="text-xs text-slate-600 cursor-pointer">
                  I am an existing patient at Apex Care Hospital
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white font-bold text-sm shadow-lg shadow-brand-600/30 transition cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing Appointment Request...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Confirm & Book Appointment</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
