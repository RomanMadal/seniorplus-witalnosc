import Image from 'next/image'
import { PhoneCTA } from '@/components/shared/PhoneCTA'
import { Eyebrow } from '@/components/shared/Eyebrow'
import { Reveal } from '@/components/shared/Reveal'
import { LeadForm } from './LeadForm'

export function LeadFormSection() {
  return (
    <section id="formularz" className="relative bg-cream-100 border-b border-border overflow-hidden">
      {/* Decorative background image - very subtle */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <Image src="/images/Cover Eqology.jpg" alt="" fill className="object-cover" sizes="100vw" aria-hidden />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-6 lg:sticky lg:top-32" y={30}>
            <div>
              <Eyebrow className="mb-6">Bezpłatna broszura PDF</Eyebrow>
              <h2 className="text-display-lg text-ink-900 mb-8 leading-[1.0]" style={{ color: 'var(--ink-900)' }}>
                5 filarów witalności
                <br />
                <span className="text-italic-soft text-trust-strong">seniora 60+</span>.
              </h2>

              <p className="text-xl md:text-2xl text-ink-soft leading-relaxed mb-10 max-w-xl">
                Praktyczny przewodnik o energii, stawach, pamięci, sercu i śnie po sześćdziesiątce.
                Konkretne praktyki łączące norweską omega-3 z polską tradycją ziołową.
              </p>

              <ul className="space-y-4 text-base md:text-lg text-ink-soft border-t border-border pt-8 mb-10">
                <li className="flex items-start gap-3">
                  <span className="text-trust-strong text-xl leading-none mt-0.5" aria-hidden>—</span>
                  <span>Co naprawdę robi omega-3 dla mózgu i serca</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-trust-strong text-xl leading-none mt-0.5" aria-hidden>—</span>
                  <span>Które zioła łączyć z którym suplementem</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-trust-strong text-xl leading-none mt-0.5" aria-hidden>—</span>
                  <span>Sygnały deficytu DHA u osób 60+</span>
                </li>
              </ul>

              <div className="border-t border-border pt-8">
                <p className="text-base text-ink-soft mb-4">Wolą Państwo rozmowę zamiast czytania?</p>
                <PhoneCTA variant="secondary" label="Zadzwoń teraz" />
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6" y={40} delay={0.1}>
            <LeadForm zrodlo="landing_main" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
