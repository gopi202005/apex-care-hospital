import React from 'react';
import { MapPin, Phone, ShieldAlert, Clock, Bed, ArrowRight, Navigation } from 'lucide-react';
import { HospitalLocation } from '../types';

interface HospitalCardProps {
  hospital: HospitalLocation;
  onSelectHospital: (hospital: HospitalLocation) => void;
  onOpenDirectionsModal?: (hospital: HospitalLocation) => void;
}

export const HospitalCard: React.FC<HospitalCardProps> = ({
  hospital,
  onSelectHospital,
  onOpenDirectionsModal,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group">
      <div>
        {/* Photo Header */}
        <div className="relative h-48 sm:h-52 overflow-hidden">
          <img
            src={hospital.image}
            alt={hospital.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
              📍 {hospital.city}
            </span>
            {hospital.emergency24x7 && (
              <span className="px-2.5 py-1 rounded-full bg-red-600/90 backdrop-blur-md text-white text-xs font-bold border border-red-400 flex items-center gap-1 shadow-md">
                <ShieldAlert className="w-3 h-3" />
                24/7 Emergency
              </span>
            )}
          </div>

          <div className="absolute bottom-3 left-3 right-3 text-white">
            <h3 className="text-lg font-bold line-clamp-1 group-hover:text-brand-300 transition">
              {hospital.name}
            </h3>
            <p className="text-xs text-slate-300 flex items-center gap-1 mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
              <span className="truncate">{hospital.address}</span>
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-3 text-xs text-slate-600">
          <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
            <div className="flex items-center gap-2">
              <Bed className="w-4 h-4 text-brand-600" />
              <div>
                <span className="text-[10px] text-slate-400 block font-medium">ICU Capacity</span>
                <span className="font-bold text-slate-800">{hospital.icuBeds} ICU Beds</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-600" />
              <div>
                <span className="text-[10px] text-slate-400 block font-medium">OPD Timings</span>
                <span className="font-bold text-slate-800">{hospital.openingHours.split('/')[0]}</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-[11px] text-slate-400 font-semibold block mb-1.5 uppercase">Featured Departments</span>
            <div className="flex flex-wrap gap-1.5">
              {hospital.departments.slice(0, 4).map((dept, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium">
                  {dept}
                </span>
              ))}
              {hospital.departments.length > 4 && (
                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-500 text-[11px]">
                  +{hospital.departments.length - 4} more
                </span>
              )}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-slate-700">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-brand-600" />
              <span className="font-semibold">{hospital.phone}</span>
            </div>
            <span className="text-slate-400 font-medium">{hospital.distanceKm} km away</span>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center gap-2">
        <button
          onClick={() => onSelectHospital(hospital)}
          className="flex-1 py-2.5 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs border border-slate-200 shadow-sm transition text-center cursor-pointer flex items-center justify-center gap-1"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
        </button>

        <button
          onClick={() => onOpenDirectionsModal && onOpenDirectionsModal(hospital)}
          className="py-2.5 px-3 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-700 font-semibold text-xs border border-brand-200 transition flex items-center gap-1.5 cursor-pointer"
        >
          <Navigation className="w-3.5 h-3.5 text-brand-600" />
          <span>Get Directions</span>
        </button>
      </div>
    </div>
  );
};
