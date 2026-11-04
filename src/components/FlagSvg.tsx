import React from 'react';

export type FlagId = 'slovakia' | 'slovenia' | 'portugal' | 'brazil';

interface FlagSvgProps {
  flag: FlagId;
  className?: string;
  isWaving?: boolean;
}

export const FlagSvg: React.FC<FlagSvgProps> = ({ flag, className = '', isWaving = true }) => {
  return (
    <div className={`relative w-full aspect-[3/2] overflow-hidden rounded-md shadow-md border border-stone-300/80 bg-white select-none ${className}`}>
      {/* SVG Flag Rendering */}
      <svg
        viewBox="0 0 600 400"
        className="w-full h-full object-cover block"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={`Flag of ${flag}`}
      >
        <defs>
          <filter id={`fabric-shadow-${flag}`} x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3" />
          </filter>
        </defs>

        {flag === 'slovakia' && (
          <g>
            {/* White stripe */}
            <rect width="600" height="133.33" fill="#FFFFFF" />
            {/* Blue stripe */}
            <rect y="133.33" width="600" height="133.33" fill="#0B4EA2" />
            {/* Red stripe */}
            <rect y="266.66" width="600" height="133.34" fill="#EE1C25" />

            {/* Slovak Coat of Arms (shifted hoist-side, x=135) */}
            <g transform="translate(130, 60) scale(1.18)" filter={`url(#fabric-shadow-${flag})`}>
              {/* Outer white outline */}
              <path
                d="M 10 10 L 80 10 C 80 75 68 115 45 136 C 22 115 10 75 10 10 Z"
                fill="#EE1C25"
                stroke="#FFFFFF"
                strokeWidth="5"
                strokeLinejoin="round"
              />
              {/* Blue three peaks (Tatra, Matra, Fatra) */}
              <path
                d="M 14 112 C 22 84 32 84 45 98 C 58 84 68 84 76 112 C 60 128 45 132 45 132 C 45 132 30 128 14 112 Z"
                fill="#0B4EA2"
              />
              {/* White Patriarchal double cross */}
              <rect x="41.5" y="26" width="7" height="74" fill="#FFFFFF" rx="1.5" />
              {/* Upper shorter bar */}
              <rect x="29" y="42" width="32" height="6.5" fill="#FFFFFF" rx="1.5" />
              {/* Lower longer bar */}
              <rect x="23" y="60" width="44" height="6.5" fill="#FFFFFF" rx="1.5" />
            </g>
          </g>
        )}

        {flag === 'slovenia' && (
          <g>
            {/* White stripe */}
            <rect width="600" height="133.33" fill="#FFFFFF" />
            {/* Blue stripe */}
            <rect y="133.33" width="600" height="133.33" fill="#005DA4" />
            {/* Red stripe */}
            <rect y="266.66" width="600" height="133.34" fill="#ED1C24" />

            {/* Slovenian Coat of Arms (top-left, spanning white and blue stripes) */}
            <g transform="translate(115, 70) scale(0.95)" filter={`url(#fabric-shadow-${flag})`}>
              {/* Shield container with red edge */}
              <path
                d="M 0 0 L 80 0 C 80 60 68 105 40 125 C 12 105 0 60 0 0 Z"
                fill="#005DA4"
                stroke="#ED1C24"
                strokeWidth="6"
                strokeLinejoin="round"
              />
              {/* White Mount Triglav silhouette */}
              <path
                d="M 12 85 L 26 50 L 40 66 L 54 50 L 68 85 Z"
                fill="#FFFFFF"
              />
              {/* Two wavy blue lines (Adriatic & rivers) */}
              <path
                d="M 16 94 Q 28 88 40 94 T 64 94"
                fill="none"
                stroke="#005DA4"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              <path
                d="M 16 104 Q 28 98 40 104 T 64 104"
                fill="none"
                stroke="#005DA4"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              {/* Three golden six-pointed stars of Celje */}
              {/* Top Star */}
              <polygon
                points="40,10 42,18 50,18 43,23 46,31 40,26 34,31 37,23 30,18 38,18"
                fill="#FFCC00"
              />
              {/* Bottom Left Star */}
              <polygon
                points="24,28 26,34 33,34 27,38 29,45 24,41 19,45 21,38 15,34 22,34"
                fill="#FFCC00"
              />
              {/* Bottom Right Star */}
              <polygon
                points="56,28 58,34 65,34 59,38 61,45 56,41 51,45 53,38 47,34 54,34"
                fill="#FFCC00"
              />
            </g>
          </g>
        )}

        {flag === 'portugal' && (
          <g>
            {/* Green 2/5 */}
            <rect width="240" height="400" fill="#006600" />
            {/* Red 3/5 */}
            <rect x="240" width="360" height="400" fill="#FF0000" />

            {/* Armillary Sphere & Shield centered on the partition line */}
            <g transform="translate(240, 200) scale(1.15)" filter={`url(#fabric-shadow-${flag})`}>
              {/* Golden Armillary Sphere rings */}
              <circle r="72" fill="none" stroke="#FFCC00" strokeWidth="8" />
              <circle r="48" fill="none" stroke="#FFCC00" strokeWidth="4" />
              <path d="M -72 0 L 72 0 M 0 -72 L 0 72" stroke="#FFCC00" strokeWidth="4" />
              <ellipse rx="70" ry="24" fill="none" stroke="#FFCC00" strokeWidth="3" transform="rotate(-30)" />

              {/* Red Shield with Yellow Castles */}
              <path
                d="M -32 -42 L 32 -42 L 32 20 C 32 46 0 58 0 58 C 0 58 -32 46 -32 20 Z"
                fill="#FFFFFF"
                stroke="#000000"
                strokeWidth="2"
              />
              <path
                d="M -32 -42 L 32 -42 L 32 -14 L -32 -14 Z"
                fill="#FF0000"
              />
              {/* Yellow Castles */}
              <rect x="-20" y="-34" width="8" height="9" fill="#FFCC00" />
              <rect x="12" y="-34" width="8" height="9" fill="#FFCC00" />
              <rect x="-4" y="-36" width="8" height="9" fill="#FFCC00" />

              {/* Inner White Shield with Five Blue Quinas */}
              <path
                d="M -22 -6 L 22 -6 L 22 18 C 22 36 0 46 0 46 C 0 46 -22 36 -22 18 Z"
                fill="#FFFFFF"
                stroke="#005DA4"
                strokeWidth="2"
              />
              {/* Quinas dots */}
              <circle cx="0" cy="8" r="4" fill="#005DA4" />
              <circle cx="-10" cy="8" r="4" fill="#005DA4" />
              <circle cx="10" cy="8" r="4" fill="#005DA4" />
              <circle cx="0" cy="20" r="4" fill="#005DA4" />
              <circle cx="0" cy="-2" r="4" fill="#005DA4" />
            </g>
          </g>
        )}

        {flag === 'brazil' && (
          <g>
            {/* Green field */}
            <rect width="600" height="400" fill="#009B3A" />
            {/* Yellow rhombus */}
            <polygon points="300,35 565,200 300,365 35,200" fill="#FEDF00" />
            {/* Blue celestial globe */}
            <circle cx="300" cy="200" r="96" fill="#002776" filter={`url(#fabric-shadow-${flag})`} />
            {/* White curved band for Ordem e Progresso */}
            <path
              d="M 208 222 C 265 170 335 170 392 214 C 335 186 265 186 208 222 Z"
              fill="#FFFFFF"
            />
            {/* Southern Cross and southern hemisphere stars */}
            <circle cx="270" cy="245" r="3" fill="#FFFFFF" />
            <circle cx="318" cy="235" r="3" fill="#FFFFFF" />
            <circle cx="335" cy="255" r="2.5" fill="#FFFFFF" />
            <circle cx="295" cy="265" r="3.2" fill="#FFFFFF" />
            <circle cx="280" cy="225" r="2" fill="#FFFFFF" />
            <circle cx="345" cy="225" r="2" fill="#FFFFFF" />
            <circle cx="300" cy="245" r="2" fill="#FFFFFF" />
          </g>
        )}
      </svg>

      {/* Ripple fabric wave & highlights for realistic cloth effect */}
      {isWaving && (
        <div className="absolute inset-0 flag-wave-overlay pointer-events-none" />
      )}
    </div>
  );
};
