import React from 'react';

export type FlagId = 'slovakia' | 'slovenia' | 'portugal' | 'brazil' | 'usa' | 'canada';

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
            <rect width="600" height="133.33" fill="#FFFFFF" />
            <rect y="133.33" width="600" height="133.33" fill="#0B4EA2" />
            <rect y="266.66" width="600" height="133.34" fill="#EE1C25" />

            <g transform="translate(130, 60) scale(1.18)" filter={`url(#fabric-shadow-${flag})`}>
              <path
                d="M 10 10 L 80 10 C 80 75 68 115 45 136 C 22 115 10 75 10 10 Z"
                fill="#EE1C25"
                stroke="#FFFFFF"
                strokeWidth="5"
                strokeLinejoin="round"
              />
              <path
                d="M 14 112 C 22 84 32 84 45 98 C 58 84 68 84 76 112 C 60 128 45 132 45 132 C 45 132 30 128 14 112 Z"
                fill="#0B4EA2"
              />
              <rect x="41.5" y="26" width="7" height="74" fill="#FFFFFF" rx="1.5" />
              <rect x="29" y="42" width="32" height="6.5" fill="#FFFFFF" rx="1.5" />
              <rect x="23" y="60" width="44" height="6.5" fill="#FFFFFF" rx="1.5" />
            </g>
          </g>
        )}

        {flag === 'slovenia' && (
          <g>
            <rect width="600" height="133.33" fill="#FFFFFF" />
            <rect y="133.33" width="600" height="133.33" fill="#005DA4" />
            <rect y="266.66" width="600" height="133.34" fill="#ED1C24" />

            <g transform="translate(115, 70) scale(0.95)" filter={`url(#fabric-shadow-${flag})`}>
              <path
                d="M 0 0 L 80 0 C 80 60 68 105 40 125 C 12 105 0 60 0 0 Z"
                fill="#005DA4"
                stroke="#ED1C24"
                strokeWidth="6"
                strokeLinejoin="round"
              />
              <path
                d="M 12 85 L 26 50 L 40 66 L 54 50 L 68 85 Z"
                fill="#FFFFFF"
              />
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
              <polygon
                points="40,10 42,18 50,18 43,23 46,31 40,26 34,31 37,23 30,18 38,18"
                fill="#FFCC00"
              />
              <polygon
                points="24,28 26,34 33,34 27,38 29,45 24,41 19,45 21,38 15,34 22,34"
                fill="#FFCC00"
              />
              <polygon
                points="56,28 58,34 65,34 59,38 61,45 56,41 51,45 53,38 47,34 54,34"
                fill="#FFCC00"
              />
            </g>
          </g>
        )}

        {flag === 'portugal' && (
          <g>
            <rect width="240" height="400" fill="#006600" />
            <rect x="240" width="360" height="400" fill="#FF0000" />

            <g transform="translate(240, 200) scale(1.15)" filter={`url(#fabric-shadow-${flag})`}>
              <circle r="72" fill="none" stroke="#FFCC00" strokeWidth="8" />
              <circle r="48" fill="none" stroke="#FFCC00" strokeWidth="4" />
              <path d="M -72 0 L 72 0 M 0 -72 L 0 72" stroke="#FFCC00" strokeWidth="4" />
              <ellipse rx="70" ry="24" fill="none" stroke="#FFCC00" strokeWidth="3" transform="rotate(-30)" />

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
              <rect x="-20" y="-34" width="8" height="9" fill="#FFCC00" />
              <rect x="12" y="-34" width="8" height="9" fill="#FFCC00" />
              <rect x="-4" y="-36" width="8" height="9" fill="#FFCC00" />

              <path
                d="M -22 -6 L 22 -6 L 22 18 C 22 36 0 46 0 46 C 0 46 -22 36 -22 18 Z"
                fill="#FFFFFF"
                stroke="#005DA4"
                strokeWidth="2"
              />
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
            <rect width="600" height="400" fill="#009B3A" />
            <polygon points="300,35 565,200 300,365 35,200" fill="#FEDF00" />
            <circle cx="300" cy="200" r="96" fill="#002776" filter={`url(#fabric-shadow-${flag})`} />
            <path
              d="M 208 222 C 265 170 335 170 392 214 C 335 186 265 186 208 222 Z"
              fill="#FFFFFF"
            />
            <circle cx="270" cy="245" r="3" fill="#FFFFFF" />
            <circle cx="318" cy="235" r="3" fill="#FFFFFF" />
            <circle cx="335" cy="255" r="2.5" fill="#FFFFFF" />
            <circle cx="295" cy="265" r="3.2" fill="#FFFFFF" />
            <circle cx="280" cy="225" r="2" fill="#FFFFFF" />
            <circle cx="345" cy="225" r="2" fill="#FFFFFF" />
            <circle cx="300" cy="245" r="2" fill="#FFFFFF" />
          </g>
        )}

        {flag === 'usa' && (
          <g>
            {/* 13 Stripes */}
            {Array.from({ length: 13 }).map((_, i) => (
              <rect
                key={i}
                y={i * (400 / 13)}
                width="600"
                height={400 / 13 + 0.5}
                fill={i % 2 === 0 ? '#B22234' : '#FFFFFF'}
              />
            ))}
            {/* Blue Canton */}
            <rect width="250" height={(400 / 13) * 7} fill="#3C3B6E" />
            {/* 51 Stars (Satirical 51st state layout) */}
            <g fill="#FFFFFF" transform="scale(0.85) translate(15, 12)">
              {/* Pattern of stars */}
              {[
                [20, 20], [60, 20], [100, 20], [140, 20], [180, 20], [220, 20],
                [40, 45], [80, 45], [120, 45], [160, 45], [200, 45],
                [20, 70], [60, 70], [100, 70], [140, 70], [180, 70], [220, 70],
                [40, 95], [80, 95], [120, 95], [160, 95], [200, 95],
                [20, 120], [60, 120], [100, 120], [140, 120], [180, 120], [220, 120],
                [40, 145], [80, 145], [120, 145], [160, 145], [200, 145],
                [20, 170], [60, 170], [100, 170], [140, 170], [180, 170], [220, 170],
                [40, 195], [80, 195], [120, 195], [160, 195], [200, 195],
                [20, 220], [60, 220], [100, 220], [140, 220], [180, 220], [220, 220]
              ].map(([cx, cy], i) => (
                <polygon
                  key={i}
                  points={`${cx},${cy - 8} ${cx + 2.4},${cy - 2.5} ${cx + 8},${cy - 2.5} ${cx + 3.4},${cy + 1.5} ${cx + 5.2},${cy + 7.5} ${cx},${cy + 3.8} ${cx - 5.2},${cy + 7.5} ${cx - 3.4},${cy + 1.5} ${cx - 8},${cy - 2.5} ${cx - 2.4},${cy - 2.5}`}
                />
              ))}
            </g>
          </g>
        )}

        {flag === 'canada' && (
          <g>
            {/* Red left bar */}
            <rect width="150" height="400" fill="#FF0000" />
            {/* White central square */}
            <rect x="150" width="300" height="400" fill="#FFFFFF" />
            {/* Red right bar */}
            <rect x="450" width="150" height="400" fill="#FF0000" />
            {/* Stylized 11-pointed Maple Leaf */}
            <g transform="translate(300, 200) scale(1.4)" filter={`url(#fabric-shadow-${flag})`}>
              <path
                d="M 0 85 L 3 45 L 8 47 L 22 55 L 25 43 L 38 48 L 52 38 L 47 30 L 70 20 L 72 8 L 55 5 L 68 -15 L 48 -18 L 40 -12 L 42 -30 L 28 -28 L 30 -45 L 18 -40 L 0 -85 L -18 -40 L -30 -45 L -28 -28 L -42 -30 L -40 -12 L -48 -18 L -68 -15 L -55 5 L -72 8 L -70 20 L -47 30 L -52 38 L -38 48 L -25 43 L -22 55 L -8 47 L -3 45 Z"
                fill="#FF0000"
              />
            </g>
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
