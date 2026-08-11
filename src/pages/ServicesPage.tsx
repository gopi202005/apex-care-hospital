import React from 'react';
import {
  Ambulance,
  Scan,
  HeartPulse,
  Pill,
  Truck,
  Video,
  Home,
  Activity,
  Shield,
  Microscope,
  Scissors,
  Clock,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { SERVICES } from '../data/mockData';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ServicesPageProps {
  setActiveTab: (tab: string) => void;
  onOpenBookingModal: () => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Ambulance,
  Scan,
  HeartPulse,
  Pill,
  Truck,
  Video,
  Home,
  Activity,
  Shield,
  Microscope,
  Scissors,
  Clock,
};

export const ServicesPage: React.FC<ServicesPageProps> = ({
  setActiveTab,
  onOpenBookingModal,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Clinical Services' }]} setActiveTab={setActiveTab} />

      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900">Clinical & Patient Support Services</h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
          From 24/7 Level-1 trauma response and robotic surgery to home healthcare and teleconsultations.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((srv) => {
          const IconComp = ICON_MAP[srv.iconName] || Activity;
          return (
            <div
              key={srv.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white flex items-center justify-center transition shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>
                  {srv.badge && (
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                      {srv.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{srv.shortDesc}</p>
                </div>

                <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  {srv.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenBookingModal()}
                  className="w-full py-2.5 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-700 font-bold text-xs border border-brand-200 transition text-center cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Enquire / Book Service</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
