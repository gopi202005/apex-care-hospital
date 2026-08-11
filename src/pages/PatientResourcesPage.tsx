import React, { useState } from 'react';
import { BookOpen, ShieldCheck, Download, Clock, ArrowRight, FileText, CheckCircle2, User } from 'lucide-react';
import { ARTICLES } from '../data/mockData';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface PatientResourcesPageProps {
  setActiveTab: (tab: string) => void;
}

export const PatientResourcesPage: React.FC<PatientResourcesPageProps> = ({ setActiveTab }) => {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const activeArticle = ARTICLES.find((a) => a.id === selectedArticleId);

  const insurancePartners = [
    'Star Health & Allied Insurance',
    'HDFC ERGO Health',
    'ICICI Lombard General Insurance',
    'Niva Bupa Health Insurance',
    'SBI General Insurance',
    'Bajaj Allianz General Insurance',
    'Care Health Insurance',
    'Aditya Birla Health Insurance'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Patient Resources & Health Library' }]} setActiveTab={setActiveTab} />

      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900">Patient Resources & Education Center</h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
          Access health guides, insurance cashless desk details, visitor rules, and downloadable preparation instructions.
        </p>
      </div>

      {/* 1. Health Articles Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-brand-600" /> Medical Articles & Health Guides
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticleId(art.id)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 text-white text-[10px] font-bold">
                    {art.category}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-[10px] text-slate-400 font-semibold">{art.date} • {art.readTime}</span>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-brand-600 transition leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">{art.excerpt}</p>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between text-xs font-bold text-brand-600">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Insurance Partners Desk */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-600" /> Cashless Insurance Facility
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Apex Care Hospital is empaneled with 45+ leading health insurance providers and TPAs for seamless cashless treatment.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {insurancePartners.map((partner, idx) => (
            <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>{partner}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Article Modal Reader */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-100 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <span className="px-2.5 py-1 rounded bg-brand-50 text-brand-700 text-xs font-bold">{activeArticle.category}</span>
                <h3 className="text-xl font-bold text-slate-900 mt-2">{activeArticle.title}</h3>
                <p className="text-xs text-slate-400 mt-1">By {activeArticle.author} ({activeArticle.authorRole}) • {activeArticle.date}</p>
              </div>
              <button onClick={() => setSelectedArticleId(null)} className="text-xs font-bold px-3 py-1.5 bg-slate-100 rounded-xl hover:bg-slate-200">
                Close
              </button>
            </div>

            <img src={activeArticle.image} alt={activeArticle.title} className="w-full h-64 rounded-2xl object-cover" />

            <div className="text-xs sm:text-sm text-slate-700 space-y-4 leading-relaxed whitespace-pre-line">
              {activeArticle.content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
