// TODO (Roman): claimy zdrowotne w `dzialanie` i `synergia` wymagają sparowania
// z EFSA-authorized health claims lub przeformułowania (zob. CLAUDE.md compliance).

import { Heart, Brain, Clock, Bone, Moon, type LucideIcon } from 'lucide-react'

export type Protocol = {
  id: string
  nazwa: string
  icon: LucideIcon
  image: string
  problem: string
  opis: string
  eqology: { produkt: string; dzialanie: string; cena: number }
  klimuszko: { produkt: string; dzialanie: string; cena: number }
  synergia: string
  dlakogo: string
}

export const protocols: Protocol[] = [
  {
    id: 'serce',
    nazwa: 'Protokół Serce',
    icon: Heart,
    image: '/images/PAO_HE_2025_IBP.jpg',
    problem: 'Zmęczenie, ciśnienie, cholesterol, brak energii',
    opis: 'Wsparcie układu sercowo-naczyniowego łączące omega-3 z koenzymem Q10 i tradycyjne zioła nasercowe.',
    eqology: {
      produkt: 'Pure Arctic Oil Heart & Energy',
      dzialanie: 'Omega-3 (1420 mg EPA+DHA) + Ubichinol Kaneka® 50 mg',
      cena: 270,
    },
    klimuszko: {
      produkt: 'Eliksir Nasercowy',
      dzialanie: 'Tradycyjna receptura ziołowa Ojca Klimuszko',
      cena: 119,
    },
    synergia: 'Omega-3 wspiera naczynia, Q10 zasila serce energią, zioła wspierają pracę układu krążenia.',
    dlakogo: 'Osoby 50+ dbające o serce',
  },
  {
    id: 'mozg',
    nazwa: 'Protokół Mózg',
    icon: Brain,
    image: '/images/Pure Arctic Oil Gold 2.jpg',
    problem: 'Problemy z pamięcią, koncentracją, „mgła mózgowa"',
    opis: 'Wsparcie funkcji poznawczych dzięki wysokiej dawce DHA w połączeniu z ziołami.',
    eqology: {
      produkt: 'Pure Arctic Oil Gold',
      dzialanie: '1430 mg DHA + Luteina 10 mg + Witamina A',
      cena: 270,
    },
    klimuszko: {
      produkt: 'Mieszanka ziołowa Mózg i Pamięć',
      dzialanie: 'Zioła wspierające koncentrację i krążenie mózgowe',
      cena: 50,
    },
    synergia: 'DHA jest budulcem błon komórkowych neuronów. Zioła wspierają mikrokrążenie.',
    dlakogo: 'Seniorzy dbający o ostrość umysłu',
  },
  {
    id: 'dlugowiecznosc',
    nazwa: 'Protokół Długowieczność',
    icon: Clock,
    image: '/images/PAO_FAMILY_2025_IBP.jpg',
    problem: 'Spadek witalności, chęć życia dłużej i zdrowiej',
    opis: 'Fundament zdrowego starzenia — sprawdzona baza omega-3 z Eliksirem Długowieczności (receptura od 1986 r.).',
    eqology: {
      produkt: 'Pure Arctic Oil (Classic)',
      dzialanie: 'Pełne spektrum omega-3 (1420 mg EPA+DHA) + Witamina D3',
      cena: 172,
    },
    klimuszko: {
      produkt: 'Eliksir Długowieczności',
      dzialanie: 'Receptura ziołowa Ojca Klimuszko stosowana od 1986 roku',
      cena: 119,
    },
    synergia: 'Omega-3 wspiera regenerację komórek. Eliksir to wieloletnia tradycja ziołolecznictwa.',
    dlakogo: 'Każdy senior 60+',
  },
  {
    id: 'stawy',
    nazwa: 'Protokół Stawy',
    icon: Bone,
    image: '/images/Omega-3 Test Lifestyle.jpg',
    problem: 'Bóle kolan, bioder, kręgosłupa, sztywność stawów',
    opis: 'Dwukierunkowe działanie: omega-3 wspomaga od wewnątrz, maść ziołowa łagodzi miejscowo.',
    eqology: {
      produkt: 'Pure Arctic Oil (Classic)',
      dzialanie: 'Omega-3 wspomaga zdrowie stawów',
      cena: 172,
    },
    klimuszko: {
      produkt: 'Dermaticus Mazidło',
      dzialanie: 'Maść ziołowa na stawy i kręgosłup — miejscowe łagodzenie',
      cena: 89,
    },
    synergia: 'Działanie systemowe (wewnętrzne) + miejscowe (zewnętrzne).',
    dlakogo: 'Osoby z bólami stawów lub problemami kręgosłupa',
  },
  {
    id: 'sen',
    nazwa: 'Protokół Sen',
    icon: Moon,
    image: '/images/Cover Eqology.jpg',
    problem: 'Bezsenność, niespokojny sen, budzenie się w nocy',
    opis: 'Wsparcie regeneracji nocnej — omega-3 dla układu nerwowego, zioła ułatwiające zasypianie.',
    eqology: {
      produkt: 'Pure Arctic Oil (Classic)',
      dzialanie: 'Omega-3 wspiera układ nerwowy i regenerację',
      cena: 172,
    },
    klimuszko: {
      produkt: 'Nalewka na wsparcie prawidłowego snu',
      dzialanie: 'Zioła uspokajające, ułatwiające zasypianie',
      cena: 50,
    },
    synergia: 'Wsparcie regeneracji + ułatwienie zasypiania.',
    dlakogo: 'Osoby z problemami ze snem',
  },
]
