// TODO (Roman): każdy claim zdrowotny w `korzysci` musi zostać sparowany
// z autoryzowanym EFSA health claim (EU Register 432/2012) lub przeformułowany.
// Niezweryfikowane claimy = ryzyko prawne przy reklamie suplementów.

import { Droplets, Brain, Heart, type LucideIcon } from 'lucide-react'

export type Product = {
  id: string
  nazwa: string
  podtytul: string
  cena: number
  cenaPierwszyMiesiac: number
  opis: string
  dlakogo: string
  korzysci: string[]
  sklad: Record<string, string>
  icon: LucideIcon
  image: string
  badge: string | null
  smaki: string[]
}

export type Pakiet = {
  nazwa: string
  opis: string
  cenaStart: number
  cenaMiesieczna: number
  zawiera: string[]
  oszczednosc: string | null
  popularny: boolean
}

export const products: Product[] = [
  {
    id: 'classic',
    nazwa: 'Pure Arctic Oil',
    podtytul: 'Klasyczna formuła omega-3',
    cena: 172,
    cenaPierwszyMiesiac: 344,
    opis: '100% świeży olej z dzikiego dorsza arktycznego. Pełne spektrum 22 kwasów tłuszczowych omega-3 + organiczna oliwa z oliwek extra virgin.',
    dlakogo: 'Dla każdego, kto chce zadbać o serce, mózg i stawy',
    korzysci: [
      'Wspiera zdrowie serca (250mg EPA+DHA)',
      'Poprawia funkcje poznawcze mózgu',
      'Wspomaga prawidłowe widzenie',
      'Witamina D3 wspiera odporność i kości',
    ],
    sklad: {
      omega3: '1830 mg',
      epa: '650 mg',
      dha: '770 mg',
      epaDhaRazem: '1420 mg',
      vitaminaD3: '20 μg (400% RWS)',
      extra: 'Organiczna oliwa z oliwek extra virgin',
    },
    icon: Droplets,
    image: '/images/PAO_FAMILY_2025_IBP.jpg',
    badge: null,
    smaki: ['Cytrynowy', 'Pomarańczowy'],
  },
  {
    id: 'gold',
    nazwa: 'Pure Arctic Oil Gold',
    podtytul: 'Formuła dla mózgu i wzroku',
    cena: 270,
    cenaPierwszyMiesiac: 540,
    opis: 'Najwyższa zawartość DHA na rynku. Niemal dwukrotnie więcej DHA dla wsparcia mózgu i wzroku. Z luteiną i witaminą A.',
    dlakogo: 'Dla seniorów dbających o pamięć i ostrość widzenia',
    korzysci: [
      '1430 mg DHA',
      'Luteina 10 mg',
      'Witamina A',
      '2000 mg EPA+DHA w porcji',
    ],
    sklad: {
      omega3: '2290 mg',
      epa: '570 mg',
      dha: '1430 mg',
      epaDhaRazem: '2000 mg',
      luteina: '10 mg',
      witaminaA: '400 μg RE (50% RWS)',
      vitaminaD3: '20 μg (400% RWS)',
    },
    icon: Brain,
    image: '/images/Pure Arctic Oil Gold 2.jpg',
    badge: 'Dla mózgu',
    smaki: ['Cytrynowy'],
  },
  {
    id: 'heart-energy',
    nazwa: 'Pure Arctic Oil Heart & Energy',
    podtytul: 'Formuła dla serca i energii',
    cena: 270,
    cenaPierwszyMiesiac: 540,
    opis: 'Omega-3 wzbogacona o Kaneka Ubiquinol® — biodostępną formę koenzymu Q10.',
    dlakogo: 'Dla osób 40+ dbających o serce i energię',
    korzysci: [
      'Ubichinol Kaneka® 50 mg — aktywna forma Q10',
      'Wspiera produkcję energii w mitochondriach',
      'Wspiera serce i układ krążenia',
      'Witamina D3',
    ],
    sklad: {
      omega3: '1830 mg',
      epa: '650 mg',
      dha: '770 mg',
      epaDhaRazem: '1420 mg',
      ubichinol: '50 mg (Kaneka Ubiquinol®)',
      vitaminaD3: '20 μg (400% RWS)',
    },
    icon: Heart,
    image: '/images/PAO_HE_2025_IBP.jpg',
    badge: 'Dla serca',
    smaki: ['Cytrynowy'],
  },
]

export const pakiety: Pakiet[] = [
  {
    nazwa: 'Pakiet Standard',
    opis: 'Kuracja 6-miesięczna z 1 testem',
    cenaStart: 535,
    cenaMiesieczna: 172,
    zawiera: [
      '2× Pure Arctic Oil (1. miesiąc)',
      '1× Test Omega-3 Vitas (na start)',
      '1× Pure Arctic Oil (miesiące 2–6)',
      '1× Essential (bonus w 4. miesiącu)',
    ],
    oszczednosc: null,
    popularny: false,
  },
  {
    nazwa: 'Pakiet Premium',
    opis: 'Kuracja 6-miesięczna z 2 testami',
    cenaStart: 637,
    cenaMiesieczna: 172,
    zawiera: [
      '2× Pure Arctic Oil (1. miesiąc)',
      '1× Test Omega-3 Vitas (na start)',
      '1× Pure Arctic Oil (miesiące 2–6)',
      '1× Essential (bonus w 4. miesiącu)',
      '1× Test Omega-3 Vitas (5. miesiąc)',
    ],
    oszczednosc: 'Drugi test w cenie',
    popularny: true,
  },
]
