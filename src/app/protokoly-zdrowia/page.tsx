import Link from 'next/link'
import Image from 'next/image'
import { SkipToContent } from '@/components/layout/SkipToContent'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { StickyMobileCta } from '@/components/layout/StickyMobileCta'
import { PhoneCTA } from '@/components/shared/PhoneCTA'
import { Reveal } from '@/components/shared/Reveal'
import { protocols } from '@/data/protocols'

export const metadata = {
  title: 'Protokoły zdrowia — Witalność 60+',
  description:
    'Pięć protokołów zdrowia łączących omega-3 Eqology z tradycyjnymi preparatami ziołowymi Klimuszko.',
}

/**
 * TODO (Roman): placeholder po refactor. Content w `src/data/protocols.ts`.
 * Do dodania: sekcja edukacyjna „dlaczego Eqology + Klimuszko" (synergia),
 * sekcja FAQ specyficzne dla protokołów, opcjonalnie kalkulator dawkowania.
 */
export default function ProtokolyPage() {
  return (
    <>
      <SkipToContent />
      <Nav />
      <main id="main" className="pt-20 md:pt-24">
        <section className="bg-bg border-b border-border py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Link href="/" className="link text-base mb-4 inline-block">← Wróć do strony głównej</Link>
            <h1 className="text-4xl md:text-5xl text-ink mb-4">Protokoły zdrowia</h1>
            <p className="text-lg md:text-xl text-ink-soft max-w-2xl">
              Pięć dopasowanych protokołów łączących nowoczesną norweską omega-3 (Eqology)
              z tradycyjnym ziołolecznictwem polskim (receptury Ojca Klimuszko).
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <ul className="space-y-6">
              {protocols.map((p, i) => {
                const Icon = p.icon
                return (
                  <Reveal key={p.id} delay={i * 0.05}>
                    <li className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm card-lift">
                      <div className="grid md:grid-cols-[1fr_1.4fr] gap-0">
                        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[280px] bg-bg">
                          <Image
                            src={p.image}
                            alt={p.nazwa}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 40vw"
                          />
                          <div className="absolute top-4 left-4 w-14 h-14 bg-white/95 rounded-2xl flex items-center justify-center shadow-sm">
                            <Icon className="w-7 h-7 text-trust-strong" aria-hidden />
                          </div>
                        </div>

                        <div className="p-6 md:p-8">
                          <h2 className="text-2xl md:text-3xl text-ink mb-1">{p.nazwa}</h2>
                          <p className="text-base text-ink-mute mb-4">{p.problem}</p>

                          <p className="text-base md:text-lg text-ink-soft leading-relaxed mb-6">{p.opis}</p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                        <div className="bg-white border border-border rounded-xl p-5">
                          <div className="text-sm font-semibold text-trust-strong uppercase tracking-wide mb-2">
                            Eqology
                          </div>
                          <div className="font-bold text-ink text-lg mb-1">{p.eqology.produkt}</div>
                          <p className="text-base text-ink-soft mb-3 leading-relaxed">{p.eqology.dzialanie}</p>
                          <div className="text-base font-semibold text-ink">{p.eqology.cena} zł</div>
                        </div>

                        <div className="bg-white border border-border rounded-xl p-5">
                          <div className="text-sm font-semibold text-trust-strong uppercase tracking-wide mb-2">
                            Klimuszko
                          </div>
                          <div className="font-bold text-ink text-lg mb-1">{p.klimuszko.produkt}</div>
                          <p className="text-base text-ink-soft mb-3 leading-relaxed">{p.klimuszko.dzialanie}</p>
                          <div className="text-base font-semibold text-ink">{p.klimuszko.cena} zł</div>
                        </div>
                      </div>

                      <div className="bg-trust-soft border border-trust/20 rounded-xl p-4 mb-4">
                        <div className="text-sm font-semibold text-trust-strong uppercase tracking-wide mb-1">
                          Synergia
                        </div>
                        <p className="text-base text-ink-soft leading-relaxed">{p.synergia}</p>
                      </div>

                      <p className="text-base text-ink-mute">
                        <span className="font-semibold text-ink">Dla kogo:</span> {p.dlakogo}
                      </p>
                        </div>
                      </div>
                    </li>
                  </Reveal>
                )
              })}
            </ul>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-ink text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl text-white mb-4">Który protokół wybrać?</h2>
            <p className="text-lg md:text-xl text-white/85 mb-7">
              Zadzwoń — porozmawiamy o Państwa sytuacji i dopasujemy odpowiedni.
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
