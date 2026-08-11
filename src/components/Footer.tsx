import React from 'react';
import { HeartPulse, PhoneCall, Mail, MapPin, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenBookingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenBookingModal }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Emergency CTA Strip */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-brand-950 via-slate-900 to-brand-900 border border-brand-800/60 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-600/20 text-red-400 flex items-center justify-center border border-red-500/30 flex-shrink-0 animate-pulse">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base">Need Urgent Medical Attention?</h4>
              <p className="text-slate-400 text-xs mt-0.5">24/7 Emergency & Level-1 Trauma Care across all branches.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:+914423459999"
              className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs shadow-md transition"
            >
              Call Emergency: +91 44 2345 9999
            </a>
            <button
              onClick={() => {
                setActiveTab('hospitals');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition"
            >
              Find Nearest ER
            </button>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Hospital Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-md">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">APEX CARE</span>
                <p className="text-[10px] text-brand-400 font-medium tracking-wide uppercase">Super Specialty Hospital</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Apex Care Hospital is a premier healthcare network committed to medical excellence, patient safety, cutting-edge technology, and compassionate clinical outcomes.
            </p>

            <div className="flex items-center gap-3 text-xs text-emerald-400 font-medium bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-800/40 w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Accredited by JCI & NABH Quality Standards</span>
            </div>

            <div className="pt-2 text-xs text-slate-500">
              <p>📍 Central Headquarters: 100 Mount Road, Guindy, Chennai 600032</p>
              <p className="mt-1">✉️ Email: contact@apexcare.demo</p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h5 className="text-white font-bold text-xs uppercase tracking-wider">Medical Services</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => setActiveTab('find-doctor')} className="hover:text-brand-400 transition">
                  Find a Doctor
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('departments')} className="hover:text-brand-400 transition">
                  Medical Departments
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('services')} className="hover:text-brand-400 transition">
                  Clinical Services
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('health-packages')} className="hover:text-brand-400 transition">
                  Health Checkup Packages
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('hospitals')} className="hover:text-brand-400 transition">
                  Hospital Locations
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Patient Care */}
          <div className="space-y-3">
            <h5 className="text-white font-bold text-xs uppercase tracking-wider">Patient Resources</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => setActiveTab('patient-resources')} className="hover:text-brand-400 transition">
                  Insurance & Cashless Desk
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('patient-resources')} className="hover:text-brand-400 transition">
                  Visitor Guidelines
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('patient-resources')} className="hover:text-brand-400 transition">
                  Health Articles & Blogs
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('contact')} className="hover:text-brand-400 transition">
                  FAQs & Support
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('about-us')} className="hover:text-brand-400 transition">
                  Hospital Leadership
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Network Locations */}
          <div className="space-y-3">
            <h5 className="text-white font-bold text-xs uppercase tracking-wider">Hospital Branches</h5>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-400 mt-0.5" />
                <div>
                  <p className="text-slate-200 font-semibold">Chennai Central</p>
                  <p className="text-[11px]">Mount Road, Guindy</p>
                </div>
              </li>
              <li className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-400 mt-0.5" />
                <div>
                  <p className="text-slate-200 font-semibold">Bengaluru</p>
                  <p className="text-[11px]">100 Ft Rd, Indiranagar</p>
                </div>
              </li>
              <li className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-400 mt-0.5" />
                <div>
                  <p className="text-slate-200 font-semibold">Hyderabad</p>
                  <p className="text-[11px]">Road 36, Jubilee Hills</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Demo Disclaimer Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Apex Care Hospital Network. All rights reserved. Frontend UI/UX Demo Concept.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => setActiveTab('patient-resources')} className="hover:text-slate-300 transition">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => setActiveTab('patient-resources')} className="hover:text-slate-300 transition">
              Terms of Service
            </button>
            <span>•</span>
            <button onClick={() => setActiveTab('patient-resources')} className="hover:text-slate-300 transition">
              Patient Rights & Accessibility
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
