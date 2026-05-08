# Phase 7 — Vouchers Module

## Objective

Introduce the Vouchers module in MiniLedgerPlatform by building a mock journal voucher workflow with dynamic debit and credit lines, account selection, optional party relation, voucher validation, and balanced accounting rules.

## Concepts Covered

- Accounting voucher domain modeling
- Journal entry structure
- Debit and credit line balancing
- Dynamic form rows with React Hook Form
- `useFieldArray`
- Zod `superRefine` validation
- Account selection inside voucher lines
- Optional party relation inside voucher lines
- Voucher totals calculation
- Mock voucher service layer
- Client-side voucher creation workflow

## What Was Added

- Vouchers route under `/vouchers`
- Voucher domain type
- Voucher line type
- Create voucher schema
- Balanced voucher validation rule
- Mock vouchers data
- Mock vouchers service
- Voucher totals calculation helper
- Voucher form account and party options
- Voucher status badge
- Voucher overview cards
- Vouchers table
- Dynamic create voucher form
- Create voucher dialog
- Vouchers module container

## File Changes

```txt
apps/web/src/app/(dashboard)/vouchers/page.tsx
apps/web/src/features/vouchers/types/voucher.ts
apps/web/src/features/vouchers/schemas/voucher-schema.ts
apps/web/src/features/vouchers/data/mock-vouchers.ts
apps/web/src/features/vouchers/data/voucher-form-options.ts
apps/web/src/features/vouchers/services/vouchers-service.ts
apps/web/src/features/vouchers/services/voucher-calculations.ts
apps/web/src/features/vouchers/components/voucher-status-badge.tsx
apps/web/src/features/vouchers/components/vouchers-overview-cards.tsx
apps/web/src/features/vouchers/components/vouchers-table.tsx
apps/web/src/features/vouchers/components/create-voucher-form.tsx
apps/web/src/features/vouchers/components/create-voucher-dialog.tsx
apps/web/src/features/vouchers/components/vouchers-module.tsx
docs/lessons/phase-7.md
