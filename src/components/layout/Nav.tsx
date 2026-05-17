'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Phone } from 'lucide-react'
import { contact } from '@/data/contact'

export function Nav() {
  const pathname = usePathname()
  const transparentEligible = pathname === '/'
  const [scrolled, setScrolled] = useState(!transparentEligible)

  useEffect(() => {
    if (!transparentEligible) {
      setScrolled(true)
      return
    }
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [transparentEligible])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md border-b border-border shadow-[0_8px_28px_-20px_rgba(20,42,71,0.25)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20 md:h-24 gap-4">
          <a
            href="/"
            className={`flex items-center gap-3 min-h-[56px] transition-colors ${scrolled ? 'text-ink-900' : 'text-white'}`}
            aria-label="Witalność 60+ — strona główna"
          >
            <div
              className={`w-12 h-12 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-base shrink-0 transition-colors ${
                scrolled ? 'bg-trust text-white' : 'bg-white/15 text-white border border-white/30 backdrop-blur-sm'
              }`}
            >
              60+
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-base md:text-lg" style={{ fontFamily: 'var(--font-fraunces)' }}>
                Witalność 60+
              </span>
              <span className={`text-xs md:text-sm transition-opacity ${scrolled ? 'opacity-70' : 'opacity-80'}`}>
                Fundacja SeniorPlus
              </span>
            </div>
          </a>

          <div className={`hidden lg:flex items-center gap-7 transition-colors ${scrolled ? 'text-ink-soft' : 'text-white/85'}`}>
            <a href="#program" className="hover:text-trust-strong transition-colors text-base">O programie</a>
            <a href="/produkty" className="hover:text-trust-strong transition-colors text-base">Produkty</a>
            <a href="/protokoly-zdrowia" className="hover:text-trust-strong transition-colors text-base">Protokoły</a>
          </div>

          <a
            href={`tel:${contact.phoneRaw}`}
            className={`btn-press inline-flex items-center gap-2 px-4 md:px-5 py-3 rounded-full font-semibold min-h-[48px] transition-colors ${
              scrolled
                ? 'bg-trust hover:bg-trust-strong text-white'
                : 'bg-white text-ink-900 hover:bg-cream-100'
            }`}
            aria-label={`Zadzwoń pod numer ${contact.phone}`}
          >
            <Phone className="w-4 h-4" aria-hidden />
            <span className="hidden sm:inline tabular-nums text-sm md:text-base">{contact.phone}</span>
            <span className="sm:hidden text-sm">Zadzwoń</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
