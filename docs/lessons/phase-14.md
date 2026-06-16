# Phase 14 — Desktop Parties Data Provider

## Objective

Introduce the desktop data provider for the Parties module by connecting Parties to SQLite in desktop mode while keeping mock data available in web mode.

## Concepts Covered

- Data provider abstraction
- Runtime-based provider selection
- Web mode vs desktop mode data access
- SQLite-backed Parties provider
- Mapping SQLite rows to frontend domain models
- Seeding initial desktop parties
- Preserving web mode behavior
- Preparing for future API and desktop providers

## What Was Added

- Parties provider contract
- Mock Parties provider
- Desktop SQLite Parties provider
- SQLite Party row mapper
- Parties provider resolver
- Desktop Parties seed
- Provider-based party loading
- Provider-based party creation

## File Changes

```txt
apps/web/src/features/parties/services/parties-provider.ts
apps/web/src/features/parties/services/mock-parties-provider.ts
apps/web/src/features/parties/services/parties-sqlite-mapper.ts
apps/web/src/features/parties/services/desktop-parties-provider.ts
apps/web/src/features/parties/services/parties-provider-resolver.ts
apps/web/src/features/parties/services/desktop-parties-seed.ts
apps/web/src/features/parties/services/use-parties.ts
apps/web/src/features/parties/components/create-party-dialog.tsx
docs/lessons/phase-14.md
