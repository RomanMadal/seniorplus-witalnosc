import type { ReactNode } from 'react'
import { Eyebrow } from './Eyebrow'
import { Reveal } from './Reveal'

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = 'left',
  className = '',
  light = false,
}: {
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  align?: 'left' | 'center'
  className?: string
  light?: boolean
}) {
  const inkColor = light ? 'text-white' : 'text-ink-900'
  const leadColor = light ? 'text-white/80' : 'text-ink-soft'

  return (
    <div className={`${align === 'center' ? 'text-center mx-auto' : ''} max-w-3xl ${className}`}>
      {eyebrow && (
        <Reveal y={16} duration={0.7}>
          <Eyebrow className={light ? 'text-trust-200' : ''}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal y={24} delay={0.05}>
        <h2 className={`text-display-md md:text-display-lg mt-5 ${inkColor}`}>{title}</h2>
      </Reveal>
      {lead && (
        <Reveal y={16} delay={0.15}>
          <p className={`text-lg md:text-xl mt-5 leading-relaxed ${leadColor}`}>{lead}</p>
        </Reveal>
      )}
    </div>
  )
}
