# Phase 18 — Native Desktop Export with Tauri File System

## Objective

Improve report export behavior in desktop mode by using native Tauri save dialogs and file system writes while preserving browser-based CSV downloads in web mode.

## Concepts Covered

- Native desktop save dialogs
- Tauri dialog plugin
- Tauri file system plugin
- Runtime-based export behavior
- Web export vs desktop export
- CSV generation reuse
- Native file writing
- Tauri plugin permissions

## What Was Added

- Tauri dialog frontend package
- Tauri file system frontend package
- Rust-side dialog plugin
- Rust-side file system plugin
- Dialog and file system permissions
- Native text file export service
- Reports export resolver
- Native-aware report export actions

## File Changes

```txt
apps/web/src/lib/native-file-export.ts
apps/web/src/lib/csv.ts
apps/web/src/features/reports/services/reports-export-resolver.ts
apps/web/src/features/reports/components/reports-toolbar.tsx
apps/desktop/src-tauri/Cargo.toml
apps/desktop/src-tauri/Cargo.lock
apps/desktop/src-tauri/src/lib.rs
apps/desktop/src-tauri/capabilities/default.json
docs/lessons/phase-18.md
