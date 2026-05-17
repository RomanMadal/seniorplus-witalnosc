import { Reveal } from '@/components/shared/Reveal'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { steps } from '@/data/steps'

export function HowItWorks() {
  return (
    <section id="jak-dziala" className="bg-ink-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <SectionHeader
          eyebrow="Jak wygląda współpraca"
          title={<>Trzy kroki. Bez presji, <span className="text-italic-soft text-trust-200">bez ukrytych kosztów</span>.</>}
          lead="Cały proces można zakończyć na każdym etapie. Decyzja zawsze należy do Państwa."
          light
          className="mb-16 md:mb-24"
        />

        <ol className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-12 relative">
          {/* Horizontal line — desktop only */}
          <div
            className="hidden md:block absolute top-[5rem] left-[12%] right-[12%] h-px bg-gradient-to-r from-trust-700/0 via-trust-400/40 to-trust-700/0"
            aria-hidden
          />

          {steps.map((s, idx) => {
            const Icon = s.icon
            return (
              <Reveal key={s.id} delay={idx * 0.12} y={32}>
                <li className="relative">
                  <div className="flex items-center gap-6 md:flex-col md:items-start md:gap-0">
                    <div
                      className="text-trust-200/30 tabular-nums shrink-0"
                      style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(5rem, 9vw, 8rem)', lineHeight: 1, fontWeight: 300 }}
                      aria-hidden
                    >
                      {String(s.id).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="md:mt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-10 h-10 bg-trust/15 border border-trust-200/30 rounded-full flex items-center justify-center">
                        <Icon className="w-5 h-5 text-trust-200" strokeWidth={1.5} aria-hidden />
                      </span>
                      <div className="text-xs uppercase tracking-[0.2em] text-trust-200/80 font-semibold">
                        Krok {s.id}
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl text-white mb-4">{s.title}</h3>
                    <p className="text-lg text-white/75 leading-relaxed">{s.description}</p>
                  </div>
                </li>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
