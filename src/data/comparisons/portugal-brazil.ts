import { CountryComparisonDataset, ComparisonTheme } from '../../types/comparison';

export const LUSOPHONE_THEME: ComparisonTheme = {
  primaryAccent: '#006600',       // Portuguese & Brazilian forest green
  primaryHover: '#004d00',
  secondaryAccent: '#d97706',     // Warm Lusophone gold / amber
  taglineColor: '#006600',
  punchlineColor: '#006600',
  bulletColor: '#006600',
  headingColor: '#006600',
};

export const portugalBrazilDataset: CountryComparisonDataset = {
  id: 'pt-br-pt',
  leftCountry: 'Portugal',
  rightCountry: 'Brasil',
  leftCode: 'PT',
  rightCode: 'BR',
  tagline: 'Saiba a diferença!',
  punchline: 'Agora percebeu como estas duas nações são totalmente inconfundíveis!',
  btnCelebrate: 'Celebrar Lusofonia!',
  disclaimer: 'Criado para geógrafos, historiadores e lusófonos atentos às subtis semelhanças atlânticas.',
  theme: LUSOPHONE_THEME,
  flags: {
    defaultSwapped: true, // Default swapped (Brazil flag under Portugal, Portugal flag under Brazil)
    leftFlagId: 'portugal',
    rightFlagId: 'brazil',
  },
  musicMode: 'portugal-brazil-fusion',
  musicTitle: 'Fusão Fado-Samba',
  quizTitle: 'Quiz Atlântico de Conhecimentos',
  quizSub: 'Teste os seus conhecimentos sobre a história e geografia de Portugal e do Brasil.',
  sections: [
    {
      id: 'flag',
      heading: 'BANDEIRA',
      items: [
        {
          left: 'Verde e vermelha com esfera armilar dourada.',
          right: 'Verde e amarela com esfera celeste estrelada.',
        },
        {
          left: 'Brasão central de formato circular e heráldico.',
          right: 'Brasão central de formato circular e geométrico.',
        },
      ],
    },
    {
      id: 'language',
      heading: 'LÍNGUA',
      items: [
        {
          left: 'Português.',
          right: 'Português.',
          leftVoice: 'pt-PT',
          rightVoice: 'pt-BR',
        },
      ],
    },
    {
      id: 'geography',
      heading: 'GEOGRAFIA',
      items: [
        {
          left: 'Costa oceânica e cadeias montanhosas.',
          right: 'Costa oceânica e cadeias montanhosas.',
        },
        {
          left: 'Fisicamente Europa Ocidental, estatisticamente Bálcãs.',
          right: 'Fisicamente América do Sul, culturalmente Bálcãs tropicais.',
        },
      ],
    },
    {
      id: 'history',
      heading: 'HISTÓRIA',
      items: [
        {
          left: 'Governada historicamente a partir de Lisboa e do Rio de Janeiro.',
          right: 'Governada historicamente a partir de Lisboa e do Rio de Janeiro.',
        },
        {
          left: 'Monarquia de longa data antes da república no início do século XX.',
          right: 'Monarquia de longa data antes da república no final do século XIX.',
        },
        {
          left: 'Ditadura de várias décadas durante a Guerra Fria.',
          right: 'Ditadura de várias décadas durante a Guerra Fria.',
        },
        {
          left: 'Redemocratização consolidada na década de 1980.',
          right: 'Redemocratização consolidada na década de 1980.',
        },
        {
          left: 'Integração em bloco económico regional na década de 1980/90.',
          right: 'Integração em bloco económico regional na década de 1990.',
        },
        {
          left: 'Paixão incondicional pelo futebol e café ao balcão.',
          right: 'Paixão incondicional pelo futebol e café coado.',
        },
      ],
    },
    {
      id: 'currency',
      heading: 'MOEDA',
      items: [
        {
          left: 'Salários locais com custo de vida cosmopolita.',
          right: 'Salários locais com custo de vida cosmopolita.',
        },
        {
          left: 'EUR',
          right: 'BRL',
        },
      ],
    },
  ],
};
