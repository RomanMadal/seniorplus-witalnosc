import { Reveal } from '@/components/shared/Reveal'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { PhoneCTA } from '@/components/shared/PhoneCTA'
import { faq } from '@/data/faq'

export function Faq() {
  return (
    <section className="bg-cream-50 border-b border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <SectionHeader
          eyebrow="Często zadawane pytania"
          title={<>Wątpliwości są <span className="text-italic-soft text-trust-strong">w porządku</span>.</>}
          lead="Najczęstsze pytania uczestników i odpowiedzi. Jeśli czegoś brakuje — można po prostu zadzwonić."
          className="mb-14 md:mb-20"
        />

        <ul className="divide-y divide-border border-y border-border">
          {faq.map((item, i) => (
            <Reveal key={i} delay={i * 0.05} y={20}>
              <li>
                <details className="group">
                  <summary className="cursor-pointer list-none py-7 md:py-8 flex items-start justify-between gap-6 hover:bg-cream-100/50 -mx-4 px-4 transition-colors">
                    <span className="text-xl md:text-2xl text-ink-900 font-semibold leading-snug" style={{ fontFamily: 'var(--font-fraunces)' }}>
                      {item.q}
                    </span>
                    <span
                      className="text-trust-strong text-2xl leading-none transition-transform duration-300 group-open:rotate-45 shrink-0 select-none mt-2"
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <div className="pb-7 md:pb-8 -mt-2 text-lg md:text-xl text-ink-soft leading-relaxed max-w-3xl">
                    {item.a}
                  </div>
                </details>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal y={20} delay={0.2}>
          <div className="mt-14 md:mt-20 text-center">
            <p className="text-lg md:text-xl text-ink-soft mb-6">Nie znalazł Pan/Pani odpowiedzi?</p>
            <PhoneCTA variant="secondary" label="Zadzwoń i zapytaj" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
