import React from "react";

type PageLoadingStateProps = {
  cardCount?: number;
  showTable?: boolean;
};

export function PageLoadingState({
  cardCount = 4,
  showTable = true,
}: PageLoadingStateProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: cardCount }).map((_, index) => (
          <div
            key={index}
            className="h-32 animate-pulse rounded-lg border bg-muted"
          />
        ))}
      </div>

      {showTable ? (
        <div className="h-96 animate-pulse rounded-lg border bg-muted" />
      ) : null}
    </div>
  );
}