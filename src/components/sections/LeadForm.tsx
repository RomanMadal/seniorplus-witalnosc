'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

/**
 * Lead magnet form — broszura PDF „5 filarów witalności seniora 60+" za email.
 *
 * Pivot biznesowy (Roman, 17.05.2026): zamiast "umów rozmowę" zbieramy email
 * za broszurę PDF. Telefon jest opcjonalny — jeśli zostawiony, dzwonimy.
 *
 * TODO (Roman): Supabase migration — dodać kolumny:
 *   - `email TEXT NOT NULL`
 *   - `lead_type TEXT DEFAULT 'broszura'`
 *   - `seniorplus_consents.consent_type` przyjmuje 'newsletter' jako wartość
 */

interface Props {
  zrodlo?: string
}

export function LeadForm({ zrodlo = 'landing' }: Props) {
  const router = useRouter()

  const [formData, setFormData] = useState({
    imie: '',
    email: '',
    telefon: '',
    wiek: '',
    problem: '',
    zgoda_newsletter: false,
    zgoda_przetwarzanie: false,
    firma: '', // honeypot
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.firma) return // honeypot

    if (!formData.zgoda_newsletter || !formData.zgoda_przetwarzanie) {
      setError('Prosimy o zaznaczenie wymaganych zgód.')
      return
    }
    if (!formData.email.includes('@') || formData.email.length < 5) {
      setError('Prosimy podać prawidłowy adres email.')
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const { data: leadData, error: leadError } = await supabase
        .from('seniorplus_leads')
        .insert([
          {
            imie: formData.imie,
            email: formData.email,
            telefon: formData.telefon || null,
            wiek: formData.wiek || null,
            problem_glowny: formData.problem || null,
            zrodlo,
            status: 'new',
            lead_type: 'broszura',
          },
        ])
        .select('id')
        .single()

      if (leadError) throw leadError

      const consents = [
        { lead_id: leadData.id, consent_type: 'newsletter', consent_given: true, consent_version: 'v1.0_2026-05' },
        { lead_id: leadData.id, consent_type: 'przetwarzanie', consent_given: true, consent_version: 'v1.0_2026-05' },
      ]
      await supabase.from('seniorplus_consents').insert(consents)

      router.push('/dziekujemy')
    } catch {
      setError('Wystąpił błąd zapisu. Prosimy spróbować ponownie lub zadzwonić.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass =
    'w-full px-5 py-4 text-lg md:text-xl border border-border rounded-xl focus:border-trust focus:ring-2 focus:ring-trust/20 outline-none transition min-h-[56px] bg-cream-50 text-ink placeholder:text-ink-mute'

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl border border-border shadow-[0_30px_80px_-40px_rgba(20,42,71,0.25)] p-8 md:p-10"
      noValidate
    >
      <div className="inline-flex items-center gap-2 bg-trust-soft text-trust-strong px-3 py-1.5 rounded-full mb-4 text-sm font-semibold uppercase tracking-wide">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Bezpłatna broszura PDF
      </div>
      <h3 className="text-3xl md:text-4xl text-ink-900 mb-2" style={{ fontFamily: 'var(--font-fraunces)', color: 'var(--ink-900)' }}>
        5 filarów witalności seniora
      </h3>
      <p className="text-base md:text-lg text-ink-soft mb-8">
        Wpisz email — broszura natychmiast na skrzynkę. Bez nacisków, bez spam.
      </p>

      {/* Honeypot */}
      <div className="hidden" aria-hidden>
        <label>Firma <input type="text" name="firma" value={formData.firma} onChange={handleChange} tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="imie" className="block text-base md:text-lg font-semibold text-ink-900 mb-2">
            Imię <span className="text-warn" aria-label="wymagane">*</span>
          </label>
          <input
            type="text"
            id="imie"
            name="imie"
            required
            autoComplete="given-name"
            value={formData.imie}
            onChange={handleChange}
            className={inputClass}
            placeholder="Jak mamy się zwracać?"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-base md:text-lg font-semibold text-ink-900 mb-2">
            Email <span className="text-warn" aria-label="wymagane">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            inputMode="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="np. jan.kowalski@gmail.com"
          />
          <p className="text-sm md:text-base text-ink-mute mt-2">
            Wyślemy broszurę PDF na ten adres. Nie udostępniamy emaili osobom trzecim.
          </p>
        </div>

        <div>
          <label htmlFor="telefon" className="block text-base md:text-lg font-semibold text-ink-900 mb-2">
            Telefon <span className="text-ink-mute font-normal text-sm">(opcjonalnie)</span>
          </label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            inputMode="tel"
            autoComplete="tel"
            value={formData.telefon}
            onChange={handleChange}
            className={inputClass}
            placeholder="Jeśli wolą Państwo rozmowę"
          />
          <p className="text-sm md:text-base text-ink-mute mt-2">
            Zadzwonimy tylko jeśli zostawi Pan/Pani numer — bez presji.
          </p>
        </div>

        <details className="border-t border-border pt-5">
          <summary className="cursor-pointer text-base md:text-lg text-ink-soft font-medium select-none min-h-[44px] flex items-center">
            Chcę przekazać więcej informacji (opcjonalnie)
          </summary>
          <div className="mt-4 space-y-5">
            <div>
              <label htmlFor="wiek" className="block text-base md:text-lg font-semibold text-ink-900 mb-2">Wiek</label>
              <select id="wiek" name="wiek" value={formData.wiek} onChange={handleChange} className={inputClass}>
                <option value="">Wybierz przedział wiekowy</option>
                <option value="55-60">55-60 lat</option>
                <option value="60-65">60-65 lat</option>
                <option value="65-70">65-70 lat</option>
                <option value="70-75">70-75 lat</option>
                <option value="75+">75+ lat</option>
              </select>
            </div>
            <div>
              <label htmlFor="problem" className="block text-base md:text-lg font-semibold text-ink-900 mb-2">
                Co najbardziej Państwa interesuje?
              </label>
              <select id="problem" name="problem" value={formData.problem} onChange={handleChange} className={inputClass}>
                <option value="">Wybierz temat</option>
                <option value="energia">Energia, zmęczenie</option>
                <option value="stawy">Bóle stawów, kości</option>
                <option value="pamiec">Pamięć, koncentracja</option>
                <option value="serce">Zdrowie serca</option>
                <option value="inne">Inne / ogólne zdrowie</option>
              </select>
            </div>
          </div>
        </details>

        <div className="space-y-4 bg-cream-50 rounded-xl p-5 border border-border">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="zgoda_newsletter"
              checked={formData.zgoda_newsletter}
              onChange={handleChange}
              className="mt-1 w-6 h-6 accent-trust shrink-0"
            />
            <span className="text-base text-ink-soft leading-relaxed">
              Wyrażam zgodę na otrzymanie broszury PDF i okazjonalnych materiałów edukacyjnych programu Witalność 60+.{' '}
              <span className="text-warn" aria-label="wymagane">*</span>
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="zgoda_przetwarzanie"
              checked={formData.zgoda_przetwarzanie}
              onChange={handleChange}
              className="mt-1 w-6 h-6 accent-trust shrink-0"
            />
            <span className="text-base text-ink-soft leading-relaxed">
              Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z{' '}
              <a href="/polityka-prywatnosci" className="link">polityką prywatności</a>.{' '}
              <span className="text-warn" aria-label="wymagane">*</span>
            </span>
          </label>
        </div>

        {error && (
          <div role="alert" className="bg-warn/10 border-2 border-warn/30 text-warn rounded-xl p-4 text-base">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-press w-full bg-ink-900 hover:bg-ink-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-lg md:text-xl py-5 px-6 rounded-full min-h-[64px] transition-colors shadow-[0_18px_40px_-15px_rgba(20,42,71,0.45)] inline-flex items-center justify-center gap-3"
        >
          {isSubmitting ? (
            'Wysyłanie…'
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Wyślij mi broszurę
            </>
          )}
        </button>

        <p className="text-sm md:text-base text-ink-mute text-center leading-relaxed">
          Państwa dane są chronione zgodnie z RODO. Nie udostępniamy ich osobom trzecim.
        </p>
      </div>
    </form>
  )
}
