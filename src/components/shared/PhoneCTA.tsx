import { Phone } from 'lucide-react'
import { contact } from '@/data/contact'

/**
 * Primary CTA for senior audience. ~60% seniors prefer phone over forms (NN/g).
 * Premium editorial styling, min 56×56 touch target.
 */
export function PhoneCTA({
  variant = 'primary',
  label = 'Zadzwoń teraz',
  size = 'md',
}: {
  variant?: 'primary' | 'secondary' | 'light'
  label?: string
  size?: 'md' | 'lg'
}) {
  const sizeClass =
    size === 'lg'
      ? 'px-8 py-5 text-xl gap-4 min-h-[64px]'
      : 'px-7 py-4 text-lg gap-3 min-h-[56px]'

  const styles =
    variant === 'primary'
      ? 'bg-trust hover:bg-trust-strong text-white shadow-[0_18px_40px_-15px_rgba(45,122,95,0.55)]'
      : variant === 'light'
        ? 'bg-white hover:bg-cream-200 text-ink-900 border border-white/30'
        : 'bg-white hover:bg-trust-soft text-ink-900 border-2 border-ink-800/15 hover:border-trust/50'

  return (
    <a
      href={`tel:${contact.phoneRaw}`}
      className={`btn-press inline-flex items-center rounded-full font-semibold transition-all ${sizeClass} ${styles}`}
      aria-label={`Zadzwoń pod numer ${contact.phone}`}
    >
      <span className={`flex items-center justify-center rounded-full ${size === 'lg' ? 'w-10 h-10' : 'w-9 h-9'} ${variant === 'primary' ? 'bg-white/15' : 'bg-trust-soft'}`}>
        <Phone className={`${size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} ${variant === 'primary' ? 'text-white' : 'text-trust-strong'}`} aria-hidden />
      </span>
      <span className="flex flex-col items-start leading-tight">
        <span className={`text-xs font-medium ${variant === 'primary' ? 'text-white/80' : 'text-ink-mute'} tracking-wide uppercase`}>{label}</span>
        <span className="font-bold tabular-nums tracking-tight">{contact.phone}</span>
      </span>
    </a>
  )
}
