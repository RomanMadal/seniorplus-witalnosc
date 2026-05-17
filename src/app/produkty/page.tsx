// Strona produktów Eqology - kuracja omega-3
// "Nie zgaduj - sprawdź" z testem Vitas

import Link from 'next/link'
import PremiumLogo from '@/components/PremiumLogo'
import { FadeIn, FadeInLeft, FadeInRight } from '@/components/AnimatedSection'
import { Check, Droplets, Brain, Heart, Eye, Zap, TestTube, Clock, Award, Shield } from 'lucide-react'

// Dane produktów - DOKŁADNE SKŁADY z oficjalnej strony Eqology
const produkty = [
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
    kolor: 'from-blue-500 to-blue-600',
    ikona: Droplets,
    badge: null,
    smaki: ['Cytrynowy', 'Pomarańczowy'],
  },
  {
    id: 'gold',
    nazwa: 'Pure Arctic Oil Gold',
    podtytul: 'Formuła dla mózgu i wzroku',
    cena: 270,
    cenaPierwszyMiesiac: 540,
    opis: 'Najwyższa zawartość DHA na rynku! Prawie 2x więcej DHA dla maksymalnego wsparcia mózgu i wzroku. Z luteiną i witaminą A.',
    dlakogo: 'Dla seniorów dbających o pamięć i ostrość widzenia',
    korzysci: [
      'Aż 1430 mg DHA - prawie 2x więcej!',
      'Luteina 10 mg chroni siatkówkę oka',
      'Witamina A wspiera wzrok',
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
    kolor: 'from-amber-500 to-amber-600',
    ikona: Brain,
    badge: 'Dla mózgu',
    smaki: ['Cytrynowy'],
  },
  {
    id: 'heart-energy',
    nazwa: 'Pure Arctic Oil Heart & Energy',
    podtytul: 'Formuła dla serca i energii',
    cena: 270,
    cenaPierwszyMiesiac: 540,
    opis: 'Omega-3 wzbogacona o Kaneka Ubiquinol® - najbardziej biodostępną formę koenzymu Q10. Wspiera serce i energię komórkową.',
    dlakogo: 'Dla osób 40+ dbających o serce i energię',
    korzysci: [
      'Ubichinol Kaneka® 50 mg - aktywna forma Q10',
      'Wspiera produkcję energii w mitochondriach',
      'Chroni serce i układ krążenia',
      'Witamina D3 wspiera odporność',
    ],
    sklad: {
      omega3: '1830 mg',
      epa: '650 mg',
      dha: '770 mg',
      epaDhaRazem: '1420 mg',
      ubichinol: '50 mg (Kaneka Ubiquinol®)',
      vitaminaD3: '20 μg (400% RWS)',
    },
    kolor: 'from-red-500 to-red-600',
    ikona: Heart,
    badge: 'Dla serca',
    smaki: ['Cytrynowy'],
  },
]

const pakiety = [
  {
    nazwa: 'Pakiet Standard',
    opis: 'Kuracja 6-miesięczna z 1 testem',
    cenaStart: 535,
    cenaMiesieczna: 172,
    zawiera: [
      '2x Pure Arctic Oil (1. miesiąc)',
      '1x Test Omega-3 Vitas (na start)',
      '1x Pure Arctic Oil (miesiące 2-6)',
      '1x Essential (bonus w 4. miesiącu)',
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
      '2x Pure Arctic Oil (1. miesiąc)',
      '1x Test Omega-3 Vitas (na start)',
      '1x Pure Arctic Oil (miesiące 2-6)',
      '1x Essential (bonus w 4. miesiącu)',
      '1x Test Omega-3 Vitas (5. miesiąc)',
    ],
    oszczednosc: 'Drugi test gratis!',
    popularny: true,
  },
]

export default function ProduktyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-amber-50/30">
      {/* Nawigacja */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <Link href="/">
              <PremiumLogo variant="nav" size="sm" />
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-slate-600 hover:text-amber-600 transition-colors text-sm sm:text-base">
                Strona główna
              </Link>
              <Link
                href="/#formularz"
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-sm sm:text-base font-semibold shadow-lg"
              >
                Zapisz się
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero sekcja */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Dekoracje */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-amber-400/10 to-transparent rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-amber-400/30">
              <TestTube className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-100">Nie zgaduj - sprawdź!</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Kuracja Omega-3
              </span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl text-slate-300">
                z testem laboratoryjnym
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Sprawdź swój poziom omega-3, rozpocznij 6-miesięczną kurację i zobacz wymierne efekty.
              <strong className="text-amber-300"> 9 na 10 osób ma niedobory</strong> - czy Ty też?
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-5 h-5 text-amber-400" />
                <span className="text-white text-sm">TOTOX 4-6 (norma: 26)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-amber-400" />
                <span className="text-white text-sm">Certyfikat MSC</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Zap className="w-5 h-5 text-amber-400" />
                <span className="text-white text-sm">Efekty po 3-6 mies.</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Sekcja: Dlaczego test? */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Dlaczego zaczynamy od testu?
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
                Test Vitas z norweskiego laboratorium pokazuje Twój rzeczywisty poziom omega-3
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
            <FadeInLeft>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <TestTube className="w-8 h-8 text-amber-400" />
                  Test Omega-3 Vitas
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Indeks Omega-3</p>
                      <p className="text-slate-400 text-sm">Cel: powyżej 8%, idealnie 10-12%</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Stosunek Omega-6/Omega-3</p>
                      <p className="text-slate-400 text-sm">Cel: 3:1 (średnia Polaka: 15:1!)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Profil 26 kwasów tłuszczowych</p>
                      <p className="text-slate-400 text-sm">Pełna analiza stanu zdrowia</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-500/20 rounded-xl p-4 border border-amber-500/30">
                  <p className="text-amber-300 font-semibold mb-1">Jak to działa?</p>
                  <p className="text-slate-300 text-sm">
                    Nakłuwasz palec, nanosisz 2 krople na kartę, wysyłasz do Oslo.
                    Wyniki online po 20-25 dniach.
                  </p>
                </div>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="space-y-6">
                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                      90%
                    </div>
                    <div>
                      <p className="font-bold text-red-700">9 na 10 osób</p>
                      <p className="text-red-600 text-sm">ma niedobory omega-3</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm">
                    Nawet osoby jedzące ryby 2x w tygodniu często mają niedobory.
                    Bez testu to tylko zgadywanie!
                  </p>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                      ✓
                    </div>
                    <div>
                      <p className="font-bold text-green-700">Po 5 miesiącach</p>
                      <p className="text-green-600 text-sm">re-test pokazuje efekty</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm">
                    Klient widzi poprawę parametrów → zostaje na zawsze.
                    To nie wiara, to dowód naukowy!
                  </p>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Sekcja: Timeline kuracji */}
      <section className="py-12 sm:py-16 md:py-20 bg-amber-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Jak działa 6-miesięczna kuracja?
              </h2>
              <p className="text-lg sm:text-xl text-slate-600">
                Dlaczego w pierwszym miesiącu dostajesz 2 butelki?
              </p>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Linia timeline - ukryta na mobile */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 transform -translate-x-1/2"></div>

            <div className="space-y-8 md:space-y-0">
              {/* Miesiąc 1 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <FadeInLeft>
                  <div className="md:text-right md:pr-12">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-300">
                      <div className="flex items-center gap-3 md:justify-end mb-3">
                        <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">Miesiąc 1</span>
                        <Clock className="w-5 h-5 text-amber-500" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Faza nasycenia</h3>
                      <p className="text-slate-600 mb-3">
                        <strong>2 butelki + TEST</strong> - podwójna dawka przerywa stany zapalne
                        i szybko nasyca błony komórkowe omega-3.
                      </p>
                      <p className="text-amber-600 font-semibold">Dawka: 0.30 ml/kg masy ciała</p>
                    </div>
                  </div>
                </FadeInLeft>
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-8 h-8 bg-amber-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                </div>
              </div>

              {/* Miesiące 2-3 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <div className="hidden md:flex items-center justify-center order-1">
                  <div className="w-8 h-8 bg-amber-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                </div>
                <FadeInRight>
                  <div className="md:pl-12 order-2">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-slate-700 text-white px-3 py-1 rounded-full text-sm font-bold">Miesiąc 2-3</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Wymiana błon komórkowych</h3>
                      <p className="text-slate-600 mb-3">
                        <strong>1 butelka/mies.</strong> - standardowa dawka podtrzymująca.
                        Komórki zaczynają się regenerować.
                      </p>
                      <p className="text-slate-500">Dawka: 0.15 ml/kg masy ciała</p>
                    </div>
                  </div>
                </FadeInRight>
              </div>

              {/* Miesiąc 4 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <FadeInLeft>
                  <div className="md:text-right md:pr-12">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-300">
                      <div className="flex items-center gap-3 md:justify-end mb-3">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">Miesiąc 4</span>
                        <Zap className="w-5 h-5 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Pełna wymiana krwinek</h3>
                      <p className="text-slate-600 mb-3">
                        Czerwone krwinki żyją ~120 dni. Teraz masz już zupełnie nową,
                        zdrową krew bogatą w omega-3!
                      </p>
                      <p className="text-green-600 font-semibold">+ BONUS: Eqology Essential gratis!</p>
                    </div>
                  </div>
                </FadeInLeft>
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                </div>
              </div>

              {/* Miesiąc 5 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <div className="hidden md:flex items-center justify-center order-1">
                  <div className="w-8 h-8 bg-amber-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                </div>
                <FadeInRight>
                  <div className="md:pl-12 order-2">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">Miesiąc 5</span>
                        <TestTube className="w-5 h-5 text-amber-500" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">RE-TEST - zobacz efekty!</h3>
                      <p className="text-slate-600 mb-3">
                        Drugi test pokazuje jak bardzo poprawiły się Twoje parametry.
                        <strong> To moment "wow"!</strong>
                      </p>
                      <p className="text-amber-600 font-semibold">Indeks Omega-3: cel 8-12%</p>
                    </div>
                  </div>
                </FadeInRight>
              </div>

              {/* Miesiąc 6+ */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <FadeInLeft>
                  <div className="md:text-right md:pr-12">
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-lg text-white">
                      <div className="flex items-center gap-3 md:justify-end mb-3">
                        <span className="bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">Miesiąc 6+</span>
                        <Heart className="w-5 h-5 text-amber-400" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Pełne nasycenie organizmu</h3>
                      <p className="text-slate-300 mb-3">
                        Narządy wewnętrzne i układ nerwowy są w pełni nasycone.
                        Kontynuujesz dla utrzymania efektów.
                      </p>
                      <p className="text-amber-400 font-semibold">Klienci zostają na lata!</p>
                    </div>
                  </div>
                </FadeInLeft>
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-8 h-8 bg-amber-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sekcja: Produkty */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Wybierz swój wariant Omega-3
              </h2>
              <p className="text-lg sm:text-xl text-slate-600">
                Każdy wariant to 100% świeży olej z dzikiego dorsza arktycznego
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {produkty.map((produkt, index) => {
              const Ikona = produkt.ikona
              return (
                <FadeIn key={produkt.id} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border-2 border-slate-100 hover:border-amber-300 transition-all hover:shadow-2xl overflow-hidden h-full flex flex-col">
                    {/* Header z kolorem */}
                    <div className={`bg-gradient-to-r ${produkt.kolor} p-6 text-white relative`}>
                      {produkt.badge && (
                        <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                          {produkt.badge}
                        </span>
                      )}
                      <Ikona className="w-12 h-12 mb-4 opacity-90" />
                      <h3 className="text-xl sm:text-2xl font-bold">{produkt.nazwa}</h3>
                      <p className="text-white/80 text-sm">{produkt.podtytul}</p>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      <p className="text-slate-600 mb-4 text-sm">{produkt.opis}</p>

                      {/* Tabela składu */}
                      <div className="bg-slate-50 rounded-xl p-4 mb-4">
                        <p className="text-xs text-slate-500 mb-2 font-semibold uppercase">Skład w 10 ml:</p>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-slate-600">EPA + DHA:</span>
                            <span className="font-bold text-slate-800">{produkt.sklad.epaDhaRazem}</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-slate-500 pl-2">– EPA:</span>
                            <span className="text-slate-600">{produkt.sklad.epa}</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-slate-500 pl-2">– DHA:</span>
                            <span className="text-slate-600">{produkt.sklad.dha}</span>
                          </div>
                          {produkt.sklad.ubichinol && (
                            <div className="flex justify-between pt-1 border-t border-slate-200">
                              <span className="text-slate-600">Koenzym Q10:</span>
                              <span className="font-bold text-red-600">{produkt.sklad.ubichinol}</span>
                            </div>
                          )}
                          {produkt.sklad.luteina && (
                            <div className="flex justify-between pt-1 border-t border-slate-200">
                              <span className="text-slate-600">Luteina:</span>
                              <span className="font-bold text-amber-600">{produkt.sklad.luteina}</span>
                            </div>
                          )}
                          {produkt.sklad.witaminaA && (
                            <div className="flex justify-between text-xs">
                              <span className="text-slate-500">Witamina A:</span>
                              <span className="text-slate-600">{produkt.sklad.witaminaA}</span>
                            </div>
                          )}
                          <div className="flex justify-between text-xs pt-1 border-t border-slate-200">
                            <span className="text-slate-500">Witamina D3:</span>
                            <span className="text-slate-600">{produkt.sklad.vitaminaD3}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4 flex-grow">
                        {produkt.korzysci.map((korzysc, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 text-sm">{korzysc}</span>
                          </div>
                        ))}
                      </div>

                      {/* Smaki */}
                      {produkt.smaki && (
                        <div className="flex gap-2 mb-4">
                          {produkt.smaki.map((smak) => (
                            <span key={smak} className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                              {smak}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Cena */}
                      <div className="border-t border-slate-100 pt-4 mt-auto">
                        <div className="flex justify-between items-end mb-4">
                          <div>
                            <p className="text-xs text-slate-500">1. miesiąc (2 butelki)</p>
                            <p className="text-2xl font-bold text-slate-800">{produkt.cenaPierwszyMiesiac} PLN</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-slate-500">od 2. miesiąca</p>
                            <p className="text-lg font-semibold text-slate-600">{produkt.cena} PLN/mies.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sekcja: Pakiety z testem */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Pakiety z testem Vitas
              </h2>
              <p className="text-lg sm:text-xl text-slate-300">
                Wybierz pakiet i zacznij kurację z pełną wiedzą o swoim organizmie
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {pakiety.map((pakiet, index) => (
              <FadeIn key={pakiet.nazwa} delay={index * 0.1}>
                <div className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative ${pakiet.popularny ? 'ring-4 ring-amber-400' : ''}`}>
                  {pakiet.popularny && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                        POLECANY
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">{pakiet.nazwa}</h3>
                  <p className="text-slate-600 mb-6">{pakiet.opis}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-4xl font-bold text-slate-800">{pakiet.cenaStart}</span>
                      <span className="text-slate-500">PLN na start</span>
                    </div>
                    <p className="text-slate-500 text-sm">potem {pakiet.cenaMiesieczna} PLN/miesiąc</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {pakiet.zawiera.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  {pakiet.oszczednosc && (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-3 mb-6">
                      <p className="text-green-700 font-semibold text-sm text-center">{pakiet.oszczednosc}</p>
                    </div>
                  )}

                  <Link
                    href="/#formularz"
                    className={`block w-full text-center py-4 px-6 rounded-xl font-bold transition-all ${
                      pakiet.popularny
                        ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 shadow-lg hover:shadow-xl'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Wybieram ten pakiet
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Sekcja: Dlaczego Eqology? */}
      <section className="py-12 sm:py-16 md:py-20 bg-amber-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Dlaczego Eqology, a nie tanie omega-3 z apteki?
              </h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <FadeIn delay={0}>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4-6</span>
                </div>
                <h3 className="font-bold text-slate-800 mb-2">TOTOX</h3>
                <p className="text-slate-600 text-sm">
                  Wskaźnik świeżości. Norma to 26, Eqology ma 4-6.
                  <strong> Najświeższy olej na rynku!</strong>
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">22</span>
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Full Spectrum</h3>
                <p className="text-slate-600 text-sm">
                  Zawiera wszystkie 22 naturalne kwasy tłuszczowe z dorsza, nie tylko EPA/DHA.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">MSC + GOED</h3>
                <p className="text-slate-600 text-sm">
                  Certyfikat zrównoważonych połowów i najwyższa jakość potwierdzona przez GOED.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Superior Taste</h3>
                <p className="text-slate-600 text-sm">
                  Nagroda za smak - żadnego "rybiego" posmaku. Cytrynowy aromat.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA końcowe */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Gotowy sprawdzić swój poziom omega-3?
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 mb-8">
              Zapisz się na bezpłatną konsultację. Opowiemy o kuracji i pomożemy wybrać odpowiedni pakiet.
            </p>
            <Link
              href="/#formularz"
              className="inline-block bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 font-bold text-xl py-5 px-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Umów bezpłatną rozmowę
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Stopka */}
      <footer className="bg-slate-900 text-slate-400 py-10 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm mb-4">
            © 2026 SeniorPlus Witalność 60+ | Eqology Independent Business Partner
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <Link href="/" className="hover:text-amber-400 transition-colors">Strona główna</Link>
            <Link href="/#formularz" className="hover:text-amber-400 transition-colors">Kontakt</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
