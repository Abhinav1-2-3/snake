import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { RotateCcw, Share2, LogOut } from 'lucide-react';
import { IllustrationRenderer } from './IllustrationRenderer';
import { DisclaimerBanner } from './DisclaimerBanner';
import { ChathAudioPlayer } from './ChathAudioPlayer';
import { soundManager } from '../utils/soundEffects';

export const ResultScreen = ({ result, onRestart }) => {
  const [toastMessage, setToastMessage] = useState(null);
  const [showEscapeModal, setShowEscapeModal] = useState(false);

  useEffect(() => {
    // Fanfare and confetti fireworks
    soundManager.playClimaxFanfare();

    // Trigger explosive celebratory confetti
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#EC4899']
      });

      const timeout = setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });
      }, 500);

      return () => clearTimeout(timeout);
    } catch (e) {
      console.log('Confetti failed gracefully', e);
    }
  }, []);

  const handleShare = async () => {
    soundManager.playPop();
    const shareData = {
      title: 'Useless Medical Check-Up',
      text: `I took the Useless Medical Check-Up! My diagnosis: "${result.title}". Final Report: CHATH... CHATH... CHATH... 😂 Take it yourself!`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or share dismissed
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
        showToast('Link copied to clipboard! Send to your WhatsApp group! 📋');
      } catch (e) {
        showToast('Share this app with your friends! 💬');
      }
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-red-50 to-orange-100 text-slate-900 pb-12 overflow-x-hidden">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white font-bold text-sm px-4 py-2 rounded-xl shadow-2xl border-2 border-amber-400 animate-in fade-in slide-in-from-top-4">
          {toastMessage}
        </div>
      )}

      {/* Disclaimer on EVERY screen */}
      <DisclaimerBanner />

      <main className="max-w-md mx-auto px-4 pt-2">
        {/* Top Emergency Flasher */}
        <div className="text-center mb-3">
          <span className="inline-block bg-red-600 text-white font-black text-xs px-3.5 py-1 rounded-full uppercase tracking-wider animate-bounce comic-shadow">
            🚨 FINAL DIAGNOSTIC REPORT ISSUED 🚨
          </span>
        </div>

        {/* CLIMAX HEADLINE: CHATH... CHATH... CHATH... 😂 */}
        <div className="bg-white rounded-3xl p-5 comic-border-thick comic-shadow-xl text-center mb-6 relative overflow-hidden">
          <div className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">
            OFFICIAL COMEDY VERDICT
          </div>

          <div className="text-2xl sm:text-3xl font-black text-red-600 font-comic tracking-wider leading-none mb-1">
            FINAL REPORT:
          </div>

          <div className="text-4xl sm:text-5xl font-black text-slate-950 font-fun tracking-tight my-2 leading-tight drop-shadow-sm">
            CHATH...<br />
            CHATH...<br />
            <span className="text-red-600">CHATH... 😂</span>
          </div>

          {/* Supporting Text */}
          <div className="bg-amber-100 border-2 border-amber-300 rounded-xl p-2.5 my-3">
            <p className="text-sm font-black text-amber-900">
              Relax. This is only a comedy report.
            </p>
            <p className="text-xs font-bold text-amber-800">
              You survived the useless check-up. Barely.
            </p>
          </div>

          {/* Dual Cartoon Illustrations: Doctor Fainting + Dancing Skeleton */}
          <div className="grid grid-cols-2 gap-2 my-4 items-center">
            <div className="flex flex-col items-center">
              <IllustrationRenderer name="doctorFainting" className="w-36 h-36 sm:w-44 sm:h-44" />
              <span className="text-[11px] font-black text-slate-600 mt-1">Doctor Fainted 😵</span>
            </div>
            <div className="flex flex-col items-center">
              <IllustrationRenderer name="dancingSkeleton" className="w-36 h-36 sm:w-44 sm:h-44" />
              <span className="text-[11px] font-black text-purple-700 mt-1">Dancing Skeleton 🕺</span>
            </div>
          </div>

          {/* YouTube Audio Player Component (Plays Lalettan & Mukesh audio) */}
          <ChathAudioPlayer autoPlay={true} />
        </div>

        {/* Fictional Diagnosis Details Card */}
        <div className="bg-white rounded-3xl p-5 comic-border-thick comic-shadow-lg mb-6 text-left">
          <div className="inline-block bg-amber-400 text-slate-950 text-xs font-black uppercase px-2.5 py-0.5 rounded-md border border-slate-900 mb-2">
            {result.badge}
          </div>

          <h3 className="text-2xl font-black text-slate-900 mb-1">
            {result.title}
          </h3>
          <p className="text-sm font-semibold text-slate-600 italic mb-4">
            "{result.tagline}"
          </p>

          <hr className="border-dashed border-slate-300 my-3" />

          {/* Funny Non-Medical Causes */}
          <div className="mb-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-red-600 mb-2 flex items-center gap-1.5">
              <span>⚠️ Funny Non-Medical Causes:</span>
            </h4>
            <ul className="space-y-1.5 text-sm font-bold text-slate-800">
              {result.causesList.map((cause, idx) => (
                <li key={idx} className="flex items-center gap-2 bg-red-50 p-2 rounded-xl border border-red-200">
                  <span className="text-red-500 font-bold">•</span>
                  <span>{cause}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Comedy-Only Suggestions */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-emerald-700 mb-2 flex items-center gap-1.5">
              <span>💡 Comedy-Only Suggestions:</span>
            </h4>
            <ul className="space-y-1.5 text-sm font-bold text-slate-800">
              {result.suggestions.map((sug, idx) => (
                <li key={idx} className="flex items-center gap-2 bg-emerald-50 p-2 rounded-xl border border-emerald-200">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{sug}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => {
              soundManager.playPop();
              onRestart();
            }}
            className="w-full py-4 px-6 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-black text-lg rounded-2xl comic-border-thick comic-shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Take the Test Again</span>
          </button>

          <button
            onClick={handleShare}
            className="w-full py-3.5 px-6 bg-amber-400 hover:bg-amber-500 active:scale-95 text-slate-900 font-black text-base rounded-2xl comic-border-thick comic-shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            <Share2 className="w-5 h-5" />
            <span>Send This to a Friend</span>
          </button>

          <button
            onClick={() => {
              soundManager.playPop();
              setShowEscapeModal(true);
            }}
            className="w-full py-3 px-6 bg-slate-200 hover:bg-slate-300 active:scale-95 text-slate-700 font-bold text-sm rounded-2xl border-2 border-slate-900 comic-shadow flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            <LogOut className="w-4 h-4" />
            <span>Escape This Hospital</span>
          </button>
        </div>
      </main>

      {/* Escape Hospital Modal */}
      {showEscapeModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full text-center comic-border-thick comic-shadow-xl animate-in zoom-in-95">
            <div className="text-4xl mb-2">🏃‍♂️💨</div>
            <h4 className="text-2xl font-black text-slate-900 mb-2">
              Hospital Escaped!
            </h4>
            <p className="text-sm font-bold text-slate-600 mb-4">
              You jumped over the tea-stall fence and caught the moving red bus. You are now safely back in your blanket with hot tea.
            </p>
            <button
              onClick={() => setShowEscapeModal(false)}
              className="w-full py-3 bg-red-500 text-white font-black rounded-xl border-2 border-slate-900 comic-shadow cursor-pointer"
            >
              Phew, That Was Close!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
