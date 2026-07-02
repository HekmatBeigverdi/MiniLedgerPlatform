# Phase 19 — PDF Export Foundation

## Objective

Add PDF export support for MiniLedgerPlatform reports using jsPDF and jspdf-autotable, while preserving runtime-aware export behavior for web and desktop modes.

## Concepts Covered

- Client-side PDF generation
- jsPDF
- jspdf-autotable
- PDF table exports
- Binary file export in Tauri
- Runtime-aware export behavior
- Web download vs desktop native save dialog

## What Was Added

- PDF table export utility
- Native binary file export
- Ledger report PDF export
- Trial balance PDF export
- PDF actions in the reports toolbar

## File Changes

```txt
apps/web/src/lib/pdf.ts
apps/web/src/lib/native-file-export.ts
apps/web/src/features/reports/services/reports-pdf-export.ts
apps/web/src/features/reports/components/reports-toolbar.tsx
apps/web/package.json
pnpm-lock.yaml
docs/lessons/phase-19.md
