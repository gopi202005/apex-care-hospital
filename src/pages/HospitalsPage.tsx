import React, { useState } from 'react';
import { MapPin, Navigation, Phone, ShieldAlert, Bed, Clock, ArrowRight } from 'lucide-react';
import { HOSPITALS } from '../data/mockData';
import { HospitalCard } from '../components/HospitalCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { HospitalLocation } from '../types';

interface HospitalsPageProps {
  setActiveTab: (tab: string) => void;
  onSelectHospital: (hospital: HospitalLocation) => void;
}

export const HospitalsPage: React.FC<HospitalsPageProps> = ({
  setActiveTab,
  onSelectHospital,
}) => {
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [directionsHosp, setDirectionsHosp] = useState<HospitalLocation | null>(null);

  const cities = ['all', 'Chennai', 'Bengaluru', 'Hyderabad', 'Coimbatore'];

  const filteredHospitals = HOSPITALS.filter(
    (h) => selectedCity === 'all' || h.city.toLowerCase() === selectedCity.toLowerCase()
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Hospitals & Locations' }]} setActiveTab={setActiveTab} />

      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900">Hospital Branches & Locations</h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
          Discover modern tertiary care hospitals equipped with Level-1 ER trauma suites, ICU beds, and specialized outpatient clinics.
        </p>
      </div>

      {/* City filter tabs */}
      <div className="flex flex-wrap gap-2">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer capitalize ${
              selectedCity === city
                ? 'bg-brand-600 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {city === 'all' ? 'All Cities' : city}
          </button>
        ))}
      </div>

      {/* Hospital Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredHospitals.map((hosp) => (
          <HospitalCard
            key={hosp.id}
            hospital={hosp}
            onSelectHospital={onSelectHospital}
            onOpenDirectionsModal={(h) => setDirectionsHosp(h)}
          />
        ))}
      </div>

      {/* Directions Modal Simulator */}
      {directionsHosp && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-slate-900 text-base">Get Directions</h3>
              <button
                onClick={() => setDirectionsHosp(null)}
                className="text-xs font-semibold px-2 py-1 bg-slate-100 rounded-lg hover:bg-slate-200"
              >
                Close
              </button>
            </div>

            <div className="space-y-2 text-xs text-slate-600">
              <h4 className="font-bold text-sm text-slate-900">{directionsHosp.name}</h4>
              <p className="flex items-start gap-1.5">
                <MapPin className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                <span>{directionsHosp.address}</span>
              </p>
              <p className="pt-1">Emergency Desk Phone: <strong>{directionsHosp.emergencyPhone}</strong></p>
            </div>

            {/* Stylized Simulated Map Container */}
            <div className="w-full h-48 rounded-2xl bg-slate-800 relative overflow-hidden flex items-center justify-center text-white border border-slate-700">
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="relative z-10 text-center space-y-2 p-4">
                <Navigation className="w-8 h-8 text-brand-400 mx-auto animate-bounce" />
                <p className="text-xs font-bold text-slate-200">Interactive Map Preview</p>
                <p className="text-[10px] text-slate-400">GPS Coordinates: {directionsHosp.latitude}, {directionsHosp.longitude}</p>
              </div>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(directionsHosp.address)}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
