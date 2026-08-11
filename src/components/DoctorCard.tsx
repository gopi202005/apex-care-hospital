import React from 'react';
import { Star, MapPin, Calendar, Globe, Award, Video, Building, ArrowRight } from 'lucide-react';
import { Doctor } from '../types';

interface DoctorCardProps {
  doctor: Doctor;
  onSelectDoctor: (doctor: Doctor) => void;
  onBookDoctor: (doctor: Doctor) => void;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({
  doctor,
  onSelectDoctor,
  onBookDoctor,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Top Header & Photo Banner */}
        <div className="p-5 pb-4 flex items-start gap-4 border-b border-slate-100">
          <div className="relative">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-center shadow-sm border border-slate-100 group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            {doctor.availability === 'today' && (
              <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-full bg-emerald-500 text-white text-[9px] font-extrabold uppercase shadow border border-white tracking-wider">
                Today
              </span>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2 py-0.5 rounded-md bg-brand-50 text-brand-700 text-[10px] font-bold border border-brand-200/60 uppercase">
                {doctor.specialtyName}
              </span>
              <span className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{doctor.rating}</span>
                <span className="text-slate-400 font-normal">({doctor.reviewCount})</span>
              </span>
            </div>

            <h3
              onClick={() => onSelectDoctor(doctor)}
              className="text-base font-bold text-slate-900 hover:text-brand-600 transition cursor-pointer mt-1 truncate"
              title={doctor.name}
            >
              {doctor.name}
            </h3>

            <p className="text-xs text-slate-500 font-medium truncate">{doctor.qualification}</p>

            <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-600">
              <Award className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
              <span className="font-semibold text-slate-800">{doctor.experienceYears} Years Exp.</span>
            </div>
          </div>
        </div>

        {/* Doctor Details Body */}
        <div className="p-5 space-y-2.5 text-xs text-slate-600">
          <div className="flex items-start gap-2">
            <Building className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" />
            <span className="truncate text-slate-700 font-medium">{doctor.hospitalNames[0]}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span className="text-slate-600">{doctor.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span className="text-slate-600">{doctor.languages.join(', ')}</span>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">Consultation Fee</span>
              <span className="text-sm font-bold text-slate-900">₹{doctor.consultationFee}</span>
            </div>

            <div className="text-right">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">Next Available</span>
              <span className="text-xs font-semibold text-emerald-600">{doctor.nextAvailableSlot}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center gap-2">
        <button
          onClick={() => onSelectDoctor(doctor)}
          className="flex-1 py-2 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200 transition text-center cursor-pointer"
        >
          View Profile
        </button>

        <button
          onClick={() => onBookDoctor(doctor)}
          className="flex-1 py-2 px-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs shadow-md shadow-brand-600/20 transition flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Now</span>
        </button>
      </div>
    </div>
  );
};
