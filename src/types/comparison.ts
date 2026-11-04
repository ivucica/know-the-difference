export type SupportedLanguage = 'en' | 'en-US' | 'de' | 'hr' | 'sk' | 'sl' | 'cs' | 'pt-BR' | 'pt-PT';

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
  primaryAccent: string;     // e.g. '#c8102e' (Red), '#006600' (Forest Green), or '#002868' (Navy)
  primaryHover: string;
  secondaryAccent: string;   // e.g. '#b91c1c', '#d97706' (Gold), or '#bf0a30' (American Red)
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
    leftFlagId: 'slovakia' | 'slovenia' | 'portugal' | 'brazil' | 'usa' | 'canada';
    rightFlagId: 'slovakia' | 'slovenia' | 'portugal' | 'brazil' | 'usa' | 'canada';
  };
  sections: ComparisonSection[];
  musicMode: 'slavic-polka' | 'portugal-brazil-fusion' | 'us-patriotic-march';
  musicTitle: string;
  quizTitle: string;
  quizSub: string;
}
