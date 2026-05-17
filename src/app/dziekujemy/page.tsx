// Strona "Dziękujemy" - Navy + Gold design
// Natychmiastowa wartość: video + PDF + następne kroki

import Link from 'next/link'
import PremiumLogo from '@/components/PremiumLogo'

export default function DziekujemyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-amber-50/30">
      {/* Nawigacja */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 sm:py-4">
          <Link href="/">
            <PremiumLogo variant="nav" size="sm" />
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-6 sm:py-8 md:py-12">
        {/* Komunikat sukcesu */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-amber-200">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
            Dziękujemy za zaufanie!
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Twoje zgłoszenie zostało przyjęte. <strong className="text-amber-600">Zadzwonimy jeszcze dziś lub jutro.</strong>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Poniżej znajdziesz materiały przygotowane specjalnie dla Ciebie.
          </p>
        </div>

        {/* Video sekcja */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden mb-6 sm:mb-8 border border-slate-700">
          <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-700">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-white flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="leading-tight">Obejrzyj teraz: Zdrowie układu krwionośnego</span>
            </h2>
          </div>

          {/* YouTube embed - responsywny */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dxJ5RqqI64g?rel=0"
              title="Zdrowie układu krwionośnego - prezentacja"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="p-4 sm:p-6 bg-slate-800/50">
            <p className="text-slate-300 text-xs sm:text-sm">
              39-minutowa prezentacja o tym, jak dbać o serce i układ krążenia.
              Dowiesz się, dlaczego omega-3 jest tak ważna dla Twojego zdrowia.
            </p>
          </div>
        </div>

        {/* Dodatkowe materiały */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {/* PDF do pobrania */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border-2 border-slate-100 hover:border-amber-300 transition-all hover:shadow-xl group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2">
              Broszura "Każdy potrzebuje Omega-3"
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mb-3 sm:mb-4">
              Kompendium wiedzy o omega-3 w przystępnej formie.
            </p>
            <a
              href="https://ltl.is/4vh7gjzqx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-premium text-slate-900 font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg sm:rounded-xl text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Pobierz PDF
            </a>
          </div>

          {/* Video o produkcie */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border-2 border-slate-100 hover:border-amber-300 transition-all hover:shadow-xl group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2">
              Video: Omega-3 Heart & Energy
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mb-3 sm:mb-4">
              Poznaj produkt z koenzymem Q10 wspierający serce i energię.
            </p>
            <a
              href="https://ltl.is/cjp7vdbrm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg sm:rounded-xl transition-colors text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Obejrzyj video
            </a>
          </div>
        </div>

        {/* Co dalej - timeline */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-700 mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <span className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
              <span className="text-amber-400 text-lg sm:text-xl">→</span>
            </span>
            Co teraz?
          </h2>

          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="font-bold text-slate-900 text-sm sm:text-base">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-white text-base sm:text-lg">Obejrzyj video powyżej</h3>
                <p className="text-slate-400 text-sm sm:text-base">Dowiesz się najważniejszych rzeczy o zdrowiu układu krążenia i omega-3.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="font-bold text-slate-900 text-sm sm:text-base">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-white text-base sm:text-lg">Odbierz telefon od nas</h3>
                <p className="text-slate-400 text-sm sm:text-base">Zadzwonimy jeszcze dziś lub jutro - numer może być nieznany, ale to my!</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="font-bold text-slate-900 text-sm sm:text-base">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-white text-base sm:text-lg">Przygotuj pytania</h3>
                <p className="text-slate-400 text-sm sm:text-base">Podczas rozmowy odpowiemy na wszystkie Twoje wątpliwości. Zero presji!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Kontakt WhatsApp */}
        <div className="text-center bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-8 border border-slate-100">
          <p className="text-slate-600 mb-3 sm:mb-4 text-base sm:text-lg">Nie możesz czekać? Napisz do nas teraz:</p>
          <a
            href="https://wa.me/48503354437?text=Cześć!%20Zapisałem%20się%20do%20programu%20Witalność%2060%2B%20i%20mam%20pytanie..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-green-600 hover:bg-green-500 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl transition-all hover:scale-105 shadow-lg text-sm sm:text-base"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Napisz na WhatsApp
          </a>
        </div>
      </main>

      {/* Stopka */}
      <footer className="bg-slate-900 py-6 sm:py-8 mt-8 sm:mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-xs sm:text-sm">© 2026 SeniorPlus Witalność 60+ | Roman Madaliński</p>
          <p className="mt-2">
            <Link href="/" className="text-amber-500 hover:text-amber-400 transition-colors text-sm sm:text-base">
              Wróć na stronę główną
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
