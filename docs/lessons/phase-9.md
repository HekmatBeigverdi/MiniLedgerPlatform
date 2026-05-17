# Phase 9 — Advanced React and Next.js Patterns

## Objective

Improve the frontend architecture of MiniLedgerPlatform by introducing reusable loading, empty, and error states, extracting feature data loading into custom hooks, and preparing the project for future API integration and query management.

## Concepts Covered

- Reusable UI state components
- Loading state abstraction
- Empty state abstraction
- Error state abstraction
- Custom React hooks
- Async data loading patterns
- Feature-level data hooks
- Separation of UI and data loading logic
- Refactoring feature modules for maintainability
- Preparing for future TanStack Query integration

## What Was Added

- Shared page loading state component
- Shared empty state component
- Shared error state component
- Reusable `useAsyncData` hook
- `useAccounts` hook
- `useParties` hook
- `useVouchers` hook
- `useReports` hook

## What Was Refactored

- Accounts module now uses `useAccounts`
- Parties module now uses `useParties`
- Vouchers module now uses `useVouchers`
- Reports module now uses `useReports`
- Feature modules now include loading, error, and empty states

## File Changes

```txt
apps/web/src/components/shared/page-loading-state.tsx
apps/web/src/components/shared/empty-state.tsx
apps/web/src/components/shared/error-state.tsx
apps/web/src/hooks/use-async-data.ts
apps/web/src/features/accounts/services/use-accounts.ts
apps/web/src/features/accounts/components/accounts-module.tsx
apps/web/src/features/parties/services/use-parties.ts
apps/web/src/features/parties/components/parties-module.tsx
apps/web/src/features/vouchers/services/use-vouchers.ts
apps/web/src/features/vouchers/components/vouchers-module.tsx
apps/web/src/features/reports/services/use-reports.ts
apps/web/src/features/reports/components/reports-module.tsx
docs/lessons/phase-9.md
