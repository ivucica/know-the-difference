import { CountryComparisonDataset, ComparisonTheme } from '../../types/comparison';

export const SLAVIC_THEME: ComparisonTheme = {
  primaryAccent: '#c8102e',
  primaryHover: '#a60d26',
  secondaryAccent: '#991b1b',
  taglineColor: '#c8102e',
  punchlineColor: '#c8102e',
  bulletColor: '#c8102e',
  headingColor: '#c8102e',
};

export const slovakiaSloveniaDatasets: Record<string, CountryComparisonDataset> = {
  en: {
    id: 'sk-sl-en',
    leftCountry: 'Slovakia',
    rightCountry: 'Slovenia',
    leftCode: 'SK',
    rightCode: 'SI',
    tagline: 'Know the difference!',
    punchline: 'Now you learned how distinct these nations are!',
    btnCelebrate: 'Celebrate Distinction!',
    disclaimer: 'Created for geographers, diplomats, and travellers comparing Central European nations.',
    theme: SLAVIC_THEME,
    flags: {
      defaultSwapped: true,
      leftFlagId: 'slovenia',
      rightFlagId: 'slovakia',
    },
    musicMode: 'slavic-polka',
    musicTitle: 'Slavic Folk Polka',
    quizTitle: 'Central European Trivia Quiz',
    quizSub: 'Test your knowledge on the history and geography of these two nations.',
    sections: [
      {
        id: 'flag',
        heading: 'FLAG',
        items: [
          { left: 'White, blue and red.', right: 'White, blue and red.' },
          { left: 'Coat of arms with three peaks.', right: 'Coat of arms with three peaks.' },
        ],
      },
      {
        id: 'language',
        heading: 'LANGUAGE',
        items: [
          { left: 'Slovenčina.', right: 'Slovinčina.', leftVoice: 'sk-SK', rightVoice: 'sl-SI' },
        ],
      },
      {
        id: 'geography',
        heading: 'GEOGRAPHY',
        items: [
          { left: 'Mountains.', right: 'Mountains.' },
          { left: 'Physically Europe, mentally Balkans.', right: 'Physically Balkans, mentally Europe.' },
        ],
      },
      {
        id: 'history',
        heading: 'HISTORY',
        items: [
          { left: 'Historically their state did not exist.', right: 'Historically their state did not exist.' },
          { left: 'Most of the time, ruled from Vienna.', right: 'Most of the time, ruled from Vienna.' },
          { left: 'Part of a Slavic federation after WWI.', right: 'Part of a Slavic federation after WWI.' },
          { left: 'Communism.', right: 'Communism.' },
          { left: "Gained independence in early 90's.", right: "Gained independence in early 90's." },
          { left: 'Joined the EU in 2004.', right: 'Joined the EU in 2004.' },
        ],
      },
      {
        id: 'currency',
        heading: 'CURRENCY',
        items: [
          { left: 'EUR', right: 'EUR' },
        ],
      },
    ],
  },

  'en-US': {
    id: 'sk-sl-en-us',
    leftCountry: 'Slovakia',
    rightCountry: 'Slovenia',
    leftCode: 'SK',
    rightCode: 'SI',
    tagline: 'Know the difference!',
    punchline: 'Now you learned how distinct these nations are!',
    btnCelebrate: 'Celebrate Distinction!',
    disclaimer: 'Created for geographers, diplomats, and international travelers comparing Central European nations.',
    theme: SLAVIC_THEME,
    flags: {
      defaultSwapped: true,
      leftFlagId: 'slovenia',
      rightFlagId: 'slovakia',
    },
    musicMode: 'slavic-polka',
    musicTitle: 'Slavic Folk Polka',
    quizTitle: 'Central European Trivia Quiz',
    quizSub: 'Test your knowledge on the history and geography of these two nations.',
    sections: [
      {
        id: 'flag',
        heading: 'FLAG',
        items: [
          { left: 'White, blue and red.', right: 'White, blue and red.' },
          { left: 'Coat of arms with three peaks.', right: 'Coat of arms with three peaks.' },
        ],
      },
      {
        id: 'language',
        heading: 'LANGUAGE',
        items: [
          { left: 'Slovenčina.', right: 'Slovinčina.', leftVoice: 'sk-SK', rightVoice: 'sl-SI' },
        ],
      },
      {
        id: 'geography',
        heading: 'GEOGRAPHY',
        items: [
          { left: 'Mountains.', right: 'Mountains.' },
          { left: 'Physically Europe, mentally Balkans.', right: 'Physically Balkans, mentally Europe.' },
        ],
      },
      {
        id: 'history',
        heading: 'HISTORY',
        items: [
          { left: 'Historically their state did not exist.', right: 'Historically their state did not exist.' },
          { left: 'Most of the time, ruled from Vienna.', right: 'Most of the time, ruled from Vienna.' },
          { left: 'Part of a Slavic federation after WWI.', right: 'Part of a Slavic federation after WWI.' },
          { left: 'Communism.', right: 'Communism.' },
          { left: "Gained independence in early 90's.", right: "Gained independence in early 90's." },
          { left: 'Joined the EU in 2004.', right: 'Joined the EU in 2004.' },
        ],
      },
      {
        id: 'currency',
        heading: 'CURRENCY',
        items: [
          { left: 'EUR', right: 'EUR' },
        ],
      },
    ],
  },

  de: {
    id: 'sk-sl-de',
    leftCountry: 'Slowakei',
    rightCountry: 'Slowenien',
    leftCode: 'SK',
    rightCode: 'SI',
    tagline: 'Erkenne den Unterschied!',
    punchline: 'Jetzt weißt du, wie unterschiedlich diese Nationen sind!',
    btnCelebrate: 'Unterschied feiern!',
    disclaimer: 'Erstellt für Geografen, Diplomaten und Reisende in Mitteleuropa.',
    theme: SLAVIC_THEME,
    flags: {
      defaultSwapped: true,
      leftFlagId: 'slovenia',
      rightFlagId: 'slovakia',
    },
    musicMode: 'slavic-polka',
    musicTitle: 'Slawische Polka',
    quizTitle: 'Mitteleuropa-Quiz',
    quizSub: 'Testen Sie Ihr Wissen über die beiden Nationen.',
    sections: [
      {
        id: 'flag',
        heading: 'FLAGGE',
        items: [
          { left: 'Weiß, Blau und Rot.', right: 'Weiß, Blau und Rot.' },
          { left: 'Wappen mit drei Gipfeln.', right: 'Wappen mit drei Gipfeln.' },
        ],
      },
      {
        id: 'language',
        heading: 'SPRACHE',
        items: [
          { left: 'Slovenčina.', right: 'Slovinčina.', leftVoice: 'sk-SK', rightVoice: 'sl-SI' },
        ],
      },
      {
        id: 'geography',
        heading: 'GEOGRAFIE',
        items: [
          { left: 'Berge.', right: 'Berge.' },
          { left: 'Physisch Europa, mental Balkan.', right: 'Physisch Balkan, mental Europa.' },
        ],
      },
      {
        id: 'history',
        heading: 'GESCHICHTE',
        items: [
          { left: 'Historisch existierte ihr Staat nicht.', right: 'Historisch existierte ihr Staat nicht.' },
          { left: 'Die meiste Zeit aus Wien regiert.', right: 'Die meiste Zeit aus Wien regiert.' },
          { left: 'Teil einer slawischen Föderation nach dem 1. Weltkrieg.', right: 'Teil einer slawischen Föderation nach dem 1. Weltkrieg.' },
          { left: 'Kommunismus.', right: 'Kommunismus.' },
          { left: 'Erlangte Unabhängigkeit Anfang der 90er.', right: 'Erlangte Unabhängigkeit Anfang der 90er.' },
          { left: 'Der EU 2004 beigetreten.', right: 'Der EU 2004 beigetreten.' },
        ],
      },
      {
        id: 'currency',
        heading: 'WÄHRUNG',
        items: [
          { left: 'EUR', right: 'EUR' },
        ],
      },
    ],
  },

  hr: {
    id: 'sk-sl-hr',
    leftCountry: 'Slovačka',
    rightCountry: 'Slovenija',
    leftCode: 'SK',
    rightCode: 'SI',
    tagline: 'Saznajte razliku!',
    punchline: 'Sada ste naučili koliko su ove nacije različite!',
    btnCelebrate: 'Proslavi Razliku!',
    disclaimer: 'Stvoreno za geografe, diplomate i sve zainteresirane za srednju Europu.',
    theme: SLAVIC_THEME,
    flags: {
      defaultSwapped: true,
      leftFlagId: 'slovenia',
      rightFlagId: 'slovakia',
    },
    musicMode: 'slavic-polka',
    musicTitle: 'Slavenska Polka',
    quizTitle: 'Kviz Srednje Europe',
    quizSub: 'Testirajte svoje znanje o ove dvije zemlje.',
    sections: [
      {
        id: 'flag',
        heading: 'ZASTAVA',
        items: [
          { left: 'Bijela, plava i crvena.', right: 'Bijela, plava i crvena.' },
          { left: 'Grb s tri vrha.', right: 'Grb s tri vrha.' },
        ],
      },
      {
        id: 'language',
        heading: 'JEZIK',
        items: [
          { left: 'Slovenčina.', right: 'Slovinčina.', leftVoice: 'sk-SK', rightVoice: 'sl-SI' },
        ],
      },
      {
        id: 'geography',
        heading: 'GEOGRAFIJA',
        items: [
          { left: 'Planine.', right: 'Planine.' },
          { left: 'Fizički Europa, mentalno Balkan.', right: 'Fizički Balkan, mentalno Europa.' },
        ],
      },
      {
        id: 'history',
        heading: 'POVIJEST',
        items: [
          { left: 'Povijesno njihova država nije postojala.', right: 'Povijesno njihova država nije postojala.' },
          { left: 'Većinu vremena vladalo se iz Beča.', right: 'Većinu vremena vladalo se iz Beča.' },
          { left: 'Dio slavenske federacije nakon 1. svj. rata.', right: 'Dio slavenske federacije nakon 1. svj. rata.' },
          { left: 'Komunizam.', right: 'Komunizam.' },
          { left: 'Stekli neovisnost početkom 90-ih.', right: 'Stekli neovisnost početkom 90-ih.' },
          { left: 'Pridružili se EU 2004. godine.', right: 'Pridružili se EU 2004. godine.' },
        ],
      },
      {
        id: 'currency',
        heading: 'VALUTA',
        items: [
          { left: 'EUR', right: 'EUR' },
        ],
      },
    ],
  },

  sk: {
    id: 'sk-sl-sk',
    leftCountry: 'Slovensko',
    rightCountry: 'Slovinsko',
    leftCode: 'SK',
    rightCode: 'SI',
    tagline: 'Spoznajte ten rozdiel!',
    punchline: 'Teraz ste sa naučili, aké odlišné sú tieto národy!',
    btnCelebrate: 'Osláviť Odlišnosť!',
    disclaimer: 'Vytvorené pre geografov, diplomatov a všetkých priaznivcov strednej Európy.',
    theme: SLAVIC_THEME,
    flags: {
      defaultSwapped: true,
      leftFlagId: 'slovenia',
      rightFlagId: 'slovakia',
    },
    musicMode: 'slavic-polka',
    musicTitle: 'Slovenská Polka',
    quizTitle: 'Stredoeurópsky Kvíz',
    quizSub: 'Otestujte si vedomosti o histórii a geografii oboch štátov.',
    sections: [
      {
        id: 'flag',
        heading: 'VLAJKA',
        items: [
          { left: 'Biela, modrá a červená.', right: 'Biela, modrá a červená.' },
          { left: 'Erb s tromi vrchmi.', right: 'Erb s tromi vrchmi.' },
        ],
      },
      {
        id: 'language',
        heading: 'JAZYK',
        items: [
          { left: 'Slovenčina.', right: 'Slovinčina.', leftVoice: 'sk-SK', rightVoice: 'sl-SI' },
        ],
      },
      {
        id: 'geography',
        heading: 'GEOGRAFIA',
        items: [
          { left: 'Hory.', right: 'Hory.' },
          { left: 'Fyzicky Európa, mentálne Balkán.', right: 'Fyzicky Balkán, mentálne Európa.' },
        ],
      },
      {
        id: 'history',
        heading: 'HISTÓRIA',
        items: [
          { left: 'Historicky ich štát neexistoval.', right: 'Historicky ich štát neexistoval.' },
          { left: 'Väčšinu času vládla Viedeň.', right: 'Väčšinu času vládla Viedeň.' },
          { left: 'Súčasť slovanskej federácie po 1. sv. vojne.', right: 'Súčasť slovanskej federácie po 1. sv. vojne.' },
          { left: 'Komunizmus.', right: 'Komunizmus.' },
          { left: 'Získali nezávislosť začiatkom 90. rokov.', right: 'Získali nezávislosť začiatkom 90. rokov.' },
          { left: 'Vstúpili do EÚ v roku 2004.', right: 'Vstúpili do EÚ v roku 2004.' },
        ],
      },
      {
        id: 'currency',
        heading: 'MENA',
        items: [
          { left: 'EUR', right: 'EUR' },
        ],
      },
    ],
  },

  sl: {
    id: 'sk-sl-sl',
    leftCountry: 'Slovaška',
    rightCountry: 'Slovenija',
    leftCode: 'SK',
    rightCode: 'SI',
    tagline: 'Spoznajte razliko!',
    punchline: 'Zdaj ste se naučili, kako različni sta ti naciji!',
    btnCelebrate: 'Praznuj Različnost!',
    disclaimer: 'Ustvarjeno za geografe, diplomate in popotnike po srednji Evropi.',
    theme: SLAVIC_THEME,
    flags: {
      defaultSwapped: true,
      leftFlagId: 'slovenia',
      rightFlagId: 'slovakia',
    },
    musicMode: 'slavic-polka',
    musicTitle: 'Slovenska Polka',
    quizTitle: 'Srednjeevropski Kviz',
    quizSub: 'Preverite svoje znanje o dveh državah.',
    sections: [
      {
        id: 'flag',
        heading: 'ZASTAVA',
        items: [
          { left: 'Bela, modra in rdeča.', right: 'Bela, modra in rdeča.' },
          { left: 'Grb s tremi vrhovi.', right: 'Grb s tremi vrhovi.' },
        ],
      },
      {
        id: 'language',
        heading: 'JEZIK',
        items: [
          { left: 'Slovenčina.', right: 'Slovinčina.', leftVoice: 'sk-SK', rightVoice: 'sl-SI' },
        ],
      },
      {
        id: 'geography',
        heading: 'GEOGRAFIJA',
        items: [
          { left: 'Gore.', right: 'Gore.' },
          { left: 'Fizično Evropa, mentalno Balkan.', right: 'Fizično Balkan, mentalno Evropa.' },
        ],
      },
      {
        id: 'history',
        heading: 'ZGODOVINA',
        items: [
          { left: 'Zgodovinsko njuna država ni obstajala.', right: 'Zgodovinsko njuna država ni obstajala.' },
          { left: 'Večino časa se je vladalo iz Dunaja.', right: 'Večino časa se je vladalo iz Dunaja.' },
          { left: 'Del slovanske federacije po 1. sv. vojni.', right: 'Del slovanske federacije po 1. sv. vojni.' },
          { left: 'Komunizem.', right: 'Komunizem.' },
          { left: 'Osamosvojitev v zgodnjih 90. letih.', right: 'Osamosvojitev v zgodnjih 90. letih.' },
          { left: 'Pridružitev EU leta 2004.', right: 'Pridružitev EU leta 2004.' },
        ],
      },
      {
        id: 'currency',
        heading: 'VALUTA',
        items: [
          { left: 'EUR', right: 'EUR' },
        ],
      },
    ],
  },

  cs: {
    id: 'sk-sl-cs',
    leftCountry: 'Slovensko',
    rightCountry: 'Slovinsko',
    leftCode: 'SK',
    rightCode: 'SI',
    tagline: 'Poznejte ten rozdíl!',
    punchline: 'Nyní jste se naučili, jak odlišné tyto národy jsou!',
    btnCelebrate: 'Oslavit Odlišnost!',
    disclaimer: 'Vytvořeno pro geografy, diplomaty a cestovatele po střední Evropě.',
    theme: SLAVIC_THEME,
    flags: {
      defaultSwapped: true,
      leftFlagId: 'slovenia',
      rightFlagId: 'slovakia',
    },
    musicMode: 'slavic-polka',
    musicTitle: 'Slovanská Polka',
    quizTitle: 'Středoevropský Kvíz',
    quizSub: 'Vyzkoušejte své znalosti o obou zemích.',
    sections: [
      {
        id: 'flag',
        heading: 'VLAJKA',
        items: [
          { left: 'Bílá, modrá a červená.', right: 'Bílá, modrá a červená.' },
          { left: 'Znak se třemi vrcholy.', right: 'Znak se třemi vrcholy.' },
        ],
      },
      {
        id: 'language',
        heading: 'JAZYK',
        items: [
          { left: 'Slovenčina.', right: 'Slovinčina.', leftVoice: 'sk-SK', rightVoice: 'sl-SI' },
        ],
      },
      {
        id: 'geography',
        heading: 'GEOGRAFIE',
        items: [
          { left: 'Hory.', right: 'Hory.' },
          { left: 'Fyzicky Evropa, mentálně Balkán.', right: 'Fyzicky Balkán, mentálně Evropa.' },
        ],
      },
      {
        id: 'history',
        heading: 'HISTORIE',
        items: [
          { left: 'Historicky jejich stát neexistoval.', right: 'Historicky jejich stát neexistoval.' },
          { left: 'Většinu času vládla Vídeň.', right: 'Většinu času vládla Vídeň.' },
          { left: 'Součást slovanské federace po 1. sv. válce.', right: 'Součást slovanské federace po 1. sv. válce.' },
          { left: 'Komunismus.', right: 'Komunismus.' },
          { left: 'Získali nezávislost počátkem 90. let.', right: 'Získali nezávislost počátkem 90. let.' },
          { left: 'Vstoupili do EU v roce 2004.', right: 'Vstoupili do EU v roce 2004.' },
        ],
      },
      {
        id: 'currency',
        heading: 'MĚNA',
        items: [
          { left: 'EUR', right: 'EUR' },
        ],
      },
    ],
  },

  'pt-BR': {
    id: 'sk-sl-ptbr',
    leftCountry: 'Eslováquia',
    rightCountry: 'Eslovênia',
    leftCode: 'SK',
    rightCode: 'SI',
    tagline: 'Saiba a diferença!',
    punchline: 'Agora você aprendeu como estas nações são distintas!',
    btnCelebrate: 'Celebrar Diferenças!',
    disclaimer: 'Criado para geógrafos, diplomatas e viajantes pela Europa Central.',
    theme: SLAVIC_THEME,
    flags: {
      defaultSwapped: true,
      leftFlagId: 'slovenia',
      rightFlagId: 'slovakia',
    },
    musicMode: 'slavic-polka',
    musicTitle: 'Polca Eslava',
    quizTitle: 'Quiz da Europa Central',
    quizSub: 'Teste seus conhecimentos sobre a história e geografia de ambas as nações.',
    sections: [
      {
        id: 'flag',
        heading: 'BANDEIRA',
        items: [
          { left: 'Branca, azul e vermelha.', right: 'Branca, azul e vermelha.' },
          { left: 'Brasão com três picos.', right: 'Brasão com três picos.' },
        ],
      },
      {
        id: 'language',
        heading: 'IDIOMA',
        items: [
          { left: 'Slovenčina.', right: 'Slovinčina.', leftVoice: 'sk-SK', rightVoice: 'sl-SI' },
        ],
      },
      {
        id: 'geography',
        heading: 'GEOGRAFIA',
        items: [
          { left: 'Montanhas.', right: 'Montanhas.' },
          { left: 'Fisicamente Europa, mentalmente Bálcãs.', right: 'Fisicamente Bálcãs, mentalmente Europa.' },
        ],
      },
      {
        id: 'history',
        heading: 'HISTÓRIA',
        items: [
          { left: 'Historicamente seu Estado não existia.', right: 'Historicamente seu Estado não existia.' },
          { left: 'Na maior parte do tempo, governados a partir de Viena.', right: 'Na maior parte do tempo, governados a partir de Viena.' },
          { left: 'Parte de uma federação eslava após a Primeira Guerra Mundial.', right: 'Parte de uma federação eslava após a Primeira Guerra Mundial.' },
          { left: 'Comunismo.', right: 'Comunismo.' },
          { left: 'Ganharam independência no início dos anos 90.', right: 'Ganharam independência no início dos anos 90.' },
          { left: 'Entraram na União Europeia em 2004.', right: 'Entraram na União Europeia em 2004.' },
        ],
      },
      {
        id: 'currency',
        heading: 'MOEDA',
        items: [
          { left: 'EUR', right: 'EUR' },
        ],
      },
    ],
  },
};
