// Layout główny aplikacji SeniorPlus Witalność 60+
// Z płynnym scrollowaniem Lenis + profesjonalne fonty

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

// Font dla body - czytelny, nowoczesny
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

// Font dla nagłówków - elegancki, budujący zaufanie
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Witalność 60+ | Premium Wellness Program",
  description: "Dołącz do programu Witalność 60+ i odzyskaj energię. Bezpłatna konsultacja, sprawdzone rozwiązania omega-3, wsparcie eksperta. Premium Wellness Program dla osób 60+.",
  keywords: "witalność 60+, omega-3, zdrowie seniorów, premium wellness, energia, suplementy premium, Eqology",
  authors: [{ name: "Roman Madaliński" }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "Witalność 60+ | Premium Wellness Program",
    description: "Odzyskaj energię i witalność po 60-tce. Bezpłatna konsultacja i sprawdzone rozwiązania omega-3.",
    type: "website",
    locale: "pl_PL",
    siteName: "Witalność 60+",
  },
  twitter: {
    card: "summary_large_image",
    title: "Witalność 60+ | Premium Wellness Program",
    description: "Odzyskaj energię i witalność po 60-tce.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
