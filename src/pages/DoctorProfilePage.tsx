import React, { useState } from 'react';
import { Star, MapPin, Calendar, Globe, Award, Video, Building, BookOpen, GraduationCap, CheckCircle2, ShieldCheck, Clock, ArrowLeft } from 'lucide-react';
import { Doctor } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface DoctorProfilePageProps {
  doctor: Doctor;
  setActiveTab: (tab: string) => void;
  onOpenBookingModal: (doctorId?: string) => void;
}

export const DoctorProfilePage: React.FC<DoctorProfilePageProps> = ({
  doctor,
  setActiveTab,
  onOpenBookingModal,
}) => {
  const [selectedDate, setSelectedDate] = useState('2026-08-17');
  const [selectedSlot, setSelectedSlot] = useState('10:30 AM');

  const datesList = [
    { dateStr: '2026-08-17', dayName: 'Mon', dayNum: '17 Aug' },
    { dateStr: '2026-08-18', dayName: 'Tue', dayNum: '18 Aug' },
    { dateStr: '2026-08-19', dayName: 'Wed', dayNum: '19 Aug' },
    { dateStr: '2026-08-20', dayName: 'Thu', dayNum: '20 Aug' },
  ];

  const slots = ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '02:00 PM', '02:30 PM', '04:30 PM'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[{ label: 'Find a Doctor', tabId: 'find-doctor' }, { label: doctor.name }]}
        setActiveTab={setActiveTab}
      />

      {/* Back button */}
      <button
        onClick={() => setActiveTab('find-doctor')}
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-brand-600 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Doctor Directory</span>
      </button>

      {/* Hero Header Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl object-cover shadow-md border-2 border-brand-100"
          />

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold border border-brand-200">
              {doctor.specialtyName}
            </span>
            <span className="flex items-center gap-1 text-amber-500 font-bold text-sm">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{doctor.rating}</span>
              <span className="text-slate-400 font-normal">({doctor.reviewCount} Reviews)</span>
            </span>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{doctor.name}</h1>
            <p className="text-sm font-semibold text-brand-600 mt-0.5">{doctor.title}</p>
            <p className="text-xs text-slate-500 font-medium mt-1">{doctor.qualification}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">Experience</span>
              <span className="font-bold text-slate-900">{doctor.experienceYears}+ Years</span>
            </div>

            <div>
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">Consultation Fee</span>
              <span className="font-bold text-slate-900">₹{doctor.consultationFee}</span>
            </div>

            <div>
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">Languages</span>
              <span className="font-bold text-slate-900">{doctor.languages.join(', ')}</span>
            </div>

            <div>
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">Next Availability</span>
              <span className="font-bold text-emerald-600">{doctor.availability === 'today' ? 'Available Today' : 'Tomorrow'}</span>
            </div>
          </div>

          <div className="space-y-2 text-xs text-slate-600">
            <p className="flex items-center gap-2">
              <Building className="w-4 h-4 text-brand-600 flex-shrink-0" />
              <span>Primary Hospital: <strong>{doctor.hospitalNames.join(', ')}</strong></span>
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-600 flex-shrink-0" />
              <span>Location: <strong>{doctor.location}</strong></span>
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => onOpenBookingModal(doctor.id)}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white font-bold text-xs shadow-lg shadow-brand-600/30 transition flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-brand-200" />
              <span>Book Appointment Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Details + Appointment Time Slot Picker */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Doctor Details */}
        <div className="lg:col-span-8 space-y-8">
          {/* About Doctor */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900">About {doctor.name}</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{doctor.about}</p>

            <div className="pt-4 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Areas of Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {doctor.expertise.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-brand-50 text-brand-800 font-semibold text-xs border border-brand-200/60"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Experience Timeline */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-brand-600" /> Education & Clinical Training
            </h3>

            <div className="space-y-4 border-l-2 border-brand-100 pl-4">
              {doctor.education.map((edu, idx) => (
                <div key={idx} className="relative space-y-1">
                  <div className="w-3 h-3 rounded-full bg-brand-600 absolute -left-[23px] top-1 border-2 border-white" />
                  <h4 className="font-bold text-xs text-slate-900">{edu.degree}</h4>
                  <p className="text-xs text-slate-500">{edu.institution} ({edu.year})</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Publications */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-brand-600" /> Certifications & Research
            </h3>

            <div className="space-y-2 text-xs text-slate-600">
              {doctor.certifications.map((cert, idx) => (
                <p key={idx} className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>{cert}</span>
                </p>
              ))}
              {doctor.publications.map((pub, idx) => (
                <p key={idx} className="flex items-center gap-2 pt-1">
                  <BookOpen className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  <span className="italic">"{pub}"</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Time Slot Picker Card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl space-y-6 sticky top-24">
            <div>
              <h3 className="text-base font-bold text-slate-900">Check Available Slots</h3>
              <p className="text-xs text-slate-500">Select date & time for instant booking.</p>
            </div>

            {/* Dates */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">1. Select Date</label>
              <div className="grid grid-cols-2 gap-2">
                {datesList.map((d) => (
                  <button
                    key={d.dateStr}
                    onClick={() => setSelectedDate(d.dateStr)}
                    className={`p-2.5 rounded-xl border text-center cursor-pointer transition ${
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

            {/* Time slots */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">2. Select Time Slot</label>
              <div className="grid grid-cols-2 gap-2">
                {slots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-2 px-2 rounded-xl border text-center font-semibold text-xs cursor-pointer transition ${
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

            <div className="pt-2 border-t border-slate-100 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Consultation Fee</span>
                <span className="font-extrabold text-slate-900 text-base">₹{doctor.consultationFee}</span>
              </div>

              <button
                onClick={() => onOpenBookingModal(doctor.id)}
                className="w-full py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-lg shadow-brand-600/30 transition text-center cursor-pointer"
              >
                Book Selected Slot ({selectedSlot})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
