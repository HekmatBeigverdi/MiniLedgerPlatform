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
