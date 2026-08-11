import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { Toast } from './components/Toast';

// Pages
import { HomePage } from './pages/HomePage';
import { FindDoctorPage } from './pages/FindDoctorPage';
import { DoctorProfilePage } from './pages/DoctorProfilePage';
import { DepartmentsPage } from './pages/DepartmentsPage';
import { DepartmentDetailPage } from './pages/DepartmentDetailPage';
import { BookAppointmentPage } from './pages/BookAppointmentPage';
import { HospitalsPage } from './pages/HospitalsPage';
import { HospitalDetailPage } from './pages/HospitalDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { HealthPackagesPage } from './pages/HealthPackagesPage';
import { PatientResourcesPage } from './pages/PatientResourcesPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactPage } from './pages/ContactPage';
import { ConfirmationPage } from './pages/ConfirmationPage';

// Types & Mock Data
import { Doctor, Department, HealthPackage, HospitalLocation } from './types';
import { DOCTORS, DEPARTMENTS, HOSPITALS, HEALTH_PACKAGES } from './data/mockData';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(DOCTORS[0]);
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(DEPARTMENTS[0]);
  const [selectedPackage, setSelectedPackage] = useState<HealthPackage | null>(HEALTH_PACKAGES[0]);
  const [selectedHospital, setSelectedHospital] = useState<HospitalLocation | null>(HOSPITALS[0]);

  // Modals & Notifications
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [preSelectedDoctorForModal, setPreSelectedDoctorForModal] = useState<Doctor | null>(null);
  const [latestBookingData, setLatestBookingData] = useState<any>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const handleOpenBookingModal = (doctorId?: string) => {
    if (doctorId) {
      const doc = DOCTORS.find((d) => d.id === doctorId);
      setPreSelectedDoctorForModal(doc || null);
    } else {
      setPreSelectedDoctorForModal(null);
    }
    setIsBookingModalOpen(true);
  };

  const handleSelectDoctor = (doc: Doctor) => {
    setSelectedDoctor(doc);
    setActiveTab('doctor-profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDepartment = (dept: Department) => {
    setSelectedDepartment(dept);
    setActiveTab('department-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectHospital = (hosp: HospitalLocation) => {
    setSelectedHospital(hosp);
    setActiveTab('hospital-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPackage = (pkg: HealthPackage) => {
    setSelectedPackage(pkg);
    handleOpenBookingModal();
  };

  const handleBookingSuccess = (bookingData: any) => {
    setLatestBookingData(bookingData);
    setActiveTab('confirmation');
    showToast(`Appointment ${bookingData.bookingId} registered successfully!`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 text-slate-900 selection:bg-brand-500 selection:text-white">
      {/* Sticky Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBookingModal={handleOpenBookingModal}
        onOpenSearchModal={() => setIsSearchModalOpen(true)}
      />

      {/* Main Dynamic Page Render */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <HomePage
            setActiveTab={setActiveTab}
            onSelectDoctor={handleSelectDoctor}
            onSelectDepartment={handleSelectDepartment}
            onOpenBookingModal={handleOpenBookingModal}
            onSelectPackage={handleSelectPackage}
            onSelectHospital={handleSelectHospital}
          />
        )}

        {activeTab === 'find-doctor' && (
          <FindDoctorPage
            setActiveTab={setActiveTab}
            onSelectDoctor={handleSelectDoctor}
            onBookDoctor={(doc) => handleOpenBookingModal(doc.id)}
          />
        )}

        {activeTab === 'doctor-profile' && selectedDoctor && (
          <DoctorProfilePage
            doctor={selectedDoctor}
            setActiveTab={setActiveTab}
            onOpenBookingModal={handleOpenBookingModal}
          />
        )}

        {activeTab === 'departments' && (
          <DepartmentsPage
            setActiveTab={setActiveTab}
            onSelectDepartment={handleSelectDepartment}
          />
        )}

        {activeTab === 'department-detail' && selectedDepartment && (
          <DepartmentDetailPage
            department={selectedDepartment}
            setActiveTab={setActiveTab}
            onSelectDoctor={handleSelectDoctor}
            onOpenBookingModal={handleOpenBookingModal}
          />
        )}

        {activeTab === 'book-appointment' && (
          <BookAppointmentPage
            setActiveTab={setActiveTab}
            onBookingComplete={handleBookingSuccess}
            initialDoctorId={preSelectedDoctorForModal?.id}
          />
        )}

        {activeTab === 'hospitals' && (
          <HospitalsPage
            setActiveTab={setActiveTab}
            onSelectHospital={handleSelectHospital}
          />
        )}

        {activeTab === 'hospital-detail' && selectedHospital && (
          <HospitalDetailPage
            hospital={selectedHospital}
            setActiveTab={setActiveTab}
            onSelectDoctor={handleSelectDoctor}
            onOpenBookingModal={handleOpenBookingModal}
          />
        )}

        {activeTab === 'services' && (
          <ServicesPage
            setActiveTab={setActiveTab}
            onOpenBookingModal={() => handleOpenBookingModal()}
          />
        )}

        {activeTab === 'health-packages' && (
          <HealthPackagesPage
            setActiveTab={setActiveTab}
            onSelectPackage={handleSelectPackage}
            onOpenBookingModal={() => handleOpenBookingModal()}
          />
        )}

        {activeTab === 'patient-resources' && (
          <PatientResourcesPage setActiveTab={setActiveTab} />
        )}

        {activeTab === 'about-us' && (
          <AboutUsPage setActiveTab={setActiveTab} />
        )}

        {activeTab === 'contact' && (
          <ContactPage setActiveTab={setActiveTab} onShowToast={showToast} />
        )}

        {activeTab === 'confirmation' && (
          <ConfirmationPage
            bookingData={latestBookingData}
            setActiveTab={setActiveTab}
            onShowToast={showToast}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenBookingModal={() => handleOpenBookingModal()}
      />

      {/* Global Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preSelectedDoctor={preSelectedDoctorForModal}
        onBookingSuccess={handleBookingSuccess}
      />

      {/* Global Command-K Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectDoctor={handleSelectDoctor}
        onSelectDepartment={handleSelectDepartment}
        onSelectPackage={handleSelectPackage}
        onSelectService={() => {
          setIsSearchModalOpen(false);
          setActiveTab('services');
        }}
      />

      {/* Toast feedback component */}
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}
    </div>
  );
}

export default App;
