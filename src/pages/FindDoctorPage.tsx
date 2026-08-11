import React, { useState } from 'react';
import { Search, Filter, RotateCcw, SlidersHorizontal, User, Award, MapPin, Calendar, Star } from 'lucide-react';
import { DOCTORS, DEPARTMENTS, HOSPITALS } from '../data/mockData';
import { DoctorCard } from '../components/DoctorCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Doctor, FilterState } from '../types';

interface FindDoctorPageProps {
  setActiveTab: (tab: string) => void;
  onSelectDoctor: (doctor: Doctor) => void;
  onBookDoctor: (doctor: Doctor) => void;
}

export const FindDoctorPage: React.FC<FindDoctorPageProps> = ({
  setActiveTab,
  onSelectDoctor,
  onBookDoctor,
}) => {
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    specialty: 'all',
    location: 'all',
    experience: 'all',
    gender: 'all',
    availability: 'all',
    consultationType: 'all',
    sortBy: 'recommended',
  });

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const resetFilters = () => {
    setFilters({
      searchQuery: '',
      specialty: 'all',
      location: 'all',
      experience: 'all',
      gender: 'all',
      availability: 'all',
      consultationType: 'all',
      sortBy: 'recommended',
    });
  };

  // Filtering Logic
  const filteredDoctors = DOCTORS.filter((doc) => {
    const q = filters.searchQuery.toLowerCase().trim();
    if (q) {
      const matchName = doc.name.toLowerCase().includes(q);
      const matchSpecialty = doc.specialtyName.toLowerCase().includes(q);
      const matchExpertise = doc.expertise.some((e) => e.toLowerCase().includes(q));
      if (!matchName && !matchSpecialty && !matchExpertise) return false;
    }

    if (filters.specialty !== 'all' && doc.specialtyId !== filters.specialty) return false;

    if (filters.location !== 'all') {
      const matchLoc = doc.location.toLowerCase().includes(filters.location.toLowerCase());
      if (!matchLoc) return false;
    }

    if (filters.availability !== 'all' && doc.availability !== filters.availability) return false;

    if (filters.consultationType !== 'all') {
      if (!doc.consultationTypes.includes(filters.consultationType as any)) return false;
    }

    if (filters.experience !== 'all') {
      if (filters.experience === '15+' && doc.experienceYears < 15) return false;
      if (filters.experience === '10-15' && (doc.experienceYears < 10 || doc.experienceYears > 15)) return false;
      if (filters.experience === '5-10' && (doc.experienceYears < 5 || doc.experienceYears > 10)) return false;
    }

    return true;
  });

  // Sorting Logic
  const sortedDoctors = [...filteredDoctors].sort((a, b) => {
    if (filters.sortBy === 'experience-high') return b.experienceYears - a.experienceYears;
    if (filters.sortBy === 'fee-low') return a.consultationFee - b.consultationFee;
    if (filters.sortBy === 'rating-high') return b.rating - a.rating;
    return 0; // recommended default
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Find a Doctor' }]} setActiveTab={setActiveTab} />

      {/* Page Title Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900">Find a Specialist Doctor</h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
          Search and book consultations with senior consultants across 30+ medical specialties and 4 modern hospital locations.
        </p>
      </div>

      {/* Top Search Bar & Sort Row */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search doctor name, specialty, condition..."
            value={filters.searchQuery}
            onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
            className="w-full pl-9 pr-3 py-2.5 text-xs font-medium rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-brand-500"
          />
        </div>

        <div className="flex items-center justify-between w-full md:w-auto gap-4">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="md:hidden flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold"
          >
            <SlidersHorizontal className="w-4 h-4 text-brand-600" />
            <span>Filters</span>
          </button>

          <div className="flex items-center gap-2 text-xs">
            <span className="font-semibold text-slate-500">Sort By:</span>
            <select
              value={filters.sortBy}
              onChange={(e) => setFilters({ ...filters, sortBy: e.target.value as any })}
              className="p-2 rounded-xl border border-slate-200 bg-white font-semibold text-slate-800 focus:outline-none focus:border-brand-500 cursor-pointer"
            >
              <option value="recommended">Recommended</option>
              <option value="experience-high">Experience: High to Low</option>
              <option value="fee-low">Consultation Fee: Low to High</option>
              <option value="rating-high">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content Layout: Filters Sidebar + Doctor Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Sidebar Filters (Desktop) */}
        <div className="hidden md:block md:col-span-4 lg:col-span-3 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b pb-4">
              <span className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Filter className="w-4 h-4 text-brand-600" /> Filters
              </span>
              <button
                onClick={resetFilters}
                className="text-xs text-brand-600 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" /> Reset All
              </button>
            </div>

            {/* Specialty Filter */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">Specialty</label>
              <select
                value={filters.specialty}
                onChange={(e) => setFilters({ ...filters, specialty: e.target.value })}
                className="w-full p-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white cursor-pointer font-medium"
              >
                <option value="all">All Specialties</option>
                {DEPARTMENTS.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">Location / City</label>
              <select
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="w-full p-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white cursor-pointer font-medium"
              >
                <option value="all">All Locations</option>
                <option value="chennai">Chennai</option>
                <option value="bengaluru">Bengaluru</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="coimbatore">Coimbatore</option>
              </select>
            </div>

            {/* Availability */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">Availability</label>
              <div className="space-y-1.5 text-xs">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="avail"
                    checked={filters.availability === 'all'}
                    onChange={() => setFilters({ ...filters, availability: 'all' })}
                    className="text-brand-600"
                  />
                  <span>Any Time</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="avail"
                    checked={filters.availability === 'today'}
                    onChange={() => setFilters({ ...filters, availability: 'today' })}
                    className="text-brand-600"
                  />
                  <span className="font-semibold text-emerald-600">Available Today</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="avail"
                    checked={filters.availability === 'tomorrow'}
                    onChange={() => setFilters({ ...filters, availability: 'tomorrow' })}
                    className="text-brand-600"
                  />
                  <span>Available Tomorrow</span>
                </label>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">Experience</label>
              <select
                value={filters.experience}
                onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
                className="w-full p-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white cursor-pointer font-medium"
              >
                <option value="all">All Experience Levels</option>
                <option value="5-10">5 to 10 Years</option>
                <option value="10-15">10 to 15 Years</option>
                <option value="15+">15+ Years (Senior Directors)</option>
              </select>
            </div>

            {/* Consultation Mode */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">Consultation Type</label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() =>
                    setFilters({
                      ...filters,
                      consultationType: filters.consultationType === 'in-person' ? 'all' : 'in-person',
                    })
                  }
                  className={`py-2 px-2 rounded-xl border font-semibold text-center cursor-pointer transition ${
                    filters.consultationType === 'in-person'
                      ? 'bg-brand-50 border-brand-500 text-brand-700'
                      : 'border-slate-200 text-slate-600'
                  }`}
                >
                  In-Person
                </button>
                <button
                  onClick={() =>
                    setFilters({
                      ...filters,
                      consultationType: filters.consultationType === 'video' ? 'all' : 'video',
                    })
                  }
                  className={`py-2 px-2 rounded-xl border font-semibold text-center cursor-pointer transition ${
                    filters.consultationType === 'video'
                      ? 'bg-purple-50 border-purple-500 text-purple-700'
                      : 'border-slate-200 text-slate-600'
                  }`}
                >
                  Video Call
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Doctor Cards Grid */}
        <div className="md:col-span-8 lg:col-span-9 space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>
              Showing <strong>{sortedDoctors.length}</strong> available doctors
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                onSelectDoctor={onSelectDoctor}
                onBookDoctor={onBookDoctor}
              />
            ))}
          </div>

          {sortedDoctors.length === 0 && (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4">
              <User className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900">No doctors match your filter criteria</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try resetting your filters or broadening your search terms to discover available specialists.
              </p>
              <button
                onClick={resetFilters}
                className="px-6 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs shadow-md"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
