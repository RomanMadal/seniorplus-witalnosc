// Protokoły Zdrowia Seniora - Eqology + Klimuszko
// Łączymy norweską naukę z polską tradycją ziołową

import Link from 'next/link'
import Image from 'next/image'
import PremiumLogo from '@/components/PremiumLogo'
import { FadeIn, FadeInLeft, FadeInRight } from '@/components/AnimatedSection'
import {
  Heart, Brain, Clock, Bone, Moon,
  Check, Leaf, Beaker, Shield, Star,
  ArrowRight, Sparkles
} from 'lucide-react'

// Dane protokołów zdrowia
const protokoly = [
  {
    id: 'serce',
    nazwa: 'Protokół SERCE',
    ikona: Heart,
    kolor: 'from-red-500 to-red-600',
    kolorBg: 'bg-red-50',
    kolorBorder: 'border-red-200',
    problem: 'Zmęczenie, ciśnienie, cholesterol, brak energii',
    opis: 'Kompleksowe wsparcie układu sercowo-naczyniowego łączące nowoczesne omega-3 z koenzymem Q10 i tradycyjne zioła nasercowe.',
    eqology: {
      produkt: 'Pure Arctic Oil Heart & Energy',
      dzialanie: 'Omega-3 (1420 mg EPA+DHA) + Ubichinol Kaneka® 50 mg wspierają serce i produkcję energii w mitochondriach',
      cena: 270,
    },
    klimuszko: {
      produkt: 'Eliksir Nasercowy',
      dzialanie: 'Tradycyjna receptura ziołowa Ojca Klimuszko wspierająca prawidłową pracę serca',
      cena: 119,
    },
    synergia: 'Omega-3 chroni naczynia od wewnątrz (błony komórkowe), Q10 zasila serce energią, zioła regulują rytm i ciśnienie.',
    dlakogo: 'Osoby 50+ dbające o serce, z historią problemów sercowo-naczyniowych w rodzinie',
  },
  {
    id: 'mozg',
    nazwa: 'Protokół MÓZG',
    ikona: Brain,
    kolor: 'from-amber-500 to-amber-600',
    kolorBg: 'bg-amber-50',
    kolorBorder: 'border-amber-200',
    problem: 'Problemy z pamięcią, koncentracją, "mgła mózgowa"',
    opis: 'Maksymalne wsparcie funkcji poznawczych dzięki najwyższej dawce DHA na rynku w połączeniu z ziołami wspierającymi krążenie mózgowe.',
    eqology: {
      produkt: 'Pure Arctic Oil Gold',
      dzialanie: 'Aż 1430 mg DHA (prawie 2x więcej!) + Luteina 10 mg + Witamina A dla mózgu i wzroku',
      cena: 270,
    },
    klimuszko: {
      produkt: 'Mieszanka ziołowa Mózg i Pamięć',
      dzialanie: 'Zioła wspierające koncentrację, pamięć i krążenie mózgowe',
      cena: 50,
    },
    synergia: 'DHA to budulec błon neuronów - odbudowuje strukturę mózgu. Zioła poprawiają mikrokrążenie i dotlenienie.',
    dlakogo: 'Seniorzy dbający o ostrość umysłu, osoby z obawami o demencję/Alzheimera',
  },
  {
    id: 'dlugowiecznosc',
    nazwa: 'Protokół DŁUGOWIECZNOŚĆ',
    ikona: Clock,
    kolor: 'from-emerald-500 to-emerald-600',
    kolorBg: 'bg-emerald-50',
    kolorBorder: 'border-emerald-200',
    problem: 'Spadek witalności, chęć życia dłużej i zdrowiej',
    opis: 'Fundament zdrowego starzenia się - sprawdzona baza omega-3 połączona z legendarnym Eliksirem Długowieczności według 40-letniej receptury.',
    eqology: {
      produkt: 'Pure Arctic Oil (Classic)',
      dzialanie: 'Full spectrum omega-3 (1420 mg EPA+DHA) + organiczna oliwa z oliwek + Witamina D3',
      cena: 172,
    },
    klimuszko: {
      produkt: 'Eliksir Długowieczności',
      dzialanie: 'Legendarna receptura Ojca Klimuszko na długie i zdrowe życie, stosowana od 1986 roku',
      cena: 119,
    },
    synergia: 'Omega-3 regeneruje każdą komórkę organizmu. Eliksir Długowieczności to kwintesencja 40 lat doświadczeń ziołowych.',
    dlakogo: 'Każdy senior 60+, który chce żyć długo, aktywnie i bez chorób',
  },
  {
    id: 'stawy',
    nazwa: 'Protokół STAWY',
    ikona: Bone,
    kolor: 'from-blue-500 to-blue-600',
    kolorBg: 'bg-blue-50',
    kolorBorder: 'border-blue-200',
    problem: 'Bóle kolan, bioder, kręgosłupa, sztywność stawów',
    opis: 'Dwukierunkowe działanie: omega-3 wycisza stany zapalne od wewnątrz, maść ziołowa łagodzi ból od zewnątrz.',
    eqology: {
      produkt: 'Pure Arctic Oil (Classic)',
      dzialanie: 'Omega-3 naturalnie redukują stany zapalne w stawach (udowodnione naukowo)',
      cena: 172,
    },
    klimuszko: {
      produkt: 'Dermaticus Mazidło',
      dzialanie: 'Maść ziołowa na stawy i kręgosłup - miejscowe łagodzenie bólu i sztywności',
      cena: 89,
    },
    synergia: 'Omega-3 działają systemowo (cały organizm), maść działa miejscowo (tam gdzie boli). Razem = szybsza ulga.',
    dlakogo: 'Osoby z bólami stawów, artretyzmem, po kontuzjach, z problemami kręgosłupa',
  },
  {
    id: 'sen',
    nazwa: 'Protokół SEN',
    ikona: Moon,
    kolor: 'from-indigo-500 to-indigo-600',
    kolorBg: 'bg-indigo-50',
    kolorBorder: 'border-indigo-200',
    problem: 'Bezsenność, niespokojny sen, budzenie się w nocy',
    opis: 'Wsparcie regeneracji nocnej - omega-3 odbudowują układ nerwowy, zioła ułatwiają zasypianie i głęboki sen.',
    eqology: {
      produkt: 'Pure Arctic Oil (Classic)',
      dzialanie: 'Omega-3 wspierają produkcję melatoniny i regenerację układu nerwowego podczas snu',
      cena: 172,
    },
    klimuszko: {
      produkt: 'Nalewka na wsparcie prawidłowego snu',
      dzialanie: 'Naturalne zioła uspokajające, ułatwiające zasypianie bez efektu "kaca"',
      cena: 50,
    },
    synergia: 'Omega-3 naprawiają neurony w nocy, zioła uspokajają umysł przed snem. Efekt: głębszy, bardziej regenerujący sen.',
    dlakogo: 'Osoby z problemami ze snem, zestresowane, z nieregularnym rytmem dobowym',
  },
]

export default function ProtokolyZdrowiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-emerald-50/30">
      {/* Nawigacja */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <Link href="/">
              <PremiumLogo variant="nav" size="sm" />
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/produkty" className="text-slate-600 hover:text-amber-600 transition-colors text-sm sm:text-base hidden sm:block">
                Produkty Omega-3
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
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden">
        {/* Dekoracje */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-amber-400/20 to-transparent rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-emerald-400/30">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-100">Nowość: Eqology + Klimuszko</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-amber-400 bg-clip-text text-transparent">
                Protokoły Zdrowia Seniora
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
              Łączymy <strong className="text-amber-300">norweską naukę omega-3</strong> z{' '}
              <strong className="text-emerald-300">polską tradycją ziołową</strong>
              <br className="hidden sm:block" />
              dla kompleksowego wsparcia Twojego zdrowia.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-10">
              {/* Logo Eqology */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
                <div className="flex items-center gap-3">
                  <Beaker className="w-8 h-8 text-amber-400" />
                  <div className="text-left">
                    <p className="text-white font-bold">Eqology</p>
                    <p className="text-slate-400 text-sm">Norwegia • Omega-3 • Nauka</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <span className="text-3xl text-emerald-400">+</span>
              </div>

              {/* Logo Klimuszko */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
                <div className="flex items-center gap-3">
                  <Leaf className="w-8 h-8 text-emerald-400" />
                  <div className="text-left">
                    <p className="text-white font-bold">Zioła Ojca Klimuszko</p>
                    <p className="text-slate-400 text-sm">Polska • Zioła • Tradycja od 1986</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Sekcja: Dlaczego łączymy? */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Dlaczego łączymy Eqology z Klimuszko?
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
                Bo razem działają lepiej niż osobno
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
            <FadeInLeft>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Beaker className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg mb-1">Eqology działa OD WEWNĄTRZ</h3>
                    <p className="text-slate-600">
                      Omega-3 wbudowują się w błony każdej komórki Twojego ciała.
                      Regeneracja na poziomie molekularnym - serce, mózg, stawy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg mb-1">Klimuszko działa OD ZEWNĄTRZ</h3>
                    <p className="text-slate-600">
                      Zioła wspierają konkretne narządy i funkcje organizmu.
                      40 lat sprawdzonych receptur dla serca, trawienia, snu.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg mb-1">RAZEM = Pełne pokrycie</h3>
                    <p className="text-slate-600">
                      Nowoczesna nauka + tradycyjna mądrość.
                      Efekty szybciej i głębiej niż każde z osobna.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-emerald-400" />
                  Gwarancja jakości
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span><strong className="text-amber-300">Eqology:</strong> Certyfikat MSC, GOED, Made in Norway</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span><strong className="text-emerald-300">Klimuszko:</strong> 40 lat na rynku, od 1986 roku</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span><strong className="text-amber-300">Test Vitas:</strong> Sprawdź swoje omega-3 w laboratorium</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span><strong className="text-emerald-300">Ojciec Klimuszko:</strong> Ponad 130 receptur ziołowych</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-700">
                  <p className="text-slate-400 text-sm">
                    Współpraca z <strong className="text-white">Fundacją SeniorPlus</strong> -
                    ponad 750 000 seniorów w sieci
                  </p>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Sekcja: 5 Protokołów */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-emerald-50/50 to-amber-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                5 Protokołów Zdrowia Seniora
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
                Wybierz protokół dopasowany do Twoich potrzeb
              </p>
            </div>
          </FadeIn>

          <div className="space-y-8">
            {protokoly.map((protokol, index) => {
              const Ikona = protokol.ikona
              return (
                <FadeIn key={protokol.id} delay={index * 0.1}>
                  <div className={`bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden border-2 ${protokol.kolorBorder} hover:shadow-2xl transition-all`}>
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${protokol.kolor} p-6 sm:p-8 text-white`}>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                          <Ikona className="w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold">{protokol.nazwa}</h3>
                          <p className="text-white/80 mt-1">{protokol.problem}</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8">
                      <p className="text-slate-600 mb-6 text-lg">{protokol.opis}</p>

                      {/* Produkty */}
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        {/* Eqology */}
                        <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
                          <div className="flex items-center gap-2 mb-3">
                            <Beaker className="w-5 h-5 text-amber-600" />
                            <span className="font-bold text-amber-800">EQOLOGY</span>
                          </div>
                          <h4 className="font-bold text-slate-800 mb-2">{protokol.eqology.produkt}</h4>
                          <p className="text-slate-600 text-sm mb-3">{protokol.eqology.dzialanie}</p>
                          <p className="font-bold text-amber-600">{protokol.eqology.cena} PLN / miesiąc</p>
                        </div>

                        {/* Klimuszko */}
                        <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
                          <div className="flex items-center gap-2 mb-3">
                            <Leaf className="w-5 h-5 text-emerald-600" />
                            <span className="font-bold text-emerald-800">KLIMUSZKO</span>
                          </div>
                          <h4 className="font-bold text-slate-800 mb-2">{protokol.klimuszko.produkt}</h4>
                          <p className="text-slate-600 text-sm mb-3">{protokol.klimuszko.dzialanie}</p>
                          <p className="font-bold text-emerald-600">~{protokol.klimuszko.cena} PLN</p>
                        </div>
                      </div>

                      {/* Synergia */}
                      <div className={`${protokol.kolorBg} rounded-xl p-5 border ${protokol.kolorBorder} mb-6`}>
                        <div className="flex items-start gap-3">
                          <Sparkles className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-bold text-slate-800 mb-1">Synergia działania:</p>
                            <p className="text-slate-600">{protokol.synergia}</p>
                          </div>
                        </div>
                      </div>

                      {/* Dla kogo + Cena */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <p className="text-sm text-slate-500 mb-1">Dla kogo:</p>
                          <p className="text-slate-700 font-medium">{protokol.dlakogo}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-slate-500 mb-1">Razem od:</p>
                          <p className="text-2xl font-bold text-slate-800">
                            ~{protokol.eqology.cena + protokol.klimuszko.cena} PLN
                            <span className="text-sm font-normal text-slate-500"> / start</span>
                          </p>
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

      {/* Sekcja: Jak zacząć */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Jak zacząć?
              </h2>
              <p className="text-lg sm:text-xl text-slate-600">
                3 proste kroki do Twojego Protokołu Zdrowia
              </p>
            </div>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <div className="flex items-start gap-4 sm:gap-6 bg-slate-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl shadow-lg">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">Zapisz się na bezpłatną konsultację</h3>
                  <p className="text-slate-600">
                    Wypełnij formularz - zadzwonimy i porozmawiamy o Twoich potrzebach zdrowotnych.
                    Pomożemy wybrać odpowiedni Protokół Zdrowia.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex items-start gap-4 sm:gap-6 bg-slate-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl shadow-lg">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">Zrób test Omega-3 (opcjonalnie, ale polecamy!)</h3>
                  <p className="text-slate-600">
                    Test Vitas pokaże Twój rzeczywisty poziom omega-3.
                    "Nie zgaduj - sprawdź" - wtedy wiesz, czy suplementacja działa.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex items-start gap-4 sm:gap-6 bg-slate-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl shadow-lg">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">Rozpocznij swój Protokół Zdrowia</h3>
                  <p className="text-slate-600">
                    Otrzymujesz produkty Eqology + Klimuszko dopasowane do Twoich potrzeb.
                    Wspieramy Cię przez cały okres kuracji!
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA końcowe */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-emerald-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Gotowy na swój Protokół Zdrowia?
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-8">
              Zapisz się na bezpłatną konsultację. Pomożemy wybrać protokół dopasowany do Twoich potrzeb.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/#formularz"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 font-bold text-xl py-5 px-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Umów bezpłatną rozmowę
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/produkty"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold py-5 px-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
              >
                Zobacz produkty Omega-3
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stopka */}
      <footer className="bg-slate-900 text-slate-400 py-10 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-center sm:text-left">
              <p className="text-sm mb-2">
                © 2026 SeniorPlus Witalność 60+
              </p>
              <p className="text-xs text-slate-500">
                Eqology Independent Business Partner • Partner Programowy Klimuszko.pl
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/" className="hover:text-amber-400 transition-colors">Strona główna</Link>
              <Link href="/produkty" className="hover:text-amber-400 transition-colors">Produkty</Link>
              <Link href="/#formularz" className="hover:text-amber-400 transition-colors">Kontakt</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
