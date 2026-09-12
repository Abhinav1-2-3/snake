import React, { useState } from 'react';
import { STAGES, SILLY_RESULTS } from './data/quizData';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuestionScreen } from './components/QuestionScreen';
import { AnalysisScreen } from './components/AnalysisScreen';
import { ResultScreen } from './components/ResultScreen';
import { soundManager } from './utils/soundEffects';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome'); // 'welcome' | 'quiz' | 'analysis' | 'result'
  const [stageIndex, setStageIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finalResult, setFinalResult] = useState(null);
  const [isMuted, setIsMuted] = useState(false);

  // Total questions count across all 3 stages
  const totalQuestions = STAGES.reduce((acc, stage) => acc + stage.questions.length, 0);

  // Calculate current global question number
  const currentGlobalQuestionNum = STAGES.slice(0, stageIndex).reduce(
    (acc, stage) => acc + stage.questions.length,
    0
  ) + questionIndex + 1;

  const overallProgress = Math.round((currentGlobalQuestionNum / totalQuestions) * 100);

  const handleToggleMute = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  };

  const handleStartQuiz = () => {
    setStageIndex(0);
    setQuestionIndex(0);
    setAnswers([]);
    setCurrentScreen('quiz');
  };

  const handleAnswerSelected = (selectedAns) => {
    const currentStage = STAGES[stageIndex];
    const newAnswers = [...answers, { ...selectedAns, stageId: currentStage.id }];
    setAnswers(newAnswers);

    // If more questions exist in current stage
    if (questionIndex + 1 < currentStage.questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else if (stageIndex + 1 < STAGES.length) {
      // Advance to next stage
      setStageIndex(stageIndex + 1);
      setQuestionIndex(0);
    } else {
      // All questions completed! Move to dramatic analysis screen
      setCurrentScreen('analysis');
    }
  };

  const handleAnalysisComplete = () => {
    // Pick a funny result
    const randomIndex = Math.floor(Math.random() * SILLY_RESULTS.length);
    setFinalResult(SILLY_RESULTS[randomIndex]);
    setCurrentScreen('result');
  };

  const handleRestart = () => {
    setStageIndex(0);
    setQuestionIndex(0);
    setAnswers([]);
    setFinalResult(null);
    setCurrentScreen('welcome');
  };

  const currentStage = STAGES[stageIndex];
  const currentQuestion = currentStage ? currentStage.questions[questionIndex] : null;

  return (
    <div className="min-h-screen selection:bg-amber-300 font-sans">
      {currentScreen === 'welcome' && (
        <WelcomeScreen
          onStart={handleStartQuiz}
          isMuted={isMuted}
          onToggleMute={handleToggleMute}
        />
      )}

      {currentScreen === 'quiz' && currentQuestion && (
        <QuestionScreen
          stage={currentStage}
          stageIndex={stageIndex}
          totalStages={STAGES.length}
          question={currentQuestion}
          questionIndex={questionIndex}
          totalQuestionsInStage={currentStage.questions.length}
          overallProgress={overallProgress}
          onAnswerSelected={handleAnswerSelected}
          isMuted={isMuted}
          onToggleMute={handleToggleMute}
        />
      )}

      {currentScreen === 'analysis' && (
        <AnalysisScreen onComplete={handleAnalysisComplete} />
      )}

      {currentScreen === 'result' && finalResult && (
        <ResultScreen result={finalResult} onRestart={handleRestart} />
      )}
    </div>
  );
}
