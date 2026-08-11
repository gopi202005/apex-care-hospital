import React, { useState, useEffect } from 'react';
import { Search, X, User, Activity, Package, Stethoscope, ArrowRight, CornerDownLeft } from 'lucide-react';
import { DOCTORS, DEPARTMENTS, HEALTH_PACKAGES, SERVICES } from '../data/mockData';
import { Doctor, Department, HealthPackage, ServiceItem } from '../types';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDoctor: (doctor: Doctor) => void;
  onSelectDepartment: (dept: Department) => void;
  onSelectPackage: (pkg: HealthPackage) => void;
  onSelectService: (srv: ServiceItem) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectDoctor,
  onSelectDepartment,
  onSelectPackage,
  onSelectService,
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const q = query.toLowerCase().trim();

  const matchingDoctors = q
    ? DOCTORS.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.specialtyName.toLowerCase().includes(q) ||
          d.qualification.toLowerCase().includes(q) ||
          d.expertise.some((e) => e.toLowerCase().includes(q))
      )
    : DOCTORS.slice(0, 3);

  const matchingDepartments = q
    ? DEPARTMENTS.filter(
        (dept) =>
          dept.name.toLowerCase().includes(q) ||
          dept.shortDescription.toLowerCase().includes(q) ||
          dept.conditionsTreated.some((c) => c.toLowerCase().includes(q)) ||
          // Keyword alias matching (heart->cardiology, skin->dermatology, etc)
          (q.includes('heart') && dept.id === 'dept-cardiology') ||
          (q.includes('skin') && dept.id === 'dept-dermatology') ||
          (q.includes('bone') && dept.id === 'dept-orthopedics') ||
          (q.includes('brain') && dept.id === 'dept-neurology') ||
          (q.includes('child') && dept.id === 'dept-pediatrics') ||
          (q.includes('cancer') && dept.id === 'dept-oncology')
      )
    : DEPARTMENTS.slice(0, 4);

  const matchingPackages = q
    ? HEALTH_PACKAGES.filter(
        (pkg) =>
          pkg.title.toLowerCase().includes(q) ||
          pkg.subtitle.toLowerCase().includes(q) ||
          pkg.category.toLowerCase().includes(q)
      )
    : HEALTH_PACKAGES.slice(0, 2);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-start justify-center p-4 pt-16 sm:pt-24 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-slate-100 flex flex-col">
        {/* Search input header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-brand-600 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search by doctor, specialty, condition (e.g. heart, skin, diabetes)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-slate-900 font-medium text-sm focus:outline-none placeholder:text-slate-400"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-slate-400 hover:text-slate-600 p-1">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-500 hover:bg-slate-200 text-xs font-semibold"
          >
            ESC
          </button>
        </div>

        {/* Results body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Quick suggestions pills when empty */}
          {!query && (
            <div className="space-y-2">
              <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">Popular Searches</span>
              <div className="flex flex-wrap gap-2">
                {['Cardiologist', 'Dermatologist', 'Orthopedic', 'Robotic Surgery', 'Master Health Check', 'Pediatrician'].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-brand-50 hover:text-brand-700 text-xs font-medium text-slate-700 transition"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {/* Doctors Section */}
          {matchingDoctors.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-brand-600" /> Specialist Doctors ({matchingDoctors.length})
                </span>
              </div>
              <div className="space-y-2">
                {matchingDoctors.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => {
                      onSelectDoctor(doc);
                      onClose();
                    }}
                    className="p-3 rounded-2xl border border-slate-100 hover:border-brand-300 hover:bg-brand-50/50 transition cursor-pointer flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <img src={doc.image} alt={doc.name} className="w-10 h-10 rounded-xl object-cover" />
                      <div>
                        <h4 className="font-bold text-sm text-slate-900 group-hover:text-brand-600 transition">
                          {doc.name}
                        </h4>
                        <p className="text-xs text-slate-500">{doc.specialtyName} • {doc.experienceYears} Yrs Exp.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-brand-600">
                      <span>View Profile</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Departments Section */}
          {matchingDepartments.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-teal-600" /> Departments ({matchingDepartments.length})
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchingDepartments.map((dept) => (
                  <div
                    key={dept.id}
                    onClick={() => {
                      onSelectDepartment(dept);
                      onClose();
                    }}
                    className="p-3 rounded-xl border border-slate-100 hover:border-teal-300 hover:bg-teal-50/50 transition cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="font-bold text-xs text-slate-900 group-hover:text-teal-700">{dept.name}</h4>
                      <p className="text-[10px] text-slate-500">{dept.doctorCount} Doctors Available</p>
                    </div>
                    <CornerDownLeft className="w-3 h-3 text-slate-400 group-hover:text-teal-600" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Health Packages */}
          {matchingPackages.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <Package className="w-3.5 h-3.5 text-purple-600" /> Health Packages
                </span>
              </div>
              <div className="space-y-2">
                {matchingPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => {
                      onSelectPackage(pkg);
                      onClose();
                    }}
                    className="p-3 rounded-xl border border-slate-100 hover:border-purple-300 hover:bg-purple-50/50 transition cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="font-bold text-xs text-slate-900 group-hover:text-purple-700">{pkg.title}</h4>
                      <p className="text-[10px] text-slate-500">{pkg.testCount} Tests Included</p>
                    </div>
                    <span className="font-bold text-xs text-purple-700">₹{pkg.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {matchingDoctors.length === 0 && matchingDepartments.length === 0 && matchingPackages.length === 0 && (
            <div className="text-center py-8 space-y-2">
              <p className="font-bold text-slate-700 text-sm">No exact medical records found for "{query}"</p>
              <p className="text-xs text-slate-500">
                Try searching for general terms like "Cardiology", "Consultation", "Doctor", or "Checkup".
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
