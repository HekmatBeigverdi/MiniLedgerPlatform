---
name: run-web-app
description: Launch the Next.js web app (apps/web) in dev mode and visually verify a page with a headless browser (Playwright), including responsive/overflow checks on data tables. Use this instead of rediscovering the setup from scratch.
---

# Running & visually verifying apps/web

This is the Next.js + React + TypeScript app under `apps/web` (Tauri
desktop wraps the same web app — see root CLAUDE.md). Playwright is
installed as a devDependency of `apps/web` specifically so this is
fast and doesn't require hunting for a cached browser install.

## Start the dev server

```bash
cd apps/web
(npm run dev > /tmp/nextdev.log 2>&1 &)
# poll until it's serving instead of a blind sleep
until curl -sf http://localhost:3000 >/dev/null; do sleep 1; done
```

Stop it with `pkill -f "next dev --turbopack"` before relaunching, or
the next run hits `EADDRINUSE`.

Desktop mode (`NEXT_PUBLIC_APP_MODE=desktop`) uses `npm run dev:desktop`
instead, if the change under test is desktop-specific.

## Drive it with the built-in check script

`apps/web/scripts/check-page.mjs` loads a path at one or more viewport
widths, screenshots each, and reports whether any `Table` component
(`[data-slot="table-container"]`, the shared wrapper in
`src/components/ui/table.tsx`) overflows horizontally — plus any
console/page errors.

```bash
cd apps/web
node scripts/check-page.mjs /parties --widths=375,768,1440
```

- Screenshots land in `apps/web/.playwright-screenshots/` (gitignored).
- Exit code is non-zero if any table overflowed or the console had errors.
- `--base=http://localhost:3000` and `--out=<dir>` are also available.

For anything not covered by the script (clicking, filling forms,
checking specific elements), write a one-off Playwright script — it
resolves cleanly as long as it lives anywhere under `apps/web/`
(Node's ESM resolver walks up from the script's own path to find
`node_modules/playwright`, so a script outside `apps/web` won't find
it). A scratch script under `apps/web/scripts/` or a temp subfolder
there works fine; just don't commit throwaway ones.

```js
import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto("http://localhost:3000/parties", { waitUntil: "networkidle" });
await page.waitForSelector("table"); // or another real element
// ...interact, screenshot, assert...
await browser.close();
```

## Gotchas

- **Dashboard pages are client-rendered after hydration.** The raw
  SSR HTML (e.g. from `curl`) is a near-empty shell — data loads via
  a client fetch. Don't `curl`-and-grep to check content; always use
  a real browser and `waitForSelector` on something that only
  appears once data has loaded (e.g. `table`).
- **Overflow at the `md` breakpoint is a known, pre-existing
  condition** across the feature tables (accounts, parties, vouchers,
  ledger-report, trial-balance) — they were only tuned to avoid
  overflow at narrow (~375px) mobile widths, not at `md` (~768px)
  tablet widths, where the sidebar eats a lot of the viewport. Don't
  treat `md`-width overflow alone as a regression; compare against
  another table at the same width first.
- **Column width math matters more than CSS wrapping.** If a table
  overflows at narrow width, check whether the *always-visible*
  columns alone (the ones without `hidden md:table-cell`) already
  exceed the container width before reaching for `whitespace-normal`/
  `break-words` on one cell — no amount of wrapping fixes it if the
  budget is already gone. The fix is usually to hide another
  low-priority column at that breakpoint, matching the existing
  pattern in `apps/web/src/features/*/components/*-table.tsx`.
