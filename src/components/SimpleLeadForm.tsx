// Formularz lead - rozbudowany z segmentacją
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
    telefon: '',
    wiek: '',
    problem: '',
    zgoda_kontakt: false,
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
    if (!formData.zgoda_kontakt || !formData.zgoda_przetwarzanie) {
      setError('Prosimy o zaznaczenie wymaganych zgód.')
      return
    }

    // Walidacja telefonu (prosty check)
    if (formData.telefon.length < 9) {
      setError('Podaj prawidłowy numer telefonu.')
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
            telefon: formData.telefon,
            wiek: formData.wiek || null,
            problem_glowny: formData.problem || null,
            zrodlo: zrodlo,
            status: 'new',
            lead_score: formData.problem ? 15 : 10, // Wyższy score jeśli podał problem
          }
        ])
        .select('id')
        .single()

      if (leadError) throw leadError

      // Zapisz zgody
      const consents = [
        {
          lead_id: leadData.id,
          consent_type: 'kontakt_tel',
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

      // Utwórz follow-up - szybszy (24h zamiast 7 dni)
      const followUpDate = new Date()
      followUpDate.setDate(followUpDate.getDate() + 1)

      await supabase.from('seniorplus_follow_ups').insert([
        {
          lead_id: leadData.id,
          follow_up_type: '24h',
          scheduled_date: followUpDate.toISOString().split('T')[0],
        }
      ])

      // Przekieruj na stronę z podziękowaniem
      router.push('/dziekujemy')

    } catch (err) {
      console.error('Błąd zapisu:', err)
      setError('Wystąpił błąd. Spróbuj ponownie lub zadzwoń do nas.')
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
      <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2 text-center">
        Umów bezpłatną rozmowę
      </h3>
      <p className="text-slate-500 text-center mb-6 sm:mb-8 text-sm sm:text-base">
        Zadzwonimy jeszcze dziś lub w ciągu 24h
      </p>

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

      {/* Telefon */}
      <div className="mb-4 sm:mb-5">
        <label htmlFor="telefon" className="block text-sm sm:text-base font-semibold text-slate-700 mb-1.5 sm:mb-2">
          Telefon *
        </label>
        <input
          type="tel"
          id="telefon"
          name="telefon"
          required
          value={formData.telefon}
          onChange={handleChange}
          className="w-full px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-lg border-2 border-slate-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
          placeholder="Numer telefonu"
        />
      </div>

      {/* Wiek - dropdown */}
      <div className="mb-4 sm:mb-5">
        <label htmlFor="wiek" className="block text-sm sm:text-base font-semibold text-slate-700 mb-1.5 sm:mb-2">
          Wiek (opcjonalnie)
        </label>
        <select
          id="wiek"
          name="wiek"
          value={formData.wiek}
          onChange={handleChange}
          className="w-full px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-lg border-2 border-slate-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all bg-white"
        >
          <option value="">Wybierz przedział wiekowy</option>
          <option value="55-60">55-60 lat</option>
          <option value="60-65">60-65 lat</option>
          <option value="65-70">65-70 lat</option>
          <option value="70-75">70-75 lat</option>
          <option value="75+">75+ lat</option>
        </select>
      </div>

      {/* Główny problem - dropdown */}
      <div className="mb-5 sm:mb-6">
        <label htmlFor="problem" className="block text-sm sm:text-base font-semibold text-slate-700 mb-1.5 sm:mb-2">
          Co najbardziej Ci doskwiera? (opcjonalnie)
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
            name="zgoda_kontakt"
            checked={formData.zgoda_kontakt}
            onChange={handleChange}
            className="mt-1 w-6 h-6 text-amber-500 rounded-lg border-slate-300 focus:ring-amber-500 cursor-pointer flex-shrink-0 accent-amber-500"
          />
          <span className="text-base text-slate-600 group-hover:text-slate-800 transition-colors leading-relaxed">
            Wyrażam zgodę na kontakt telefoniczny w celu omówienia programu Witalność 60+ <span className="text-red-500">*</span>
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
        className="w-full btn-premium disabled:opacity-50 disabled:cursor-not-allowed text-slate-900 font-bold text-xl py-5 px-8 rounded-2xl shadow-lg"
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
          'Tak, zadzwońcie do mnie'
        )}
      </motion.button>

      {/* Informacja */}
      <p className="mt-6 text-sm text-slate-500 text-center leading-relaxed">
        Twoje dane są bezpieczne i chronione zgodnie z RODO
      </p>
    </motion.form>
  )
}
