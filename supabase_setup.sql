-- =====================================================
-- SENIORPLUS WITALNOŚĆ 60+ - Schemat bazy danych
-- =====================================================
-- Uruchom ten SQL w Supabase:
-- Dashboard → SQL Editor → New Query → Wklej → Run

-- =====================================================
-- TABELA 1: seniorplus_leads - główna tabela leadów
-- =====================================================
CREATE TABLE seniorplus_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,

  -- Dane kontaktowe
  imie TEXT NOT NULL,
  nazwisko TEXT,
  telefon TEXT NOT NULL,
  email TEXT,

  -- Informacje o osobie
  wiek INT,
  persona TEXT DEFAULT 'senior_60_74' CHECK (persona IN ('senior_60_74', 'senior_75_plus', 'opiekun')),

  -- Źródło i zainteresowania
  zrodlo TEXT DEFAULT 'targi' CHECK (zrodlo IN ('targi', 'webinar', 'facebook', 'polecenie', 'fundacja', 'qr_code', 'inne')),
  zainteresowania TEXT[], -- np. {'energia', 'stawy', 'serce'}

  -- Status i notatki
  notatki TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'interested', 'qualified', 'customer', 'not_interested')),
  lead_score INT DEFAULT 0 CHECK (lead_score >= 0 AND lead_score <= 100),

  -- Daty
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indeksy dla szybszego wyszukiwania
CREATE INDEX idx_seniorplus_leads_status ON seniorplus_leads(status);
CREATE INDEX idx_seniorplus_leads_persona ON seniorplus_leads(persona);
CREATE INDEX idx_seniorplus_leads_zrodlo ON seniorplus_leads(zrodlo);
CREATE INDEX idx_seniorplus_leads_created ON seniorplus_leads(created_at DESC);

-- =====================================================
-- TABELA 2: seniorplus_consents - zgody RODO
-- =====================================================
CREATE TABLE seniorplus_consents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID REFERENCES seniorplus_leads(id) ON DELETE CASCADE,

  -- Typ zgody
  consent_type TEXT NOT NULL CHECK (consent_type IN ('kontakt_tel', 'przetwarzanie', 'marketing', 'newsletter')),
  consent_given BOOLEAN DEFAULT FALSE,
  consent_version TEXT NOT NULL, -- np. 'v1.0_2026-05'

  -- Metadane (dla audytu RODO)
  ip_address TEXT,
  user_agent TEXT,

  -- Data
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_seniorplus_consents_lead ON seniorplus_consents(lead_id);

-- =====================================================
-- TABELA 3: seniorplus_contact_events - historia kontaktów
-- =====================================================
CREATE TABLE seniorplus_contact_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID REFERENCES seniorplus_leads(id) ON DELETE CASCADE,

  -- Typ zdarzenia
  event_type TEXT NOT NULL CHECK (event_type IN ('call', 'email', 'sms', 'meeting', 'note')),
  description TEXT,

  -- Wynik i następne kroki
  outcome TEXT CHECK (outcome IN ('success', 'no_answer', 'callback', 'not_interested', 'voicemail')),
  next_action TEXT,
  next_action_date DATE,

  -- Kto dodał
  created_by TEXT DEFAULT 'Roman',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_seniorplus_events_lead ON seniorplus_contact_events(lead_id);
CREATE INDEX idx_seniorplus_events_next_action ON seniorplus_contact_events(next_action_date);

-- =====================================================
-- TABELA 4: seniorplus_follow_ups - zaplanowane follow-upy
-- =====================================================
CREATE TABLE seniorplus_follow_ups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID REFERENCES seniorplus_leads(id) ON DELETE CASCADE,

  -- Typ follow-upu
  follow_up_type TEXT NOT NULL CHECK (follow_up_type IN ('7_day', '30_day', '60_day', 'custom')),
  scheduled_date DATE NOT NULL,

  -- Status
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMPTZ,
  notes TEXT,

  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_seniorplus_followups_scheduled ON seniorplus_follow_ups(scheduled_date) WHERE completed = FALSE;
CREATE INDEX idx_seniorplus_followups_lead ON seniorplus_follow_ups(lead_id);

-- =====================================================
-- ROW LEVEL SECURITY - zabezpieczenia
-- =====================================================

-- Włącz RLS dla wszystkich tabel
ALTER TABLE seniorplus_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE seniorplus_consents ENABLE ROW LEVEL SECURITY;
ALTER TABLE seniorplus_contact_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE seniorplus_follow_ups ENABLE ROW LEVEL SECURITY;

-- Polityki dla seniorplus_leads
CREATE POLICY "Allow anonymous insert leads" ON seniorplus_leads
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated select leads" ON seniorplus_leads
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update leads" ON seniorplus_leads
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Polityki dla seniorplus_consents
CREATE POLICY "Allow anonymous insert consents" ON seniorplus_consents
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated select consents" ON seniorplus_consents
  FOR SELECT USING (auth.role() = 'authenticated');

-- Polityki dla seniorplus_contact_events
CREATE POLICY "Allow authenticated all events" ON seniorplus_contact_events
  FOR ALL USING (auth.role() = 'authenticated');

-- Polityki dla seniorplus_follow_ups
CREATE POLICY "Allow authenticated all followups" ON seniorplus_follow_ups
  FOR ALL USING (auth.role() = 'authenticated');

-- =====================================================
-- FUNKCJA: automatyczna aktualizacja updated_at
-- =====================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_seniorplus_leads_updated_at
  BEFORE UPDATE ON seniorplus_leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- GOTOWE! Tabele są przygotowane.
-- =====================================================
-- Następne kroki:
-- 1. Skopiuj ten SQL do Supabase SQL Editor
-- 2. Kliknij "Run"
-- 3. Sprawdź czy tabele zostały utworzone w Table Editor
