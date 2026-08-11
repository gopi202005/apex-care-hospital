import React from 'react';
import {
  HeartPulse,
  Brain,
  Bone,
  ShieldAlert,
  Baby,
  Sparkles,
  Activity,
  Stethoscope,
  Layers,
  Shield,
  UserCheck,
  Ear,
  Eye,
  Cross,
  Zap,
  Smile,
  ArrowRight,
  Users
} from 'lucide-react';
import { Department } from '../types';

interface DepartmentCardProps {
  department: Department;
  onSelectDepartment: (dept: Department) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  HeartPulse,
  Brain,
  Bone,
  ShieldAlert,
  Baby,
  Sparkles,
  Activity,
  Stethoscope,
  Layers,
  Shield,
  UserCheck,
  Ear,
  Eye,
  Cross,
  Zap,
  Smile,
};

export const DepartmentCard: React.FC<DepartmentCardProps> = ({
  department,
  onSelectDepartment,
}) => {
  const IconComponent = ICON_MAP[department.iconName] || Activity;

  return (
    <div
      onClick={() => onSelectDepartment(department)}
      className="group bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brand-400 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden"
    >
      {/* Background soft glow on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-brand-100 transition-all opacity-60" />

      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-sm border border-brand-100">
            <IconComponent className="w-6 h-6" />
          </div>

          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold group-hover:bg-brand-50 group-hover:text-brand-700 transition">
            <Users className="w-3 h-3 text-slate-500 group-hover:text-brand-600" />
            <span>{department.doctorCount} Specialists</span>
          </span>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition flex items-center gap-1.5">
            {department.name}
          </h3>
          <p className="text-xs text-slate-500 line-clamp-2 mt-1.5 leading-relaxed">
            {department.shortDescription}
          </p>
        </div>

        {/* Conditions treated preview tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {department.conditionsTreated.slice(0, 2).map((cond, idx) => (
            <span
              key={idx}
              className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium truncate max-w-[160px]"
            >
              {cond}
            </span>
          ))}
          {department.conditionsTreated.length > 2 && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-slate-50 text-slate-400 font-medium">
              +{department.conditionsTreated.length - 2} more
            </span>
          )}
        </div>
      </div>

      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-600 group-hover:text-brand-700 relative z-10">
        <span>Explore Department</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};
