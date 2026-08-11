import React, { useState, useEffect } from 'react';
import { PhoneCall, Calendar, Search, Menu, X, HeartPulse, ChevronRight, ShieldAlert } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBookingModal: (doctorId?: string) => void;
  onOpenSearchModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenBookingModal,
  onOpenSearchModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'find-doctor', label: 'Find a Doctor' },
    { id: 'departments', label: 'Departments' },
    { id: 'hospitals', label: 'Hospitals' },
    { id: 'services', label: 'Services' },
    { id: 'health-packages', label: 'Health Packages' },
    { id: 'patient-resources', label: 'Patient Resources' },
    { id: 'about-us', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top emergency announcement bar */}
      <div className="bg-slate-900 text-slate-300 py-1.5 px-4 text-xs font-medium border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold px-2 py-0.5 rounded bg-amber-400/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              24/7 Trauma Emergency Center
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline">Accredited by JCI & NABH Healthcare Standards</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+914423459999"
              className="flex items-center gap-1.5 text-red-400 hover:text-red-300 font-semibold transition"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Emergency Helpline: +91 44 2345 9999</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <button
              onClick={onOpenSearchModal}
              className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-white transition cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-brand-400" />
              <span>Search Doctors & Services</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header bar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'glass-panel shadow-md py-2.5 border-b border-slate-200/80'
            : 'bg-white/95 backdrop-blur-md py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 via-brand-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl text-slate-900 tracking-tight">APEX CARE</span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-brand-50 text-brand-700 font-semibold border border-brand-200">HOSPITAL</span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium tracking-wide uppercase">Super Specialty Healthcare</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.slice(0, 8).map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === item.id
                    ? 'bg-brand-50 text-brand-700 font-bold'
                    : 'text-slate-600 hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenSearchModal}
              className="p-2.5 text-slate-500 hover:text-brand-600 hover:bg-brand-50 rounded-xl transition cursor-pointer"
              title="Search Doctors, Specialties & Services (Ctrl+K)"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenBookingModal()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white font-semibold text-xs shadow-md shadow-brand-600/25 hover:shadow-lg hover:shadow-brand-600/35 transition-all cursor-pointer active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-brand-200" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => onOpenBookingModal()}
              className="px-3 py-1.5 rounded-lg bg-brand-600 text-white text-xs font-semibold shadow-sm"
            >
              Book
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[88px] z-50 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-sm ml-auto h-full shadow-2xl overflow-y-auto p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-bold text-slate-900 text-sm">Navigation Menu</span>
                <button
                  onClick={onOpenSearchModal}
                  className="flex items-center gap-1 text-xs text-brand-600 font-semibold bg-brand-50 px-2.5 py-1 rounded-lg"
                >
                  <Search className="w-3.5 h-3.5" /> Search
                </button>
              </div>

              <div className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                      activeTab === item.id
                        ? 'bg-brand-600 text-white'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-70" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full py-3 rounded-xl bg-brand-600 text-white font-semibold text-xs shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <a
                href="tel:+914423459999"
                className="w-full py-2.5 rounded-xl bg-red-50 text-red-700 font-semibold text-xs border border-red-200 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-red-600" />
                <span>24/7 Helpline: +91 44 2345 9999</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
