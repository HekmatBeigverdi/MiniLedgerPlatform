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
  
## Phase 13
Desktop accounts data provider

Deliverables:
- Add accounts provider contract
- Add mock accounts provider
- Add desktop SQLite accounts provider
- Add SQLite account mapper
- Add runtime-based accounts provider resolver
- Add initial desktop accounts seed
- Refactor accounts loading to use provider resolver
- Refactor account creation to use provider resolver

## Phase 14
Desktop parties data provider

Deliverables:
- Add parties provider contract
- Add mock parties provider
- Add desktop SQLite parties provider
- Add SQLite party mapper
- Add runtime-based parties provider resolver
- Add initial desktop parties seed
- Refactor parties loading to use provider resolver
- Refactor party creation to use provider resolver

## Phase 15
Desktop vouchers data provider

Deliverables:
- Add vouchers provider contract
- Add mock vouchers provider
- Add desktop SQLite vouchers provider
- Add SQLite voucher and voucher line mappers
- Add runtime-based vouchers provider resolver
- Add initial desktop vouchers seed
- Refactor voucher loading to use provider resolver
- Refactor voucher creation to use provider resolver


## Phase 16
Desktop reports from SQLite

Deliverables:
- Add reports provider contract
- Add mock reports provider
- Add desktop SQLite reports provider
- Add SQLite report mappers
- Add runtime-based reports provider resolver
- Refactor reports loading to use provider resolver
- Generate ledger report from SQLite
- Generate trial balance from SQLite
- Generate reports summary from SQLite

## Phase 17
Report export and print foundation

Deliverables:
- Add generic CSV export utility
- Add ledger report CSV export
- Add trial balance CSV export
- Add reports toolbar
- Add print action
- Add print-specific styles
- Add printable report heading

## Phase 18
Native desktop export with Tauri file system

Deliverables:
- Add Tauri dialog plugin
- Add Tauri file system plugin
- Register desktop export plugins
- Add export permissions
- Add native text file export service
- Add native-aware reports export resolver
- Preserve browser export in web mode
- Use native save dialog in desktop mode

## Phase 19
PDF export foundation

Deliverables:
- Add PDF export dependencies
- Add PDF table utility
- Add native binary file export
- Add ledger report PDF export
- Add trial balance PDF export
- Add PDF actions to reports toolbar

