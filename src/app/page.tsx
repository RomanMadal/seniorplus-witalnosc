// Strona główna programu SeniorPlus Witalność 60+
// Profesjonalny design dla prezentacji Ryszardowi Bujakowi

import LeadForm from '@/components/LeadForm'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Nawigacja */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S+</span>
              </div>
              <div>
                <span className="font-bold text-emerald-800 text-lg">SeniorPlus</span>
                <span className="text-emerald-600 text-sm block -mt-1">Witalność 60+</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#program" className="text-gray-600 hover:text-emerald-600 transition-colors">O programie</a>
              <a href="#dla-kogo" className="text-gray-600 hover:text-emerald-600 transition-colors">Dla kogo</a>
              <a href="#jak-dziala" className="text-gray-600 hover:text-emerald-600 transition-colors">Jak to działa</a>
              <a href="#formularz" className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full transition-colors">
                Zapisz się
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-500"></div>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">Program we współpracy z Fundacją SeniorPlus</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Witalność 60+
              </h1>
              <p className="text-xl md:text-2xl text-emerald-100 mb-8 leading-relaxed">
                Kompleksowy program wspierania zdrowia i witalności
                dla osób po 60. roku życia
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#formularz"
                  className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold py-4 px-8 rounded-xl transition-all transform hover:scale-105 text-center"
                >
                  Zapisz się bezpłatnie
                </a>
                <a
                  href="#program"
                  className="border-2 border-white/50 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-all text-center"
                >
                  Dowiedz się więcej
                </a>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-white text-center">
                <div className="text-6xl font-bold mb-2">750 000+</div>
                <div className="text-emerald-100 text-lg">seniorów w sieci Fundacji</div>
                <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-emerald-100 text-sm">lat doświadczenia</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-emerald-100 text-sm">bezpłatne konsultacje</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O programie */}
      <section id="program" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Czym jest program Witalność 60+?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To kompleksowe podejście do wspierania zdrowia i dobrego samopoczucia
              osób dojrzałych, oparte na najnowszej wiedzy naukowej.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Karta 1 */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
              <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sprawdzone rozwiązania</h3>
              <p className="text-gray-600">
                Produkty najwyższej jakości, potwierdzone badaniami klinicznymi
                i certyfikatami europejskimi.
              </p>
            </div>

            {/* Karta 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Indywidualne podejście</h3>
              <p className="text-gray-600">
                Każdy uczestnik otrzymuje spersonalizowane wsparcie
                dopasowane do jego potrzeb i stanu zdrowia.
              </p>
            </div>

            {/* Karta 3 */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
              <div className="w-14 h-14 bg-amber-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Stałe wsparcie</h3>
              <p className="text-gray-600">
                Regularne konsultacje i monitorowanie postępów,
                abyś zawsze wiedział, że jesteś na dobrej drodze.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dla kogo */}
      <section id="dla-kogo" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dla kogo jest ten program?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Program Witalność 60+ jest dedykowany osobom, które chcą
              aktywnie dbać o swoje zdrowie i dobre samopoczucie.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Persona 1: Senior 60-74 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-3 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">👨‍🦳</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Aktywni seniorzy 60-74</h3>
                <p className="text-gray-600 mb-6">
                  Osoby, które chcą zachować energię i witalność na lata.
                  Dbają o siebie i szukają sprawdzonych rozwiązań.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Energia i witalność
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Zdrowe stawy
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Sprawny umysł
                  </li>
                </ul>
              </div>
            </div>

            {/* Persona 2: Senior 75+ */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-3 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">👴</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Seniorzy 75+</h3>
                <p className="text-gray-600 mb-6">
                  Osoby, które potrzebują dodatkowego wsparcia w codziennym
                  funkcjonowaniu i utrzymaniu sprawności.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Wsparcie mobilności
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Zdrowe serce
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Odporność
                  </li>
                </ul>
              </div>
            </div>

            {/* Persona 3: Opiekun */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">👩‍👧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Opiekunowie seniorów</h3>
                <p className="text-gray-600 mb-6">
                  Dzieci i wnuki, którzy szukają sprawdzonych rozwiązań
                  dla swoich rodziców i dziadków.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Spokój o bliskich
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Sprawdzone produkty
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Wsparcie eksperta
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jak to działa */}
      <section id="jak-dziala" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Jak wygląda współpraca?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proces jest prosty i przejrzysty. Na każdym etapie masz wsparcie.
            </p>
          </div>

          <div className="relative">
            {/* Linia łącząca */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-emerald-200"></div>

            <div className="grid md:grid-cols-4 gap-8">
              {/* Krok 1 */}
              <div className="relative text-center">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl relative z-10">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Zgłoś się</h3>
                <p className="text-gray-600">
                  Wypełnij krótki formularz. Oddzwonimy w ciągu 2-3 dni roboczych.
                </p>
              </div>

              {/* Krok 2 */}
              <div className="relative text-center">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl relative z-10">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Porozmawiajmy</h3>
                <p className="text-gray-600">
                  Podczas rozmowy poznamy Twoje potrzeby i odpowiemy na pytania.
                </p>
              </div>

              {/* Krok 3 */}
              <div className="relative text-center">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl relative z-10">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Dobierzemy plan</h3>
                <p className="text-gray-600">
                  Zaproponujemy rozwiązania dopasowane do Twoich potrzeb.
                </p>
              </div>

              {/* Krok 4 */}
              <div className="relative text-center">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl relative z-10">
                  4
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Stałe wsparcie</h3>
                <p className="text-gray-600">
                  Będziemy w kontakcie i monitorować Twoje postępy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sekcja z formularzem */}
      <section id="formularz" className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Zapisz się do programu
              </h2>
              <p className="text-xl text-emerald-100 mb-8">
                Wypełnij formularz, a oddzwonimy do Ciebie w ciągu 2-3 dni roboczych.
                Konsultacja jest całkowicie bezpłatna i niezobowiązująca.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-emerald-100">Bezpłatna konsultacja</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-emerald-100">Brak zobowiązań</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-emerald-100">Twoje dane są bezpieczne (RODO)</span>
                </div>
              </div>
            </div>
            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Stopka */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S+</span>
                </div>
                <div>
                  <span className="font-bold text-white text-lg">SeniorPlus</span>
                  <span className="text-emerald-500 text-sm block -mt-1">Witalność 60+</span>
                </div>
              </div>
              <p className="text-sm">
                Program realizowany we współpracy z Fundacją SeniorPlus,
                organizacją zrzeszającą ponad 750 000 seniorów w Polsce.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Kontakt</h4>
              <p className="text-sm mb-2">Roman Madaliński</p>
              <p className="text-sm mb-2">madalinski.roman@gmail.com</p>
              <p className="text-sm">Ekspert programu Witalność 60+</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Informacje</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#program" className="hover:text-white transition-colors">O programie</a></li>
                <li><a href="#dla-kogo" className="hover:text-white transition-colors">Dla kogo</a></li>
                <li><a href="#jak-dziala" className="hover:text-white transition-colors">Jak to działa</a></li>
                <li><a href="#formularz" className="hover:text-white transition-colors">Zapisz się</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>© 2026 SeniorPlus Witalność 60+. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
