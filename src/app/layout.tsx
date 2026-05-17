import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  axes: ['SOFT', 'opsz'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://seniorpluswitalnosc.pl'),
  title: 'Witalność 60+ | Program zdrowia Fundacji SeniorPlus',
  description:
    'Bezpłatna konsultacja telefoniczna w programie Witalność 60+. Energia, zdrowe stawy, lepsza pamięć dla osób po sześćdziesiątce. Bez nacisków, bez zobowiązań.',
  keywords:
    'program zdrowia seniorów, omega-3 dla seniorów, witalność 60+, Fundacja SeniorPlus, Eqology, suplementy dla seniorów',
  authors: [{ name: 'Roman Madaliński' }],
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Witalność 60+ | Program zdrowia Fundacji SeniorPlus',
    description: 'Bezpłatna konsultacja telefoniczna. Energia, zdrowe stawy, lepsza pamięć po sześćdziesiątce.',
    type: 'website',
    locale: 'pl_PL',
    siteName: 'Witalność 60+',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Witalność 60+ | Program zdrowia',
    description: 'Bezpłatna konsultacja telefoniczna. Energia, zdrowe stawy, lepsza pamięć po sześćdziesiątce.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${inter.variable} ${fraunces.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
