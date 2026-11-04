import { CountryComparisonDataset, ComparisonTheme } from '../../types/comparison';

export const PATRIOTIC_US_THEME: ComparisonTheme = {
  primaryAccent: '#002868',       // Imperial Navy Blue
  primaryHover: '#001b44',
  secondaryAccent: '#bf0a30',     // Patriotic American Flag Red
  taglineColor: '#bf0a30',
  punchlineColor: '#002868',
  bulletColor: '#bf0a30',
  headingColor: '#002868',
};

export const usCanadaDataset: CountryComparisonDataset = {
  id: 'us-ca-satire',
  leftCountry: 'United States',
  rightCountry: 'Canada',
  leftCode: 'USA',
  rightCode: 'CAN',
  tagline: 'Know the difference!',
  punchline: 'Now you learned how distinct these nations are!',
  btnCelebrate: 'Celebrate Continental Harmony!',
  disclaimer: 'Published for patriotic cartographers, Sharpie enthusiasts, and trade negotiators confused by northern borders.',
  theme: PATRIOTIC_US_THEME,
  flags: {
    defaultSwapped: true, // Default swapped (Canada flag under US, US flag under Canada)
    leftFlagId: 'usa',
    rightFlagId: 'canada',
  },
  musicMode: 'us-patriotic-march',
  musicTitle: 'Grand Patriotic Sousa March',
  quizTitle: 'North American Continental Quiz',
  quizSub: 'Test your knowledge on the subtle distinctions between the 50 states and their northern neighbor.',
  sections: [
    {
      id: 'flag',
      heading: 'FLAG',
      items: [
        {
          left: 'Red and white stripes with a blue canton and 50 stars (or 51 according to late-night rallies).',
          right: 'Red and white vertical bars with a single red maple leaf (stubbornly resisting becoming star #51).',
        },
        {
          left: 'Prominent national colors symbolizing revolution, liberty, and continental expansion.',
          right: 'Prominent national colors symbolizing wilderness, peace, and surviving winter.',
        },
      ],
    },
    {
      id: 'language',
      heading: 'LANGUAGE',
      items: [
        {
          left: 'American English.',
          right: 'Canadian English.',
          leftVoice: 'en-US',
          rightVoice: 'en-US',
        },
        {
          left: "Deletes the letter 'u' from 'color' as an unyielding act of patriotic independence.",
          right: "Inserts the letter 'u' into 'colour' and instinctively apologizes whenever bumped into.",
        },
      ],
    },
    {
      id: 'geography',
      heading: 'GEOGRAPHY',
      items: [
        {
          left: 'Endless mountain ranges, Great Lakes, prairies, and Arctic tundra.',
          right: 'Endless mountain ranges, Great Lakes, prairies, and Arctic tundra.',
        },
        {
          left: 'Physically North America, mentally convinced it owns both oceans and the North Pole.',
          right: 'Physically North America, mentally checking if the southern neighbor left the stove on.',
        },
      ],
    },
    {
      id: 'history',
      heading: 'HISTORY',
      items: [
        {
          left: 'Formerly ruled by the British Crown until a disagreement over taxed tea.',
          right: 'Formerly ruled by the British Crown until a remarkably polite mutual agreement.',
        },
        {
          left: 'Attempted to annex its northern neighbor during the War of 1812 (the White House got torched).',
          right: 'Successfully repelled invasion in 1812 (briefly redecorated the White House with fire).',
        },
        {
          left: 'Slapped 100% tariffs on Slovakia after an argument with Melania, then circled Canada with a black Sharpie just to be safe.',
          right: 'Subjected to emergency 100% tariffs whenever executive maps get drawn with a black Sharpie.',
        },
        {
          left: 'Regularly threatens total economic absorption of the continent while importing 4 million barrels of oil a day.',
          right: 'Quietly powers the continental grid while reminding everyone it has universal healthcare.',
        },
        {
          left: 'Passionate about hockey, maple syrup, and complaining about the weather.',
          right: 'Passionate about hockey, maple syrup, and complaining about the weather.',
        },
      ],
    },
    {
      id: 'currency',
      heading: 'CURRENCY',
      items: [
        {
          left: 'USD ($) — Backed by naval carrier strike groups and late-night social media declarations.',
          right: "CAD ($) — Backed by strategic maple syrup reserves, dismissed by cable news pundits as 'the 51st state dollar'.",
        },
        {
          left: 'Subject to sudden executive tariffs on aluminum, steel, and timber.',
          right: 'Subject to sudden executive tariffs on aluminum, steel, and timber.',
        },
      ],
    },
  ],
};
