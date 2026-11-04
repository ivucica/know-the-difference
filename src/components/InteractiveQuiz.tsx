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
  correctOptionIds: string[];
  fact: string;
  factsByOption?: Record<string, string>;
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

  const isOptionCorrect = (optionId: string): boolean => {
    if (currentQ.correctOptionIds && Array.isArray(currentQ.correctOptionIds)) {
      return currentQ.correctOptionIds.includes(optionId);
    }
    return (currentQ as unknown as { correctOptionId: string }).correctOptionId === optionId;
  };

  const handleSelect = (optionId: string) => {
    if (selectedOption !== null) return;
    setSelectedOption(optionId);

    const isCorrect = isOptionCorrect(optionId);
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
  const isSelectedCorrect = selectedOption ? isOptionCorrect(selectedOption) : false;

  // Resolve explanation text tailored to whichever country the player picked
  const getExplanationText = (): string => {
    if (!selectedOption) return currentQ.fact;

    // 1. If JSON provides an option-tailored explanation, use it directly
    if (currentQ.factsByOption && currentQ.factsByOption[selectedOption]) {
      return currentQ.factsByOption[selectedOption];
    }

    // 2. Otherwise replace "Both are correct" portion with the selected country name
    const pickedOptionObj = currentQ.options.find((o) => o.id === selectedOption);
    const countryName = pickedOptionObj ? pickedOptionObj.label : 'your selection';

    const localizedPrefixes: Record<string, string> = {
      en: `That's correct for ${countryName}!`,
      de: `Richtig für ${countryName}!`,
      hr: `Točno za ${countryName}!`,
      sk: `Správne pre ${countryName}!`,
      sl: `Pravilno za ${countryName}!`,
      cs: `Správně pro ${countryName}!`,
      'pt-BR': `Correto para ${countryName}!`,
      'pt-PT': `Correto para ${countryName}!`,
    };

    const prefix = localizedPrefixes[currentLang] || `That's correct for ${countryName}!`;

    return currentQ.fact
      .replace(/^Both are correct[!,.]?\s*/i, `${prefix} `)
      .replace(/^Beide Antworten sind richtig[!,.]?\s*/i, `${prefix} `)
      .replace(/^Obje su točne[!,.]?\s*/i, `${prefix} `)
      .replace(/^Obe odpovede sú správne[!,.]?\s*/i, `${prefix} `)
      .replace(/^Obe sta pravilni[!,.]?\s*/i, `${prefix} `)
      .replace(/^Obě odpovědi jsou správné[!,.]?\s*/i, `${prefix} `)
      .replace(/^Ambas as respostas estão corretas[!,.]?\s*/i, `${prefix} `);
  };

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

          {/* Options Grid (highlight ONLY on the entry the user picked) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
            {currentQ.options.map((option) => {
              const isPicked = selectedOption === option.id;
              const isCorrectTarget = isOptionCorrect(option.id);

              let btnStyle = "bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100 hover:border-stone-300";

              if (isAnswered) {
                if (isPicked) {
                  // Only highlight the entry the user picked
                  if (isCorrectTarget) {
                    btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold shadow-sm ring-1 ring-emerald-400/40";
                  } else {
                    btnStyle = "bg-red-50 border-red-500 text-red-950 shadow-sm ring-1 ring-red-400/40";
                  }
                } else {
                  // The other entry remains neutral/unhighlighted
                  btnStyle = "bg-stone-50 border-stone-200 text-stone-400 opacity-60";
                }
              }

              return (
                <button
                  key={option.id}
                  disabled={isAnswered}
                  onClick={() => handleSelect(option.id)}
                  className={`p-4 rounded-xl border text-left text-xs sm:text-sm transition-all duration-200 flex items-center justify-between gap-2 cursor-pointer disabled:cursor-default ${btnStyle}`}
                >
                  <span className="font-semibold text-sm">{option.label}</span>
                  {/* Icon only on the entry the user picked */}
                  {isAnswered && isPicked && (
                    <div className="shrink-0">
                      {isCorrectTarget ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Factual Feedback tailored specifically to the country picked */}
          <AnimatePresence>
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 p-4 rounded-xl bg-stone-50 border border-stone-200 text-stone-800"
              >
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <p className="font-bold text-stone-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{isSelectedCorrect ? 'Correct!' : 'Incorrect'}</span>
                  </p>
                  <p className="text-stone-700 leading-relaxed">
                    {getExplanationText()}
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
            You scored <strong className="text-stone-900 font-bold">{score} out of {questions.length}</strong>! Every single answer you selected was verified.
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
