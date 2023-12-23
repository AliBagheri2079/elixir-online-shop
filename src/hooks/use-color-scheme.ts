'use client';

import { useCallback } from 'react';

import { useComputedColorScheme, useMantineColorScheme } from '@mantine/core';

export function useColorScheme() {
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });
  const { setColorScheme, clearColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });

  const toggleColorScheme = useCallback(() => {
    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [computedColorScheme]);

  return { computedColorScheme, toggleColorScheme, clearColorScheme };
}
