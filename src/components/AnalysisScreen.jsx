import React, { useState, useEffect } from 'react';
import { Activity, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';
import { ANALYSIS_STEPS } from '../data/quizData';
import { IllustrationRenderer } from './IllustrationRenderer';
import { DisclaimerBanner } from './DisclaimerBanner';
import { soundManager } from '../utils/soundEffects';

export const AnalysisScreen = ({ onComplete }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    // Play heartbeat sounds
    soundManager.playHeartbeat();
    const soundInterval = setInterval(() => {
      soundManager.playHeartbeat();
    }, 1100);

    const stepInterval = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < ANALYSIS_STEPS.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1100);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(stepInterval);
          clearInterval(soundInterval);
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        return prev + 2;
      });
    }, 120);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
      clearInterval(soundInterval);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between pb-6 animate-siren">
      {/* Disclaimer on EVERY screen */}
      <DisclaimerBanner isFloating={true} />

      <main className="flex-1 flex flex-col items-center justify-center px-4 max-w-md mx-auto w-full text-center">
        {/* Top Emergency Beacon */}
        <div className="inline-flex items-center gap-2 bg-red-600/30 border border-red-500 text-red-400 text-xs font-black uppercase px-4 py-1.5 rounded-full mb-4 animate-pulse">
          <Activity className="w-4 h-4" />
          <span>Unnecessary Supercomputer Calculation In Progress</span>
        </div>

        {/* EKG Radar Animation Illustration */}
        <IllustrationRenderer name="analyzingLoading" className="w-52 h-52 sm:w-60 sm:h-60 mx-auto mb-4" />

        <h2 className="text-2xl sm:text-3xl font-black text-amber-400 mb-2">
          Hold Your Tea! ☕
        </h2>

        {/* Current Active Step */}
        <div className="bg-slate-900 border-2 border-slate-700 rounded-2xl p-4 w-full mb-5 shadow-2xl">
          <p className="text-lg font-extrabold text-white flex items-center justify-center gap-2 mb-3">
            <span className="text-2xl">{ANALYSIS_STEPS[currentStepIndex].icon}</span>
            <span>{ANALYSIS_STEPS[currentStepIndex].text}</span>
          </p>

          {/* Progress Bar */}
          <div className="w-full bg-slate-800 h-4 rounded-full overflow-hidden border border-slate-600 p-0.5 mb-2">
            <div
              className="h-full bg-gradient-to-r from-yellow-500 via-amber-400 to-red-500 rounded-full transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-xs font-bold text-slate-400">
            <span>Diagnosing Kerala Meme Energy</span>
            <span className="text-amber-400 font-mono font-black">{progress}%</span>
          </div>
        </div>

        {/* Mini Checklist of completed calculations */}
        <div className="w-full space-y-1.5 text-left text-xs font-medium text-slate-400 max-w-xs">
          {ANALYSIS_STEPS.map((step, idx) => {
            const isDone = idx < currentStepIndex;
            const isCurrent = idx === currentStepIndex;
            return (
              <div
                key={idx}
                className={`flex items-center gap-2 px-2.5 py-1 rounded-lg transition-colors ${
                  isCurrent ? 'bg-amber-400/20 text-amber-300 font-bold' : isDone ? 'text-emerald-400' : 'opacity-40'
                }`}
              >
                {isDone ? (
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                ) : (
                  <span className="w-3.5 h-3.5 rounded-full border border-current shrink-0 inline-block" />
                )}
                <span>{step.text}</span>
              </div>
            );
          })}
        </div>
      </main>

      <footer className="text-center text-xs text-slate-500 px-4">
        Our medical tea algorithm is computing your final fate...
      </footer>
    </div>
  );
};
