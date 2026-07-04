#!/usr/bin/env node
// Visual smoke-check for a running `next dev` server: loads a page at one or
// more viewport widths, screenshots it, and reports any horizontal overflow
// on `[data-slot="table-container"]` elements (the shared Table wrapper).
//
// Usage:
//   node scripts/check-page.mjs <path> [--widths=375,768,1440] [--out=dir] [--base=http://localhost:3000]
//
// Example:
//   node scripts/check-page.mjs /parties --widths=375,1440

import { chromium } from "playwright";
import path from "node:path";
import fs from "node:fs";

const args = process.argv.slice(2);
const pagePath = args.find((a) => !a.startsWith("--")) ?? "/";
const getFlag = (name, fallback) => {
  const found = args.find((a) => a.startsWith(`--${name}=`));
  return found ? found.split("=")[1] : fallback;
};

const widths = getFlag("widths", "375,1440").split(",").map(Number);
const base = getFlag("base", "http://localhost:3000");
const outDir = getFlag("out", path.join(process.cwd(), ".playwright-screenshots"));

fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
let hadIssue = false;

for (const width of widths) {
  const height = 900;
  const page = await browser.newPage({ viewport: { width, height } });
  const consoleErrors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });
  page.on("pageerror", (e) => consoleErrors.push(`pageerror: ${e.message}`));

  const url = `${base}${pagePath}`;
  await page.goto(url, { waitUntil: "networkidle" });
  // Dashboard pages fetch data client-side after hydration, so wait for
  // something real to show up rather than trusting the initial SSR shell.
  await page.waitForSelector("table, main", { timeout: 10000 }).catch(() => {});

  const label = `${path.basename(pagePath) || "root"}-${width}`;
  const screenshotPath = path.join(outDir, `${label}.png`);
  await page.screenshot({ path: screenshotPath, fullPage: true });

  const overflows = await page.$$eval('[data-slot="table-container"]', (els) =>
    els.map((el) => ({
      scrollWidth: el.scrollWidth,
      clientWidth: el.clientWidth,
      overflow: el.scrollWidth > el.clientWidth,
    }))
  );

  const anyOverflow = overflows.some((o) => o.overflow);
  if (anyOverflow || consoleErrors.length) hadIssue = true;

  console.log(`\n[${width}px] ${url}`);
  console.log(`  screenshot: ${screenshotPath}`);
  if (overflows.length) {
    console.log(`  table-container overflow: ${JSON.stringify(overflows)}`);
  }
  if (consoleErrors.length) {
    console.log(`  console errors:\n    ${consoleErrors.join("\n    ")}`);
  }

  await page.close();
}

await browser.close();
process.exit(hadIssue ? 1 : 0);
