# Phase 2 — Design System Foundation

## Objective

Introduce the first design system foundation for MiniLedgerPlatform by installing shadcn/ui, configuring reusable UI primitives, and preparing theme support for future dashboard screens.

## Concepts Covered

- Design system fundamentals
- shadcn/ui component ownership model
- Tailwind CSS design tokens
- CSS variables for theme-aware styling
- Dark and light mode support
- Next.js App Router layout integration
- Client components for browser-dependent UI behavior

## What Was Added

- shadcn/ui configuration
- reusable UI primitives:
  - Button
  - Card
  - Badge
  - Separator
  - Dropdown Menu
  - Sheet
  - Avatar
  - Input
  - Label
- `cn` utility function
- Theme provider based on `next-themes`
- Theme toggle component
- Updated landing page using shared UI primitives

## File Changes

```txt
apps/web/components.json
apps/web/src/lib/utils.ts
apps/web/src/components/providers/theme-provider.tsx
apps/web/src/components/theme-toggle.tsx
apps/web/src/components/ui/*
apps/web/src/app/layout.tsx
apps/web/src/app/page.tsx
apps/web/src/app/globals.css
docs/lessons/phase-2.md