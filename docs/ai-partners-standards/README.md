# AI Partners — standardy projektowe

Te dokumenty pochodzą z workspace AI Partners (`/Users/jozefmadalinski/Cursor/Code/Ai Partners/.shared/`) — Józef je utrzymuje dla wszystkich projektów. Skopiowane do tego repo żeby Twój Claude miał kompletny kontekst bez sięgania do innego workspace'u.

## Co tu jest

| Plik | Opis | Kiedy czytać |
|---|---|---|
| [`STACK.md`](./STACK.md) | Baseline stack technologiczny: Next.js 16, Tailwind v4, Supabase, struktura folderów, konwencje nazewnictwa | Przy zakładaniu nowych ficzerów, decyzjach o bibliotekach |
| [`SECURITY.md`](./SECURITY.md) | Multi-tenant isolation, RLS, webhooks HMAC, secrets handling, audit logs | **PRZED każdym dotknięciem Supabase / auth / API** |
| [`CONTENT_STYLE.md`](./CONTENT_STYLE.md) | Brand voice PL + EN, ton, jakiej formy używać, słowa zakazane | Przy pisaniu copy, FAQ, emaili |
| [`TECH_STANDARDS.md`](./TECH_STANDARDS.md) | Code quality: TS strict, Zod, error handling, naming, komentarze | Code review, nowy kod |

## Co NIE jest tu

- **`COMPANY.md`** (kontekst firmy AI Partners — MediCall, Viralo, etc.) — pominięte bo Twój projekt nie jest częścią portfolio AI Partners. Jeśli chcesz, możesz dorzucić od siebie podobny opis Twojej firmy/marki.
- **`MARKETING_STRATEGY.md`** — pominięte (AI Partners specific, 775 linii).
- **`PREMIUM_ANIMATED_WEBSITE.md`** (reguły cinematic scroll-driven sites) — **świadomie odrzucone** dla tego projektu. Audiencja 60+ wymaga restraint, nie cinematic. Patrz `CLAUDE.md` w root → sekcja „Senior UX Gates".

## Hierarchia

Gdy `CLAUDE.md` (root) i standardy z `docs/ai-partners-standards/` się rozjeżdżają — **`CLAUDE.md` wygrywa**. Standardy to baseline, CLAUDE.md to specyfika tego projektu (senior UX, anti-scam aesthetic, lead magnet model).

Przykład: `STACK.md` mówi że można używać Three.js / Lenis dla premium site. `CLAUDE.md` mówi że dla tego projektu są **WYŁĄCZONE** (senior gate). CLAUDE.md wygrywa.
