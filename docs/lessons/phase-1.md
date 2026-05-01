# Phase 1 — Web App Bootstrap

## Objective

Bootstrap the first runnable web application inside the MiniLedgerPlatform monorepo.

## Concepts Covered

- Next.js App Router
- TypeScript-first architecture
- Monorepo structure with pnpm
- Turborepo task orchestration
- Root-level development scripts

## Deliverables

- Next.js app under `apps/web`
- TypeScript enabled
- ESLint configured
- Tailwind CSS configured
- App Router enabled
- Root scripts for dev/build/lint
- Clean landing page

## Validation

Run from root:

```bash
pnpm dev:web
pnpm lint:web
pnpm build:web