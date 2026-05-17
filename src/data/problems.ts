export type Problem = {
  id: string
  number: string
  title: string
  description: string
  detail: string
  image: string
}

/**
 * 3 problemy zdrowotne typowe po 60-tce.
 * TODO (Roman): zdjęcia są kontekstowe (Eqology lifestyle). W kolejnej iteracji
 * podmienić na realne sytuacje seniorów (z pisemną zgodą na publikację).
 */
export const problems: Problem[] = [
  {
    id: 'energia',
    number: '01',
    title: 'Brakuje energii',
    description: 'Codzienne aktywności męczą bardziej niż kiedyś.',
    detail:
      'Potrzeba drzemki po obiedzie, spadek motywacji do wyjść, trudność z porannym wstaniem. Często związane z niedoborem omega-3 i witaminy D — szczególnie w polskim klimacie.',
    image: '/images/K2+D3 Drops_lifestyle_2_IBP.png',
  },
  {
    id: 'stawy',
    number: '02',
    title: 'Bolą stawy',
    description: 'Kolana, biodra lub plecy dają o sobie znać.',
    detail:
      'Poranna sztywność, schody stają się wyzwaniem, ograniczenie aktywności fizycznej. Omega-3 wspomaga zdrowie stawów; tradycyjne mazidła ziołowe działają miejscowo.',
    image: '/images/Omega-3 Test Lifestyle.jpg',
  },
  {
    id: 'pamiec',
    number: '03',
    title: 'Pogarsza się pamięć',
    description: 'Zapominanie imion, dat, miejsc w domu.',
    detail:
      'Trudność w skupieniu się na rozmowie lub książce, częste szukanie kluczy. DHA jest głównym budulcem błon komórkowych neuronów — niski poziom DHA koreluje ze spadkiem funkcji poznawczych.',
    image: '/images/Anti-Age Collagen Lifestyle.jpg',
  },
]
