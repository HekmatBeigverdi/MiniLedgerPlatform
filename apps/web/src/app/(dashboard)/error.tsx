"use client";

import { useEffect } from "react";

import { ErrorState } from "@/components/shared/error-state";

type DashboardErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function DashboardError({
  error,
  reset,
}: DashboardErrorProps) {
  useEffect(() => {
    console.error("Dashboard route error:", error);
  }, [error]);

  return (
    <div className="p-6">
      <ErrorState
        title="Dashboard section error"
        description="This dashboard section could not be loaded."
        onRetry={reset}
      />
    </div>
  );
}