# Desktop SQLite Strategy

## Objective

Define how the future desktop edition of MiniLedgerPlatform will use SQLite as a local database.

## Why SQLite?

SQLite is a good fit for the desktop edition because it is:

- embedded
- file-based
- lightweight
- portable
- suitable for single-user local accounting data

## Planned Desktop Data Model

The first local database version should support:

- accounts
- parties
- vouchers
- voucher lines
- app settings

## Planned Tables

```sql
accounts
parties
vouchers
voucher_lines
app_settings

## Phase 12 Implementation

Phase 12 introduces the first SQLite persistence foundation:

- Tauri SQL plugin is installed
- SQLite feature is enabled on the Rust side
- SQL plugin permission is enabled through Tauri capabilities
- Initial SQLite schema is defined
- Frontend desktop database service is added
- Desktop database health check is added
- `/desktop-database` diagnostics page is added

## Current Database File

The current local database file is:

```txt
miniledger.db
