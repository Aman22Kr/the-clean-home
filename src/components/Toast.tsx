import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2 } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage } = useApp();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-subtle">
      <div className="bg-[#083838] text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-teal-700/50 text-xs sm:text-sm">
        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
        <span className="font-medium">{toastMessage}</span>
      </div>
    </div>
  );
};
