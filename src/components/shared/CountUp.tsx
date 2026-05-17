'use client'

import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

/**
 * Animowany licznik dla PRAWDZIWYCH metryk.
 * Honoruje prefers-reduced-motion (od razu pokazuje wartość końcową).
 */
export function CountUp({
  end,
  duration = 1600,
  suffix = '',
  prefix = '',
  className = '',
}: {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const reduced = usePrefersReducedMotion()
  const started = useRef(false)

  useEffect(() => {
    if (reduced) {
      setValue(end)
      return
    }
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (e.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration)
              const eased = 1 - Math.pow(1 - t, 3)
              setValue(Math.round(end * eased))
              if (t < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
            observer.disconnect()
          }
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [end, duration, reduced])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString('pl-PL')}
      {suffix}
    </span>
  )
}
