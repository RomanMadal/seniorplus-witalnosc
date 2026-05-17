'use client'

import { useEffect, useRef, type ReactNode, type ElementType } from 'react'
import { registerGsap, gsap, ScrollTrigger } from '@/lib/gsap'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  duration?: number
  className?: string
  as?: ElementType
  once?: boolean
}

/**
 * Modern editorial fade+rise on view, GSAP-driven.
 * Honoruje prefers-reduced-motion (pokazuje się instant).
 */
export function Reveal({
  children,
  delay = 0,
  y = 32,
  duration = 0.9,
  className = '',
  as: Tag = 'div',
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return
    registerGsap()
    const node = ref.current
    if (!node) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        node,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: node,
            start: 'top 88%',
            toggleActions: once ? 'play none none none' : 'play none none reverse',
          },
        },
      )
    }, node)

    return () => ctx.revert()
  }, [delay, y, duration, once, reduced])

  return (
    <Tag ref={ref as React.Ref<HTMLDivElement>} className={`${className} ${reduced ? '' : 'reveal-init'}`}>
      {children}
    </Tag>
  )
}

/**
 * Stagger reveal — animuje DIRECT children jako kaskada.
 */
export function RevealStagger({
  children,
  stagger = 0.08,
  y = 28,
  duration = 0.8,
  className = '',
}: {
  children: ReactNode
  stagger?: number
  y?: number
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return
    registerGsap()
    const node = ref.current
    if (!node) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        node.children,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: 'power3.out',
          scrollTrigger: { trigger: node, start: 'top 85%', toggleActions: 'play none none none' },
        },
      )
    }, node)

    return () => ctx.revert()
  }, [stagger, y, duration, reduced])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

// Re-eksport ScrollTrigger gdyby było potrzebne na zewnątrz
export { ScrollTrigger }
