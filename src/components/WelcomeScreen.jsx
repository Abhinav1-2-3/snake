import React from 'react';
import { Stethoscope, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { IllustrationRenderer } from './IllustrationRenderer';
import { DisclaimerBanner } from './DisclaimerBanner';
import { soundManager } from '../utils/soundEffects';

export const WelcomeScreen = ({ onStart, isMuted, onToggleMute }) => {
  const handleStart = () => {
    soundManager.playPop();
    onStart();
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFBEB] text-slate-900 pb-8">
      {/* Disclaimer on EVERY screen */}
      <DisclaimerBanner />

      {/* Top bar with audio toggle and funny hospital tag */}
      <header className="px-4 py-3 flex items-center justify-between max-w-md mx-auto w-full">
        <div className="flex items-center gap-2 bg-white border-2 border-slate-900 px-4 py-1.5 rounded-full comic-shadow">
          <Stethoscope className="w-4 h-4 text-emerald-600 animate-pulse" />
          <span className="text-xs font-black tracking-wider uppercase">GENERAL COMEDY WARD</span>
        </div>
        <button
          onClick={onToggleMute}
          className="p-2 bg-white border-2 border-slate-900 rounded-full comic-shadow hover:scale-105 active:scale-95 transition-all text-slate-800 cursor-pointer"
          title={isMuted ? "Unmute Sound Effects" : "Mute Sound Effects"}
          aria-label={isMuted ? "Unmute Sound Effects" : "Mute Sound Effects"}
        >
          {isMuted ? <VolumeX className="w-5 h-5 text-slate-400" /> : <Volume2 className="w-5 h-5 text-emerald-600" />}
        </button>
      </header>

      {/* Main Content Card */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 max-w-md mx-auto w-full text-center">
        {/* Playful Tag */}
        <div className="inline-flex items-center gap-1.5 bg-[#FACC15] border-2 border-slate-900 px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3 comic-shadow animate-bounce">
          <Sparkles className="w-3.5 h-3.5 text-amber-950" />
          <span>KERALA'S MOST UNSCIENTIFIC CHECK-UP</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
          Useless Medical <span className="text-[#EF4444]">Check-Up</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg font-medium text-slate-700 mb-4 max-w-xs">
          “We may find your problem. Or create a new one.”
        </p>

        {/* Doctor Cartoon Illustration */}
        <div className="my-2 relative">
          <IllustrationRenderer name="upsideDownDoctor" className="w-52 h-52 sm:w-60 sm:h-60 mx-auto" />
          <div className="mt-2 bg-white border-2 border-slate-900 px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-800 comic-shadow inline-block">
            🩺 Dr. K. P. Confusion, M.B.B.S (Meme Branch)
          </div>
        </div>

        {/* Cultural reference chips */}
        <div className="flex flex-wrap justify-center gap-2 my-5 max-w-xs">
          {[
            { icon: "☕", label: "Strong Tea" },
            { icon: "🌧️", label: "Monsoon Rain" },
            { icon: "👵", label: "Auntie Inquiries" },
            { icon: "🚌", label: "Red Bus Sprints" },
            { icon: "📱", label: "11 PM Motivation" }
          ].map((item, idx) => (
            <span key={idx} className="bg-white border-2 border-slate-900 text-slate-800 text-xs font-bold px-3 py-1 rounded-full comic-shadow flex items-center gap-1">
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </span>
          ))}
        </div>

        {/* Main Action Button */}
        <button
          onClick={handleStart}
          id="btn-check-my-fate"
          className="w-full py-4 px-6 bg-[#EF4444] hover:bg-red-600 active:scale-95 text-white text-xl sm:text-2xl font-black rounded-2xl comic-border-thick comic-shadow-lg transition-all duration-150 flex items-center justify-center gap-3 cursor-pointer group"
        >
          <span>Check My Fate</span>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">➔</span>
        </button>

        {/* Small warning text */}
        <p className="text-xs font-bold text-slate-500 mt-3">
          Results may hurt your feelings, not your health.
        </p>
      </main>

      {/* Footer credits */}
      <footer className="text-center text-xs text-slate-400 mt-4">
        100% Harmless Malayali Comedy Quiz • No Real Medical Data Analyzed
      </footer>
    </div>
  );
};
