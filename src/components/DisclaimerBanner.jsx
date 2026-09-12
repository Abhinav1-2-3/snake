import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { QUIZ_DISCLAIMER } from '../data/quizData';

export const DisclaimerBanner = ({ isFloating = false }) => {
  return (
    <div 
      className={`w-full transition-all duration-300 ${
        isFloating 
          ? 'sticky top-2 z-40 px-3' 
          : 'px-4 py-2'
      }`}
    >
      <div className="max-w-md mx-auto bg-amber-100/95 backdrop-blur-sm border-2 border-amber-400/80 rounded-xl px-3 py-1.5 shadow-sm flex items-center justify-center gap-2 text-center text-xs sm:text-sm font-semibold text-amber-900">
        <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
        <span>{QUIZ_DISCLAIMER}</span>
      </div>
    </div>
  );
};
