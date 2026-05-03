# Phase 3 — Dashboard Shell and App Layout

## Objective

Build the first internal application shell for MiniLedgerPlatform by introducing a dashboard route group, shared layout components, responsive navigation, and an initial dashboard overview page.

## Concepts Covered

- Next.js App Router layouts
- Route groups for application sections
- Shared dashboard shell architecture
- Sidebar navigation
- Responsive mobile navigation
- shadcn/ui Sheet usage for mobile menus
- Reusable page header component
- Layout composition with shared UI primitives

## What Was Added

- Dashboard route group under `app/(dashboard)`
- Dashboard layout for internal application pages
- Desktop sidebar navigation
- Mobile sidebar navigation
- Topbar component
- Reusable page header component
- Dashboard overview page
- Landing page link to the dashboard

## File Changes

```txt
apps/web/src/app/(dashboard)/layout.tsx
apps/web/src/app/(dashboard)/dashboard/page.tsx
apps/web/src/components/layout/app-sidebar.tsx
apps/web/src/components/layout/mobile-sidebar.tsx
apps/web/src/components/layout/app-topbar.tsx
apps/web/src/components/layout/page-header.tsx
apps/web/src/config/navigation.ts
apps/web/src/app/page.tsx
docs/lessons/phase-3.md