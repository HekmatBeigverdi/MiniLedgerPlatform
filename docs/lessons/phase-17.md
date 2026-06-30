# Phase 17 — Report Export and Print Foundation

## Objective

Add the first report export and print foundation to MiniLedgerPlatform by introducing CSV export helpers, report export actions, and print-friendly report styling.

## Concepts Covered

- CSV generation
- Browser-based file download
- Report export helpers
- Print-friendly UI
- Print CSS
- Report toolbar actions
- Web and desktop export considerations

## What Was Added

- Generic CSV utility
- Ledger report CSV export
- Trial balance CSV export
- Reports toolbar
- Print action
- Print-specific styles
- Printable report heading

## File Changes

```txt
apps/web/src/lib/csv.ts
apps/web/src/features/reports/services/reports-export.ts
apps/web/src/features/reports/components/reports-toolbar.tsx
apps/web/src/features/reports/components/reports-module.tsx
apps/web/src/app/globals.css
docs/lessons/phase-17.md
