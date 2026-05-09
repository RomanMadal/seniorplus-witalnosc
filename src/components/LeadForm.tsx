// Formularz pozyskiwania leadów SeniorPlus Witalność 60+
// WAŻNE: Każda zgoda RODO jest OSOBNA - zgodnie z przepisami

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import type { Persona, Zrodlo, Zainteresowanie, LeadFormData } from '@/lib/types'

interface LeadFormProps {
  defaultPersona?: Persona
  defaultZrodlo?: Zrodlo
  showPersonaSelect?: boolean
}

export default function LeadForm({
  defaultPersona = 'senior_60_74',
  defaultZrodlo = 'targi',
  showPersonaSelect = true
}: LeadFormProps) {
  const router = useRouter()

  // Stan formularza
  const [formData, setFormData] = useState<LeadFormData>({
    imie: '',
    nazwisko: '',
    telefon: '',
    email: '',
    wiek: '',
    persona: defaultPersona,
    zrodlo: defaultZrodlo,
    zainteresowania: [],
    zgoda_kontakt: false,
    zgoda_przetwarzanie: false,
  })

  // Stan UI
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Lista zainteresowań do wyboru
  const zainteresowaniaOptions: { value: Zainteresowanie; label: string }[] = [
    { value: 'energia', label: 'Energia i witalność' },
    { value: 'stawy', label: 'Zdrowe stawy i mobilność' },
    { value: 'serce', label: 'Serce i układ krążenia' },
    { value: 'pamiec', label: 'Pamięć i koncentracja' },
    { value: 'odpornosc', label: 'Odporność organizmu' },
  ]

  // Obsługa zmiany pól tekstowych
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  // Obsługa zainteresowań (checkboxy)
  const handleZainteresowanieChange = (zainteresowanie: Zainteresowanie) => {
    setFormData(prev => ({
      ...prev,
      zainteresowania: prev.zainteresowania.includes(zainteresowanie)
        ? prev.zainteresowania.filter(z => z !== zainteresowanie)
        : [...prev.zainteresowania, zainteresowanie]
    }))
  }

  // Wysyłka formularza
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Walidacja zgód
    if (!formData.zgoda_kontakt || !formData.zgoda_przetwarzanie) {
      alert('Prosimy o zaznaczenie wymaganych zgód.')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // 1. Zapisz lead
      const { data: leadData, error: leadError } = await supabase
        .from('seniorplus_leads')
        .insert([
          {
            imie: formData.imie,
            nazwisko: formData.nazwisko || null,
            telefon: formData.telefon,
            email: formData.email || null,
            wiek: formData.wiek ? parseInt(formData.wiek) : null,
            persona: formData.persona,
            zrodlo: formData.zrodlo,
            zainteresowania: formData.zainteresowania.length > 0 ? formData.zainteresowania : null,
            status: 'new',
            lead_score: 0,
          }
        ])
        .select('id')
        .single()

      if (leadError) throw leadError

      // 2. Zapisz zgody RODO
      const consents = [
        {
          lead_id: leadData.id,
          consent_type: 'kontakt_tel',
          consent_given: formData.zgoda_kontakt,
          consent_version: 'v1.0_2026-05',
        },
        {
          lead_id: leadData.id,
          consent_type: 'przetwarzanie',
          consent_given: formData.zgoda_przetwarzanie,
          consent_version: 'v1.0_2026-05',
        }
      ]

      const { error: consentError } = await supabase
        .from('seniorplus_consents')
        .insert(consents)

      if (consentError) throw consentError

      // 3. Utwórz follow-up na 7 dni
      const followUpDate = new Date()
      followUpDate.setDate(followUpDate.getDate() + 7)

      await supabase
        .from('seniorplus_follow_ups')
        .insert([
          {
            lead_id: leadData.id,
            follow_up_type: '7_day',
            scheduled_date: followUpDate.toISOString().split('T')[0],
          }
        ])

      // Przekieruj na stronę z podziękowaniem i materiałami
      router.push('/dziekujemy')

    } catch (error) {
      console.error('Błąd zapisu:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
        Zapisz się do programu
      </h3>

      {/* Imię */}
      <div className="mb-4">
        <label htmlFor="imie" className="block text-sm font-semibold text-gray-700 mb-2">
          Imię *
        </label>
        <input
          type="text"
          id="imie"
          name="imie"
          required
          value={formData.imie}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
          placeholder="Jak masz na imię?"
        />
      </div>

      {/* Nazwisko */}
      <div className="mb-4">
        <label htmlFor="nazwisko" className="block text-sm font-semibold text-gray-700 mb-2">
          Nazwisko <span className="font-normal text-gray-400">(opcjonalnie)</span>
        </label>
        <input
          type="text"
          id="nazwisko"
          name="nazwisko"
          value={formData.nazwisko}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
          placeholder="Nazwisko"
        />
      </div>

      {/* Telefon */}
      <div className="mb-4">
        <label htmlFor="telefon" className="block text-sm font-semibold text-gray-700 mb-2">
          Telefon *
        </label>
        <input
          type="tel"
          id="telefon"
          name="telefon"
          required
          value={formData.telefon}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
          placeholder="Numer telefonu do kontaktu"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
          Email <span className="font-normal text-gray-400">(opcjonalnie)</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
          placeholder="Adres email"
        />
      </div>

      {/* Wiek */}
      <div className="mb-4">
        <label htmlFor="wiek" className="block text-sm font-semibold text-gray-700 mb-2">
          Wiek <span className="font-normal text-gray-400">(opcjonalnie)</span>
        </label>
        <input
          type="number"
          id="wiek"
          name="wiek"
          min="18"
          max="120"
          value={formData.wiek}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
          placeholder="Twój wiek"
        />
      </div>

      {/* Persona */}
      {showPersonaSelect && (
        <div className="mb-4">
          <label htmlFor="persona" className="block text-sm font-semibold text-gray-700 mb-2">
            Kim jesteś?
          </label>
          <select
            id="persona"
            name="persona"
            value={formData.persona}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
          >
            <option value="senior_60_74">Senior 60-74 lata</option>
            <option value="senior_75_plus">Senior 75+ lat</option>
            <option value="opiekun">Opiekun seniora</option>
          </select>
        </div>
      )}

      {/* Zainteresowania */}
      <div className="mb-6">
        <p className="block text-sm font-semibold text-gray-700 mb-3">
          Co Cię interesuje? <span className="font-normal text-gray-400">(opcjonalnie)</span>
        </p>
        <div className="space-y-2">
          {zainteresowaniaOptions.map(option => (
            <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={formData.zainteresowania.includes(option.value)}
                onChange={() => handleZainteresowanieChange(option.value)}
                className="w-5 h-5 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500 cursor-pointer"
              />
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* ZGODY RODO */}
      <div className="space-y-4 mb-6 p-5 bg-gray-50 rounded-xl border border-gray-100">
        <p className="text-sm font-semibold text-gray-700">Wymagane zgody:</p>

        {/* Zgoda 1: Kontakt telefoniczny */}
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            name="zgoda_kontakt"
            checked={formData.zgoda_kontakt}
            onChange={handleChange}
            className="mt-0.5 w-5 h-5 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500 cursor-pointer"
          />
          <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
            Wyrażam zgodę na kontakt telefoniczny w celu omówienia programu
            Witalność 60+ i dopasowania rozwiązań do moich potrzeb. <span className="text-red-500">*</span>
          </span>
        </label>

        {/* Zgoda 2: Przetwarzanie danych */}
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            name="zgoda_przetwarzanie"
            checked={formData.zgoda_przetwarzanie}
            onChange={handleChange}
            className="mt-0.5 w-5 h-5 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500 cursor-pointer"
          />
          <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
            Wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi
            mojego zgłoszenia. Wiem, że mogę wycofać zgodę w każdej chwili. <span className="text-red-500">*</span>
          </span>
        </label>
      </div>

      {/* Komunikat błędu */}
      {submitStatus === 'error' && (
        <div className="mb-5 p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3">
          <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-red-700 text-sm">
            Wystąpił błąd. Spróbuj ponownie lub zadzwoń do nas bezpośrednio.
          </p>
        </div>
      )}

      {/* Przycisk */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98]"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Wysyłanie...
          </span>
        ) : (
          'Zapisz się bezpłatnie'
        )}
      </button>

      {/* Informacja o prywatności */}
      <p className="mt-5 text-xs text-gray-500 text-center leading-relaxed">
        Twoje dane są bezpieczne. Przetwarzamy je zgodnie z RODO.
        Możesz żądać ich usunięcia w każdej chwili.
      </p>
    </form>
  )
}
