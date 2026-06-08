# MiniLedger Platform Roadmap

## Phase 0
Repository foundation and architecture planning

## Phase 1
Monorepo bootstrap and web app initialization

## Phase 2
Shared UI foundation and design system

## Phase 3
Dashboard shell, routing, and layouts

## Phase 4
Authentication, forms, and validation

## Phase 5
Accounts module

## Phase 6
Parties module

## Phase 7
Vouchers module

Deliverables:
- Add vouchers route
- Add Voucher and VoucherLine domain types
- Add create voucher validation schema
- Add balanced debit/credit validation
- Add mock vouchers service
- Add voucher totals calculation helper
- Add dynamic voucher form
- Add create voucher dialog
- Add vouchers overview cards
- Add vouchers table
- Add client-side voucher creation workflow

## Phase 8
Reports module

Deliverables:
- Add reports route
- Add report domain types
- Add mock reports data
- Add mock reports service
- Add reports summary cards
- Add ledger report table
- Add trial balance table
- Add reports filter bar
- Add reports module container

## Phase 9
Advanced React and Next.js patterns | Completed |

Deliverables:
- Add reusable loading state component
- Add reusable empty state component
- Add reusable error state component
- Add reusable async data hook
- Add feature-specific data hooks
- Refactor accounts module
- Refactor parties module
- Refactor vouchers module
- Refactor reports module

## Phase 10
Production hardening and documentation

Deliverables:
- Add environment example file
- Add central app configuration
- Improve root metadata
- Add root loading page
- Add custom not found page
- Add root error boundary
- Add dashboard route loading state
- Add dashboard route error boundary
- Add route metadata
- Add validation checklist
- Update README

## Phase 11
Desktop edition with Tauri and SQLite planning

Deliverables:
- Add desktop build mode for the web app
- Add Next.js static export support for desktop packaging
- Add desktop environment example
- Add root desktop scripts
- Initialize Tauri desktop app
- Connect Tauri to the web app output
- Add runtime mode helpers
- Document desktop SQLite strategy
  
## Phase 12
SQLite persistence foundation

Deliverables:
- Add Tauri SQL plugin
- Enable SQLite support
- Register SQL plugin in Tauri
- Enable SQL plugin permissions
- Add initial SQLite schema
- Add frontend desktop database service
- Add desktop database health check
- Add `/desktop-database` diagnostics page
- Update SQLite strategy documentation