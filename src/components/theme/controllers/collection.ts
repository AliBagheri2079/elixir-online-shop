import type { PrimaryColor } from '@/types';

type ThemeColor = {
  variable: string;
  value: PrimaryColor;
};

export const themeColorCollection: ThemeColor[] = [
  {
    variable: 'var(--mantine-color-red-5)',
    value: 'red',
  },
  {
    variable: 'var(--mantine-color-yellow-5)',
    value: 'yellow',
  },
  {
    variable: 'var(--mantine-color-green-5)',
    value: 'green',
  },
];
