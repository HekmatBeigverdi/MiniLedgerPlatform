import { AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import React from "react";

type ErrorStateProps = {
  title?: string;
  description?: string;
  onRetry?: () => void;
};

export function ErrorState({
  title = "Something went wrong",
  description = "The requested data could not be loaded. Please try again.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex min-h-72 flex-col items-center justify-center rounded-lg border border-dashed bg-card p-8 text-center">
      <AlertCircle className="mb-4 h-10 w-10 text-destructive" />

      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
        {description}
      </p>

      {onRetry ? (
        <Button type="button" className="mt-5" onClick={onRetry}>
          Try again
        </Button>
      ) : null}
    </div>
  );
}