import Image from 'next/image'

/**
 * Subtelny editorial logo strip — partner / certification list.
 * NIE jest grid of cards — to magazine-style attribution row.
 *
 * TODO (Roman): podmienić tekstowe placeholdery (MSC / Friend of the Sea / EFSA)
 * na prawdziwe logotypy w wektorze gdy je pozyskasz od Eqology.
 */
export function Trust() {
  return (
    <section className="relative bg-cream-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="eyebrow mb-3">Partnerzy programu</div>
            <p className="text-xl md:text-2xl text-ink-soft max-w-xl leading-snug" style={{ fontFamily: 'var(--font-fraunces)' }}>
              Współpracujemy wyłącznie z partnerami o weryfikowalnym pochodzeniu i certyfikacjach.
            </p>
          </div>
          <a href="/produkty" className="text-base text-trust-strong hover:text-trust font-semibold inline-flex items-center gap-2 group">
            Zobacz produkty i certyfikaty
            <span className="block w-8 h-px bg-trust-strong group-hover:w-12 transition-all" aria-hidden />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 items-center justify-items-center pt-8 border-t border-border">
          <div className="h-14 flex items-center justify-center grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all">
            <Image
              src="/images/EQOLOGY_logo_black_red_business-partner.png"
              alt="Eqology Independent Business Partner"
              width={180}
              height={56}
              className="h-12 w-auto object-contain"
            />
          </div>

          <PartnerPlaceholder name="Fundacja SeniorPlus" sub="Partner programu" />
          <PartnerPlaceholder name="MSC" sub="Marine Stewardship Council" />
          <PartnerPlaceholder name="EFSA" sub="EU Register 432/2012" />
        </div>
      </div>
    </section>
  )
}

function PartnerPlaceholder({ name, sub }: { name: string; sub: string }) {
  return (
    <div className="h-14 flex flex-col items-center justify-center text-center">
      <div className="text-lg font-bold text-ink-900 tracking-tight" style={{ fontFamily: 'var(--font-fraunces)' }}>
        {name}
      </div>
      <div className="text-xs text-ink-mute uppercase tracking-wider mt-0.5">{sub}</div>
    </div>
  )
}
