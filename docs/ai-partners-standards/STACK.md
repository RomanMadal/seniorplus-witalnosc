# AI Partners — Standardowy Tech Stack 2026

> Reguła: **Każdy nowy projekt** AI Partners używa tego stacka jako baseline.
> Odstępstwa wymagają ADR w `obsidian/30-decisions/`.

## Filozofia

1. **Best-of-breed 2026, ale spójność z istniejącymi projektami** — żeby 1 osoba mogła obsłużyć 3 projekty bez context-switch hellu.
2. **TypeScript everywhere.** Strict mode, no any.
3. **Vercel-native** — hosting, blob, KV, edge functions, AI Gateway.
4. **Supabase-native** — DB, Auth, Storage, Realtime (osobny project per produkt).
5. **Stripe-native** — billing (osobne konto per produkt).
6. **Direct integrations** dla key partners (Meta, TikTok, ElevenLabs) — bez pośredników.
7. **AI agents jako first-class citizen** — Mastra (orchestration), Vercel AI SDK (LLM unified), MCP servers (tools).

## Standardowe wybory (2026)

| Warstwa | Wybór | Wersja |
|---|---|---|
| **Framework** | Next.js (App Router, Turbopack) | Najnowszy stable (16.x dla Viralo, 15.5 dla medicall/fnc) |
| **React** | React | 19.2 |
| **Styling** | Tailwind CSS | 4.x (Viralo), 3.4 (legacy) |
| **Components** | shadcn/ui + Radix UI primitives | latest |
| **Animations (UI / micro)** | Motion (former Framer Motion) + tailwindcss-animate | 12.x |
| **Animations (cinematic / scroll)** | Lenis + GSAP ScrollTrigger — wymagane przez `.shared/docs/PREMIUM_ANIMATED_WEBSITE.md` dla premium stron marketingowych | latest |
| **3D** | React Three Fiber + drei | latest |
| **Forms** | React Hook Form + Zod | latest |
| **Tables** | TanStack Table v8 | latest |
| **Query** | TanStack Query v5 | latest |
| **Charts** | Recharts (basic) + Tremor (dashboard) | latest |
| **Editor** | TipTap 3 | latest |
| **Calendar** | FullCalendar 6 | latest |
| **Notifications** | Sonner | latest |
| **i18n** | next-intl | latest |
| **DB** | Supabase Postgres | latest |
| **ORM** | Drizzle ORM (nowe projekty) lub @supabase/supabase-js (legacy) | latest |
| **Auth** | Supabase Auth + @supabase/ssr | latest |
| **Storage** | Vercel Blob (hot CDN) + Supabase Storage (per-tenant) | latest |
| **Cache** | Vercel KV (Upstash Redis) | latest |
| **Search** | Algolia (gdy potrzebne wyszukiwanie typu Asset Library) | latest |
| **Email** | Resend + React Email | latest |
| **Payments** | Stripe (Subscriptions + Metered Billing + Connect dla white-label) | latest |
| **Background jobs** | **Inngest** (nowe projekty) lub n8n (FakturaNaCzas legacy) | latest |
| **AI agents** | **Mastra** (TypeScript, działa na Inngest) | latest |
| **AI SDK** | Vercel AI SDK + @ai-sdk/anthropic + @ai-sdk/openai + @ai-sdk/google | latest |
| **Observability** | Sentry (errors) + PostHog EU (analytics + feature flags) | latest |
| **Bot/abuse** | botid + Vercel BotID + Cloudflare Turnstile | latest |
| **Webhooks** | standardwebhooks (HMAC verification) | latest |
| **Testing** | Vitest + Playwright + MSW + Storybook 9 | latest |
| **Linting** | ESLint 9 (flat config) + Prettier | latest |
| **Package manager** | npm (dla zachowania spójności z istniejącymi projektami) | latest |
| **CI/CD** | GitHub Actions + Vercel preview deployments | — |

## AI / Generative — provider mapping

| Use case | Provider |
|---|---|
| Wideo (master) | Higgsfield MCP (Sora 2, Veo 3.1, Kling 3.0, Seedance 2.0) |
| Wideo programatyczne | Remotion 4 + Higgsfield assets |
| Obrazy (text-heavy) | OpenAI GPT Image 2 (najlepszy text rendering 2026) |
| Obrazy (bulk/cheap) | Nano Banana 2 via fal.ai ($0.01/img) |
| Obrazy (photorealism) | FLUX 2 Pro via fal.ai/Replicate |
| LLM (default) | Claude 4.6 Sonnet via Vercel AI Gateway |
| LLM (long copy, strategy) | Claude Opus 4.7 (thinking mode) |
| LLM (cheap batch) | Gemini 3 Flash |
| TTS | ElevenLabs v3 Multilingual |
| STT | Whisper Large v3 + AssemblyAI backup |
| Embeddings | OpenAI text-embedding-3-large |
| Web scraping (statyczne) | Anthropic WebFetch (free, beta) |
| Web scraping (social) | Apify + Apify MCP |
| URL → markdown | Firecrawl |

## Konwencje kodu

### Struktura folderów (Next.js App Router)

```
src/
  app/                      # routes (App Router)
    (marketing)/            # public landing
    (auth)/                 # login, register, callback
    (dashboard)/            # authenticated app
    api/                    # route handlers
      cron/                 # cron endpoints (Bearer CRON_SECRET only)
      webhooks/             # external webhooks (HMAC verify)
  ai/                       # AI flows, agents, prompts
    agents/                 # Mastra agents
    flows/                  # Genkit / Vercel AI SDK flows
    prompts/                # System prompts (versioned)
    skills/                 # Cursor / Claude skills (per-project)
  components/               # React components
    ui/                     # shadcn primitives
    features/               # feature-specific (CalendarView, AdEditor, ...)
    marketing/              # public landing components
  db/                       # Drizzle schema, migrations, queries
    schema/                 # *.schema.ts files (one per domain)
    queries/                # type-safe query builders
    migrations/             # drizzle-kit generated
  features/                 # vertical slices (feature-first folders)
    creative-studio/
    scheduler/
    ads-manager/
    analytics/
  lib/                      # utility code
    supabase/               # client/server/admin helpers
    stripe/                 # billing helpers
    inngest/                # functions, client
    higgsfield/             # client wrapper
    meta/                   # FB Marketing API client
    tiktok/                 # TikTok Marketing API client
    integrations/           # external integrations
    middleware/             # rate limit, auth, RLS
    security/               # encryption, masking, validators
  hooks/                    # React hooks
  stores/                   # Zustand stores (jeśli potrzebne)
  i18n/                     # next-intl messages
public/
supabase/
  migrations/               # SQL migrations (lustrzane do drizzle)
  seed/                     # test data
  functions/                # Edge Functions (jeśli używamy)
docs/                       # per-project docs
e2e/                        # Playwright tests
scripts/                    # one-off operational scripts
```

### File naming
- Components: `PascalCase.tsx` (np. `CalendarView.tsx`)
- Hooks: `useCamelCase.ts` (np. `useScheduledPosts.ts`)
- Server actions / route handlers: `kebab-case.ts`
- DB schema files: `kebab-case.schema.ts`
- Tests: `<name>.test.ts(x)` (Vitest), `<name>.e2e.ts` (Playwright)

### Server vs Client
- Domyślnie **Server Components**.
- `'use client'` tylko gdy potrzebne (state, effects, browser APIs).
- Server Actions dla mutations (z `revalidateTag` / `revalidatePath`).
- Cache Components (Next.js 16) z `use cache` + `cacheLife` + `cacheTag`.

### TypeScript
- `strict: true`, `noUncheckedIndexedAccess: true`
- Import type aliases via `@/*` (mapped do `src/*`)
- Zod schemas jako single source of truth — typy generowane przez `z.infer<typeof Schema>`

### Errors
- Server: `throw new ClientError(msg, status)` (custom class) — middleware przechwytuje
- Client: `<ErrorBoundary>` + Sentry capture
- Background: Inngest auto-retry; po N nieudanych retry → Sentry + Slack alert

## Bezpieczeństwo (zawsze)

Patrz `.shared/context/SECURITY.md` — TL;DR:
- Multi-tenant isolation: ZAWSZE `.eq('organization_id', orgId)` przy admin client
- Sekretne pola: NIGDY w response (use `maskSensitiveSettings`)
- Webhooks: HMAC weryfikacja → `401` natychmiast przy mismatch
- RBAC: tylko `platform_owner`/`platform_staff` dla `/api/admin/*`
- XSS: `<iframe sandbox srcDoc>` zamiast `dangerouslySetInnerHTML`
- Cron: tylko `Authorization: Bearer ${CRON_SECRET}` lub `x-vercel-cron: 1`

## Performance baseline

- Lighthouse mobile > 90 (Performance, Accessibility, SEO)
- Core Web Vitals — wszystkie zielone
- ISR + Cache Components dla landing pages
- Server Actions z `revalidateTag` zamiast pełnego revalidate
- Streaming (Suspense + React.lazy) dla complex dashboards
