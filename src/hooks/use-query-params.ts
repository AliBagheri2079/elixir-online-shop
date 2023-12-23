'use client';

import { useCallback, useEffect, useState, useTransition } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { useDebouncedValue, useInputState } from '@mantine/hooks';

export function useQueryParams(label: string) {
  const [isMounted, setMounted] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useInputState('');
  const [debouncedQuery] = useDebouncedValue(query, 400, { leading: true });
  const router = useRouter();
  const pathname = usePathname();

  const handleSearchParams = useCallback(
    (value: string) => {
      let params = new URLSearchParams(window.location.search);
      if (value.length > 0) {
        params.set(label, value);
      } else {
        params.delete(label);
      }
      startTransition(() => {
        router.replace(`${pathname}?${params.toString()}`);
      });
    },
    [label, pathname, router],
  );

  // NOTE: Set Initial Params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get(label) ?? '';
    setQuery(searchQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [label]);

  // NOTE: Setup Mounted
  useEffect(() => {
    if (debouncedQuery.length > 0 && !isMounted) {
      setMounted(true);
    }
  }, [debouncedQuery.length, isMounted]);

  // NOTE: Call Search Params Handler
  useEffect(() => {
    if (isMounted) handleSearchParams(debouncedQuery);
  }, [debouncedQuery, handleSearchParams, isMounted]);

  return { query, setQuery, isPending };
}
