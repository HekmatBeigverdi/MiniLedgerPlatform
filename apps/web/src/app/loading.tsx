import { PageLoadingState } from "@/components/shared/page-loading-state";
import React from "react";

export default function Loading() {
  return (
    <main className="min-h-screen bg-background p-6">
      <PageLoadingState />
    </main>
  );
}