# Architecture Overview

## Primary Direction

MiniLedger Platform follows a web-first, desktop-ready architecture.

## Applications

- `apps/web`: Next.js application
- `apps/desktop`: Tauri desktop shell

## Shared Packages

- `packages/ui`
- `packages/core`
- `packages/schemas`
- `packages/data-access`
- `packages/config`
- `packages/utils`

## Core Architecture Principles

1. UI should not directly depend on transport details.
2. Domain types should be reusable across apps.
3. Validation should be centralized where possible.
4. Web development comes first, but desktop support is planned from the start.
5. The repository must remain educational, structured, and GitHub-friendly.