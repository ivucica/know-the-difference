import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { ComparisonItem } from '../types/comparison';
import { soundtrack } from '../services/soundtrack';

interface ComparisonTableProps {
  heading: string;
  items: ComparisonItem[];
  accentColor?: string;
  bulletColor?: string;
  headingColor?: string;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  heading,
  items,
  accentColor = '#c8102e',
  bulletColor = '#c8102e',
  headingColor = '#c8102e',
}) => {
  const [activeRowIdx, setActiveRowIdx] = useState<number | null>(null);
  const [speakingSide, setSpeakingSide] = useState<{ row: number; side: 'left' | 'right' } | null>(null);

  const handleSpeak = (rowIdx: number, side: 'left' | 'right', text: string, voiceLang?: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    if (voiceLang) {
      utterance.lang = voiceLang;
    }
    utterance.rate = 0.85;

    setSpeakingSide({ row: rowIdx, side });
    utterance.onend = () => setSpeakingSide(null);
    utterance.onerror = () => setSpeakingSide(null);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="w-full py-2 select-text">
      {/* Centered Heading with Hairline Dividers */}
      <div className="flex items-center justify-center gap-3 sm:gap-6 mb-2.5 select-none">
        <div className="h-px bg-stone-300 flex-1" />
        <h3
          style={{ color: headingColor }}
          className="font-serif-poster text-sm sm:text-base md:text-lg font-bold tracking-widest uppercase text-center px-2"
        >
          {heading}
        </h3>
        <div className="h-px bg-stone-300 flex-1" />
      </div>

      {/* 50/50 Column Table Layout */}
      <table className="w-full table-fixed border-collapse">
        <colgroup>
          <col className="w-1/2" />
          <col className="w-1/2" />
        </colgroup>
        <tbody>
          {items.map((item, idx) => {
            const isHovered = activeRowIdx === idx;
            return (
              <tr
                key={idx}
                onMouseEnter={() => setActiveRowIdx(idx)}
                onMouseLeave={() => setActiveRowIdx(null)}
                className={`transition-colors duration-150 ${
                  isHovered ? 'bg-stone-100/70' : 'bg-transparent'
                }`}
              >
                {/* Left Column (50% width) */}
                <td className="py-1.5 px-2 sm:px-4 align-top border-b border-transparent">
                  <div className="flex items-start justify-between gap-1.5">
                    <div className="flex items-start gap-2 text-stone-900 text-xs sm:text-sm md:text-base leading-relaxed">
                      <span
                        style={{ color: bulletColor }}
                        className="font-bold select-none text-base leading-none shrink-0"
                      >
                        •
                      </span>
                      <span className="font-medium text-stone-900 break-words">{item.left}</span>
                    </div>

                    {item.leftVoice && (
                      <button
                        type="button"
                        onClick={(e) => handleSpeak(idx, 'left', item.left, item.leftVoice, e)}
                        title="Pronounce"
                        className={`p-1 rounded text-stone-400 hover:text-stone-700 transition shrink-0 cursor-pointer ${
                          speakingSide?.row === idx && speakingSide?.side === 'left' ? 'text-stone-900 animate-pulse' : ''
                        }`}
                        aria-label="Listen to left pronunciation"
                      >
                        <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </button>
                    )}
                  </div>
                </td>

                {/* Right Column (50% width) */}
                <td className="py-1.5 px-2 sm:px-4 align-top border-b border-transparent">
                  <div className="flex items-start justify-between gap-1.5">
                    <div className="flex items-start gap-2 text-stone-900 text-xs sm:text-sm md:text-base leading-relaxed">
                      <span
                        style={{ color: bulletColor }}
                        className="font-bold select-none text-base leading-none shrink-0"
                      >
                        •
                      </span>
                      <span className="font-medium text-stone-900 break-words">{item.right}</span>
                    </div>

                    {item.rightVoice && (
                      <button
                        type="button"
                        onClick={(e) => handleSpeak(idx, 'right', item.right, item.rightVoice, e)}
                        title="Pronounce"
                        className={`p-1 rounded text-stone-400 hover:text-stone-700 transition shrink-0 cursor-pointer ${
                          speakingSide?.row === idx && speakingSide?.side === 'right' ? 'text-stone-900 animate-pulse' : ''
                        }`}
                        aria-label="Listen to right pronunciation"
                      >
                        <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
