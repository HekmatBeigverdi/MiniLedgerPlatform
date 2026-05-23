"use client";

import { useCallback } from "react";

import { getParties } from "@/features/parties/services/parties-service";
import type { Party } from "@/features/parties/types/party";
import { useAsyncData } from "@/hooks/use-async-data";

export function useParties() {
  const loadParties = useCallback(() => getParties(), []);

  return useAsyncData<Party[]>({
    load: loadParties,
    initialData: [],
  });
}