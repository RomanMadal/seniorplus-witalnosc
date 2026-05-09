// Strona "Dziękujemy" - wyświetlana po wypełnieniu formularza
// Natychmiastowa wartość: video + PDF do pobrania

import Link from 'next/link'

export default function DziekujemyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Nawigacja uproszczona */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">S+</span>
            </div>
            <div>
              <span className="font-bold text-emerald-800 text-lg">SeniorPlus</span>
              <span className="text-emerald-600 text-sm block -mt-1">Witalność 60+</span>
            </div>
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Komunikat sukcesu */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dziękujemy za dołączenie!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Twoje zgłoszenie zostało przyjęte. Poniżej znajdziesz materiały,
            które przygotowaliśmy specjalnie dla Ciebie.
          </p>
        </div>

        {/* Video sekcja */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Obejrzyj teraz: Zdrowie układu krwionośnego
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

          <div className="p-6 bg-gray-50">
            <p className="text-gray-600 text-sm">
              39-minutowa prezentacja o tym, jak dbać o serce i układ krążenia.
              Dowiesz się, dlaczego omega-3 jest tak ważna dla Twojego zdrowia.
            </p>
          </div>
        </div>

        {/* Dodatkowe materiały */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* PDF do pobrania */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-emerald-100 hover:border-emerald-300 transition-colors">
            <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Broszura "Każdy potrzebuje Omega-3"
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Kompendium wiedzy o omega-3 w przystępnej formie.
            </p>
            <a
              href="https://ltl.is/4vh7gjzqx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Pobierz PDF
            </a>
          </div>

          {/* Video o produkcie */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-100 hover:border-blue-300 transition-colors">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Video: Omega-3 Heart & Energy
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Poznaj produkt z koenzymem Q10 wspierający serce i energię.
            </p>
            <a
              href="https://ltl.is/cjp7vdbrm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Obejrzyj video
            </a>
          </div>
        </div>

        {/* Co dalej */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">📬</span>
            Co dalej?
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="font-bold text-amber-800">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Obejrzyj video powyżej</h3>
                <p className="text-gray-600 text-sm">Dowiesz się najważniejszych rzeczy o zdrowiu układu krążenia.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="font-bold text-amber-800">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Sprawdź swoją skrzynkę email</h3>
                <p className="text-gray-600 text-sm">W ciągu najbliższych dni wyślemy Ci dodatkowe materiały.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="font-bold text-amber-800">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Masz pytania? Napisz do nas</h3>
                <p className="text-gray-600 text-sm">Chętnie odpowiemy na Twoje pytania.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Kontakt WhatsApp */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">Wolisz szybki kontakt?</p>
          <a
            href="https://wa.me/48503354437?text=Cześć!%20Zapisałem%20się%20do%20programu%20Witalność%2060%2B%20i%20mam%20pytanie..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Napisz na WhatsApp
          </a>
        </div>
      </main>

      {/* Stopka uproszczona */}
      <footer className="bg-gray-100 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© 2026 SeniorPlus Witalność 60+ | Roman Madaliński</p>
          <p className="mt-2">
            <Link href="/" className="text-emerald-600 hover:text-emerald-700">
              Wróć na stronę główną
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
