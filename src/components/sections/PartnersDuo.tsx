import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/shared/Reveal'
import { SectionHeader } from '@/components/shared/SectionHeader'

/**
 * "Norweska nauka + Polska tradycja ziołowa"
 * Editorial split highlighting dwóch partnerów programu — Eqology (omega-3)
 * + receptury Ojca Klimuszko (zioła).
 *
 * Pivot Romana (2026-05-17): kluczowy element value prop programu.
 */
export function PartnersDuo() {
  return (
    <section className="bg-cream-100 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <SectionHeader
          eyebrow="Dwa światy, jeden program"
          title={
            <>
              Norweska nauka
              <br />
              <span className="text-italic-soft text-trust-strong">+ polska tradycja ziołowa</span>
            </>
          }
          lead="Łączymy nowoczesne suplementy najwyższej jakości z 40-letnią tradycją polskiego ziołolecznictwa. Każdy protokół to synergia obu podejść."
          className="mb-16 md:mb-24 max-w-3xl"
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {/* Eqology */}
          <Reveal y={32}>
            <article className="h-full bg-white border border-border rounded-2xl overflow-hidden card-lift">
              <div className="relative aspect-[5/3] bg-grain overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--ink-900) 0%, var(--ink-800) 100%)' }}>
                <Image
                  src="/images/PAO_Gold_clean.png"
                  alt="Pure Arctic Oil Gold — Eqology"
                  fill
                  className="object-contain p-6 md:p-8 drop-shadow-[0_24px_40px_rgba(0,0,0,0.5)]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-10 pointer-events-none">
                  <div className="text-xs uppercase tracking-[0.22em] text-trust-200/80 font-semibold">
                    Norwegia · od 1995
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-10">
                <div className="eyebrow mb-4">Norwegia</div>
                <h3 className="text-3xl md:text-4xl text-ink-900 mb-4" style={{ color: 'var(--ink-900)' }}>
                  Eqology
                </h3>
                <p className="text-lg text-ink-soft leading-relaxed mb-6">
                  Omega-3 najwyższej jakości z dzikiego dorsza arktycznego.
                  30 lat doświadczenia, certyfikat MSC, niski wskaźnik utlenienia (TOTOX 4–6).
                </p>
                <ul className="space-y-2 text-base text-ink-soft">
                  <li className="flex items-start gap-2">
                    <span className="text-trust-strong text-xl leading-none mt-0.5" aria-hidden>—</span>
                    <span>Pełne spektrum 22 kwasów omega-3</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-trust-strong text-xl leading-none mt-0.5" aria-hidden>—</span>
                    <span>Certyfikat Friend of the Sea / MSC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-trust-strong text-xl leading-none mt-0.5" aria-hidden>—</span>
                    <span>EFSA-zatwierdzone health claims</span>
                  </li>
                </ul>
              </div>
            </article>
          </Reveal>

          {/* Klimuszko */}
          <Reveal y={32} delay={0.12}>
            <article className="h-full bg-white border border-border rounded-2xl overflow-hidden card-lift">
              <div className="relative aspect-[5/3] overflow-hidden bg-grain" style={{ background: 'linear-gradient(135deg, var(--trust-900) 0%, var(--ink-800) 60%, var(--ink-900) 100%)' }}>
                {/* Botanical line ornament — SVG, subtle */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-15"
                  viewBox="0 0 400 240"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.6"
                  preserveAspectRatio="xMidYMid slice"
                  aria-hidden
                  style={{ color: 'var(--trust-200)' }}
                >
                  <path d="M40 200 Q 60 140, 100 130 Q 140 120, 160 80 Q 180 40, 220 50 Q 260 60, 280 100 Q 300 140, 340 150 Q 380 160, 380 200" strokeLinecap="round" fill="none" />
                  <path d="M100 130 Q 90 110, 75 105 M 100 130 Q 115 115, 130 110" strokeLinecap="round" />
                  <path d="M160 80 Q 145 70, 135 55 M 160 80 Q 175 70, 188 60" strokeLinecap="round" />
                  <path d="M220 50 Q 215 35, 205 25 M 220 50 Q 235 40, 248 28" strokeLinecap="round" />
                  <path d="M280 100 Q 275 85, 268 72 M 280 100 Q 290 85, 300 75" strokeLinecap="round" />
                  <path d="M340 150 Q 335 135, 330 125 M 340 150 Q 350 135, 362 130" strokeLinecap="round" />
                </svg>

                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                  <div className="text-xs uppercase tracking-[0.22em] text-trust-200/80 font-semibold mb-3">
                    Tradycja od 1986
                  </div>
                  <div
                    className="text-white/95 leading-tight"
                    style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.5rem, 2.6vw, 2.25rem)', fontStyle: 'italic', fontWeight: 400 }}
                  >
                    „Receptury, które działają tak samo dziś jak czterdzieści lat temu."
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-10">
                <div className="eyebrow mb-4">Polska</div>
                <h3 className="text-3xl md:text-4xl text-ink-900 mb-4" style={{ color: 'var(--ink-900)' }}>
                  Zioła Ojca Klimuszko
                </h3>
                <p className="text-lg text-ink-soft leading-relaxed mb-6">
                  Cztery dekady polskiej tradycji ziołoleczniczej.
                  Receptury Ojca Klimuszko wciąż produkowane według tej samej formuły, stosowane przez dziesiątki tysięcy Polaków.
                </p>
                <ul className="space-y-2 text-base text-ink-soft">
                  <li className="flex items-start gap-2">
                    <span className="text-trust-strong text-xl leading-none mt-0.5" aria-hidden>—</span>
                    <span>Eliksir Nasercowy, Eliksir Długowieczności</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-trust-strong text-xl leading-none mt-0.5" aria-hidden>—</span>
                    <span>Mieszanki ziołowe — pamięć, sen, stawy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-trust-strong text-xl leading-none mt-0.5" aria-hidden>—</span>
                    <span>Partner: klimuszko.pl</span>
                  </li>
                </ul>
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal y={20} delay={0.2}>
          <div className="text-center bg-gradient-ink rounded-2xl p-10 md:p-14 text-white">
            <p className="text-lg md:text-xl text-white/85 mb-6 max-w-2xl mx-auto">
              Każdy z 5 protokołów zdrowia w programie łączy konkretny produkt Eqology
              z dopasowanym preparatem ziołowym Klimuszko.
            </p>
            <Link
              href="/protokoly-zdrowia"
              className="btn-press inline-flex items-center gap-3 bg-white text-ink-900 hover:bg-cream-100 font-semibold text-lg px-8 py-4 rounded-full min-h-[60px] transition-colors"
            >
              Zobacz 5 protokołów zdrowia
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
