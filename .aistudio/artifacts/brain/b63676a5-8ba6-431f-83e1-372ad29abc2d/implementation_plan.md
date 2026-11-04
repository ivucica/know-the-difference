# Modular Comparison Webapp (Know The Difference)

Modernize the comparison web application into a highly reusable, componentized architecture that faithfully preserves the original poster layout and visual restraint while delivering subtle, un-spoiled humor, theme customization (Portuguese forest green & golden yellow), 50/50 split table rows, and modular data configurations.

## User Review & Critical Decisions

> [!IMPORTANT]
> **Confirmed User Decisions:**
> - **Subtle Flag Swap Discovery**: Flag swap controls will not have explicit spoiler captions, labels, or explanatory banners. Instead, clicking or tapping directly on the flags themselves smoothly swaps them with an organic spring animation.
> - **Portugal & Brazil Color Theme**: In `pt-PT` mode, the poster dynamically transitions its aesthetic palette from classic meme crimson (`#c8102e`) to Portuguese forest green (`#006600` / `#004d25`) and warm golden yellow accents (`#d97706` / `#eab308`).
> - **Subtle, Plausible Quiz**: Questions will be formatted as authentic, plausible geography & history trivia without telegraphing that the traits are shared or giving away the punchline in the answer options.
> - **Subtle Portugal/Brazil Humor**: No direct mentions of reddit communities like `r/portugalcykablyat`; instead, the comparison mirrors the Slovakia/Slovenia parallel using nearly identical wording for both sides (e.g. mountains/coast, historic imperial governance, language pronunciation nuances, currency and cost of living).
> - **50/50 Split Table Components**: Each comparison section will be structured as a 50/50 column table with bullet markers retained for readability, receiving a structured `{ heading: string, items: Array<{ left: string, right: string }> }` schema.

---

## 1. Overview & Core Concept

The application is an interactive digital poster inspired by the classic *"Slovakia vs. Slovenia: Know the difference!"* meme. The webapp delivers:
1. **Fidelity to Original Image**: Exact Playfair Display serif headers, handwritten cursive script tagline and punchline, and 50/50 split side-by-side comparison tables.
2. **Modular Country Comparison Engine**: Fully data-driven architecture where any pair of countries can be loaded via a single configuration object (`CountryComparisonData`).
3. **Subtle Comedy & User Discovery**: The flags are swapped by default as in the original image; clicking either flag smoothly toggles their alignment without spoiler text.
4. **Authentic Procedural Audio**: Upbeat Slavic accordion polka in standard mode, and an amusing Lisbon Fado / Rio Bossa Nova mashup in Portuguese mode.
5. **Interactive Quiz**: Decoupled, modular JSON configuration with plausible multiple-choice questions.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Zero-State Exploration**: The user lands on a clean, authentic poster presentation matching the JPEG layout.
2. **Discovery of Flag Swap**: Interacting with the flags triggers a smooth 3D flip animation. No spoiler banner ruins the gag.
3. **Interactive Section Rows**: Hovering over rows highlights both columns simultaneously. Pronunciation buttons allow testing native audio for language items.
4. **Language & Country Switching**: Selecting European Portuguese (`pt-PT`) triggers a smooth palette transition to forest green and gold, loading the Portugal vs. Brazil comparison with parallel humor and procedural Fado-Bossa music.
5. **Interactive Trivia Quiz**: A clean, modular trivia card at the base of the page offers straightforward questions with instant feedback and score tracking.

### Visual Identity & Theming System
- **Default Theme (Slavic Comparison)**:
  - Canvas: Warm tactile paper background (`#f5f4f0`) with subtle dot matrix.
  - Accent Red: Vibrant crimson (`#c8102e`) for script titles, section headers, and bullet accents.
  - Typography: `Playfair Display` (Serif Display), `Caveat` / `Kaushan Script` (Handwritten Cursive), and `Plus Jakarta Sans` (Body).
- **Lusophone Easter Egg Theme (`pt-PT`)**:
  - Primary Accent: Portuguese forest green (`#006600` / `#055a29`).
  - Secondary Accent: Warm Lusophone gold / yellow (`#d97706` / `#eab308`).
  - Retains all structural spatial math and typographic hierarchy.

---

## 3. Component Architecture & Data Strategy

### System & Component Hierarchy

```
┌────────────────────────────────────────────────────────┐
│                        App.tsx                         │
│  (Theme Provider, Language State, Audio Coordination)  │
└───────────────────────────┬────────────────────────────┘
                            │
       ┌────────────────────┼─────────────────────┐
       ▼                    ▼                     ▼
┌──────────────┐   ┌─────────────────┐   ┌─────────────────┐
│  TopNav.tsx  │   │ MemePoster.tsx  │   │ InteractiveQuiz │
│  - Audio     │   │  (Theme Aware)  │   │  (JSON Driven)  │
│  - Languages │   └────────┬────────┘   └─────────────────┘
│  - Scanner   │            │
└──────────────┘            ▼
             ┌───────────────────────────────┐
             │    ComparisonTable.tsx        │
             │ Ingests:                      │
             │ { heading, items: [{left,     │
             │   right}] }                   │
             │ 50/50 Column Table Layout     │
             └──────────────┬────────────────┘
                            │
             ┌──────────────┴────────────────┐
             ▼                               ▼
     ┌──────────────┐                ┌──────────────┐
     │  FlagCard    │                │ TableRowItem │
     │  (Click Swap)│                │ (Bullets/TTS)│
     └──────────────┘                └──────────────┘
```

### Data Schema & Modular Decoupling

#### 1. Section Data Contract (`ComparisonSection`)
```typescript
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

export interface CountryComparisonDataset {
  id: string;
  leftCountry: string;
  rightCountry: string;
  leftCode: string;
  rightCode: string;
  tagline: string;
  punchline: string;
  theme: {
    accentColor: string; // e.g. '#c8102e' or '#006600'
    accentHover: string;
    secondaryColor: string;
    badgeBg: string;
  };
  flags: {
    defaultSwapped: boolean;
    leftFlagId: 'slovakia' | 'slovenia' | 'portugal' | 'brazil';
    rightFlagId: 'slovakia' | 'slovenia' | 'portugal' | 'brazil';
  };
  sections: ComparisonSection[];
}
```

#### 2. Quiz Configuration (`quizQuestions.json`)
Plausible, genuine-sounding multiple-choice questions per language without dead-giveaway options or spoiler commentary.

---

## 4. Key Implementation Steps

1. **Modular Data Refactoring**:
   - Create dataset modules in `/src/data/comparisons/` for `slovakia-slovenia` and `portugal-brazil` adhering to the new schema.
   - Refine `quizQuestions.json` to feature standard trivia questions.
   - Refine Portugal/Brazil comparison copy to parallel the Slovakia/Slovenia balance subtly without overt meme references.

2. **Component Modernization**:
   - Build `ComparisonTable.tsx` implementing a semantic 50/50 split table layout with bullet list styling and synchronized hover states.
   - Update `FlagCard.tsx` with smooth spring flip animations triggered on direct click.
   - Make `MemePoster.tsx` dynamically theme-aware based on the active dataset's color tokens.

3. **Audio Refinement**:
   - Ensure the Slavic Polka and Lisbon/Rio Fado-Samba fusion sound clean and responsive.

4. **Testing & Verification**:
   - Verify layout responsiveness across desktop and mobile.
   - Confirm build and lint passing via `compile_applet`.
