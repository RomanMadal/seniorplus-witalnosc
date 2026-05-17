'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Rejestracja pluginu
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Animowany element który pojawia się podczas scroll
export function ScrollReveal({
  children,
  className = '',
  direction = 'up', // 'up', 'down', 'left', 'right'
  delay = 0,
  duration = 1
}: {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const directions = {
      up: { y: 80, x: 0 },
      down: { y: -80, x: 0 },
      left: { y: 0, x: 80 },
      right: { y: 0, x: -80 }
    }

    const { x, y } = directions[direction]

    gsap.fromTo(ref.current,
      {
        opacity: 0,
        y,
        x,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [direction, delay, duration])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

// Parallax efekt na obrazach
export function ParallaxImage({
  src,
  alt,
  className = '',
  speed = 0.3
}: {
  src: string
  alt: string
  className?: string
  speed?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!ref.current || !imgRef.current) return

    gsap.to(imgRef.current, {
      yPercent: -20 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [speed])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-[120%] object-cover scale-110"
      />
    </div>
  )
}

// Animowany licznik
export function AnimatedCounter({
  end,
  duration = 2,
  suffix = '',
  prefix = '',
  className = ''
}: {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const countRef = useRef({ value: 0 })

  useEffect(() => {
    if (!ref.current) return

    gsap.to(countRef.current, {
      value: end,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${Math.round(countRef.current.value).toLocaleString()}${suffix}`
        }
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [end, duration, suffix, prefix])

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>
}

// Staggered reveal dla grup elementów
export function StaggerReveal({
  children,
  className = '',
  staggerDelay = 0.15
}: {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const elements = ref.current.children

    gsap.fromTo(elements,
      {
        opacity: 0,
        y: 60,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: staggerDelay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [staggerDelay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

// Floating element z ciągłą animacją
export function FloatingElement({
  children,
  className = '',
  amplitude = 10,
  duration = 3
}: {
  children: React.ReactNode
  className?: string
  amplitude?: number
  duration?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    gsap.to(ref.current, {
      y: amplitude,
      duration,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    })

    return () => {
      gsap.killTweensOf(ref.current)
    }
  }, [amplitude, duration])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
