import { BookMarked, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import React from "react";

const highlights = [
  {
    icon: BookMarked,
    label: "Double-entry ledger core",
    description: "Every voucher balances debits and credits by design.",
  },
  {
    icon: Workflow,
    label: "Web and desktop, one codebase",
    description: "The same workspace runs in the browser or as a Tauri app.",
  },
  {
    icon: ShieldCheck,
    label: "Built for a real audit trail",
    description: "Accounts, parties, and vouchers stay traceable end to end.",
  },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-[1.05fr_0.95fr]">
        <section className="relative hidden overflow-hidden bg-[oklch(0.2_0.014_55)] p-10 text-[oklch(0.93_0.007_60)] lg:flex lg:flex-col lg:justify-between">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-primary/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-primary/15 blur-3xl"
          />

          <div className="relative flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="font-heading text-sm font-semibold tracking-tight">
                MiniLedgerPlatform
              </p>
              <p className="text-xs text-[oklch(0.93_0.007_60)]/60">
                Accounting workspace
              </p>
            </div>
          </div>

          <div className="relative">
            <p className="mb-4 text-xs font-medium tracking-wide text-primary uppercase">
              Web-first, desktop-ready
            </p>

            <h1 className="max-w-xl font-heading text-4xl leading-tight font-medium tracking-tight italic">
              Build accounting workflows with a{" "}
              <span className="text-primary not-italic">modern</span>{" "}
              application foundation.
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[oklch(0.93_0.007_60)]/70">
              This authentication phase introduces form handling, validation,
              and a mock session flow before connecting to a real backend API.
            </p>

            <ul className="mt-8 space-y-4">
              {highlights.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-primary ring-1 ring-white/10">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-sm text-[oklch(0.93_0.007_60)]/60">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <p className="relative text-xs text-[oklch(0.93_0.007_60)]/50">
            Phase 4 — Authentication, Forms, and Validation
          </p>
        </section>

        <section className="flex items-center justify-center p-6">
          {children}
        </section>
      </div>
    </main>
  );
}
