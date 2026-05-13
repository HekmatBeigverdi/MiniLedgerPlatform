# Phase 8 — Reports Module

## Objective

Introduce the Reports module in MiniLedgerPlatform by building mock accounting reports for ledger movements, trial balance, summary cards, date filtering, and account-based reporting.

## Concepts Covered

- Accounting report domain modeling
- Ledger report structure
- Trial balance structure
- Report summary metrics
- Date range filtering
- Account-based ledger filtering
- Mock report service layer
- Report-oriented UI composition
- Reusable table-based reporting layout

## What Was Added

- Reports route under `/reports`
- Report domain types
- Ledger entry type
- Trial balance row type
- Reports summary type
- Mock reports data
- Mock reports service
- Reports summary cards
- Ledger report table
- Trial balance table
- Reports filter bar
- Reports module container

## File Changes

```txt
apps/web/src/app/(dashboard)/reports/page.tsx
apps/web/src/features/reports/types/report.ts
apps/web/src/features/reports/data/mock-reports.ts
apps/web/src/features/reports/services/reports-service.ts
apps/web/src/features/reports/components/reports-summary-cards.tsx
apps/web/src/features/reports/components/ledger-report-table.tsx
apps/web/src/features/reports/components/trial-balance-table.tsx
apps/web/src/features/reports/components/reports-filter-bar.tsx
apps/web/src/features/reports/components/reports-module.tsx
docs/lessons/phase-8.md
