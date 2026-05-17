// Video Background - tło video dla hero sekcji
// Użycie: wrzuć plik video do /public/videos/hero.mp4

'use client'

import { useState, useRef, useEffect } from 'react'

interface VideoBackgroundProps {
  src: string                    // Ścieżka do video, np. "/videos/hero.mp4"
  fallbackImage?: string         // Obrazek fallback jeśli video się nie załaduje
  overlay?: boolean              // Czy dodać ciemną nakładkę
  overlayOpacity?: number        // Przezroczystość nakładki (0-1)
  className?: string
}

export default function VideoBackground({
  src,
  fallbackImage,
  overlay = true,
  overlayOpacity = 0.4,
  className = ''
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => setIsLoaded(true)
    const handleError = () => setHasError(true)

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('error', handleError)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('error', handleError)
    }
  }, [])

  // Jeśli jest błąd i mamy fallback image, pokaż obrazek
  if (hasError && fallbackImage) {
    return (
      <div className={`absolute inset-0 -z-10 ${className}`}>
        <img
          src={fallbackImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {overlay && (
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity }}
          />
        )}
      </div>
    )
  }

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src={src} type="video/mp4" />
        <source src={src.replace('.mp4', '.webm')} type="video/webm" />
        {/* Fallback dla przeglądarek bez wsparcia video */}
        Twoja przeglądarka nie obsługuje video.
      </video>

      {/* Gradient overlay */}
      {overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"
          style={{ opacity: overlayOpacity * 2 }}
        />
      )}

      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 to-teal-800 animate-pulse" />
      )}
    </div>
  )
}
