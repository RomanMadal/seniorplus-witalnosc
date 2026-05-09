// Typy TypeScript dla bazy danych SeniorPlus

export type Persona = 'senior_60_74' | 'senior_75_plus' | 'opiekun'
export type Zrodlo = 'targi' | 'webinar' | 'facebook' | 'polecenie' | 'fundacja' | 'qr_code' | 'inne'
export type LeadStatus = 'new' | 'contacted' | 'interested' | 'qualified' | 'customer' | 'not_interested'
export type Zainteresowanie = 'energia' | 'stawy' | 'serce' | 'pamiec' | 'odpornosc'

export interface Lead {
  id: string
  imie: string
  nazwisko?: string
  telefon: string
  email?: string
  wiek?: number
  persona: Persona
  zrodlo: Zrodlo
  zainteresowania?: Zainteresowanie[]
  notatki?: string
  status: LeadStatus
  lead_score: number
  created_at: string
  updated_at: string
}

export type ConsentType = 'kontakt_tel' | 'przetwarzanie' | 'marketing' | 'newsletter'

export interface Consent {
  id: string
  lead_id: string
  consent_type: ConsentType
  consent_given: boolean
  consent_version: string
  ip_address?: string
  user_agent?: string
  created_at: string
}

export type EventType = 'call' | 'email' | 'sms' | 'meeting' | 'note'
export type EventOutcome = 'success' | 'no_answer' | 'callback' | 'not_interested' | 'voicemail'

export interface ContactEvent {
  id: string
  lead_id: string
  event_type: EventType
  description?: string
  outcome?: EventOutcome
  next_action?: string
  next_action_date?: string
  created_by: string
  created_at: string
}

export type FollowUpType = '7_day' | '30_day' | '60_day' | 'custom'

export interface FollowUp {
  id: string
  lead_id: string
  follow_up_type: FollowUpType
  scheduled_date: string
  completed: boolean
  completed_at?: string
  notes?: string
  created_at: string
}

// Dane formularza z frontendu
export interface LeadFormData {
  imie: string
  nazwisko: string
  telefon: string
  email: string
  wiek: string
  persona: Persona
  zrodlo: Zrodlo
  zainteresowania: Zainteresowanie[]
  zgoda_kontakt: boolean
  zgoda_przetwarzanie: boolean
}
