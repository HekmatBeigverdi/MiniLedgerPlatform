# Phase 5 — Accounts Module

## Objective

Introduce the first real accounting domain module in MiniLedgerPlatform by building the Accounts module with typed models, validation schema, mock service, overview cards, table UI, and create account workflow.

## Concepts Covered

- Feature-based frontend architecture
- Accounting domain modeling
- TypeScript domain types
- Zod schema validation for account creation
- Mock service layer
- Client-side feature module state
- Reusable table UI
- Dialog-based create workflow
- shadcn/ui form, table, dialog, select, and textarea usage

## What Was Added

- Accounts route under `/accounts`
- Account domain type
- Create account schema
- Mock account data
- Mock account service
- Account type badge
- Account status badge
- Accounts overview cards
- Accounts table
- Create account dialog
- Accounts module container

## File Changes

```txt
apps/web/src/app/(dashboard)/accounts/page.tsx
apps/web/src/features/accounts/types/account.ts
apps/web/src/features/accounts/schemas/account-schema.ts
apps/web/src/features/accounts/data/mock-accounts.ts
apps/web/src/features/accounts/services/accounts-service.ts
apps/web/src/features/accounts/components/account-type-badge.tsx
apps/web/src/features/accounts/components/account-status-badge.tsx
apps/web/src/features/accounts/components/accounts-overview-cards.tsx
apps/web/src/features/accounts/components/accounts-table.tsx
apps/web/src/features/accounts/components/create-account-dialog.tsx
apps/web/src/features/accounts/components/accounts-module.tsx
docs/lessons/phase-5.md
