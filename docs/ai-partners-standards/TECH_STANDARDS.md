# AI Partners — Technical Standards

## Core rules

- Use TypeScript strict mode in every project.
- Default to Server Components in Next.js App Router.
- Use `zod` for every external boundary: form data, route payload, webhook payload, provider responses.
- Never return raw provider errors to users; map them to stable domain errors.
- Every admin/service-role database query must filter by tenant (`organization_id`, `agency_id`, or `client_id`).

## Next.js

- Public marketing routes live in `src/app/(marketing)`.
- Auth routes live in `src/app/(auth)`.
- Authenticated app routes live in `src/app/(dashboard)`.
- API route handlers live in `src/app/api`.
- Webhooks live in `src/app/api/webhooks/<provider>/route.ts`.
- Cron endpoints live in `src/app/api/cron/<job>/route.ts` and require `Authorization: Bearer ${CRON_SECRET}` or `x-vercel-cron: 1`.

## Database

- New projects use Drizzle ORM for schema, migrations, and typed queries.
- Supabase remains the platform for Postgres, Auth, Storage, Realtime, RLS.
- Schema files are split per domain: `auth`, `agencies`, `brands`, `social`, `ads`, `analytics`, `billing`, `ai`, `audit`.
- Use `jsonb` only for provider payload snapshots or flexible metadata, never as a replacement for relational core data.
- Add `created_at`, `updated_at`, and `organization_id` to tenant-owned tables.

## Inngest

- Long-running work must be represented as events and functions.
- Each external provider call is a separate `step.run`.
- Use `step.sleep` for polling and delayed optimization.
- Make functions idempotent using database state and provider job IDs.
- Store provider response IDs in `generation_jobs`, `webhook_events`, or domain-specific tables.

## AI providers

- Route LLM calls through Vercel AI Gateway where possible.
- Wrap each provider in `src/lib/<provider>/` so UI/features never import vendor SDKs directly.
- Prompts are versioned in `src/ai/prompts/`.
- Generated user-facing content should store: prompt version, model, provider, cost estimate, input hash, output hash.

## Tests

- Unit tests: domain logic, pricing/credits, RLS helpers, provider payload builders.
- Integration tests: webhooks, OAuth callback parsing, Inngest handlers with mocked providers.
- E2E tests: onboarding, create brand, generate creative, schedule post.
- Use MSW for HTTP mocks.

## Observability

- Every external call includes `request_id`, `organization_id`, provider name, operation, latency, and status.
- Sentry captures exceptions; PostHog captures product events.
- Never log raw tokens, prompts containing private data, or full webhook payloads.

## UI standards

- Use shadcn/ui primitives and own the copied code.
- Keep dashboard density high but not cramped.
- Empty states must include the next action.
- All main flows must be keyboard accessible.
- Support PL and EN copy from day one with `next-intl`.
