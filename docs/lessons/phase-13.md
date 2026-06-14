# Phase 13 — Desktop Accounts Data Provider

## Objective

Introduce the first desktop data provider in MiniLedgerPlatform by connecting the Accounts module to SQLite in desktop mode while keeping mock data available in web mode.

## Concepts Covered

- Data provider abstraction
- Runtime-based provider selection
- Web mode vs desktop mode data access
- SQLite-backed feature provider
- Mapping SQLite rows to frontend domain models
- Seeding initial desktop data
- Preserving web mode behavior
- Preparing for future API and desktop providers

## What Was Added

- Accounts provider contract
- Mock accounts provider
- Desktop SQLite accounts provider
- SQLite account row mapper
- Accounts provider resolver
- Desktop accounts seed
- Provider-based account loading
- Provider-based account creation

## File Changes

```txt
apps/web/src/features/accounts/services/accounts-provider.ts
apps/web/src/features/accounts/services/mock-accounts-provider.ts
apps/web/src/features/accounts/services/accounts-sqlite-mapper.ts
apps/web/src/features/accounts/services/desktop-accounts-provider.ts
apps/web/src/features/accounts/services/accounts-provider-resolver.ts
apps/web/src/features/accounts/services/desktop-accounts-seed.ts
apps/web/src/features/accounts/services/use-accounts.ts
apps/web/src/features/accounts/components/create-account-dialog.tsx
docs/lessons/phase-13.md
