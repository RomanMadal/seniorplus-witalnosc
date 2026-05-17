// SeniorPlus Witalność 60+ - Nowy design
// Z animacjami GSAP scroll-based jak u Józka + realistyczne zdjęcia

import Image from 'next/image'
import SimpleLeadForm from '@/components/SimpleLeadForm'
import FAQ from '@/components/FAQ'
import { FadeIn, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from '@/components/AnimatedSection'
import Hero3DBackground from '@/components/Hero3DBackground'
import { ScrollReveal, ParallaxImage, AnimatedCounter, StaggerReveal, FloatingElement } from '@/components/ScrollAnimations'
import PremiumLogo from '@/components/PremiumLogo'
import { ClipboardCheck, Phone, Rocket, Shield } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50/30">
      {/* ============================================ */}
      {/* NAWIGACJA - prosta, sticky */}
      {/* ============================================ */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-3 sm:px-6">
          <div className="flex justify-between items-center h-16 sm:h-20 md:h-24">
            {/* Logo - mniejsze na mobile */}
            <div className="hidden sm:block">
              <PremiumLogo variant="nav" size="md" />
            </div>
            <div className="sm:hidden">
              <PremiumLogo variant="nav" size="sm" />
            </div>

            {/* Menu desktop */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="#program" className="text-slate-600 hover:text-amber-600 transition-colors text-base lg:text-lg">
                O programie
              </a>
              <a href="/produkty" className="text-slate-600 hover:text-amber-600 transition-colors text-base lg:text-lg">
                Produkty i cennik
              </a>
              <a href="/protokoly-zdrowia" className="text-slate-600 hover:text-amber-600 transition-colors text-base lg:text-lg">
                Protokoły Zdrowia
              </a>
              <a href="#jak-dziala" className="text-slate-600 hover:text-amber-600 transition-colors text-base lg:text-lg">
                Jak to działa
              </a>
              <a href="#formularz" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-5 lg:px-6 py-2.5 lg:py-3 rounded-xl transition-all text-base lg:text-lg font-semibold shadow-lg shadow-amber-200/50 hover:shadow-amber-300/50">
                Zapisz się
              </a>
            </div>

            {/* Mobile CTA */}
            <a href="#formularz" className="md:hidden bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-lg">
              Zapisz się
            </a>
          </div>
        </div>
      </nav>

      {/* ============================================ */}
      {/* HERO - premium navy + gold */}
      {/* ============================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* 3D Tło - efekty Three.js */}
        <Hero3DBackground />

        {/* Alternatywnie: Video w tle (gdy będzie gotowe) */}
        {/* <VideoBackground src="/videos/hero.mp4" overlay overlayOpacity={0.5} /> */}

        {/* Dekoracyjne kształty - złote akcenty */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-amber-400/10 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-amber-500/5 rounded-full blur-xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Tekst */}
            <FadeInLeft>
              <div className="text-white">
                <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-amber-400/30">
                  <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                  <span className="text-base font-medium text-amber-100">We współpracy z Fundacją SeniorPlus</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent whitespace-nowrap">
                    Witalność po 60-tce
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">zaczyna się tutaj</span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                  Więcej energii, zdrowe stawy, lepsza pamięć.<br/>
                  <span className="text-amber-300">Bezpłatna rozmowa z ekspertem - bez zobowiązań.</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href="#formularz"
                    className="btn-premium text-slate-900 font-bold text-xl py-5 px-10 rounded-2xl text-center shadow-xl"
                  >
                    Umów bezpłatną rozmowę
                  </a>
                </div>

                {/* Badge 750k z animowanym licznikiem */}
                <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm px-5 py-3 rounded-2xl border border-white/10">
                  <AnimatedCounter end={750000} duration={2.5} suffix="+" className="text-4xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent" />
                  <span className="text-slate-400 text-base">seniorów w sieci<br/>Fundacji SeniorPlus</span>
                </div>
              </div>
            </FadeInLeft>

            {/* Zdjęcie produktów Eqology z efektem unoszenia */}
            <FadeInRight delay={0.2}>
              <div className="hidden md:block relative">
                <FloatingElement amplitude={15} duration={4}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 shadow-2xl">
                    <img
                      src="/images/PAO_FAMILY_2025_IBP.jpg"
                      alt="Produkty Omega-3 Premium - Pure Arctic Oil"
                      className="rounded-2xl shadow-lg w-full"
                    />
                    <p className="text-center text-white/80 text-sm mt-4">
                      Pure Arctic Oil - Omega-3 najwyższej jakości
                    </p>
                  </div>
                </FloatingElement>
              </div>
            </FadeInRight>
          </div>
        </div>

        {/* Fala na dole - gradient złoty */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#faf8f5" />
                <stop offset="50%" stopColor="#fef3c7" />
                <stop offset="100%" stopColor="#faf8f5" />
              </linearGradient>
            </defs>
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="url(#waveGradient)"/>
          </svg>
        </div>
      </section>

      {/* ============================================ */}
      {/* SOCIAL PROOF - loga i opinie */}
      {/* ============================================ */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-8 sm:mb-12">
              <p className="text-slate-500 text-base sm:text-lg mb-4 sm:mb-6">Produkty premium od lidera rynku:</p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8">
                {/* Logo Eqology Independent Business Partner */}
                <div className="bg-white rounded-xl sm:rounded-2xl px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-center shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-amber-300 w-full sm:w-auto">
                  <img
                    src="/images/EQOLOGY_logo_black_red_business-partner.png"
                    alt="Eqology Independent Business Partner"
                    className="h-12 sm:h-16 w-auto object-contain"
                  />
                </div>

                {/* Badge EFSA */}
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-4 sm:py-5 flex items-center gap-3 sm:gap-4 border border-amber-200 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto justify-center sm:justify-start">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600" />
                  <div className="text-left">
                    <div className="font-bold text-slate-800 text-sm sm:text-base">EFSA</div>
                    <div className="text-amber-600 text-xs sm:text-sm">Zatwierdzone claims</div>
                  </div>
                </div>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm mt-3 sm:mt-4">We współpracy z Fundacją SeniorPlus • Eqology Independent Business Partner</p>
            </div>
          </FadeIn>

          {/* Opinia z prawdziwym zdjęciem */}
          <FadeIn delay={0.2}>
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-700 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-amber-400/50 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=200&h=200&fit=crop&crop=face"
                    alt="Krystyna - uczestniczka programu"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed mb-3 sm:mb-4 italic">
                    „Od kiedy biorę omega-3 z programu Witalność 60+, mam więcej energii na zabawę z wnukami. Kolana przestały boleć po 3 tygodniach. Polecam każdemu!"
                  </p>
                  <p className="font-semibold text-amber-400 text-sm sm:text-base">Krystyna, 68 lat</p>
                  <p className="text-slate-400 text-xs sm:text-sm">Warszawa • w programie od 6 miesięcy</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================ */}
      {/* PROBLEMY - Czy czujesz że... */}
      {/* ============================================ */}
      <section id="program" className="py-12 sm:py-16 md:py-20 bg-amber-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Czy czujesz, że...
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Te problemy dotyczą wielu osób po 60-tce
              </p>
            </div>
          </FadeIn>

          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-16" staggerDelay={0.2}>
            {/* Problem 1: Energia */}
            <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all h-full group">
              <div className="h-40 sm:h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=400&h=300&fit=crop"
                  alt="Zmęczony senior"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Brakuje Ci energii?</h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Codzienne aktywności męczą Cię bardziej niż kiedyś? Potrzebujesz drzemki po obiedzie?
                </p>
              </div>
            </div>

            {/* Problem 2: Stawy */}
            <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all h-full group">
              <div className="h-40 sm:h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
                  alt="Ból stawów"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Bolą Cię stawy?</h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Kolana, biodra lub plecy dają o sobie znać? Schody stają się wyzwaniem?
                </p>
              </div>
            </div>

            {/* Problem 3: Pamięć */}
            <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all h-full group sm:col-span-2 md:col-span-1">
              <div className="h-40 sm:h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
                  alt="Problemy z pamięcią"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Masz problemy z pamięcią?</h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Zapominasz imiona, daty, gdzie położyłeś klucze? Trudniej Ci się skupić?
                </p>
              </div>
            </div>
          </StaggerReveal>

          <FadeIn>
            <div className="text-center bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 text-white shadow-2xl border border-amber-500/20 card-metallic">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-metallic-gold">
                To może się zmienić!
              </h3>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-6">
                Program Witalność 60+ pomógł już tysiącom seniorów odzyskać energię i radość życia.
                Omega-3 najwyższej jakości + wsparcie eksperta = realne efekty.
              </p>
              <a
                href="#formularz"
                className="btn-premium inline-block text-slate-900 font-bold text-xl py-4 px-10 rounded-2xl"
              >
                Chcę spróbować
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================ */}
      {/* JAK TO DZIAŁA - 3 kroki */}
      {/* ============================================ */}
      <section id="jak-dziala" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
                Jak wygląda współpraca?
              </h2>
              <p className="text-lg sm:text-xl text-slate-600">
                3 proste kroki do lepszego samopoczucia
              </p>
            </div>
          </FadeIn>

          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-8 mb-10 sm:mb-12" staggerDelay={0.2}>
            {/* Krok 1 */}
            <div className="text-center">
              <div className="relative mx-auto mb-4 sm:mb-6 w-fit">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full flex items-center justify-center text-white shadow-xl">
                  <ClipboardCheck className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400" />
                </div>
                <div className="absolute -top-1 -right-1 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-slate-900 font-bold text-base sm:text-lg shadow-lg border-4 border-white">
                  1
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2 sm:mb-3">Zapisz się</h3>
              <p className="text-slate-600 text-base sm:text-lg">
                Wypełnij krótki formularz poniżej. Zajmie Ci to tylko 2 minuty.
              </p>
            </div>

            {/* Krok 2 */}
            <div className="text-center">
              <div className="relative mx-auto mb-4 sm:mb-6 w-fit">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full flex items-center justify-center text-white shadow-xl">
                  <Phone className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400" />
                </div>
                <div className="absolute -top-1 -right-1 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-slate-900 font-bold text-base sm:text-lg shadow-lg border-4 border-white">
                  2
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2 sm:mb-3">Porozmawiamy</h3>
              <p className="text-slate-600 text-base sm:text-lg">
                Zadzwonimy w ciągu 48h, poznamy Twoje potrzeby i odpowiemy na pytania.
              </p>
            </div>

            {/* Krok 3 */}
            <div className="text-center">
              <div className="relative mx-auto mb-4 sm:mb-6 w-fit">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full flex items-center justify-center text-white shadow-xl">
                  <Rocket className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400" />
                </div>
                <div className="absolute -top-1 -right-1 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-slate-900 font-bold text-base sm:text-lg shadow-lg border-4 border-white">
                  3
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2 sm:mb-3">Działaj</h3>
              <p className="text-slate-600 text-base sm:text-lg">
                Otrzymasz spersonalizowany plan i stałe wsparcie na Twojej drodze.
              </p>
            </div>
          </StaggerReveal>

          <FadeIn>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-base sm:text-lg">
              <div className="flex items-center gap-2 bg-amber-50 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-amber-200">
                <span className="text-amber-600 text-lg sm:text-xl">✅</span>
                <span className="text-slate-700 font-medium">Bezpłatnie</span>
              </div>
              <div className="flex items-center gap-2 bg-amber-50 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-amber-200">
                <span className="text-amber-600 text-lg sm:text-xl">✅</span>
                <span className="text-slate-700 font-medium">Bez zobowiązań</span>
              </div>
              <div className="flex items-center gap-2 bg-amber-50 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-amber-200">
                <span className="text-amber-600 text-lg sm:text-xl">✅</span>
                <span className="text-slate-700 font-medium">RODO</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================ */}
      {/* FORMULARZ */}
      {/* ============================================ */}
      <section id="formularz" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative">
        {/* Dekoracje - złote akcenty */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-amber-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-amber-500/5 rounded-full blur-xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Tekst */}
            <FadeInLeft>
              <div className="text-white text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
                  Zapisz się do programu
                </h2>
                <p className="text-lg sm:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                  Wypełnij formularz, a oddzwonimy do Ciebie w ciągu 48 godzin.
                  Konsultacja jest całkowicie bezpłatna i niezobowiązująca.
                </p>

                <div className="space-y-3 sm:space-y-4 hidden md:block">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-amber-500/30">
                      <span className="text-amber-400 text-lg sm:text-xl">✓</span>
                    </div>
                    <span className="text-base sm:text-lg text-slate-200">Bezpłatna konsultacja telefoniczna</span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-amber-500/30">
                      <span className="text-amber-400 text-lg sm:text-xl">✓</span>
                    </div>
                    <span className="text-base sm:text-lg text-slate-200">Materiały edukacyjne o zdrowiu</span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-amber-500/30">
                      <span className="text-amber-400 text-lg sm:text-xl">✓</span>
                    </div>
                    <span className="text-base sm:text-lg text-slate-200">Spersonalizowany plan działania</span>
                  </div>
                </div>
              </div>
            </FadeInLeft>

            {/* Formularz */}
            <FadeInRight delay={0.2}>
              <SimpleLeadForm zrodlo="landing_main" />
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ */}
      {/* ============================================ */}
      <section className="py-12 sm:py-16 md:py-20 bg-amber-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Często zadawane pytania
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Odpowiedzi na najczęstsze wątpliwości
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <FAQ />
          </FadeIn>
        </div>
      </section>

      {/* ============================================ */}
      {/* STOPKA */}
      {/* ============================================ */}
      <footer className="bg-slate-900 text-slate-400 py-10 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {/* Logo i opis */}
            <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
              <div className="mb-4 sm:mb-6 flex justify-center sm:justify-start">
                <PremiumLogo variant="full" size="sm" />
              </div>
              <p className="text-sm sm:text-base leading-relaxed">
                Program wspierania zdrowia i witalności dla osób po 60. roku życia.
                Realizowany we współpracy z Fundacją SeniorPlus.
              </p>
            </div>

            {/* Kontakt */}
            <div className="text-center sm:text-left">
              <h4 className="font-semibold text-white text-base sm:text-lg mb-4 sm:mb-6">Kontakt</h4>
              <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <p>Roman Madaliński</p>
                <p className="text-amber-400/80 hover:text-amber-400 transition-colors break-all">madalinski.roman@gmail.com</p>
                <p>+48 503 354 437</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="text-center sm:text-left">
              <h4 className="font-semibold text-white text-base sm:text-lg mb-4 sm:mb-6">Szybki kontakt</h4>
              <a
                href="https://wa.me/48503354437?text=Cześć!%20Mam%20pytanie%20o%20program%20Witalność%2060%2B"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 bg-green-600 hover:bg-green-500 text-white font-semibold py-3 sm:py-4 px-5 sm:px-6 rounded-xl sm:rounded-2xl transition-colors text-sm sm:text-base"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Napisz na WhatsApp
              </a>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 text-center text-xs sm:text-sm">
            <p>© 2026 SeniorPlus Witalność 60+. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>

      {/* ============================================ */}
      {/* STICKY MOBILE CTA */}
      {/* ============================================ */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-4 z-50 shadow-2xl shadow-slate-900/20">
        <a
          href="#formularz"
          className="btn-premium w-full text-slate-900 font-bold text-lg py-4 px-6 rounded-xl text-center block"
        >
          Umów bezpłatną rozmowę
        </a>
      </div>

      {/* Spacer for sticky CTA on mobile */}
      <div className="h-24 md:hidden"></div>
    </div>
  )
}
