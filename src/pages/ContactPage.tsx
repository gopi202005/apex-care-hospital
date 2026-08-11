import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldAlert, Clock } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ContactPageProps {
  setActiveTab: (tab: string) => void;
  onShowToast: (msg: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ setActiveTab, onShowToast }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dept, setDept] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      onShowToast('Thank you! Your enquiry has been received. Our team will contact you within 2 hours.');
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Contact Us' }]} setActiveTab={setActiveTab} />

      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900">Contact Apex Care Hospital</h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
          Get in touch with our patient helpline, emergency trauma desks, or submit a general enquiry.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <h3 className="text-lg font-bold text-slate-900">Send an Online Enquiry</h3>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Department / Subject</label>
                <select
                  value={dept}
                  onChange={(e) => setDept(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 bg-white"
                >
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Appointment Help">Appointment Help</option>
                  <option value="Insurance & Billing">Insurance & Billing</option>
                  <option value="Feedback">Feedback</option>
                </select>
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Message</label>
              <textarea
                rows={4}
                placeholder="How can we help you?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-lg shadow-brand-600/30 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Sending...' : 'Submit Message'}</span>
            </button>
          </form>
        </div>

        {/* Right Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-red-950 text-white rounded-3xl p-6 border border-red-800 space-y-3">
            <span className="px-2.5 py-1 rounded bg-red-600/40 text-red-300 text-xs font-bold flex items-center gap-1.5 w-fit">
              <ShieldAlert className="w-4 h-4 text-red-400" /> 24/7 Emergency Hotline
            </span>
            <h4 className="text-xl font-extrabold text-white">+91 44 2345 9999</h4>
            <p className="text-xs text-slate-300">Direct line to Central Trauma & Mobile ICU Ambulance dispatch.</p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-4 text-xs">
            <h4 className="font-bold text-slate-900 text-sm">Key Department Extensions</h4>
            <div className="space-y-2 text-slate-600">
              <p><strong>Appointment Desk:</strong> Ext. 101 / 102</p>
              <p><strong>Insurance & Cashless Desk:</strong> Ext. 204</p>
              <p><strong>Radiology & MRI Desk:</strong> Ext. 305</p>
              <p><strong>24/7 Pharmacy:</strong> Ext. 401</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
