# MiniLedgerPlatform

MiniLedgerPlatform is a modern, educational accounting application built with a **web-first, desktop-ready architecture**.

The project demonstrates real-world frontend architecture using **Next.js, TypeScript, Tailwind CSS, and shadcn/ui**, with a future desktop version powered by **Tauri and SQLite**.

---

## 🎯 Project Goals

- Build a production-grade accounting UI step by step
- Teach modern React and Next.js concepts through real implementation
- Maintain a clean, scalable, and maintainable architecture
- Prepare the codebase for both web and desktop environments
- Provide a GitHub-ready, professional portfolio project

---

## 🏗 Architecture Overview

This project follows a **monorepo architecture**:

```
MiniLedgerPlatform/
│
├── apps/
│   ├── web/        # Next.js web application
│   └── desktop/    # (Planned) Tauri desktop app
│
├── packages/
│   ├── ui/         # Shared UI components (future)
│   ├── core/       # Domain models (future)
│   ├── schemas/    # Validation schemas (future)
│   ├── data-access/# Data providers (future)
│   └── utils/      # Shared utilities
│
├── docs/           # Project documentation
│   ├── lessons/
│   ├── roadmap/
│   └── architecture/
│
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── tsconfig.base.json
```

---

## 🧠 Key Concepts

- Monorepo with **pnpm workspaces**
- Task orchestration using **Turborepo**
- **Next.js App Router**
- **TypeScript-first architecture**
- Component-driven UI with **shadcn/ui**
- Tailwind CSS design system
- Theme support (light/dark mode)
- Future-ready for **desktop apps with Tauri**

---

## 🚀 Current Status

### Phase 2 — Design System Foundation

The project currently includes:

- Next.js web application (`apps/web`)
- Tailwind CSS setup
- shadcn/ui configuration
- Reusable UI primitives:
  - Button
  - Card
  - Badge
  - Input
  - Avatar
  - Sheet
  - Dropdown Menu
- Theme support using `next-themes`
- Light/Dark mode toggle
- Initial landing page using shared components

---

## 📦 Tech Stack

### Frontend
- Next.js (App Router)
- React
- TypeScript

### Styling
- Tailwind CSS
- shadcn/ui

### State & Utilities (planned)
- TanStack Query
- Zustand

### Desktop (planned)
- Tauri
- SQLite

---

## 🛠 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/MiniLedgerPlatform.git
cd MiniLedgerPlatform
```

---

### 2. Install dependencies

```bash
pnpm install
```

---

### 3. Run the web application

```bash
pnpm dev:web
```

Open:

```
http://localhost:3000
```

---

### 4. Lint the project

```bash
pnpm lint:web
```

---

### 5. Build for production

```bash
pnpm build:web
```

---

## 📚 Project Roadmap

| Phase | Description |
|------|------------|
| Phase 0 | Repository foundation & architecture |
| Phase 1 | Next.js web app bootstrap |
| Phase 2 | Design system foundation |
| Phase 3 | Dashboard shell & layout |
| Phase 4 | Authentication & forms |
| Phase 5 | Accounts module |
| Phase 6 | Parties module |
| Phase 7 | Vouchers module |
| Phase 8 | Reports |
| Phase 9 | Advanced patterns |
| Phase 10 | Production hardening |
| Phase 11 | Desktop (Tauri + SQLite) |

Detailed roadmap:

```
docs/roadmap/phases.md
```

---

## 📖 Documentation

All learning materials are organized per phase:

```
docs/lessons/
```

Examples:

- phase-0.md
- phase-1.md
- phase-2.md

---

## 🔀 Git Workflow

### Branches

- `main` → stable releases only
- `develop` → integration branch
- `feature/*` → feature development

### Example

```
feature/phase-2-design-system-foundation → develop
```

---

## 📌 Release Strategy

- Releases are created only for **stable milestones**
- Example:

```
v0.1.0 → Dashboard shell ready
```

---

## 🧩 Future Plans

- Full dashboard UI
- Accounting workflows (accounts, vouchers, reports)
- API integration with backend
- Desktop application using Tauri
- Offline-first mode with SQLite
- Data synchronization

---

## 🤝 Contribution

This project is primarily educational, but contributions are welcome.

---

## 📄 License

MIT License