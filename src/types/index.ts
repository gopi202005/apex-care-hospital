export type ConsultationType = 'in-person' | 'video' | 'both';
export type DoctorAvailabilityStatus = 'today' | 'tomorrow' | 'this-week';

export interface Review {
  id: string;
  patientName: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  treatment: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Experience {
  role: string;
  hospital: string;
  period: string;
}

export interface Doctor {
  id: string;
  name: string;
  title: string; // e.g. Senior Consultant - Cardiology
  qualification: string; // e.g. MD, DM (Cardiology), FACC
  specialtyId: string;
  specialtyName: string;
  experienceYears: number;
  rating: number;
  reviewCount: number;
  image: string;
  hospitalIds: string[];
  hospitalNames: string[];
  location: string;
  languages: string[];
  consultationFee: number;
  availability: DoctorAvailabilityStatus;
  nextAvailableSlot: string;
  consultationTypes: ConsultationType[];
  about: string;
  expertise: string[];
  education: Education[];
  experienceList: Experience[];
  certifications: string[];
  publications: string[];
  featured?: boolean;
}

export interface Department {
  id: string;
  name: string;
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  headOfDepartment: string;
  doctorCount: number;
  bannerImage: string;
  category: 'super-specialty' | 'surgical' | 'medical' | 'diagnostic';
  conditionsTreated: string[];
  proceduresList: string[];
  facilities: string[];
  faqs: { question: string; answer: string }[];
}

export interface HospitalLocation {
  id: string;
  name: string;
  city: string;
  address: string;
  pincode: string;
  phone: string;
  emergencyPhone: string;
  email: string;
  image: string;
  galleryImages: string[];
  distanceKm: number;
  emergency24x7: boolean;
  icuBeds: number;
  openingHours: string;
  departments: string[];
  specialtiesCount: number;
  latitude: number;
  longitude: number;
  visitingHours: string;
  facilities: string[];
  googleMapUrl: string;
}

export interface HealthPackage {
  id: string;
  title: string;
  subtitle: string;
  category: 'wellness' | 'cardiac' | 'women' | 'senior' | 'full-body';
  price: number;
  originalPrice: number;
  discountPercentage: number;
  testCount: number;
  durationHours: string;
  recommendedFor: string;
  fastingRequired: boolean;
  includedTests: {
    category: string;
    tests: string[];
  }[];
  prepInstructions: string[];
  popular?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  badge?: string;
  image: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorRole: string;
  authorImage: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export interface PatientTestimonial {
  id: string;
  name: string;
  age: number;
  location: string;
  treatment: string;
  department: string;
  doctorName: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  category: 'general' | 'booking' | 'insurance' | 'emergency' | 'teleconsult';
  question: string;
  answer: string;
}

export interface AppointmentBookingState {
  doctor: Doctor | null;
  hospital: HospitalLocation | null;
  department: Department | null;
  date: string;
  timeSlot: string;
  consultationType: ConsultationType;
  patientDetails: {
    fullName: string;
    mobile: string;
    email: string;
    dob: string;
    gender: 'male' | 'female' | 'other' | '';
    reason: string;
    isExistingPatient: boolean;
  };
}

export interface FilterState {
  searchQuery: string;
  specialty: string;
  location: string;
  experience: string; // 'all' | '0-5' | '5-10' | '10-15' | '15+'
  gender: string; // 'all' | 'Male' | 'Female'
  availability: string; // 'all' | 'today' | 'tomorrow'
  consultationType: string; // 'all' | 'in-person' | 'video'
  sortBy: 'recommended' | 'experience-high' | 'fee-low' | 'rating-high';
}
