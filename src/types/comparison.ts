export type SupportedLanguage = 'en' | 'de' | 'hr' | 'sk' | 'sl' | 'cs' | 'pt-BR' | 'pt-PT';

export interface ComparisonItem {
  left: string;
  right: string;
  leftVoice?: string;
  rightVoice?: string;
}

export interface ComparisonSection {
  id: string;
  heading: string;
  items: ComparisonItem[];
}

export interface ComparisonTheme {
  primaryAccent: string;     // e.g. '#c8102e' (Red) or '#006600' (Forest Green)
  primaryHover: string;      // e.g. '#a60d26' or '#004d1a'
  secondaryAccent: string;   // e.g. '#b91c1c' or '#d97706' (Warm Gold)
  taglineColor: string;
  punchlineColor: string;
  bulletColor: string;
  headingColor: string;
}

export interface CountryComparisonDataset {
  id: string;
  leftCountry: string;
  rightCountry: string;
  leftCode: string;
  rightCode: string;
  tagline: string;
  punchline: string;
  btnCelebrate: string;
  disclaimer: string;
  theme: ComparisonTheme;
  flags: {
    defaultSwapped: boolean;
    leftFlagId: 'slovakia' | 'slovenia' | 'portugal' | 'brazil';
    rightFlagId: 'slovakia' | 'slovenia' | 'portugal' | 'brazil';
  };
  sections: ComparisonSection[];
  musicMode: 'slavic-polka' | 'portugal-brazil-fusion';
  musicTitle: string;
  quizTitle: string;
  quizSub: string;
}
