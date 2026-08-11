import React, { useState } from 'react';
import { Activity } from 'lucide-react';
import { DEPARTMENTS } from '../data/mockData';
import { DepartmentCard } from '../components/DepartmentCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Department } from '../types';

interface DepartmentsPageProps {
  setActiveTab: (tab: string) => void;
  onSelectDepartment: (dept: Department) => void;
}

export const DepartmentsPage: React.FC<DepartmentsPageProps> = ({
  setActiveTab,
  onSelectDepartment,
}) => {
  const [category, setCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All 16 Departments' },
    { id: 'super-specialty', label: 'Super Specialty' },
    { id: 'surgical', label: 'Surgical Sciences' },
    { id: 'medical', label: 'Internal & General Medicine' },
  ];

  const filteredDepts = DEPARTMENTS.filter((d) => (category === 'all' ? true : d.category === category));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Medical Departments' }]} setActiveTab={setActiveTab} />

      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900">Medical & Surgical Departments</h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
          Explore our 16 specialized clinical centers staffed by renowned doctors, advanced diagnostic technologies, and 24/7 dedicated care teams.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              category === cat.id
                ? 'bg-brand-600 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredDepts.map((dept) => (
          <DepartmentCard key={dept.id} department={dept} onSelectDepartment={onSelectDepartment} />
        ))}
      </div>
    </div>
  );
};
