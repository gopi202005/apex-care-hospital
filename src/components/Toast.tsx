import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounceIn max-w-sm w-full bg-slate-900 text-white rounded-2xl p-4 shadow-2xl border border-slate-800 flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        {type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />}
        {type === 'error' && <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />}
        {type === 'info' && <Info className="w-5 h-5 text-brand-400 flex-shrink-0" />}
        <p className="text-xs font-semibold">{message}</p>
      </div>

      <button onClick={onClose} className="text-slate-400 hover:text-white p-1">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
