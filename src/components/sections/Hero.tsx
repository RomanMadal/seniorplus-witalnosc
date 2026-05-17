import Image from 'next/image'
import { PhoneCTA } from '@/components/shared/PhoneCTA'
import { Eyebrow } from '@/components/shared/Eyebrow'
import { contact } from '@/data/contact'

/**
 * Full-bleed editorial hero — fjord background + oversized typography overlay
 * + clean transparent bottle floating right.
 *
 * Cover Eqology.jpg ma wpalone "EQOLOGY™" w górnej połowie obrazu —
 * heavy multi-layer dark gradient zalewa górę, content na dolnej połowie.
 *
 * TODO (Roman): docelowe zdjęcie — czysty Norway fjord bez branding
 * (Higgsfield gen, Stocksy, Pexels Pro).
 */
export function Hero() {
  return (
    <section className="relative min-h-[88vh] lg:min-h-screen flex text-white overflow-hidden bg-ink-900">
      {/* Background fjord with Ken Burns. object-position: bottom — pchamy
          obraz w dół, EQOLOGY™ wpalone w górnej części obrazu schodzi poza viewport
          lub zostaje zalane heavy dark gradient na górze. */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 kenburns">
          <Image
            src="/images/Cover Eqology.jpg"
            alt=""
            fill
            className="object-cover scale-110"
            style={{ objectPosition: 'center 100%' }}
            priority
            sizes="100vw"
            aria-hidden
          />
        </div>
        {/* Mask 1: heavy navy darkening — pełna głębia */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(20,42,71,0.55)' }}
        />
        {/* Mask 2: silny gradient z góry — zalewa cokolwiek na top 60% obrazu */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(20,42,71,1) 0%, rgba(20,42,71,0.95) 30%, rgba(20,42,71,0.4) 65%, rgba(20,42,71,0.3) 90%, rgba(20,42,71,0.7) 100%)',
          }}
        />
        {/* Mask 3: lewy panel — content readability */}
        <div
          className="absolute inset-y-0 left-0 w-full lg:w-3/5"
          style={{
            background:
              'linear-gradient(90deg, rgba(20,42,71,0.88) 0%, rgba(20,42,71,0.65) 55%, rgba(20,42,71,0) 100%)',
          }}
        />
        {/* Mask 4: subtle radial spotlight w okolicy butelki — żeby butelka wyglądała "podświetlona" */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 35% 50% at 78% 55%, rgba(255,255,255,0.06) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-center min-h-[88vh] lg:min-h-screen pt-24 lg:pt-0">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          <div className="max-w-2xl py-10">
            <Eyebrow className="text-trust-200 mb-8">Program {contact.foundation}</Eyebrow>

            <h1 className="text-display-lg lg:text-display-xl text-white mb-8" style={{ color: 'white' }}>
              Witalność
              <br />
              <span className="text-italic-soft" style={{ color: 'var(--trust-200)' }}>po sześćdziesiątce</span>.
            </h1>

            <p className="text-xl md:text-2xl text-white/85 leading-relaxed max-w-xl mb-10">
              Pobierz bezpłatną broszurę <span className="text-italic-soft text-trust-200">„5 filarów witalności seniora"</span> — sprawdzone praktyki łączące norweską omega-3 z polską tradycją ziołową.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a
                href="#formularz"
                className="btn-press inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full font-semibold text-lg min-h-[64px] text-white transition-colors whitespace-nowrap shadow-[0_18px_40px_-15px_rgba(45,122,95,0.6)]"
                style={{ background: 'var(--trust-600)' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Pobierz bezpłatną broszurę
              </a>
              <a
                href={`tel:${contact.phoneRaw}`}
                className="btn-press inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-base min-h-[56px] bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm transition-colors whitespace-nowrap"
                aria-label={`Zadzwoń pod numer ${contact.phone}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Lub zadzwoń · <span className="tabular-nums">{contact.phone}</span>
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-white/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
              <span className="uppercase tracking-[0.18em] text-trust-200 font-semibold">Eqology</span>
              <span>Norweska firma · od 1995</span>
              <span className="hidden md:inline opacity-50">·</span>
              <span>Olej z dzikiego dorsza arktycznego</span>
            </div>
          </div>

          {/* Floating clean bottle — transparent PNG */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative w-full max-w-[420px] aspect-square float-soft">
              <Image
                src="/images/PAO_Gold_clean.png"
                alt="Pure Arctic Oil Gold — formuła dla mózgu"
                fill
                className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
                priority
                sizes="420px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
