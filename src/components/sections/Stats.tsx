import { CountUp } from '@/components/shared/CountUp'
import { Reveal } from '@/components/shared/Reveal'
import { SectionHeader } from '@/components/shared/SectionHeader'

/**
 * Editorial big-number stats. Każda metryka jest weryfikowalna.
 * TODO (Roman): jeśli masz lepsze dane (np. liczba uczestników programu) — podmień.
 */
type Stat = {
  value: number | null
  suffix?: string
  unit?: string
  custom?: string
  label: string
  sub: string
}

const stats: Stat[] = [
  { value: 30, suffix: '+', label: 'lat doświadczenia', sub: 'Eqology Norway od 1995 r.' },
  { value: 22, label: 'kwasów omega-3', sub: 'pełne spektrum w jednym oleju' },
  { value: 1430, unit: 'mg', label: 'DHA w formule Gold', sub: 'najwyższa dawka na rynku' },
  { value: null, custom: 'EFSA', label: 'zatwierdzone health claims', sub: 'EU Register 432/2012' },
]

export function Stats() {
  return (
    <section className="relative bg-cream-50 border-b border-border bg-grain">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <SectionHeader
          eyebrow="Fakty, nie obietnice"
          title={<>Program oparty na <span className="text-italic-soft text-trust-strong">weryfikowalnych liczbach</span></>}
          lead="Brak fake metric, brak okrągłych słów. Każda informacja w tym programie ma pokrycie w dokumentach."
          className="mb-16 md:mb-24"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {stats.map((s, idx) => (
            <Reveal key={s.label} delay={idx * 0.1} y={40}>
              <div className="border-t-2 border-ink-900 pt-6 md:pt-8">
                <div className="text-display-xl text-ink-900 leading-none mb-4 tabular-nums">
                  {s.custom ? (
                    s.custom
                  ) : (
                    <>
                      <CountUp end={s.value as number} />
                      {s.suffix && <span>{s.suffix}</span>}
                      {s.unit && <span className="text-3xl md:text-5xl ml-2 text-ink-soft font-normal">{s.unit}</span>}
                    </>
                  )}
                </div>
                <div className="text-xl md:text-2xl text-ink-900 font-semibold mb-2" style={{ fontFamily: 'var(--font-fraunces)' }}>
                  {s.label}
                </div>
                <div className="text-base text-ink-soft">{s.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
