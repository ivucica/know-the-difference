/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CountryComparisonDataset, SupportedLanguage } from './types/comparison';
import { slovakiaSloveniaDatasets } from './data/comparisons/slovakia-slovenia';
import { portugalBrazilDataset } from './data/comparisons/portugal-brazil';
import { Navbar } from './components/Navbar';
import { MemePoster } from './components/MemePoster';
import { InteractiveQuiz } from './components/InteractiveQuiz';
import { soundtrack } from './services/soundtrack';

export default function App() {
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>('en');
  
  // Resolve active dataset based on language mode
  const activeDataset: CountryComparisonDataset =
    currentLang === 'pt-PT'
      ? portugalBrazilDataset
      : slovakiaSloveniaDatasets[currentLang] || slovakiaSloveniaDatasets.en;

  const [isFlagSwapped, setIsFlagSwapped] = useState<boolean>(activeDataset.flags.defaultSwapped);
  const [isMusicPlaying, setIsMusicPlaying] = useState<boolean>(false);

  // Sync flag swap state and music mode when dataset changes
  useEffect(() => {
    setIsFlagSwapped(activeDataset.flags.defaultSwapped);
    if (isMusicPlaying) {
      soundtrack.setMode(activeDataset.musicMode);
    }
  }, [activeDataset.id, activeDataset.flags.defaultSwapped, activeDataset.musicMode, isMusicPlaying]);

  const handleLanguageChange = (newLang: SupportedLanguage) => {
    setCurrentLang(newLang);
    soundtrack.playClick();
  };

  const handleToggleMusic = () => {
    const playing = soundtrack.toggle(activeDataset.musicMode);
    setIsMusicPlaying(playing);
  };

  const handleToggleFlagSwap = () => {
    soundtrack.playClick();
    setIsFlagSwapped((prev) => !prev);
  };

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      soundtrack.stop();
    };
  }, []);

  return (
    <div className="min-h-screen text-stone-900 pb-16 flex flex-col justify-between selection:bg-stone-800 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        isMusicPlaying={isMusicPlaying}
        onToggleMusic={handleToggleMusic}
        musicTitle={activeDataset.musicTitle}
        accentColor={activeDataset.theme.primaryAccent}
      />

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-2 sm:px-4 mt-6 sm:mt-10 flex-1 w-full relative">
        {/* The Reusable Country Comparison Poster */}
        <MemePoster
          dataset={activeDataset}
          isFlagSwapped={isFlagSwapped}
          onToggleFlagSwap={handleToggleFlagSwap}
        />

        {/* Scalable Interactive Quiz Section */}
        <InteractiveQuiz
          currentLang={currentLang}
          title={activeDataset.quizTitle}
          subtitle={activeDataset.quizSub}
          accentColor={activeDataset.theme.primaryAccent}
        />
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-xs text-stone-500 px-4">
        <p className="max-w-xl mx-auto leading-relaxed">
          {activeDataset.disclaimer}
        </p>
      </footer>
    </div>
  );
}
