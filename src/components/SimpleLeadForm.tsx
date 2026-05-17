// Formularz lead magnet - email za broszurę
// Navy + Gold kolorystyka

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { supabase } from '@/lib/supabase'

interface SimpleLeadFormProps {
  zrodlo?: string
}

export default function SimpleLeadForm({ zrodlo = 'landing' }: SimpleLeadFormProps) {
  const router = useRouter()

  const [formData, setFormData] = useState({
    imie: '',
    email: '',
    telefon: '',
    wiek: '',
    problem: '',
    zgoda_newsletter: false,
    zgoda_przetwarzanie: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Walidacja zgód
    if (!formData.zgoda_newsletter || !formData.zgoda_przetwarzanie) {
      setError('Prosimy o zaznaczenie wymaganych zgód.')
      return
    }

    // Walidacja email
    if (!formData.email.includes('@')) {
      setError('Podaj prawidłowy adres email.')
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      // Zapisz lead
      const { data: leadData, error: leadError } = await supabase
        .from('seniorplus_leads')
        .insert([
          {
            imie: formData.imie,
            email: formData.email,
            telefon: formData.telefon || null,
            wiek: formData.wiek || null,
            problem_glowny: formData.problem || null,
            zrodlo: zrodlo,
            status: 'new',
            lead_type: 'broszura',
            lead_score: formData.problem ? 15 : 10,
          }
        ])
        .select('id')
        .single()

      if (leadError) throw leadError

      // Zapisz zgody
      const consents = [
        {
          lead_id: leadData.id,
          consent_type: 'newsletter',
          consent_given: true,
          consent_version: 'v1.0_2026-05',
        },
        {
          lead_id: leadData.id,
          consent_type: 'przetwarzanie',
          consent_given: true,
          consent_version: 'v1.0_2026-05',
        }
      ]

      await supabase.from('seniorplus_consents').insert(consents)

      // Utwórz follow-up email - po 2 dniach
      const followUpDate = new Date()
      followUpDate.setDate(followUpDate.getDate() + 2)

      await supabase.from('seniorplus_follow_ups').insert([
        {
          lead_id: leadData.id,
          follow_up_type: 'email_2d',
          scheduled_date: followUpDate.toISOString().split('T')[0],
        }
      ])

      // Przekieruj na stronę z podziękowaniem
      router.push('/dziekujemy')

    } catch (err) {
      console.error('Błąd zapisu:', err)
      setError('Wystąpił błąd. Spróbuj ponownie.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 md:p-10 border border-slate-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-6 sm:mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
          <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
          Pobierz bezpłatną broszurę
        </h3>
        <p className="text-slate-500 text-sm sm:text-base">
          „5 filarów witalności seniora 60+" – wyślemy od razu na email
        </p>
      </div>

      {/* Imię */}
      <div className="mb-4 sm:mb-5">
        <label htmlFor="imie" className="block text-sm sm:text-base font-semibold text-slate-700 mb-1.5 sm:mb-2">
          Imię *
        </label>
        <input
          type="text"
          id="imie"
          name="imie"
          required
          value={formData.imie}
          onChange={handleChange}
          className="w-full px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-lg border-2 border-slate-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
          placeholder="Jak masz na imię?"
        />
      </div>

      {/* Email */}
      <div className="mb-4 sm:mb-5">
        <label htmlFor="email" className="block text-sm sm:text-base font-semibold text-slate-700 mb-1.5 sm:mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-lg border-2 border-slate-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
          placeholder="Twój adres email"
        />
      </div>

      {/* Telefon - opcjonalny */}
      <div className="mb-4 sm:mb-5">
        <label htmlFor="telefon" className="block text-sm sm:text-base font-semibold text-slate-700 mb-1.5 sm:mb-2">
          Telefon <span className="text-slate-400 font-normal">(opcjonalnie – jeśli chcesz rozmowę)</span>
        </label>
        <input
          type="tel"
          id="telefon"
          name="telefon"
          value={formData.telefon}
          onChange={handleChange}
          className="w-full px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-lg border-2 border-slate-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
          placeholder="Numer telefonu"
        />
      </div>

      {/* Główny problem - dropdown (na mobile ukryty dla uproszczenia) */}
      <div className="hidden sm:block mb-5 sm:mb-6">
        <label htmlFor="problem" className="block text-sm sm:text-base font-semibold text-slate-700 mb-1.5 sm:mb-2">
          Co najbardziej Ci doskwiera? <span className="text-slate-400 font-normal">(opcjonalnie)</span>
        </label>
        <select
          id="problem"
          name="problem"
          value={formData.problem}
          onChange={handleChange}
          className="w-full px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-lg border-2 border-slate-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all bg-white"
        >
          <option value="">Wybierz główny problem</option>
          <option value="energia">Brak energii, zmęczenie</option>
          <option value="stawy">Bóle stawów, kości</option>
          <option value="pamiec">Problemy z pamięcią, koncentracją</option>
          <option value="serce">Zdrowie serca, krążenie</option>
          <option value="inne">Inne / ogólne zdrowie</option>
        </select>
      </div>

      {/* Zgody RODO */}
      <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6 p-4 sm:p-5 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100">
        <label className="flex items-start gap-4 cursor-pointer group">
          <input
            type="checkbox"
            name="zgoda_newsletter"
            checked={formData.zgoda_newsletter}
            onChange={handleChange}
            className="mt-1 w-6 h-6 text-amber-500 rounded-lg border-slate-300 focus:ring-amber-500 cursor-pointer flex-shrink-0 accent-amber-500"
          />
          <span className="text-base text-slate-600 group-hover:text-slate-800 transition-colors leading-relaxed">
            Wyrażam zgodę na otrzymanie broszury i newslettera edukacyjnego <span className="text-red-500">*</span>
          </span>
        </label>

        <label className="flex items-start gap-4 cursor-pointer group">
          <input
            type="checkbox"
            name="zgoda_przetwarzanie"
            checked={formData.zgoda_przetwarzanie}
            onChange={handleChange}
            className="mt-1 w-6 h-6 text-amber-500 rounded-lg border-slate-300 focus:ring-amber-500 cursor-pointer flex-shrink-0 accent-amber-500"
          />
          <span className="text-base text-slate-600 group-hover:text-slate-800 transition-colors leading-relaxed">
            Wyrażam zgodę na przetwarzanie moich danych osobowych <span className="text-red-500">*</span>
          </span>
        </label>
      </div>

      {/* Błąd */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3"
        >
          <span className="text-2xl">⚠️</span>
          <p className="text-red-700 text-base">{error}</p>
        </motion.div>
      )}

      {/* Przycisk */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full btn-premium disabled:opacity-50 disabled:cursor-not-allowed text-slate-900 font-bold text-xl py-5 px-8 rounded-2xl shadow-lg flex items-center justify-center gap-3"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-3">
            <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Wysyłanie...
          </span>
        ) : (
          <>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Wyślij mi broszurę
          </>
        )}
      </motion.button>

      {/* Informacja */}
      <p className="mt-6 text-sm text-slate-500 text-center leading-relaxed">
        📧 Broszura przyjdzie od razu • Możesz zrezygnować w każdej chwili
      </p>
    </motion.form>
  )
}
