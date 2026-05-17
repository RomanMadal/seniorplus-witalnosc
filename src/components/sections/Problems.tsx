import Image from 'next/image'
import { Reveal } from '@/components/shared/Reveal'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { problems } from '@/data/problems'

export function Problems() {
  return (
    <section id="program" className="bg-cream-100 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <SectionHeader
          eyebrow="Co najczęściej dotyczy seniorów"
          title={<>Trzy sygnały, które <span className="text-italic-soft text-trust-strong">nie muszą</span> być normą</>}
          lead="Spadek formy nie jest nieuniknionym kosztem wieku. Część zmian wynika z deficytów, które można uzupełnić."
          className="mb-20 md:mb-32"
        />

        <div className="space-y-32 md:space-y-48">
          {problems.map((p, idx) => {
            const reversed = idx % 2 === 1
            return (
              <article key={p.id} className="relative">
                <div className={`grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-16 items-center`}>
                  {/* Image — fills container, no empty space */}
                  <Reveal
                    className={`md:col-span-7 ${reversed ? 'md:col-start-6' : ''}`}
                    y={32}
                  >
                    <div className="relative aspect-[5/4] md:aspect-[6/5] overflow-hidden rounded-2xl bg-cream-200">
                      <Image
                        src={p.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                      {/* Subtle bottom gradient for text legibility if needed */}
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-900/30 to-transparent pointer-events-none" />
                    </div>
                  </Reveal>

                  {/* Content with overlapping number */}
                  <Reveal
                    className={`md:col-span-5 relative ${reversed ? 'md:col-start-1 md:row-start-1 md:text-right' : ''}`}
                    y={24}
                    delay={0.15}
                  >
                    <div>
                      {/* Huge editorial number */}
                      <div
                        className={`text-trust-strong/15 tabular-nums leading-none mb-2 ${reversed ? 'md:text-right' : ''}`}
                        style={{
                          fontFamily: 'var(--font-fraunces)',
                          fontSize: 'clamp(6rem, 12vw, 11rem)',
                          fontWeight: 300,
                          letterSpacing: '-0.04em',
                        }}
                        aria-hidden
                      >
                        {p.number}
                      </div>

                      <div className={`eyebrow mb-5 ${reversed ? 'md:flex-row-reverse md:ml-auto' : ''}`}>
                        Problem {p.number}
                      </div>
                      <h3 className="text-display-md text-ink-900 mb-5" style={{ color: 'var(--ink-900)' }}>
                        {p.title}
                      </h3>
                      <p className="text-xl md:text-2xl text-ink-soft leading-snug mb-4" style={{ fontFamily: 'var(--font-fraunces)' }}>
                        {p.description}
                      </p>
                      <p className="text-base md:text-lg text-ink-soft leading-relaxed">{p.detail}</p>
                    </div>
                  </Reveal>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
