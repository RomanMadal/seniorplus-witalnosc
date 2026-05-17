import { contact } from '@/data/contact'

export function Footer() {
  return (
    <footer className="bg-ink-900 text-white/85">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-16 md:mb-20">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/10 border border-white/15 rounded-full flex items-center justify-center font-bold">
                60+
              </div>
              <div className="leading-tight">
                <div className="font-semibold text-lg text-white" style={{ fontFamily: 'var(--font-fraunces)' }}>
                  Witalność 60+
                </div>
                <div className="text-sm text-white/65">Program {contact.foundation}</div>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-white/80 max-w-md mb-6" style={{ fontFamily: 'var(--font-fraunces)' }}>
              Program wspierania zdrowia i witalności dla osób po sześćdziesiątce —
              we współpracy z {contact.foundation}.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-white/50 font-semibold mb-5">Kontakt</div>
            <ul className="space-y-3 text-base md:text-lg">
              <li className="text-white/90">{contact.ownerName}</li>
              <li>
                <a href={`tel:${contact.phoneRaw}`} className="text-white hover:text-trust-200 transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-trust-200">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="text-white/85 hover:text-trust-200 transition-colors underline underline-offset-4 decoration-white/30 break-all">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-white/50 font-semibold mb-5">Inne kanały</div>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 text-white font-semibold py-4 px-6 rounded-full border border-white/15 min-h-[56px] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Napisz na WhatsApp
            </a>
          </div>
        </div>

        {/* Disclaimer GIS */}
        <div className="border-t border-white/10 pt-8 md:pt-10 space-y-5">
          <p className="text-sm text-white/65 leading-relaxed max-w-4xl">
            <span className="text-white/80 font-semibold">Informacja prawna.</span>{' '}
            Suplementy diety nie mogą być stosowane jako substytut zróżnicowanej diety.
            Zalecane jest zbilansowane odżywianie i zdrowy tryb życia.
            Produkty nie mają właściwości leczniczych i nie zastępują konsultacji lekarskiej.
          </p>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4 border-t border-white/10">
            <div className="text-sm text-white/60">
              © {new Date().getFullYear()} Witalność 60+. Roman Madaliński — Eqology Independent Business Partner.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/polityka-prywatnosci" className="text-white/75 hover:text-white underline underline-offset-4 decoration-white/25 hover:decoration-white">
                Polityka prywatności
              </a>
              <a href="/regulamin" className="text-white/75 hover:text-white underline underline-offset-4 decoration-white/25 hover:decoration-white">
                Regulamin
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
