# Phase 4 — Authentication, Forms, and Validation

## Objective

Introduce the first authentication foundation for MiniLedgerPlatform by adding an auth route group, login page, validated login form, mock authentication flow, and logout action.

## Concepts Covered

- Auth route grouping with the Next.js App Router
- Feature-based folder structure
- React Hook Form for form state management
- Zod for schema-based validation
- `@hookform/resolvers` integration
- Client components for browser-based interactions
- Mock authentication service
- Local storage session placeholder
- Redirecting after login
- Basic logout flow

## What Was Added

- Auth route group under `app/(auth)`
- Login page under `/login`
- Auth layout
- Login form component
- Login validation schema
- Mock authentication service
- Logout button
- Landing page link to the login page

## File Changes

```txt
apps/web/src/app/(auth)/layout.tsx
apps/web/src/app/(auth)/login/page.tsx
apps/web/src/features/auth/components/login-form.tsx
apps/web/src/features/auth/components/logout-button.tsx
apps/web/src/features/auth/schemas/login-schema.ts
apps/web/src/features/auth/services/auth-service.ts
apps/web/src/app/page.tsx
apps/web/src/components/layout/app-topbar.tsx
docs/lessons/phase-4.md