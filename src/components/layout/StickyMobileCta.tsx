import { Phone } from 'lucide-react'
import { contact } from '@/data/contact'

export function StickyMobileCta() {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-cream-50/95 backdrop-blur-md border-t border-border px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] z-40 shadow-[0_-12px_40px_-20px_rgba(20,42,71,0.25)] no-print">
        <div className="flex gap-2">
          <a
            href={`tel:${contact.phoneRaw}`}
            className="btn-press flex-1 inline-flex items-center justify-center gap-2 bg-trust hover:bg-trust-strong text-white font-semibold py-3 px-4 rounded-full min-h-[56px]"
            aria-label={`Zadzwoń pod numer ${contact.phone}`}
          >
            <Phone className="w-5 h-5" aria-hidden />
            <span>Zadzwoń</span>
          </a>
          <a
            href="#formularz"
            className="btn-press flex-1 inline-flex items-center justify-center bg-white border border-border text-ink-900 font-semibold py-3 px-4 rounded-full min-h-[56px]"
          >
            Formularz
          </a>
        </div>
      </div>
      <div className="h-24 lg:hidden" aria-hidden />
    </>
  )
}
