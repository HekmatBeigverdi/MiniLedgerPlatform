import React from "react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <section className="max-w-2xl text-center">
        <p className="mb-3 text-sm font-medium text-gray-500">
          MiniLedgerPlatform
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Web-first. Desktop-ready.
        </h1>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          A modern educational accounting platform built with Next.js,
          TypeScript, Tauri, and SQLite-ready architecture.
        </p>
      </section>
    </main>
  );
}