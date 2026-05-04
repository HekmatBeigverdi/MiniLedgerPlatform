import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-muted/30">
      <div className="grid min-h-screen lg:grid-cols-[1fr_0.9fr]">
        <section className="hidden border-r bg-background p-10 lg:flex lg:flex-col lg:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-tight">
              MiniLedgerPlatform
            </p>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
              A web-first and desktop-ready accounting platform built with a
              clean educational architecture.
            </p>
          </div>

          <div>
            <h1 className="max-w-xl text-4xl font-bold tracking-tight">
              Build accounting workflows with a modern application foundation.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">
              This authentication phase introduces form handling, validation,
              and a mock session flow before connecting to a real backend API.
            </p>
          </div>

          <p className="text-xs text-muted-foreground">
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