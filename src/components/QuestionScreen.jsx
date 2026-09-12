import React, { useState } from 'react';
import { Volume2, VolumeX, ArrowRight, AlertTriangle } from 'lucide-react';
import { IllustrationRenderer } from './IllustrationRenderer';
import { DisclaimerBanner } from './DisclaimerBanner';
import { soundManager } from '../utils/soundEffects';

export const QuestionScreen = ({
  stage,
  stageIndex,
  totalStages,
  question,
  questionIndex,
  totalQuestionsInStage,
  overallProgress,
  onAnswerSelected,
  isMuted,
  onToggleMute
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showReaction, setShowReaction] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  // Pick stage color schemes
  const getThemeStyles = () => {
    switch (stage.id) {
      case 1:
        return {
          bg: "bg-emerald-50",
          cardBg: "bg-white",
          stageBadge: "bg-emerald-100 text-emerald-900 border-emerald-400",
          barColor: "bg-emerald-500",
          accentColor: "text-emerald-700",
          buttonHover: "hover:bg-emerald-50 active:bg-emerald-100",
          comicText: "EXCELLENT!",
          sound: () => soundManager.playStagePositive()
        };
      case 2:
        return {
          bg: "bg-amber-50",
          cardBg: "bg-white",
          stageBadge: "bg-amber-100 text-amber-900 border-amber-400",
          barColor: "bg-amber-500",
          accentColor: "text-amber-700",
          buttonHover: "hover:bg-amber-50 active:bg-amber-100",
          comicText: "SUSPICIOUS!",
          sound: () => soundManager.playStageSuspicious()
        };
      case 3:
      default:
        return {
          bg: "bg-rose-50",
          cardBg: "bg-white",
          stageBadge: "bg-rose-100 text-rose-900 border-rose-400",
          barColor: "bg-rose-500",
          accentColor: "text-rose-700",
          buttonHover: "hover:bg-rose-50 active:bg-rose-100",
          comicText: "AAYYO SCENE!",
          sound: () => soundManager.playStageDramatic()
        };
    }
  };

  const theme = getThemeStyles();

  const handleSelect = (answer) => {
    if (showReaction) return;
    setSelectedAnswer(answer);
    setShowReaction(true);
    setIsShaking(true);
    theme.sound();

    setTimeout(() => {
      setIsShaking(false);
    }, 450);
  };

  const handleNext = () => {
    soundManager.playPop();
    const answer = selectedAnswer;
    setSelectedAnswer(null);
    setShowReaction(false);
    onAnswerSelected(answer);
  };

  return (
    <div className={`min-h-screen ${theme.bg} flex flex-col justify-between transition-colors duration-500 pb-6`}>
      {/* Disclaimer on EVERY screen */}
      <DisclaimerBanner isFloating={true} />

      {/* Header bar */}
      <header className="px-4 pt-2 max-w-md mx-auto w-full">
        <div className="flex items-center justify-between gap-2 mb-2">
          {/* Stage Badge */}
          <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border-2 ${theme.stageBadge}`}>
            {stage.badge}
          </span>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500">
              Q {questionIndex + 1}/{totalQuestionsInStage}
            </span>
            <button
              onClick={onToggleMute}
              className="p-1.5 bg-white border-2 border-slate-900 rounded-full comic-shadow active:scale-95 text-slate-700 cursor-pointer"
              title="Toggle Sound"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-slate-800" />}
            </button>
          </div>
        </div>

        {/* Animated Progress Bar */}
        <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden border-2 border-slate-900 comic-shadow">
          <div
            className={`h-full ${theme.barColor} transition-all duration-500 ease-out`}
            style={{ width: `${Math.max(5, overallProgress)}%` }}
          />
        </div>
      </header>

      {/* Main Question Card */}
      <main className="flex-1 flex flex-col justify-center px-4 py-3 max-w-md mx-auto w-full">
        <div className={`bg-white rounded-3xl p-5 comic-border-thick comic-shadow-lg transition-all ${isShaking ? 'animate-dramatic-shake' : ''}`}>
          
          {/* Stage 3 Warning Flash */}
          {stage.id === 3 && (
            <div className="bg-rose-500 text-white text-xs font-black text-center py-1 px-3 rounded-xl mb-3 flex items-center justify-center gap-1 animate-pulse">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>CODE RED: CASE IS BECOMING DANGEROUSLY SERIOUS</span>
            </div>
          )}

          {/* Original Cartoon Illustration */}
          <div className="mb-3 flex justify-center">
            <IllustrationRenderer name={question.illustration} className="w-44 h-44 sm:w-52 sm:h-52" />
          </div>

          {/* Question Text */}
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 text-center leading-snug mb-5">
            {question.text}
          </h2>

          {/* Answer Options */}
          {!showReaction ? (
            <div className="flex flex-col gap-3">
              {question.answers.map((ans, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(ans)}
                  className={`w-full text-left py-3.5 px-4 bg-slate-50 ${theme.buttonHover} border-2 border-slate-900 rounded-2xl font-bold text-sm sm:text-base text-slate-800 comic-shadow active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-between gap-2 cursor-pointer group`}
                >
                  <span>{ans.text}</span>
                  <span className="text-slate-400 group-hover:text-slate-900 group-hover:translate-x-1 transition-all">➔</span>
                </button>
              ))}
            </div>
          ) : (
            /* Dramatic Reaction Modal / Card */
            <div className="bg-slate-900 text-white rounded-2xl p-4 border-2 border-slate-900 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs uppercase font-black tracking-widest text-yellow-400">
                  {theme.comicText}
                </span>
                <span className="text-xs text-slate-400">• Doctor's Reaction</span>
              </div>

              <p className="text-base sm:text-lg font-bold text-slate-100 leading-snug mb-4">
                "{question.reaction}"
              </p>

              <button
                onClick={handleNext}
                className={`w-full py-3.5 px-4 ${stage.id === 3 ? 'bg-rose-500 hover:bg-rose-600' : 'bg-amber-400 hover:bg-amber-500 text-slate-950'} font-black text-base rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-lg`}
              >
                <span>Continue Investigation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Ambient footer indicator */}
      <footer className="px-4 text-center">
        <span className="text-xs font-medium text-slate-500">
          {stage.ambientNote}
        </span>
      </footer>
    </div>
  );
};
