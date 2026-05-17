'use client'

import Image from 'next/image'

interface PremiumLogoProps {
  // nav: dla nawigacji - symbol + tekst obok
  // full: pełne logo kwadratowe z tekstem pod spodem
  // symbol: tylko symbol (ikona) bez tekstu
  variant?: 'nav' | 'full' | 'symbol'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function PremiumLogo({
  variant = 'nav',
  size = 'md'
}: PremiumLogoProps) {

  // Rozmiary symbolu (obrazka)
  const symbolSizes = {
    sm: 56,   // mobile nav
    md: 72,   // desktop nav
    lg: 100,  // większe użycie
    xl: 140   // hero/duże
  }

  // Rozmiary pełnego logo (kwadratowe z tekstem)
  const fullSizes = {
    sm: 140,
    md: 200,
    lg: 280,
    xl: 380
  }

  // Rozmiary tekstu
  const textSizes = {
    sm: { title: 'text-lg', subtitle: 'text-xs' },
    md: { title: 'text-2xl', subtitle: 'text-sm' },
    lg: { title: 'text-3xl', subtitle: 'text-base' },
    xl: { title: 'text-4xl', subtitle: 'text-lg' }
  }

  const symbolSize = symbolSizes[size]
  const fullSize = fullSizes[size]
  const textSize = textSizes[size]

  // Nawigacja: symbol (fala+kropla) + tekst HTML obok
  if (variant === 'nav') {
    return (
      <div className="flex items-center gap-4 group">
        {/* Symbol logo - sama fala z kroplą */}
        <div className="relative flex-shrink-0">
          <Image
            src="/images/logos/symbol_256.png"
            alt="Witalność 60+"
            width={symbolSize}
            height={symbolSize}
            className="object-contain rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </div>

        {/* Tekst obok */}
        <div className="flex flex-col justify-center">
          <span className={`${textSize.title} font-bold tracking-tight leading-tight`}>
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              WITALNOŚĆ 60+
            </span>
          </span>
          <span className={`${textSize.subtitle} font-semibold tracking-widest uppercase text-slate-500`}>
            Premium Wellness Program
          </span>
        </div>
      </div>
    )
  }

  // Pełne logo - symbol + tekst pod spodem (HTML)
  if (variant === 'full') {
    return (
      <div className="flex flex-col items-center group">
        {/* Symbol */}
        <Image
          src="/images/logos/symbol_256.png"
          alt="Witalność 60+"
          width={fullSize * 0.7}
          height={fullSize * 0.7}
          className="object-contain rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105 mb-3"
          priority
        />
        {/* Tekst pod spodem */}
        <span className={`${textSize.title} font-bold tracking-tight text-center`}>
          <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 bg-clip-text text-transparent">
            WITALNOŚĆ 60+
          </span>
        </span>
        <span className={`${textSize.subtitle} font-semibold tracking-widest uppercase text-slate-400`}>
          Premium Wellness Program
        </span>
      </div>
    )
  }

  // Tylko symbol (ikona) bez tekstu
  return (
    <div className="relative group">
      <Image
        src="/images/logos/symbol_256.png"
        alt="Witalność 60+"
        width={symbolSize}
        height={symbolSize}
        className="object-contain rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
        priority
      />
    </div>
  )
}

// Alias - sam symbol bez tekstu
export function PremiumLogoIcon({ size = 50 }: { size?: number }) {
  return (
    <div className="relative">
      <Image
        src="/images/logos/symbol_256.png"
        alt="Witalność 60+"
        width={size}
        height={size}
        className="object-contain rounded-xl shadow-md"
      />
    </div>
  )
}
