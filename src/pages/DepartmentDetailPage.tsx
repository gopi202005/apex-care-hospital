import React from 'react';
import { ArrowLeft, Users, CheckCircle2, Stethoscope, ShieldCheck, Calendar, ArrowRight, HelpCircle } from 'lucide-react';
import { DOCTORS } from '../data/mockData';
import { DepartmentCard } from '../components/DepartmentCard';
import { DoctorCard } from '../components/DoctorCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Department, Doctor } from '../types';

interface DepartmentDetailPageProps {
  department: Department;
  setActiveTab: (tab: string) => void;
  onSelectDoctor: (doctor: Doctor) => void;
  onOpenBookingModal: (doctorId?: string) => void;
}

export const DepartmentDetailPage: React.FC<DepartmentDetailPageProps> = ({
  department,
  setActiveTab,
  onSelectDoctor,
  onOpenBookingModal,
}) => {
  // Find doctors belonging to this department
  const deptDoctors = DOCTORS.filter((d) => d.specialtyId === department.id || d.specialtyName.includes(department.name.split(' ')[0]));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[{ label: 'Departments', tabId: 'departments' }, { label: department.name }]}
        setActiveTab={setActiveTab}
      />

      <button
        onClick={() => setActiveTab('departments')}
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-brand-600 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Departments</span>
      </button>

      {/* Hero Banner Card */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
        <img
          src={department.bannerImage}
          alt={department.name}
          className="w-full h-72 sm:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

        <div className="absolute bottom-6 left-6 right-6 text-white space-y-3">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-brand-600/90 text-white text-xs font-bold uppercase tracking-wider">
              {department.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-800/80 backdrop-blur-sm text-slate-200 text-xs font-semibold flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-brand-400" />
              <span>{department.doctorCount} Doctors</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold">{department.name}</h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">{department.fullDescription}</p>

          <div className="pt-2 flex items-center gap-4">
            <button
              onClick={() => onOpenBookingModal()}
              className="px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-lg transition flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Department Consultation</span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid Details: Conditions Treated & Procedures */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Conditions Treated */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Stethoscope className="w-5 h-5 text-brand-600" /> Key Conditions Treated
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
            {department.conditionsTreated.map((cond, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="font-semibold">{cond}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Surgical & Diagnostic Procedures */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brand-600" /> Advanced Procedures & Treatments
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
            {department.proceduresList.map((proc, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                <span className="font-semibold">{proc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Department Doctors */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold text-slate-900">Specialists in {department.name}</h2>
          <button
            onClick={() => setActiveTab('find-doctor')}
            className="text-xs font-bold text-brand-600 hover:text-brand-700 transition"
          >
            View All Doctors
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deptDoctors.length > 0
            ? deptDoctors.map((doc) => (
                <DoctorCard
                  key={doc.id}
                  doctor={doc}
                  onSelectDoctor={onSelectDoctor}
                  onBookDoctor={(d) => onOpenBookingModal(d.id)}
                />
              ))
            : DOCTORS.slice(0, 3).map((doc) => (
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
