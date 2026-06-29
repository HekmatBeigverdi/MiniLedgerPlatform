# Phase 16 — Desktop Reports from SQLite

## Objective

Connect the Reports module to SQLite in desktop mode while preserving mock reports in web mode.

## Concepts Covered

- Reports provider abstraction
- Runtime-based provider selection
- SQLite-generated ledger reports
- SQLite-generated trial balance reports
- SQLite-generated reports summary
- Ledger running balance calculation
- Trial balance aggregation
- Date range filtering
- Account-based ledger filtering

## What Was Added

- Reports provider contract
- Mock Reports provider
- Desktop SQLite Reports provider
- SQLite report mappers
- Reports provider resolver
- Provider-based report loading

## File Changes

```txt
apps/web/src/features/reports/services/reports-provider.ts
apps/web/src/features/reports/services/mock-reports-provider.ts
apps/web/src/features/reports/services/reports-sqlite-mapper.ts
apps/web/src/features/reports/services/desktop-reports-provider.ts
apps/web/src/features/reports/services/reports-provider-resolver.ts
apps/web/src/features/reports/services/use-reports.ts
docs/lessons/phase-16.md
