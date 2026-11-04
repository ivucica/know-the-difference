import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, Award, RotateCcw, HelpCircle, ArrowRight } from 'lucide-react';
import quizDataRaw from '../data/quizQuestions.json';
import { soundtrack } from '../services/soundtrack';
import confetti from 'canvas-confetti';

interface QuizOption {
  id: string;
  label: string;
}

interface QuizItem {
  id: string;
  question: string;
  options: QuizOption[];
  correctOptionId: string;
  fact: string;
}

type QuizDatabase = Record<string, QuizItem[]>;

const quizDatabase = quizDataRaw as QuizDatabase;

interface InteractiveQuizProps {
  currentLang: string;
  title: string;
  subtitle: string;
  accentColor?: string;
}

export const InteractiveQuiz: React.FC<InteractiveQuizProps> = ({
  currentLang,
  title,
  subtitle,
  accentColor = '#c8102e',
}) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Fallback to English if language not found in JSON
  const questions: QuizItem[] = quizDatabase[currentLang] || quizDatabase['en'] || [];

  // Reset quiz state when language changes
  useEffect(() => {
    setQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
  }, [currentLang]);

  if (questions.length === 0) return null;

  const currentQ = questions[questionIndex % questions.length];

  const handleSelect = (optionId: string) => {
    if (selectedOption !== null) return;
    setSelectedOption(optionId);

    const isCorrect = optionId === currentQ.correctOptionId;
    if (isCorrect) {
      setScore((prev) => prev + 1);
      soundtrack.playSuccessFanfare();
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.8 },
      });
    } else {
      soundtrack.playClick();
    }
  };

  const handleNext = () => {
    soundtrack.playClick();
    if (questionIndex + 1 < questions.length) {
      setQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  };

  const handleRestart = () => {
    soundtrack.playClick();
    setQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
  };

  const isAnswered = selectedOption !== null;
  const isSelectedCorrect = selectedOption === currentQ.correctOptionId;

  return (
    <section id="interactive-quiz" className="w-full max-w-4xl mx-auto mt-10 p-5 sm:p-8 bg-white rounded-2xl shadow-sm border border-stone-200 transition-all">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200">
        <div className="flex items-center gap-3">
          <div
            style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          >
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-lg sm:text-xl text-stone-900 tracking-tight">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-500">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Score indicator */}
        {!isFinished && (
          <div className="flex items-center gap-2 self-start sm:self-auto bg-stone-100 px-3 py-1.5 rounded-full text-xs font-semibold text-stone-700">
            <Award className="w-4 h-4 text-amber-500" />
            <span>Score: {score} / {questions.length}</span>
            <span className="text-stone-400">·</span>
            <span>Q{questionIndex + 1} of {questions.length}</span>
          </div>
        )}
      </div>

      {!isFinished ? (
        <div className="mt-6">
          {/* Question Text */}
          <div className="min-h-[2.5rem] flex items-center">
            <h4 className="text-base sm:text-lg font-semibold text-stone-900 leading-snug">
              {currentQ.question}
            </h4>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
            {currentQ.options.map((option) => {
              const isPicked = selectedOption === option.id;
              const isCorrectTarget = option.id === currentQ.correctOptionId;

              let btnStyle = "bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100 hover:border-stone-300";

              if (isAnswered) {
                if (isCorrectTarget) {
                  btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold shadow-sm";
                } else if (isPicked) {
                  btnStyle = "bg-red-50 border-red-500 text-red-950 shadow-sm";
                } else {
                  btnStyle = "bg-stone-50 border-stone-200 text-stone-400 opacity-60";
                }
              }

              return (
                <button
                  key={option.id}
                  disabled={isAnswered}
                  onClick={() => handleSelect(option.id)}
                  className={`p-3.5 sm:p-4 rounded-xl border text-left text-xs sm:text-sm transition-all duration-200 flex flex-col justify-between gap-2 cursor-pointer disabled:cursor-default ${btnStyle}`}
                >
                  <span className="font-medium">{option.label}</span>
                  {isAnswered && (
                    <div className="self-end mt-1">
                      {isCorrectTarget ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      ) : isPicked ? (
                        <XCircle className="w-4 h-4 text-red-500" />
                      ) : null}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Factual Feedback */}
          <AnimatePresence>
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 p-4 rounded-xl bg-stone-50 border border-stone-200 text-stone-800"
              >
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <p className="font-bold text-stone-900">
                    {isSelectedCorrect ? '✓ Correct!' : '✗ Not quite!'}
                  </p>
                  <p className="text-stone-700 leading-relaxed">
                    {currentQ.fact}
                  </p>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleNext}
                    style={{ backgroundColor: accentColor }}
                    className="flex items-center gap-2 text-white hover:opacity-90 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold shadow-sm transition active:scale-95 cursor-pointer"
                  >
                    <span>{questionIndex + 1 < questions.length ? 'Next Question' : 'View Results'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        /* Completed State */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-8 text-center space-y-4"
        >
          <div className="inline-flex p-4 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 shadow-sm">
            <Award className="w-10 h-10" />
          </div>

          <h4 className="text-xl sm:text-2xl font-bold text-stone-900">
            Quiz Completed!
          </h4>

          <p className="text-stone-600 text-sm max-w-md mx-auto">
            You scored <strong className="text-stone-900 font-bold">{score} out of {questions.length}</strong>!
          </p>

          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 bg-stone-900 hover:bg-black text-white px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow transition active:scale-95 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake Quiz</span>
          </button>
        </motion.div>
      )}
    </section>
  );
};
