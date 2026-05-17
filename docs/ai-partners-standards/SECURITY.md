# AI Partners — Security Baseline

> Wynika z audytu bezpieczeństwa FakturaNaCzas (2026-03) i best practices SaaS multi-tenant 2026.
> Stosuj przy każdej zmianie kodu — bez wyjątków.

## 1. Multi-tenant isolation

`createAdminSupabaseClient()` (lub Drizzle z service-role) **omija RLS**. Każde zapytanie przez admin client **MUSI** filtrować po `organization_id` (lub `tenant_id`, `agency_id`, `client_id`), chyba że jest świadomie platformowe — wtedy dodaj komentarz wyjaśniający.

```typescript
// ✅ POPRAWNIE
await adminSupabase
  .from("scheduled_posts")
  .select("*")
  .eq("organization_id", orgId);

// ❌ NIEBEZPIECZNE — cross-tenant data leak
await adminSupabase.from("scheduled_posts").select("*");
```

Dla projektów white-label (Viralo) — dwa poziomy:
- `agency_id` (parent) → `client_organization_id` (child) → `user_id`
- Zawsze sprawdź **OBA** filtry przy admin queries.

## 2. Wrażliwe pola — lista zakazana w odpowiedziach API

Te pola **NIGDY** nie mogą trafić do klienta w czystej postaci:

```
*_api_key, *_secret, *_token, *_password, *_private_key,
stripe_secret_key, supabase_service_role_key, encryption_key,
meta_system_user_token, tiktok_access_token, openai_api_key
```

Stosuj `maskSensitiveSettings(obj)` (lub `redactSecrets`) przed zwróceniem danych z tabeli `settings` lub `organizations`.

```typescript
function maskSensitiveSettings<T extends Record<string, any>>(obj: T): T {
  const SENSITIVE = /(_api_key|_secret|_token|_password|_private_key)$/i;
  const masked = { ...obj };
  for (const key of Object.keys(masked)) {
    if (SENSITIVE.test(key) && masked[key]) {
      (masked as any)[key] = "***";
    }
  }
  return masked;
}
```

## 3. Per-tenant token encryption (envelope encryption)

Z dokumentu PDF (sekcja „Bezpieczeństwo i Ekonomia"): **Envelope Encryption** dla tokenów social media.

Schemat:
1. Master key (`ENCRYPTION_KEY`) trzymany w Vercel Env Vars.
2. Per-tenant key derivation: `HKDF(master_key, salt = tenant_id)`.
3. Token encrypted as: `AES-256-GCM(plaintext, tenant_key)`.
4. Storage w DB: `enc_token (bytea)` + `enc_iv (bytea)` + `enc_tag (bytea)`.

Kod (Viralo `lib/security/encryption.ts`):
```typescript
import { createCipheriv, createDecipheriv, randomBytes, hkdfSync } from "crypto";

const MASTER = Buffer.from(process.env.ENCRYPTION_KEY!, "base64");

function deriveKey(tenantId: string): Buffer {
  return Buffer.from(hkdfSync("sha256", MASTER, Buffer.from(tenantId), Buffer.from("viralo-token-v1"), 32));
}

export function encrypt(plaintext: string, tenantId: string) {
  const key = deriveKey(tenantId);
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", key, iv);
  const enc = Buffer.concat([cipher.update(plaintext, "utf8"), cipher.final()]);
  return { enc, iv, tag: cipher.getAuthTag() };
}

export function decrypt(enc: Buffer, iv: Buffer, tag: Buffer, tenantId: string): string {
  const key = deriveKey(tenantId);
  const decipher = createDecipheriv("aes-256-gcm", key, iv);
  decipher.setAuthTag(tag);
  return Buffer.concat([decipher.update(enc), decipher.final()]).toString("utf8");
}
```

## 4. Webhook authentication — hard-fail

Każdy webhook zewnętrzny (Stripe, Meta, TikTok, ElevenLabs, Resend) **MUSI** zwrócić `401` przy jakimkolwiek błędzie weryfikacji sygnatury HMAC. Logowanie ostrzeżenia i kontynuowanie przetwarzania jest **ZABRONIONE**.

```typescript
import { Webhook } from "standardwebhooks";

export async function POST(req: Request) {
  const wh = new Webhook(process.env.META_WEBHOOK_SECRET!);
  let payload;
  try {
    payload = wh.verify(await req.text(), {
      "webhook-id": req.headers.get("x-hub-id")!,
      "webhook-timestamp": req.headers.get("x-hub-timestamp")!,
      "webhook-signature": req.headers.get("x-hub-signature-256")!,
    });
  } catch {
    return new Response("Invalid signature", { status: 401 });
  }
  // proceed safely
}
```

## 5. RBAC — endpointy `/api/admin/*`

Dostęp wyłącznie dla `platform_owner` / `platform_staff` (lub `ADMIN_EMAIL` fallback). Rola `org_admin` lub `agency_owner` **nigdy** nie przechodzi przez `ensureAdmin()`. Zarządzanie użytkownikami w ramach organizacji odbywa się przez `/api/organizations/[orgId]/users`.

## 6. XSS — renderowanie HTML z bazy

Zamiast `dangerouslySetInnerHTML` używaj:
- `<iframe sandbox="" srcDoc={html} />` — preview email/post
- `escapeHtml()` na wszystkich plain-text wartościach (nazwy firm, tytuły postów, subjekty maili) przed osadzeniem w template stringach
- Markdown → React: `react-markdown` z `rehype-sanitize`

## 7. Cron endpoints

`/api/cron/*` akceptują autoryzację **wyłącznie** przez:
- `Authorization: Bearer ${CRON_SECRET}` (Vercel Cron lub external)
- `x-vercel-cron: 1` (Vercel Cron native)

Query param `?secret=...` jest **ZAKAZANY** (trafia do logów proxy).

## 8. Rate limiting

Wszystkie publiczne endpointy + kosztowne (AI generation):

```typescript
// lib/middleware/rate-limit.ts
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";

export const ipLimiter = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(10, "10 s"),
});

export const aiLimiter = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.tokenBucket(60, "1 m", 60),
});

export async function applyRateLimit(req: Request, key: string) {
  const ip = req.headers.get("x-forwarded-for") || "anon";
  const { success } = await ipLimiter.limit(`${key}:${ip}`);
  if (!success) throw new Response("Too many requests", { status: 429 });
}
```

## 9. CSP + Security headers

W `middleware.ts` lub `next.config.ts`:

```typescript
const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Content-Security-Policy",
    value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://js.stripe.com https://eu.i.posthog.com; ...",
  },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];
```

## 10. Logging — co NIE logujemy

- ❌ API keys, access tokens, refresh tokens, passwords
- ❌ PII bez maskowania (email → `j***@example.com`, phone → `+48***456789`)
- ❌ Pełne payloady webhooków (tylko event_id + type)
- ❌ Prompts z user content (zachowujemy tylko prompt template + hash)
- ✅ user_id, organization_id, request_id (UUID v4), timestamp, action

## 11. Secrets rotation

- Stripe webhook secret — co 6 mc lub po incydencie
- Meta App Secret — co 12 mc lub po podejrzeniu wycieku
- Supabase service_role_key — co 12 mc + po każdym off-boardingu deva
- Encryption master key — **nigdy** (rotation = re-encrypt wszystkich tenantów = osobny plan)

## 12. Compliance checklist (per produkt)

- [ ] DPA podpisany z każdym sub-processorem (Vercel, Supabase, OpenAI, Anthropic, Google, ElevenLabs, Stripe, Resend, Sentry, PostHog, Inngest, Higgsfield, Apify, Algolia, Cloudflare)
- [ ] Privacy Policy + Cookies (PL+EN) — iubenda lub Termly
- [ ] Terms of Service + DPA template dla klientów (Viralo agencje muszą podpisać DPA z subagentami)
- [ ] Cookie consent banner (granular: necessary / analytics / marketing)
- [ ] User data export endpoint (`GET /api/account/export`)
- [ ] User data deletion endpoint (`POST /api/account/delete` + 30-day grace)
- [ ] Audit log (kto, co, kiedy, z jakiego IP — dla wrażliwych operacji)
- [ ] Backup policy (daily Supabase backup + weekly off-site to R2 + monthly restore drill)
- [ ] Incident response plan (`runbooks/INCIDENT_RESPONSE.md`)
- [ ] EU AI Act registration (gdzie applicable — MediCall, FakturaNaCzas Krzysztof, Viralo Strategist Agent)
