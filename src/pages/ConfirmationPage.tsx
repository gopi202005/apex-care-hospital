import React from 'react';
import { CheckCircle2, Calendar, Clock, MapPin, Download, ArrowRight, ShieldCheck, Printer, Stethoscope } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ConfirmationPageProps {
  bookingData: any;
  setActiveTab: (tab: string) => void;
  onShowToast: (msg: string) => void;
}

export const ConfirmationPage: React.FC<ConfirmationPageProps> = ({
  bookingData,
  setActiveTab,
  onShowToast,
}) => {
  if (!bookingData) {
    return (
      <div className="max-w-xl mx-auto py-16 px-4 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800">No recent appointment found</h2>
        <button
          onClick={() => setActiveTab('find-doctor')}
          className="px-6 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs"
        >
          Book an Appointment
        </button>
      </div>
    );
  }

  const { bookingId, doctor, hospital, date, timeSlot, consultationType, patientDetails } = bookingData;

  const handlePrint = () => {
    window.print();
  };

  const handleAddToCalendar = () => {
    onShowToast('Calendar event created! (Simulated .ics download)');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 print:py-0">
      <div className="print:hidden">
        <Breadcrumbs items={[{ label: 'Appointment Confirmation' }]} setActiveTab={setActiveTab} />
      </div>

      {/* Success Badge Banner */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-6 sm:p-8 text-center space-y-3">
        <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md animate-bounce">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-emerald-950">Appointment Confirmed!</h1>
        <p className="text-xs sm:text-sm text-emerald-800 font-medium">
          Your request has been successfully registered. An SMS & email notification has been dispatched.
        </p>

        <div className="pt-2">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-mono font-bold tracking-wider shadow">
            Booking ID: {bookingId}
          </span>
        </div>
      </div>

      {/* Main Slip Box */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b pb-4">
          <div>
            <h3 className="font-extrabold text-slate-900 text-lg">Apex Care Hospital — Appointment Slip</h3>
            <p className="text-xs text-slate-500">Please present this slip or Booking ID at the OPD reception counter.</p>
          </div>
          <span className="px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold capitalize">
            {consultationType} Consultation
          </span>
        </div>

        {/* Doctor & Location Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
          <div className="flex items-center gap-3">
            <img src={doctor.image} alt={doctor.name} className="w-14 h-14 rounded-2xl object-cover border border-slate-200" />
            <div>
              <h4 className="font-bold text-sm text-slate-900">{doctor.name}</h4>
              <p className="text-xs text-brand-600 font-semibold">{doctor.specialtyName}</p>
              <p className="text-[11px] text-slate-500">{doctor.qualification}</p>
            </div>
          </div>

          <div className="space-y-1.5 text-xs text-slate-700">
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-600 flex-shrink-0" />
              <span className="font-semibold">{hospital.name}</span>
            </p>
            <p className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Date: <strong>{date}</strong></span>
            </p>
            <p className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>Time Slot: <strong>{timeSlot}</strong></span>
            </p>
          </div>
        </div>

        {/* Patient Details */}
        <div className="space-y-3 pt-2">
          <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400">Patient Details</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl border border-slate-100 text-xs">
            <div>
              <span className="text-slate-400 block text-[10px]">Patient Name</span>
              <span className="font-bold text-slate-900">{patientDetails.fullName}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">Mobile</span>
              <span className="font-bold text-slate-900">{patientDetails.mobile}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">Email</span>
              <span className="font-bold text-slate-900 truncate block">{patientDetails.email}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">Consultation Fee</span>
              <span className="font-bold text-slate-900">₹{doctor.consultationFee}</span>
            </div>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print Slip</span>
            </button>

            <button
              onClick={handleAddToCalendar}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Add to Calendar</span>
            </button>
          </div>

          <button
            onClick={() => setActiveTab('home')}
            className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md transition flex items-center gap-1.5 cursor-pointer"
          >
            <span>Return to Homepage</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
