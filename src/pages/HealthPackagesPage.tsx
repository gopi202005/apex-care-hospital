import React, { useState } from 'react';
import { CheckCircle2, Clock, ShieldCheck, ChevronDown, Calendar, AlertCircle } from 'lucide-react';
import { HEALTH_PACKAGES } from '../data/mockData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { HealthPackage } from '../types';

interface HealthPackagesPageProps {
  setActiveTab: (tab: string) => void;
  onSelectPackage: (pkg: HealthPackage) => void;
  onOpenBookingModal: () => void;
}

export const HealthPackagesPage: React.FC<HealthPackagesPageProps> = ({
  setActiveTab,
  onSelectPackage,
  onOpenBookingModal,
}) => {
  const [selectedPkg, setSelectedPkg] = useState<HealthPackage | null>(HEALTH_PACKAGES[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Health Packages' }]} setActiveTab={setActiveTab} />

      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900">Preventive Health Checkup Packages</h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
          Designed for early disease detection, cardiac screening, diabetic monitoring, and full-body wellness with fast-track lounge access.
        </p>
      </div>

      {/* Grid of Packages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {HEALTH_PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            className={`bg-white rounded-3xl p-6 sm:p-8 border shadow-sm hover:shadow-xl transition flex flex-col justify-between space-y-6 relative ${
              pkg.popular ? 'border-brand-500 ring-2 ring-brand-500/20' : 'border-slate-200'
            }`}
          >
            {pkg.popular && (
              <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-brand-600 text-white text-[10px] font-extrabold uppercase tracking-wider shadow">
                Most Popular
              </span>
            )}

            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-extrabold text-brand-600 uppercase tracking-wider bg-brand-50 px-2.5 py-1 rounded-md">
                  {pkg.recommendedFor}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2">{pkg.title}</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{pkg.subtitle}</p>
              </div>

              <div className="flex items-baseline gap-2 py-3 border-y border-slate-100">
                <span className="text-3xl font-extrabold text-slate-900">₹{pkg.price}</span>
                <span className="text-xs text-slate-400 line-through">₹{pkg.originalPrice}</span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  Save {pkg.discountPercentage}%
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-600">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span><strong>{pkg.testCount} Lab Tests</strong> & Diagnostic Parameters</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  <span>Duration: <strong>{pkg.durationHours}</strong></span>
                </p>
                <p className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Overnight Fasting: <strong>{pkg.fastingRequired ? '10-12 Hours Required' : 'Not Required'}</strong></span>
                </p>
              </div>

              {/* Sample included test categories */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Included Profiles</span>
                <div className="flex flex-wrap gap-1.5">
                  {pkg.includedTests.map((cat, idx) => (
                    <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                      {cat.category}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <button
                onClick={() => setSelectedPkg(pkg)}
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition cursor-pointer"
              >
                View Full Test List ({pkg.testCount} Tests)
              </button>

              <button
                onClick={() => onOpenBookingModal()}
                className="w-full py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-lg shadow-brand-600/30 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Package</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Package Detail Modal */}
      {selectedPkg && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-100 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{selectedPkg.title}</h3>
                <p className="text-xs text-brand-600 font-bold">Includes {selectedPkg.testCount} Tests & Parameters • ₹{selectedPkg.price}</p>
              </div>
              <button
                onClick={() => setSelectedPkg(null)}
                className="text-xs font-bold px-3 py-1.5 bg-slate-100 rounded-xl hover:bg-slate-200"
              >
                Close
              </button>
            </div>

            {/* Test Categories Breakdown */}
            <div className="space-y-4 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Itemized Test & Diagnostic Breakdown</h4>
              {selectedPkg.includedTests.map((cat, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <h5 className="font-bold text-brand-700 text-xs uppercase tracking-wider">{cat.category}</h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-600">
                    {cat.tests.map((t, tidx) => (
                      <li key={tidx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
              <h5 className="font-bold text-amber-950">Preparation Guidelines</h5>
              <ul className="list-disc pl-4 space-y-1">
                {selectedPkg.prepInstructions.map((inst, i) => (
                  <li key={i}>{inst}</li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setSelectedPkg(null);
                  onOpenBookingModal();
                }}
                className="w-full py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md"
              >
                Proceed to Book Package
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
