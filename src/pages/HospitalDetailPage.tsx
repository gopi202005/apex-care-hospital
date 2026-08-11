import React from 'react';
import { ArrowLeft, MapPin, Phone, ShieldAlert, Bed, Clock, CheckCircle2, Calendar, Navigation, Building } from 'lucide-react';
import { DOCTORS } from '../data/mockData';
import { DoctorCard } from '../components/DoctorCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { HospitalLocation, Doctor } from '../types';

interface HospitalDetailPageProps {
  hospital: HospitalLocation;
  setActiveTab: (tab: string) => void;
  onSelectDoctor: (doctor: Doctor) => void;
  onOpenBookingModal: (doctorId?: string) => void;
}

export const HospitalDetailPage: React.FC<HospitalDetailPageProps> = ({
  hospital,
  setActiveTab,
  onSelectDoctor,
  onOpenBookingModal,
}) => {
  const hospitalDoctors = DOCTORS.filter((d) => d.hospitalIds.includes(hospital.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[{ label: 'Hospitals', tabId: 'hospitals' }, { label: hospital.name }]}
        setActiveTab={setActiveTab}
      />

      <button
        onClick={() => setActiveTab('hospitals')}
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-brand-600 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Locations</span>
      </button>

      {/* Hero Gallery Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl overflow-hidden h-72 sm:h-96">
          <img src={hospital.image} alt={hospital.name} className="w-full h-full object-cover md:col-span-2" />
          <div className="grid grid-rows-2 gap-4 hidden md:grid">
            <img src={hospital.galleryImages[0] || hospital.image} alt="Gallery 1" className="w-full h-full object-cover" />
            <img src={hospital.galleryImages[1] || hospital.image} alt="Gallery 2" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pt-2">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold">
                📍 {hospital.city} Branch
              </span>
              {hospital.emergency24x7 && (
                <span className="px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold flex items-center gap-1 border border-red-200">
                  <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
                  24/7 Emergency Active
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{hospital.name}</h1>
            <p className="text-xs sm:text-sm text-slate-500 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-brand-600 flex-shrink-0" />
              <span>{hospital.address}</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenBookingModal()}
              className="px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md transition flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment at Branch</span>
            </button>
          </div>
        </div>
      </div>

      {/* Facilities & Visiting Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Building className="w-5 h-5 text-brand-600" /> Key Clinical Facilities
          </h3>
          <ul className="space-y-2 text-xs text-slate-700">
            {hospital.facilities.map((fac, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="font-semibold">{fac}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Clock className="w-5 h-5 text-brand-600" /> Visiting Hours & Guidelines
          </h3>
          <div className="space-y-2 text-xs text-slate-600">
            <p><strong>OPD Consultation Hours:</strong> {hospital.openingHours}</p>
            <p><strong>Ward Visiting Hours:</strong> {hospital.visitingHours}</p>
            <p><strong>ICU Capacity:</strong> {hospital.icuBeds} Dedicated Critical Beds</p>
            <p><strong>Emergency Desk:</strong> {hospital.emergencyPhone}</p>
          </div>
        </div>
      </div>

      {/* Doctors at this location */}
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-slate-900">Specialists Available at {hospital.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospitalDoctors.map((doc) => (
            <DoctorCard
              key={doc.id}
              doctor={doc}
              onSelectDoctor={onSelectDoctor}
              onBookDoctor={(d) => onOpenBookingModal(d.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
