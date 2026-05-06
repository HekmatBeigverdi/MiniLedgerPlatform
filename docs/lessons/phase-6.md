# Phase 6 — Parties Module

## Objective

Introduce the Parties module in MiniLedgerPlatform by building the first business entity management workflow for customers, vendors, employees, shareholders, and other related entities.

## Concepts Covered

- Feature-based frontend architecture
- Business entity domain modeling
- TypeScript domain types
- Zod schema validation for party creation
- Mock service layer
- Client-side feature module state
- Reusable table UI
- Dialog-based create workflow
- Party type and status presentation
- Relationship preparation for future vouchers and reports

## What Was Added

- Parties route under `/parties`
- Party domain type
- Create party schema
- Mock parties data
- Mock parties service
- Party type badge
- Party status badge
- Parties overview cards
- Parties table
- Create party dialog
- Parties module container

## File Changes

```txt
apps/web/src/app/(dashboard)/parties/page.tsx
apps/web/src/features/parties/types/party.ts
apps/web/src/features/parties/schemas/party-schema.ts
apps/web/src/features/parties/data/mock-parties.ts
apps/web/src/features/parties/services/parties-service.ts
apps/web/src/features/parties/components/party-type-badge.tsx
apps/web/src/features/parties/components/party-status-badge.tsx
apps/web/src/features/parties/components/parties-overview-cards.tsx
apps/web/src/features/parties/components/parties-table.tsx
apps/web/src/features/parties/components/create-party-dialog.tsx
apps/web/src/features/parties/components/parties-module.tsx
docs/lessons/phase-6.md
