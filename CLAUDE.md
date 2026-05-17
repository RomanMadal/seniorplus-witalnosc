@AGENTS.md

# SeniorPlus Witalność 60+ — Kontekst projektu

> **Dla Claude Code:** ten plik jest jedyną prawdą o filozofii projektu. Przeczytaj **całość** zanim cokolwiek zmienisz w UI/UX. Reguły są **non-negotiable** — wynikają z research nad audiencją 60+, nie z preferencji.

## Czym jest projekt

Strona programu zdrowia **Witalność 60+** dla osób po 60. roku życia. Współpraca z Fundacją SeniorPlus, dystrybucja suplementów Eqology (omega-3 Pure Arctic Oil) i tradycyjnych preparatów ziołowych Klimuszko.

**Cel biznesowy:** lead generation — senior wypełnia formularz lub dzwoni, otrzymuje bezpłatną konsultację telefoniczną.

## Kto pracuje

- **Roman Madaliński** — właściciel projektu, brat Józefa Madalińskiego (AI Partners). Roman odpowiada za **grafikę, animacje, wygląd**. Pracuje z Claude Code.
- **Józef + jego Claude** — odpowiadają za **content, lejek konwersji, logikę biznesową**.

Workflow: każdy pushuje do `origin/master` po swojej stronie, drugi pobiera `git pull` i kontynuuje.

## Audiencja — to NIE jest premium luxury site

**Target:** osoby 60-80+ lat. Senior consumer w Polsce.

To nie jest premium brand site. To nie jest cinematic experience. To strona, która musi wzbudzić **zaufanie** i **przekonać kogoś podejrzliwego o scam** żeby zadzwonił po bezpłatną konsultację o suplementach.

### Anti-scam aesthetic gate

Polacy 60+ są bombardowani kampaniami „Nie daj się oszukać". Każdy element który wygląda jak **marketing premium** (gradient gold, shimmer, „Premium", „Luxury", „Najlepsza oferta", animowane liczniki, błyszczące CTA) **zwiększa wskaźnik bounce**, a nie konwersji.

**Zakazane wizualnie (anti-scam):**
- Gradient gold / metallic shine / shimmer animations
- Słowa „Premium / Luxury / Gold / Elite" w copy
- Fake liczniki bez źródła („750 000+ seniorów" gdy nie wiadomo skąd)
- Fake testimoniale ze stock photos
- Particle 3D / cinematic animowane tła
- CTA brzmiące nachalnie („Tak, zadzwońcie do mnie")
- Pop-upy interrupt-style, aggressive countdown timery
- Autoplay video z dźwiękiem

**Pożądane wizualnie — modern senior-friendly (inspiracja: AARP 2025, AgeUK, Athletic Greens, Eqology.com):**
- Stonowana paleta: deep navy + warm medical green + off-white
- Modern typography: duże nagłówki Playfair H1 (autorytet) + Inter body 18-20px
- **Subtle scroll reveals** (fade + slight rise, ≤400ms, once) — modern UX, OK z `prefers-reduced-motion` guard
- **Card hover lift** (`-translate-y-1` + shadow) — modern feel, touch-friendly
- **Layered hero** z prawdziwymi zdjęciami produktów (overlap, asymmetric OK)
- Real photography (produkty Eqology, później zdjęcia seniorów ze zgodą)
- Modern desaturated gradients (navy→bg, green→bg — NIE gold)
- Liczniki **prawdziwych** metryk (Eqology 30 lat, EFSA-approved, ile produktów, etc.)
- Subtle geometric background patterns (low opacity) — NIE particles
- Smooth FAQ accordions, sticky CTAs, micro-interactions na buttonach
- Generous whitespace, modern spacing scale

## Senior UX Gates — non-negotiable

| Wymiar | Wartość | Powód |
|---|---|---|
| **Body font min** | 18px mobile / 20px desktop | Spadek ostrości wzroku po 60 |
| **H1** | 36-48px, Playfair Display, weight 700+ | Autorytet fundacji, czytelność |
| **Body font** | Inter, weight 400/500 | Sans-serif na ekranie czytelniejszy |
| **Line-height** | 1.6 body, 1.2 headings | Dla seniorów z dyslexją/spadkiem ostrości |
| **Touch targets** | ≥56×56px | Motor decline, drżenie rąk |
| **Kontrast** | 7:1 body (WCAG AAA), 4.5:1 large | Kolor blindness, zaćma |
| **Linki** | kolor + **podkreślenie** | Sam kolor nie wystarczy |
| **Hover effects** | Tylko jako enhancement, nie jako jedyna informacja | Touch-first, mobile-heavy |
| **Smooth scroll (Lenis)** | **WYŁĄCZONE** | Zaburza native scroll feedback, vestibular discomfort |
| **3D / Three.js** | **WYŁĄCZONE** | Drogie obliczeniowo, rozprasza, na słabszych urządzeniach lag |
| **Scroll-driven scrub / pin / parallax** | **NIE** | Cognitive load, vestibular discomfort |
| **Modern allowed animations** | Fade+slide reveals ≤400ms (once), card hover lift, micro-interactions na CTA, smooth accordion, animowane liczniki **prawdziwych** metryk | Modern UX feel, nie scenografia |
| **`prefers-reduced-motion`** | Wszystkie animacje wyłączane (globalny CSS reset) | Część audiencji ma motion sensitivity |
| **Phone CTA** | Równorzędny z formularzem, **duży klikalny `tel:` link w hero** | 60% seniorów preferuje rozmowę |
| **Forma** | Min pól. Wymagane: imię + telefon. Reszta opcjonalna. | Każde dodatkowe pole = ~10% drop-off |
| **Język** | Plain Polish, krótkie zdania, brak anglicyzmów | „Wellness program" → „Program zdrowia" |
| **Abbreviacje** | Rozwijać („RODO" → „RODO — ochrona danych") | Cognitive load |
| **Print styles** | `@media print` — czytelny layout bez tła | Seniorzy drukują |
| **Skip-to-content + focus-visible** | Wymagane | Screen readers, keyboard nav |

## Stack — minimal, bez decorative deps

**Zostawiamy:**
- Next.js 16, React 19, TypeScript
- Tailwind v4
- Framer Motion 12 — **jedyny system animacji** (minimal use: on-load fade-in + form micro-interactions)
- Supabase JS — lead capture
- lucide-react — ikony

**Usuwamy (bundle ~600-800 KB):**
- `three`, `@react-three/fiber`, `@react-three/drei` — 3D hero out
- `lenis` — native scroll wystarczy
- `gsap`, `@gsap/react` — scroll-driven animacje out
- `LeadForm.tsx` — martwy duplikat `SimpleLeadForm.tsx`

## Paleta (design tokens)

| Token | Hex | Użycie |
|---|---|---|
| `--ink` | `#1e3a5f` | Headings, body text, navy |
| `--ink-soft` | `#3d5a80` | Secondary text |
| `--bg` | `#faf8f5` | Body background, off-white |
| `--surface` | `#ffffff` | Cards |
| `--trust` | `#2d7a5f` | Primary CTA, accent (warm medical green) |
| `--trust-soft` | `#e8f3ee` | Trust badge backgrounds |
| `--warn` | `#b54708` | Errors (stonowany, nie czerwony) |
| `--border` | `#e2dfd9` | Subtle borders |

Inspiracja: NHS.UK (#005eb8 blue + white), GOV.UK, AARP (#c8102e + navy — odrzucamy red, zostawiamy navy+green).

## Architektura folderów

```
src/
  app/
    layout.tsx                      ← root, font loading, metadata
    page.tsx                        ← orchestrator (sekcje), max 50 linii
    produkty/page.tsx               ← orchestrator
    protokoly-zdrowia/page.tsx      ← orchestrator
    dziekujemy/page.tsx
    globals.css                     ← tokens + minimal utilities
    robots.ts, sitemap.ts           ← (do dodania)
  components/
    layout/                         ← Nav, Footer, StickyMobileCta, SkipToContent
    sections/                       ← Hero, SocialProof, Problems, HowItWorks, LeadFormSection, FAQ, Disclaimer
    shared/                         ← Reveal (fade-in), PhoneCTA, PremiumLogo (rename → Logo)
  data/
    products.ts                     ← produkty Eqology
    protocols.ts                    ← protokoły zdrowia
    faq.ts
    problems.ts                     ← 3 problemy
    steps.ts                        ← 3 kroki "Jak działa"
    contact.ts                      ← telefon, email, WhatsApp link
  lib/
    supabase.ts
    types.ts
    cn.ts                           ← className merge helper
  hooks/
    usePrefersReducedMotion.ts
```

**Reguły:**
- Każda sekcja = jeden plik `components/sections/*.tsx`
- `'use client'` tylko jeśli musi (interakcja, hook, motion)
- Content w `data/*.ts` — edycja tekstów bez ruszania komponentów
- Server Components domyślnie

## Compliance & legal (suplementy + zdrowie)

**Wymagane prawnie w PL:**
1. **Disclaimer GIS** w stopce każdej strony z suplementami:
   *„Suplement diety nie może być stosowany jako substytut zróżnicowanej diety. Zalecane jest zbilansowane odżywianie i zdrowy tryb życia."*
2. **Health claims** — każda fraza („wspiera pamięć", „poprawia funkcje poznawcze") musi referować autoryzowany **EFSA health claim** z EU Register. Jeśli brak — wycinamy.
3. **RODO** — link do polityki prywatności w zgodach formularza.
4. **Reklama suplementów** — Ustawa o bezpieczeństwie żywności, Rozp. UE 1924/2006 + 432/2012.
5. **Zakaz fake testimoniali** — Dyrektywa UCPD + ustawa o zwalczaniu nieuczciwej konkurencji.

## Bezpieczeństwo

- **`lead_score`** → DB trigger, **nigdy** kalkulowane klient-side
- **RLS** na `seniorplus_leads` — tylko INSERT, brak SELECT z anon key
- **Honeypot** w formularzu (hidden field)
- **Rate limit** — Vercel middleware lub Supabase Edge Function (5 submissions/h/IP)
- Console.log błędów → silent + user-facing message (bez log w prod)
- **Sekrety** w `.env.local` (gitignored), nigdy w repo

## Model biznesowy: **lead magnet — broszura PDF za email**

Decyzja Romana z 2026-05-17 (commit `2759db0`): pivot z „umów rozmowę telefoniczną" na **email lead magnet**:
- **Primary CTA**: „Pobierz bezpłatną broszurę" → email lead magnet PDF „5 filarów witalności seniora 60+"
- **Secondary CTA**: telefon (zachowany, senior UX gate — 60+ często woli rozmowę)
- **Form**: email wymagany, telefon opcjonalny
- **Lejek**: email → broszura PDF na skrzynkę → opcjonalny follow-up call jeśli zostawił telefon
- **DB**: `lead_type='broszura'`, kolumna `email NOT NULL`, `seniorplus_consents.consent_type='newsletter'`

### Wymagana Supabase migration (Roman, before launch)

```sql
ALTER TABLE seniorplus_leads
  ADD COLUMN email TEXT,
  ADD COLUMN lead_type TEXT DEFAULT 'broszura';

-- Po deployu i pierwszych leadach z formularza nowego flow:
ALTER TABLE seniorplus_leads
  ALTER COLUMN email SET NOT NULL;

-- Update enum lub check constraint na consent_type żeby przyjmować 'newsletter':
-- (zależy od jego obecnego schematu)
```

### Co Roman musi przygotować

1. **Broszura PDF „5 filarów witalności seniora 60+"** — 5 rozdziałów: energia, stawy, pamięć, serce, sen. Każdy łączy konkretny produkt Eqology z preparatem Klimuszko.
2. **Email automation** — przy nowym leadzie z `lead_type='broszura'`, wysłać PDF jako attachment lub link do storage. Opcje:
   - Supabase Edge Function (database webhook → Resend/SendGrid)
   - Brevo / Mailerlite / ConvertKit + automatyczny double opt-in
   - n8n workflow (jeśli już istnieje)
3. **Hosting PDF** — Supabase Storage bucket `broszury/` z publicznym URL lub signed URLs

## Notki — do ustalenia z Romanem przy najbliższej iteracji

> Te punkty są **placeholdery / decyzje pending**. Kiedy Roman wraca do projektu, jego Claude powinien przejść tę listę razem z nim:

1. **Telefon w hero/CTA**: aktualnie `+48 503 354 437` (numer Romana z footera). Potwierdzić czy to docelowy numer kontaktowy projektu, czy potrzebny dedykowany.
2. **Email kontaktowy**: `madalinski.roman@gmail.com` — czy zostaje, czy dedykowany `kontakt@seniorpluswitalnosc.pl`?
3. **Prawdziwe testimoniale** — usunęliśmy fake'a „Krystyna 68 lat" (stock photo + zmyślony cytat = ryzyko prawne). Roman zbiera **prawdziwe** testimoniale (imię, miasto, zgoda na publikację wizerunku + cytatu na piśmie).
4. **Metric „750 000 seniorów w sieci Fundacji"** — usunięty do czasu źródła. Skąd liczba? Jeśli to faktyczna liczba Fundacji SeniorPlus, dodać link do źródła.
5. **Health claims w copy** — przejść każdy claim z `data/products.ts` i `data/protocols.ts`, sparować z konkretnym EFSA-authorised claim (EU Register) lub przeformułować/wyciąć.
6. **Polityka prywatności** — route `/polityka-prywatnosci` placeholder. Treść musi powstać (kto admin danych, podstawa prawna, czas retencji, prawa).
7. **Forma — 2 pola czy multi-step?** Aktualnie: 2 wymagane (imię + telefon), 2 opcjonalne (wiek, problem) niżej. Roman do decyzji A/B test po pierwszych leadach.
8. **Sup. dla zdrowia → konsultacja z prawnikiem** rekomendowana przed komercyjnym launchem (GIS może audytować).

## Linki referencyjne

- **`docs/ai-partners-standards/`** — baseline standardy AI Partners (STACK, SECURITY, CONTENT_STYLE, TECH_STANDARDS). Czytaj te dokumenty kiedy planujesz większe zmiany — szczególnie SECURITY.md przed dotknięciem Supabase / auth.
- Senior UX research: Nielsen Norman Group „Designing for Older Adults", W3C WAI-AGE, GOV.UK service manual, AARP redesign 2024
- Editorial design inspiration: Athletic Greens, Vitabiotics, Eqology.com, Augustinus Bader (premium wellness 2026)

**Hierarchia gdy standardy się rozjeżdżają z tym CLAUDE.md** — ten plik wygrywa. Standardy z `docs/ai-partners-standards/` to baseline (np. „możesz używać Three.js dla premium site"). Ten CLAUDE.md to specyfika senior audience (np. „Three.js WYŁĄCZONE — overkill, lag na słabszych urządzeniach, rozprasza"). Lokalna decyzja wygrywa z baseline.

## Setup po `git pull`

```bash
npm install
cp .env.example .env.local      # i wstaw prawdziwe klucze Supabase
npm run dev                     # http://localhost:3000
```

**Sekrety:**
- `.env.local` jest gitignored — nigdy nie commituj
- Klucze Supabase: Roman ma swój projekt; aktualne placeholdery służą tylko do `next build`

## Status refactor (stan: 2026-05-17)

**Co zrobione (branch `refactor/ai-partners-standards`):**
- Architektura: `components/{layout,sections,shared}` + `data/` + `hooks/`
- `app/page.tsx` rozbity z 521 do 22 linii (orchestrator)
- Subpages produkty/protokoly/dziekujemy przepisane na nową architekturę
- Content wyciągnięty do `src/data/*.ts` (products, protocols, problems, steps, faq, contact)
- Usunięty stack cinematic: Three.js, R3F, Drei, Lenis, GSAP (~700 KB bundle)
- Usunięty fake testimonial „Krystyna" + fake metric „750k seniorów"
- Senior-friendly form: 2 pola wymagane + opcjonalne, honeypot, telefon-first hero
- Anti-scam aesthetic reset: navy + medical green, bez gold/shimmer
- `prefers-reduced-motion` global reset, `@media print`, SkipToContent, focus-visible

**Co do zrobienia (TODO dla Romana lub kolejna iteracja):**
1. **Health claims compliance** — przejść każdy claim w `data/products.ts` i `data/protocols.ts`, sparować z EFSA EU Register lub przeformułować
2. **Subpages content** — odtworzyć dodatkowe sekcje (test Vitas, edukacja EPA/DHA, porównanie produktów) jako komponenty
3. **Polityka prywatności + regulamin** — placeholder route, treść do napisania
4. **Favicon** — `src/app/favicon.ico` przeniesiony do `/tmp/seniorplus-favicon-original.ico` (Turbopack Next 16 nie akceptuje RGB-only PNG w ICO). Regenerować jako RGBA.
5. **Supabase RLS audit** — `supabase_setup.sql` zweryfikować: tylko INSERT z anon key, brak SELECT
6. **`lead_score` jako DB trigger** — usunąć z klienta
7. **Rate limit** — Vercel middleware (5 submissions/h/IP)
8. **JSON-LD** — Organization (footer), FAQPage, MedicalWebPage
9. **`robots.ts` + `sitemap.ts`** w `app/`
10. **Punkty z sekcji „do ustalenia z Romanem"** wyżej

## Next.js 16

Breaking changes vs training — patrz `node_modules/next/dist/docs/` przed wprowadzaniem nieznanych konstrukcji (jak w `AGENTS.md`).
