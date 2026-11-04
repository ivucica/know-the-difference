import React from 'react';
import { Volume2, Music, Globe, HelpCircle } from 'lucide-react';
import { SupportedLanguage } from '../types/comparison';

interface NavbarProps {
  currentLang: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
  musicTitle: string;
  accentColor?: string;
}

export const LANGUAGES: { code: SupportedLanguage; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'hr', label: 'Hrvatski', flag: '🇭🇷' },
  { code: 'sk', label: 'Slovenčina', flag: '🇸🇰' },
  { code: 'sl', label: 'Slovenščina', flag: '🇸🇮' },
  { code: 'cs', label: 'Čeština', flag: '🇨🇿' },
  { code: 'pt-BR', label: 'Português (Brasil)', flag: '🇧🇷' },
  { code: 'pt-PT', label: 'Português (Portugal)', flag: '🇵🇹' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  isMusicPlaying,
  onToggleMusic,
  musicTitle,
  accentColor = '#c8102e',
}) => {
  const scrollToQuiz = () => {
    const el = document.getElementById('interactive-quiz');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-2 z-50 w-full max-w-4xl mx-auto px-2 sm:px-4">
      <div className="bg-white/95 backdrop-blur-md border border-stone-200/90 rounded-2xl shadow-sm px-3 py-2 sm:px-4 sm:py-2.5 flex items-center justify-between gap-2.5">
        
        {/* Audio Control */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleMusic}
            style={{ backgroundColor: isMusicPlaying ? '#059669' : accentColor }}
            className="flex items-center gap-2 text-white px-3 py-1.5 rounded-full font-semibold text-xs sm:text-sm transition shadow-sm active:scale-95 cursor-pointer"
          >
            {isMusicPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                <span className="whitespace-nowrap">Pause Music</span>
              </>
            ) : (
              <>
                <Music className="w-3.5 h-3.5" />
                <span className="whitespace-nowrap">Play Music</span>
              </>
            )}
          </button>

          <span className="hidden sm:inline-flex items-center text-stone-500 font-medium text-xs truncate max-w-[200px]">
            🎵 {musicTitle}
          </span>
        </div>

        {/* Right Group: Language Selector & Quiz */}
        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <div className="flex items-center gap-1.5 bg-stone-100 hover:bg-stone-200/70 border border-stone-200 rounded-xl px-2.5 py-1 transition">
            <Globe className="w-3.5 h-3.5 text-stone-500 shrink-0" />
            <select
              value={currentLang}
              onChange={(e) => onLanguageChange(e.target.value as SupportedLanguage)}
              className="bg-transparent text-stone-800 text-xs sm:text-sm font-semibold outline-none cursor-pointer pr-1"
              aria-label="Select website language"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.label}
                </option>
              ))}
            </select>
          </div>

          {/* Jump to Quiz */}
          <button
            onClick={scrollToQuiz}
            className="flex items-center gap-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 px-3 py-1.5 rounded-xl font-semibold text-xs transition active:scale-95 cursor-pointer border border-stone-200"
          >
            <HelpCircle className="w-3.5 h-3.5 text-stone-500" />
            <span className="hidden xs:inline">Quiz</span>
          </button>
        </div>

      </div>
    </header>
  );
};
