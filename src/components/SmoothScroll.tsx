// Lenis Smooth Scroll - płynne przewijanie jak u Józka
'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,           // Czas trwania animacji scrollu
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      orientation: 'vertical', // Kierunek scrollowania
      gestureOrientation: 'vertical',
      smoothWheel: true,       // Płynne scrollowanie kółkiem myszy
      touchMultiplier: 2,      // Mnożnik dla touch devices
    })

    // Aktualizacja Lenis w każdej klatce animacji
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup
    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
