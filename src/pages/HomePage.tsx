import React, { useState } from 'react';
import { Search, MapPin, Calendar, ArrowRight, ShieldCheck, PhoneCall, Award, Users, HeartPulse, Sparkles, CheckCircle2, ChevronRight, Activity, Zap } from 'lucide-react';
import { DOCTORS, DEPARTMENTS, HEALTH_PACKAGES, HOSPITALS, STATS, POPULAR_SEARCHES, FAQS, TESTIMONIALS, ARTICLES } from '../data/mockData';
import { DoctorCard } from '../components/DoctorCard';
import { DepartmentCard } from '../components/DepartmentCard';
import { StatCounter } from '../components/StatCounter';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
import { FAQAccordion } from '../components/FAQAccordion';
import { Doctor, Department, HealthPackage, HospitalLocation } from '../types';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
  onSelectDoctor: (doctor: Doctor) => void;
  onSelectDepartment: (dept: Department) => void;
  onOpenBookingModal: (doctorId?: string) => void;
  onSelectPackage: (pkg: HealthPackage) => void;
  onSelectHospital: (hosp: HospitalLocation) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActiveTab,
  onSelectDoctor,
  onSelectDepartment,
  onOpenBookingModal,
  onSelectPackage,
  onSelectHospital,
}) => {
  const [heroSearch, setHeroSearch] = useState('');
  const [heroLocation, setHeroLocation] = useState('all');
  const [heroDept, setHeroDept] = useState('all');

  const handleHeroSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveTab('find-doctor');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold shadow-sm">
                <Sparkles className="w-4 h-4 text-brand-600 animate-spin" />
                <span>India’s Leading Super Specialty Hospital Network</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Expert Care. <br />
                <span className="text-gradient">Closer to You.</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
                Connect with world-renowned medical specialists, explore 30+ super-specialty departments, and book seamless in-person or video consultations.
              </p>

              {/* Hero Search Box */}
              <form
                onSubmit={handleHeroSearchSubmit}
                className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-xl border border-slate-200/90 space-y-3"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {/* Search input */}
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search doctor or specialty..."
                      value={heroSearch}
                      onChange={(e) => setHeroSearch(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 text-xs font-medium rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-brand-500"
                    />
                  </div>

                  {/* Select Location */}
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                      value={heroLocation}
                      onChange={(e) => setHeroLocation(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 text-xs font-medium rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-brand-500 cursor-pointer"
                    >
                      <option value="all">All Locations</option>
                      <option value="chennai">Chennai Central</option>
                      <option value="bengaluru">Bengaluru</option>
                      <option value="hyderabad">Hyderabad</option>
                      <option value="coimbatore">Coimbatore</option>
                    </select>
                  </div>

                  {/* Select Department */}
                  <div className="relative">
                    <Activity className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                      value={heroDept}
                      onChange={(e) => setHeroDept(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 text-xs font-medium rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-brand-500 cursor-pointer"
                    >
                      <option value="all">All Departments</option>
                      <option value="dept-cardiology">Cardiology</option>
                      <option value="dept-neurology">Neurology</option>
                      <option value="dept-orthopedics">Orthopedics</option>
                      <option value="dept-oncology">Oncology</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                  <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex-shrink-0">Popular:</span>
                    {POPULAR_SEARCHES.slice(0, 4).map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => {
                          setHeroSearch(tag);
                          setActiveTab('find-doctor');
                        }}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-brand-50 hover:text-brand-700 text-slate-600 font-medium transition cursor-pointer flex-shrink-0"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white font-bold text-xs shadow-md shadow-brand-600/30 transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Search className="w-4 h-4" />
                    <span>Search Doctors</span>
                  </button>
                </div>
              </form>

              {/* Secondary CTA buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenBookingModal()}
                  className="px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-lg shadow-slate-900/20 transition flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-brand-400" />
                  <span>Book Immediate Slot</span>
                </button>

                <button
                  onClick={() => setActiveTab('find-doctor')}
                  className="px-6 py-3 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200 transition flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore 150+ Specialists</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1000"
                  alt="Apex Care Senior Doctor Consultation"
                  className="w-full h-[420px] sm:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Floating doctor highlight badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel text-slate-900 border border-white/60 shadow-xl flex items-center gap-3 animate-float">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">Dr. Arjun Mehta & Team</h4>
                    <p className="text-[11px] text-slate-600">Senior Director — Cardiology • Available Today</p>
                  </div>
                </div>
              </div>

              {/* Decorative background glow */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-brand-400/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / STATISTICS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StatCounter stats={STATS} />
      </section>

      {/* 3. FEATURED DEPARTMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Center of Excellence</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Specialized Medical Departments</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Providing state-of-the-art diagnostic, surgical, and therapeutic medical care.</p>
          </div>

          <button
            onClick={() => setActiveTab('departments')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 transition cursor-pointer"
          >
            <span>View All 16 Departments</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEPARTMENTS.slice(0, 8).map((dept) => (
            <DepartmentCard key={dept.id} department={dept} onSelectDepartment={onSelectDepartment} />
          ))}
        </div>
      </section>

      {/* 4. EMERGENCY & CRITICAL CARE CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-red-950 via-slate-900 to-red-900 text-white rounded-3xl p-8 sm:p-12 border border-red-800/60 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/30 text-red-300 text-xs font-bold border border-red-500/40">
              <Zap className="w-4 h-4 text-red-400 animate-pulse" />
              <span>Level-1 Trauma & Emergency Unit</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
              Need Urgent Emergency Care?
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Our 24/7 Emergency Rooms feature zero-wait triage, mobile ICU ambulances, cardiac stroke protocols, and trauma surgeons standing by across all hospital branches.
            </p>

            <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-300 pt-2">
              <span className="flex items-center gap-1.5">✓ 24/7 Mobile ICU Ambulance</span>
              <span className="flex items-center gap-1.5">✓ Cardiac Cath Lab On-Call</span>
              <span className="flex items-center gap-1.5">✓ Hyper-acute Stroke Unit</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <a
              href="tel:+914423459999"
              className="px-6 py-4 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm shadow-xl shadow-red-600/40 transition text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Call Emergency: +91 44 2345 9999</span>
            </a>

            <button
              onClick={() => setActiveTab('hospitals')}
              className="px-6 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition text-center cursor-pointer"
            >
              Locate ER Branch
            </button>
          </div>
        </div>
      </section>

      {/* 5. TOP SPECIALISTS DOCTOR CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600">World-Class Faculty</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Meet Our Senior Doctors</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Highly experienced consultants with international fellowships and clinical excellence.</p>
          </div>

          <button
            onClick={() => setActiveTab('find-doctor')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 transition cursor-pointer"
          >
            <span>Search All Specialists</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS.filter((d) => d.featured).map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onSelectDoctor={onSelectDoctor}
              onBookDoctor={(doc) => onOpenBookingModal(doc.id)}
            />
          ))}
        </div>
      </section>

      {/* 6. HEALTH PACKAGES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Preventive Healthcare</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Featured Health Checkup Packages</h2>
          <p className="text-xs sm:text-sm text-slate-500">Comprehensive health screenings for proactive wellness monitoring at discounted rates.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HEALTH_PACKAGES.slice(0, 3).map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-3xl p-6 border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative ${
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
                  <h3 className="text-lg font-bold text-slate-900">{pkg.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{pkg.subtitle}</p>
                </div>

                <div className="flex items-baseline gap-2 py-2 border-y border-slate-100">
                  <span className="text-2xl font-extrabold text-slate-900">₹{pkg.price}</span>
                  <span className="text-xs text-slate-400 line-through">₹{pkg.originalPrice}</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    Save {pkg.discountPercentage}%
                  </span>
                </div>

                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Includes <strong>{pkg.testCount} Lab Tests & Diagnostics</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Duration: {pkg.durationHours} | Fasting: {pkg.fastingRequired ? 'Required' : 'No'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Senior Physician Consultation Included</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onSelectPackage(pkg)}
                  className="w-full py-2.5 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-700 font-bold text-xs border border-brand-200 transition text-center cursor-pointer"
                >
                  View Tests & Book Package
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PATIENT TESTIMONIALS CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TestimonialsCarousel testimonials={TESTIMONIALS} />
      </section>

      {/* 8. HOSPITAL LOCATIONS MAP PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Our Network</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Apex Care Hospital Branches</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Multi-specialty tertiary care hubs across major metropolitan regions.</p>
          </div>

          <button
            onClick={() => setActiveTab('hospitals')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 transition cursor-pointer"
          >
            <span>View All Hospital Locations</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {HOSPITALS.slice(0, 2).map((hosp) => (
            <div
              key={hosp.id}
              onClick={() => onSelectHospital(hosp)}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition cursor-pointer flex flex-col sm:flex-row gap-6 group"
            >
              <img
                src={hosp.image}
                alt={hosp.name}
                className="w-full sm:w-48 h-40 rounded-2xl object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="flex-1 space-y-2 text-xs">
                <span className="px-2 py-0.5 rounded bg-brand-50 text-brand-700 font-bold">
                  📍 {hosp.city}
                </span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition">
                  {hosp.name}
                </h3>
                <p className="text-slate-500">{hosp.address}</p>
                <p className="text-slate-700 font-semibold pt-2">Helpline: {hosp.phone}</p>
                <span className="inline-flex items-center gap-1 text-brand-600 font-bold pt-1">
                  <span>Explore Branch Facilities</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FAQ ACCORDION SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Frequently Asked Questions</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Have Questions? We Have Answers.</h2>
        </div>

        <FAQAccordion faqs={FAQS} />
      </section>
    </div>
  );
};
