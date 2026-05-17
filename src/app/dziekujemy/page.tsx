import Link from 'next/link'
import { SkipToContent } from '@/components/layout/SkipToContent'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { PhoneCTA } from '@/components/shared/PhoneCTA'
import { Mail, CheckCircle2 } from 'lucide-react'
import { contact } from '@/data/contact'

export const metadata = {
  title: 'Broszura w drodze — Witalność 60+',
  description: 'Dziękujemy za zapis. Broszura PDF „5 filarów witalności seniora" już w skrzynce email.',
}

export default function DziekujemyPage() {
  return (
    <>
      <SkipToContent />
      <Nav />
      <main id="main" className="pt-20 md:pt-24">
        <section className="bg-cream-50 py-16 md:py-24 border-b border-border">
          <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-trust rounded-full flex items-center justify-center" style={{ background: 'var(--trust-600)' }}>
              <Mail className="w-10 h-10 text-white" aria-hidden />
            </div>

            <div className="eyebrow justify-center mb-4">Broszura w drodze</div>

            <h1 className="text-display-md md:text-display-lg text-ink-900 mb-6" style={{ color: 'var(--ink-900)' }}>
              Sprawdź swoją <span className="text-italic-soft text-trust-strong">skrzynkę email</span>.
            </h1>

            <p className="text-xl md:text-2xl text-ink-soft mb-10 leading-relaxed">
              Broszura „5 filarów witalności seniora 60+" już tam jest.
              Jeśli nie przyszła w ciągu kilku minut — sprawdzą Państwo folder „Spam" lub „Oferty".
            </p>

            <div className="bg-white border border-border rounded-2xl p-6 md:p-8 mb-8 text-left">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-trust-strong shrink-0 mt-0.5" aria-hidden />
                <div>
                  <div className="font-bold text-ink-900 mb-1" style={{ color: 'var(--ink-900)' }}>1. Otwórz broszurę</div>
                  <div className="text-base text-ink-soft">
                    PDF zawiera 5 rozdziałów — energia, stawy, pamięć, serce, sen.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-trust-strong shrink-0 mt-0.5" aria-hidden />
                <div>
                  <div className="font-bold text-ink-900 mb-1" style={{ color: 'var(--ink-900)' }}>2. Zastosuj jedną praktykę</div>
                  <div className="text-base text-ink-soft">
                    Nie wszystko naraz — wybierz to, co najbardziej dotyczy Państwa sytuacji.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-trust-strong shrink-0 mt-0.5" aria-hidden />
                <div>
                  <div className="font-bold text-ink-900 mb-1" style={{ color: 'var(--ink-900)' }}>3. Masz pytanie? Zadzwoń</div>
                  <div className="text-base text-ink-soft">
                    Chętnie porozmawiamy — bez nacisków. WhatsApp lub telefon.
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <PhoneCTA variant="primary" label="Zadzwoń jeśli chcesz" />
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-lg min-h-[56px] bg-white hover:bg-cream-100 text-ink-900 border-2 border-border transition-colors"
              >
                Napisz na WhatsApp
              </a>
            </div>

            <Link href="/" className="link text-base">← Wróć do strony głównej</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
