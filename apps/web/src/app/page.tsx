import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import React from "react";
import Link from "next/link";

const features = [
  {
    title: "Web Application",
    description:
      "A modern Next.js interface for accounting workflows, reports, and dashboards.",
  },
  {
    title: "Desktop Ready",
    description:
      "Designed to support a future Tauri desktop edition with local SQLite storage.",
  },
  {
    title: "Educational Roadmap",
    description:
      "Built phase by phase to teach practical React, Next.js, and architecture concepts.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              MiniLedgerPlatform
            </p>
            <h1 className="text-lg font-semibold tracking-tight">
              Accounting UI Foundation
            </h1>
          </div>

          <ThemeToggle />
        </header>

        <section className="flex flex-1 items-center py-20">
          <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Badge variant="secondary" className="mb-5">
                Phase 2 — Design System Foundation
              </Badge>

              <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                A polished foundation for a professional accounting platform.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                MiniLedgerPlatform is being built as a web-first,
                desktop-ready accounting application with a reusable design
                system, clean architecture, and educational documentation.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/dashboard">Open dashboard</Link>
                </Button>
                <Button variant="outline">View roadmap</Button>
              </div>
            </div>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Foundation checklist</CardTitle>
                <CardDescription>
                  Core UI primitives introduced in this phase.
                </CardDescription>
              </CardHeader>

              <CardContent className="grid gap-4">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-lg border bg-card p-4"
                  >
                    <h3 className="font-medium">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}