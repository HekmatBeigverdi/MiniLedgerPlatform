# Phase 15 — Desktop Vouchers Data Provider

## Objective

Introduce the desktop data provider for the Vouchers module by connecting vouchers and voucher lines to SQLite in desktop mode while keeping mock data available in web mode.

## Concepts Covered

- Data provider abstraction
- Runtime-based provider selection
- Web mode vs desktop mode data access
- SQLite-backed Vouchers provider
- Voucher and voucher line persistence
- Mapping SQLite rows to frontend domain models
- Seeding initial desktop vouchers
- Preserving web mode behavior
- Preparing for future transaction handling

## What Was Added

- Vouchers provider contract
- Mock Vouchers provider
- SQLite Voucher row mapper
- SQLite VoucherLine row mapper
- Desktop SQLite Vouchers provider
- Runtime-based Vouchers provider resolver
- Initial desktop vouchers seed
- Provider-based voucher loading
- Provider-based voucher creation

## File Changes

```txt
apps/web/src/features/vouchers/services/vouchers-provider.ts
apps/web/src/features/vouchers/services/mock-vouchers-provider.ts
apps/web/src/features/vouchers/services/vouchers-sqlite-mapper.ts
apps/web/src/features/vouchers/services/desktop-vouchers-seed.ts
apps/web/src/features/vouchers/services/desktop-vouchers-provider.ts
apps/web/src/features/vouchers/services/vouchers-provider-resolver.ts
apps/web/src/features/vouchers/services/use-vouchers.ts
apps/web/src/features/vouchers/components/create-voucher-form.tsx
docs/lessons/phase-15.md
