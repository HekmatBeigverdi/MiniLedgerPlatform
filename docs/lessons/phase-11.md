# Phase 11 — Desktop Foundation with Tauri and SQLite Planning

## Objective

Introduce the desktop foundation for MiniLedgerPlatform by preparing the Next.js web app for static desktop builds, initializing a Tauri desktop app, connecting Tauri to the web build output, and documenting the future SQLite strategy.

## Concepts Covered

- Desktop-ready frontend architecture
- Tauri desktop application foundation
- Next.js static export for desktop packaging
- Web app and desktop shell separation
- Monorepo app coordination
- Desktop build scripts
- Tauri frontend distribution configuration
- SQLite planning for local desktop persistence
- Runtime mode detection

## What Was Added

- Desktop build mode for the Next.js web app
- Static export configuration for desktop builds
- Desktop environment example
- Root scripts for desktop development and build
- Tauri desktop app foundation under `apps/desktop`
- Tauri configuration connected to the web app output
- Runtime mode helpers
- Desktop SQLite strategy documentation

## File Changes

```txt
apps/web/next.config.ts
apps/web/.env.desktop.example
apps/web/package.json
apps/web/src/lib/runtime.ts
apps/desktop/package.json
apps/desktop/src-tauri/*
docs/architecture/desktop-sqlite-strategy.md
docs/lessons/phase-11.md
package.json
pnpm-lock.yaml
.gitignore
