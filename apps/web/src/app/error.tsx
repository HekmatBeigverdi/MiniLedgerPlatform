"use client";

import { useEffect } from "react";

import { ErrorState } from "@/components/shared/error-state";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-2xl">
        <ErrorState
          title="Application error"
          description="An unexpected error occurred while rendering this page."
          onRetry={reset}
        />
      </div>
    </main>
  );
}