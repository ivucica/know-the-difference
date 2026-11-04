import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CountryComparisonDataset } from '../types/comparison';
import { ComparisonTable } from './ComparisonTable';
import { FlagCard } from './FlagCard';
import { FlagId } from './FlagSvg';
import { Sparkles } from 'lucide-react';
import { soundtrack } from '../services/soundtrack';
import confetti from 'canvas-confetti';

interface MemePosterProps {
  dataset: CountryComparisonDataset;
  isFlagSwapped: boolean;
  onToggleFlagSwap: () => void;
}

export const MemePoster: React.FC<MemePosterProps> = ({
  dataset,
  isFlagSwapped,
  onToggleFlagSwap,
}) => {
  const { theme, flags } = dataset;

  // Determine which flags are shown based on swap state
  let leftFlagId: FlagId;
  let rightFlagId: FlagId;

  if (isFlagSwapped) {
    // When swapped, left gets right flag, right gets left flag
    leftFlagId = flags.rightFlagId;
    rightFlagId = flags.leftFlagId;
  } else {
    // Standard alignment
    leftFlagId = flags.leftFlagId;
    rightFlagId = flags.rightFlagId;
  }

  const handlePunchlineClick = () => {
    soundtrack.playSuccessFanfare();
    confetti({
      particleCount: 85,
      spread: 75,
      origin: { y: 0.75 },
      colors: [theme.primaryAccent, theme.secondaryAccent, '#ffffff', '#000000'],
    });
  };

  return (
    <article className="poster-sheet w-full max-w-4xl mx-auto rounded-2xl p-5 sm:p-9 md:p-12 relative overflow-hidden transition-all duration-300">
      {/* Country Titles matching original JPEG */}
      <header className="text-center relative pt-2 pb-6 select-none">
        <div className="grid grid-cols-2 gap-4 sm:gap-10 md:gap-14 items-center">
          <h1 className="font-serif-poster text-3xl sm:text-5xl md:text-6xl font-black text-stone-900 tracking-tight">
            {dataset.leftCountry}
          </h1>
          <h1 className="font-serif-poster text-3xl sm:text-5xl md:text-6xl font-black text-stone-900 tracking-tight">
            {dataset.rightCountry}
          </h1>
        </div>

        {/* Cursive Tagline */}
        <div className="mt-0 sm:-mt-2 relative inline-block">
          <h2
            style={{ color: theme.taglineColor }}
            className="font-script-meme text-3xl sm:text-5xl md:text-6xl font-bold rotate-[-2.5deg] tracking-wide drop-shadow-sm select-none"
          >
            {dataset.tagline}
          </h2>
          <div
            style={{ backgroundColor: theme.taglineColor }}
            className="w-full h-1 rounded-full -mt-1 opacity-80"
          />
        </div>
      </header>

      {/* Two Flags Display - Subtle click interaction directly on the flags */}
      <div className="grid grid-cols-2 gap-4 sm:gap-10 md:gap-14 mb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={`flag-left-${leftFlagId}`}
            initial={{ opacity: 0.8, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.8, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="flex justify-center"
          >
            <FlagCard flagId={leftFlagId} onClick={onToggleFlagSwap} />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`flag-right-${rightFlagId}`}
            initial={{ opacity: 0.8, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.8, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="flex justify-center"
          >
            <FlagCard flagId={rightFlagId} onClick={onToggleFlagSwap} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Structured 50/50 Comparison Sections */}
      <div className="space-y-4 sm:space-y-6">
        {dataset.sections.map((section) => (
          <ComparisonTable
            key={section.id}
            heading={section.heading}
            items={section.items}
            headingColor={theme.headingColor}
            bulletColor={theme.bulletColor}
          />
        ))}
      </div>

      {/* Punchline Footer */}
      <footer className="mt-10 sm:mt-14 text-center pt-6 border-t border-stone-200">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handlePunchlineClick}
          className="cursor-pointer inline-block group"
        >
          <h2
            style={{ color: theme.punchlineColor }}
            className="font-script-meme text-3xl sm:text-5xl md:text-6xl font-bold tracking-wide leading-tight select-none transition-transform"
          >
            {dataset.punchline}
          </h2>
        </motion.div>

        <div className="mt-5 flex items-center justify-center">
          <button
            onClick={handlePunchlineClick}
            style={{ backgroundColor: theme.primaryAccent }}
            className="text-white hover:opacity-90 px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 inline-flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>{dataset.btnCelebrate}</span>
          </button>
        </div>
      </footer>
    </article>
  );
};
