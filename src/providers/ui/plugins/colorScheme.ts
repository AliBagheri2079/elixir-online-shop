'use client';

import { localStorageColorSchemeManager } from '@mantine/core';

export const colorSchemeManager = localStorageColorSchemeManager({
  key: 'app-color-scheme',
});
