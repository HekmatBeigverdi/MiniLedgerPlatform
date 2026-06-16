"use client";

import { useCallback } from "react";

import { getPartiesProvider } from "@/features/parties/services/parties-provider-resolver";
import type { Party } from "@/features/parties/types/party";
import { useAsyncData } from "@/hooks/use-async-data";

export function useParties() {
  const loadParties = useCallback(() => {
    return getPartiesProvider().getParties();
  }, []);

  return useAsyncData<Party[]>({
    load: loadParties,
    initialData: [],
  });
}