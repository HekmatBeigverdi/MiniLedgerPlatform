import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <section className="max-w-xl text-center">
        <p className="text-sm font-medium text-muted-foreground">404</p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Page not found
        </h1>

        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          The page you are looking for does not exist or may have been moved.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <Button asChild>
            <Link href="/dashboard">Go to dashboard</Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="/">Go home</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}