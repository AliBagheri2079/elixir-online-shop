'use client';

import { useSessionStorage } from '@mantine/hooks';

import type { PrimaryColor } from '@/types';

export function usePrimaryColor() {
  return useSessionStorage<PrimaryColor>({
    key: 'app-primary-color',
    defaultValue: 'blue',
    getInitialValueInEffect: true,
  });
}
