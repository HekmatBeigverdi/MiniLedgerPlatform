# MiniLedgerPlatform

MiniLedgerPlatform is a modern, educational accounting application built with a **web-first, desktop-ready architecture**.

The project demonstrates real-world frontend architecture using **Next.js, TypeScript, Tailwind CSS, shadcn/ui, React Hook Form, and Zod**, with a future desktop version planned with **Tauri and SQLite**.

---

## Project Goals

- Build a production-grade accounting UI step by step
- Teach modern React and Next.js concepts through real implementation
- Maintain a clean, scalable, and maintainable frontend architecture
- Prepare the codebase for both web and desktop environments
- Demonstrate feature-based application development
- Provide a GitHub-ready professional portfolio project

---

## Architecture Overview

MiniLedgerPlatform follows a **monorepo architecture**.

```txt
MiniLedgerPlatform/
│
├── apps/
│   ├── web/        # Next.js web application
│   └── desktop/    # Planned Tauri desktop application
│
├── packages/
│   ├── ui/         # Shared UI package, planned
│   ├── core/       # Shared domain models, planned
│   ├── schemas/    # Shared validation schemas, planned
│   ├── data-access/# Shared data access layer, planned
│   ├── config/     # Shared configuration, planned
│   └── utils/      # Shared utilities, planned
│
├── docs/
│   ├── architecture/
│   ├── github/
│   ├── lessons/
│   └── roadmap/
│
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
├── tsconfig.base.json
└── README.md
```

---

## Current Status

### Current Phase

Phase 13 — Desktop Accounts Data Provider

The project currently includes:

- Desktop SQLite provider for Accounts
- SQLite-backed account creation in desktop mode
- Initial desktop account seeding
- Runtime-based accounts provider selection

---

## Tech Stack

- Tauri SQL Plugin
- SQLite local database foundation

### Web Application

- Next.js
- React
- TypeScript
- App Router
- Tailwind CSS
- shadcn/ui

### Forms and Validation

- React Hook Form
- Zod
- `@hookform/resolvers`

### UI and Icons

- shadcn/ui
- Tailwind CSS
- Lucide React

### Monorepo Tooling

- pnpm workspaces
- Turborepo

### Planned Desktop Stack

- Tauri
- SQLite

### Planned Data and State Tools

- TanStack Query
- Zustand
- API provider layer
- Desktop SQLite provider layer

---

## Key Concepts Demonstrated

- Web-first, desktop-ready architecture
- Monorepo project structure
- Feature-based frontend organization
- Next.js App Router layouts and route groups
- Reusable dashboard shell
- Shared UI primitives
- Theme provider integration
- Form state management
- Schema-based validation
- Mock service layer
- Domain modeling with TypeScript
- Progressive accounting module development

---

## Applications

### Web App

```txt
apps/web
```

The web app is built with Next.js and currently contains:

- Public landing page
- Auth route group
- Dashboard route group
- Accounts module
- Parties module

### Desktop App

```txt
apps/desktop
```

The desktop app is planned for a future phase using Tauri and SQLite.

---

## Feature Structure

The project uses feature-based organization for domain modules.

Example:

```txt
apps/web/src/features/accounts/
├── components/
├── data/
├── schemas/
├── services/
└── types/
```

Current feature modules:

```txt
features/auth
features/accounts
features/parties
```

Planned feature modules:

```txt
features/vouchers
features/reports
features/settings
```

---

## Available Routes

```txt
/              # Landing page
/login         # Mock login page
/dashboard     # Dashboard overview
/accounts      # Accounts module
/parties       # Parties module
```

---

## Getting Started

### Run desktop app

```bash
pnpm dev:desktop

pnpm build:desktop

pnpm build:web:desktop

## Root Scripts

The root `package.json` includes:

```json
{
  "scripts": {
    "dev": "turbo run dev",
    "dev:web": "pnpm --filter @miniledgerplatform/web dev",
    "build": "turbo run build",
    "build:web": "pnpm --filter @miniledgerplatform/web build",
    "lint": "turbo run lint",
    "lint:web": "pnpm --filter @miniledgerplatform/web lint",
    "format": "turbo run format"
  }
}
```

---

## Demo Login

The login page currently uses a mock authentication flow.

```txt
Email: admin@miniledger.local
Password: password
```

After login, the user is redirected to:

```txt
/dashboard
```

The mock session is stored temporarily in browser local storage.

---

## Project Roadmap

| Phase | Description | Status |
|------|-------------|--------|
| Phase 0 | Repository foundation and architecture planning | Completed |
| Phase 1 | Next.js web app bootstrap | Completed |
| Phase 2 | Design system foundation | Completed |
| Phase 3 | Dashboard shell and app layout | Completed |
| Phase 4 | Authentication, forms, and validation | Completed |
| Phase 5 | Accounts module | Completed |
| Phase 6 | Parties module | Completed |
| Phase 7 | Vouchers module | Planned |
| Phase 8 | Reports module | Planned |
| Phase 9 | Advanced React and Next.js patterns | Planned |
| Phase 10 | Production hardening and documentation | Planned |
| Phase 11 | Desktop edition with Tauri and SQLite | Planned |
| Phase 13 | Desktop accounts data provider | Completed |

Detailed roadmap:

```txt
docs/roadmap/phases.md
```

---

## Completed Phases

### Phase 0 — Repository Foundation

Introduced:

- Monorepo folder structure
- Initial documentation
- Branching strategy
- Architecture direction
- Roadmap foundation

---

### Phase 1 — Web App Bootstrap

Introduced:

- Next.js app under `apps/web`
- TypeScript
- Tailwind CSS
- ESLint
- App Router
- Root scripts for web development

---

### Phase 2 — Design System Foundation

Introduced:

- shadcn/ui setup
- Reusable UI primitives
- `cn` utility
- Theme provider
- Light/Dark mode support
- Initial polished landing page

---

### Phase 3 — Dashboard Shell and App Layout

Introduced:

- Dashboard route group
- Shared dashboard layout
- Desktop sidebar
- Mobile sidebar
- Topbar
- Page header
- Initial dashboard overview page

---

### Phase 4 — Authentication, Forms, and Validation

Introduced:

- Auth route group
- Login page
- Auth layout
- React Hook Form
- Zod validation
- Mock login service
- Local storage mock session
- Logout action

---

### Phase 5 — Accounts Module

Introduced:

- `/accounts` route
- Account domain type
- Create account schema
- Mock accounts data
- Mock accounts service
- Accounts overview cards
- Accounts table
- Create account dialog
- Client-side mock account creation workflow

---

### Phase 6 — Parties Module

Introduced:

- `/parties` route
- Party domain type
- Create party schema
- Mock parties data
- Mock parties service
- Parties overview cards
- Parties table
- Create party dialog
- Client-side mock party creation workflow

---

## Documentation

Project documentation is stored under:

```txt
docs/
```

Lesson documents:

```txt
docs/lessons/
```

Current lesson files:

```txt
phase-0.md
phase-1.md
phase-2.md
phase-3.md
phase-4.md
phase-5.md
phase-6.md
```

Roadmap:

```txt
docs/roadmap/phases.md
```

Architecture notes:

```txt
docs/architecture/
```

Git workflow notes:

```txt
docs/github/
```

---

## Git Workflow

This project uses a Git Flow-inspired workflow.

### Main branches

```txt
main
develop
```

### Supporting branches

```txt
feature/*
docs/*
chore/*
refactor/*
```

### Flow

```txt
feature branch → develop
develop → main only for stable milestones
```

Example:

```txt
feature/phase-6-parties-module → develop
```

---

## Release Strategy

Releases are created only for stable milestones.

Current release recommendation:

```txt
v0.1.0 — Initial Dashboard Foundation
```

Future release candidates:

```txt
v0.2.0 — Voucher workflow foundation
v0.3.0 — Reports foundation
v1.0.0 — Web MVP
```

Not every phase requires a release.

---

## Current Limitations

The current implementation uses mock data and client-side state.

Not yet implemented:

- Real backend API integration
- JWT authentication
- Refresh tokens
- Protected route middleware
- Role-based access control
- Persistent account data
- Persistent party data
- Edit/delete workflows
- Pagination
- Advanced filtering
- Voucher posting logic
- Financial reports
- Tauri desktop app
- SQLite local database

---

## Planned Next Phase

### Phase 7 — Vouchers Module

Planned scope:

- Voucher domain model
- Journal entry form
- Dynamic voucher lines
- Debit/Credit balancing
- Account selection
- Optional party relation
- Mock voucher service
- Voucher list page
- Voucher create workflow

---

## Development Notes

Before starting a new phase:

```bash
git checkout develop
git pull origin develop
git checkout -b feature/phase-name
```

Before opening a pull request:

```bash
pnpm install
pnpm lint:web
pnpm build:web
```

Pull requests should target:

```txt
develop
```

Do not merge into `main` unless the phase represents a stable milestone.

---

## License

MIT License