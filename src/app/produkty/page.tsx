import Link from 'next/link'
import Image from 'next/image'
import { SkipToContent } from '@/components/layout/SkipToContent'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { StickyMobileCta } from '@/components/layout/StickyMobileCta'
import { PhoneCTA } from '@/components/shared/PhoneCTA'
import { Reveal } from '@/components/shared/Reveal'
import { products, pakiety } from '@/data/products'
import { Check } from 'lucide-react'

export const metadata = {
  title: 'Produkty — Witalność 60+',
  description:
    'Pure Arctic Oil Eqology — omega-3 najwyższej jakości w trzech formułach. Pakiety kuracji.',
}

/**
 * TODO (Roman): ta podstrona to placeholder po refactor architektury.
 * Content jest teraz w `src/data/products.ts`, podstrona = orchestrator.
 * Brakuje sekcji do dodania: test Vitas, porównanie produktów w tabeli,
 * sekcja edukacyjna o EPA/DHA. Wynieść do `components/sections/produkty/*`.
 */
export default function ProduktyPage() {
  return (
    <>
      <SkipToContent />
      <Nav />
      <main id="main" className="pt-20 md:pt-24">
        <section className="bg-bg border-b border-border py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Link href="/" className="link text-base mb-4 inline-block">← Wróć do strony głównej</Link>
            <h1 className="text-4xl md:text-5xl text-ink mb-4">Pure Arctic Oil — trzy formuły</h1>
            <p className="text-lg md:text-xl text-ink-soft max-w-2xl">
              Olej z dzikiego dorsza arktycznego, norweska firma Eqology. Trzy warianty dopasowane do potrzeb.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((p, i) => {
                const Icon = p.icon
                return (
                  <Reveal key={p.id} delay={i * 0.05}>
                    <li className="bg-white border border-border rounded-2xl overflow-hidden h-full flex flex-col shadow-sm card-lift">
                      <div className="relative aspect-[4/3] bg-bg">
                        <Image
                          src={p.image}
                          alt={p.nazwa}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        {p.badge && (
                          <span className="absolute top-4 right-4 text-sm font-semibold bg-trust text-white px-3 py-1.5 rounded-full shadow-sm">
                            {p.badge}
                          </span>
                        )}
                        <div className="absolute top-4 left-4 w-12 h-12 bg-white/95 rounded-xl flex items-center justify-center shadow-sm">
                          <Icon className="w-6 h-6 text-trust-strong" aria-hidden />
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                      <h2 className="text-2xl text-ink mb-1">{p.nazwa}</h2>
                      <p className="text-base text-ink-mute mb-4">{p.podtytul}</p>
                      <p className="text-base text-ink-soft mb-5 leading-relaxed">{p.opis}</p>

                      <ul className="space-y-2 mb-5">
                        {p.korzysci.map(k => (
                          <li key={k} className="flex items-start gap-2 text-base text-ink-soft">
                            <Check className="w-5 h-5 text-trust shrink-0 mt-0.5" aria-hidden />
                            <span>{k}</span>
                          </li>
                        ))}
                      </ul>

                      <details className="mb-5 text-base">
                        <summary className="cursor-pointer font-semibold text-ink min-h-[44px] flex items-center">
                          Pełny skład
                        </summary>
                        <dl className="mt-3 space-y-1 text-ink-soft">
                          {Object.entries(p.sklad).map(([k, v]) => (
                            <div key={k} className="flex justify-between gap-3">
                              <dt className="capitalize">{k.replace(/([A-Z])/g, ' $1')}</dt>
                              <dd className="font-semibold text-ink">{v}</dd>
                            </div>
                          ))}
                        </dl>
                      </details>

                      <div className="mt-auto pt-4 border-t border-border">
                        <div className="text-3xl font-bold text-ink mb-1">
                          {p.cena} zł<span className="text-base font-normal text-ink-mute">/mies.</span>
                        </div>
                        <div className="text-sm text-ink-mute">
                          Pierwszy miesiąc: {p.cenaPierwszyMiesiac} zł (kuracja startowa)
                        </div>
                      </div>
                      </div>
                    </li>
                  </Reveal>
                )
              })}
            </ul>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-bg border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl text-ink mb-3">Pakiety kuracji</h2>
            <p className="text-lg text-ink-soft mb-8">
              Sześciomiesięczne programy z testem laboratoryjnym poziomu omega-3.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pakiety.map(p => (
                <li
                  key={p.nazwa}
                  className={`bg-white rounded-2xl p-6 md:p-7 border-2 ${
                    p.popularny ? 'border-trust' : 'border-border'
                  }`}
                >
                  {p.popularny && (
                    <div className="inline-block bg-trust text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                      Polecany
                    </div>
                  )}
                  <h3 className="text-2xl text-ink mb-1">{p.nazwa}</h3>
                  <p className="text-base text-ink-mute mb-4">{p.opis}</p>
                  <div className="text-4xl font-bold text-ink mb-1">{p.cenaStart} zł</div>
                  <div className="text-base text-ink-mute mb-5">
                    Start, potem {p.cenaMiesieczna} zł/mies.
                  </div>
                  <ul className="space-y-2 mb-5">
                    {p.zawiera.map(z => (
                      <li key={z} className="flex items-start gap-2 text-base text-ink-soft">
                        <Check className="w-5 h-5 text-trust shrink-0 mt-0.5" aria-hidden />
                        <span>{z}</span>
                      </li>
                    ))}
                  </ul>
                  {p.oszczednosc && (
                    <div className="text-base font-semibold text-trust-strong">{p.oszczednosc}</div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-ink text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl text-white mb-4">Nie wiesz który wybrać?</h2>
            <p className="text-lg md:text-xl text-white/85 mb-7">
              Zadzwoń — wspólnie dopasujemy. Konsultacja bezpłatna, bez zobowiązania zakupu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneCTA variant="primary" label="Zadzwoń teraz" />
              <Link
                href="/#formularz"
                className="inline-flex items-center justify-center px-7 py-4 rounded-2xl font-semibold text-lg bg-white/10 hover:bg-white/15 text-white border-2 border-white/25 min-h-[56px]"
              >
                Zostaw kontakt
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  )
}
