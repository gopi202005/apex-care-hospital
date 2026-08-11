import React from 'react';
import { HeartPulse, Award, ShieldCheck, Users, Milestone, Target, Eye, Sparkles } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface AboutUsPageProps {
  setActiveTab: (tab: string) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ setActiveTab }) => {
  const timelineEvents = [
    { year: '2001', title: 'Founded in Chennai', desc: 'Established as a 50-bed general cardiac hospital committed to accessible healthcare.' },
    { year: '2010', title: 'Advanced Cardiac & Neuro Center', desc: 'Expanded to 250 beds with 24/7 cath labs and hyper-acute stroke intervention units.' },
    { year: '2016', title: 'Multi-City Expansion', desc: 'Launched state-of-the-art tertiary care branches in Bengaluru and Hyderabad.' },
    { year: '2021', title: 'Robotic Surgery & Digital Health', desc: 'Introduced MAKO and Da Vinci robotic surgical systems & HD teleconsultations.' },
    { year: '2026', title: 'Next Generation Super Specialty', desc: 'Over 500,000 patients served with 150+ senior consultant doctors.' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'About Us' }]} setActiveTab={setActiveTab} />

      {/* Hero Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold border border-brand-400/30">
          <Sparkles className="w-4 h-4 text-brand-400" />
          <span>25+ Years of Healthcare Excellence</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Pioneering Human-Centric <br />
          <span className="text-gradient">Medical Innovation.</span>
        </h1>

        <p className="text-slate-300 text-xs sm:text-base max-w-2xl leading-relaxed">
          Apex Care Hospital was founded on a singular vision: to deliver world-class clinical outcomes through ethical practices, compassionate care, and state-of-the-art medical technology.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            To provide evidence-based, compassionate, and affordable super-specialty healthcare using cutting-edge medical technologies while prioritizing patient safety and clinical dignity above all.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
            <Eye className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            To be recognized globally as a premier healthcare ecosystem, pioneering medical research, robotic surgery, and personalized patient-centered care.
          </p>
        </div>
      </div>

      {/* 25-Year Timeline */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
        <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
          <Milestone className="w-6 h-6 text-brand-600" /> 25 Years of Milestones
        </h2>

        <div className="space-y-6 relative border-l-2 border-brand-200 pl-6 ml-2 sm:ml-4">
          {timelineEvents.map((evt, idx) => (
            <div key={idx} className="relative space-y-1">
              <div className="w-4 h-4 rounded-full bg-brand-600 absolute -left-[33px] top-1 border-4 border-white shadow-md" />
              <span className="text-xs font-extrabold text-brand-600 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-200">
                {evt.year}
              </span>
              <h3 className="text-base font-bold text-slate-900 pt-1">{evt.title}</h3>
              <p className="text-xs text-slate-600 max-w-xl">{evt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
