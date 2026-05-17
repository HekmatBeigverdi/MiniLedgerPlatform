"use client";

import { useCallback, useEffect, useState } from "react";

type UseAsyncDataOptions<TData> = {
  load: () => Promise<TData>;
  initialData: TData;
  immediate?: boolean;
};

export function useAsyncData<TData>({
  load,
  initialData,
  immediate = true,
}: UseAsyncDataOptions<TData>) {
  const [data, setData] = useState<TData>(initialData);
  const [isLoading, setIsLoading] = useState(immediate);
  const [error, setError] = useState<Error | null>(null);

  const reload = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await load();
      setData(result);
      return result;
    } catch (caughtError) {
      const normalizedError =
        caughtError instanceof Error
          ? caughtError
          : new Error("Unknown error");

      setError(normalizedError);
      throw normalizedError;
    } finally {
      setIsLoading(false);
    }
  }, [load]);

  useEffect(() => {
    if (!immediate) return;

    let cancelled = false;

    const loadData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await load();
        if (!cancelled) {
          setData(result);
        }
      } catch (caughtError) {
        if (!cancelled) {
          const normalizedError =
            caughtError instanceof Error
              ? caughtError
              : new Error("Unknown error");

          setError(normalizedError);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    loadData();

    return () => {
      cancelled = true;
    };
  }, [load, immediate]);

  return {
    data,
    setData,
    isLoading,
    error,
    reload,
  };
}