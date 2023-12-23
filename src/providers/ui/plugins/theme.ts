'use client';

import { generateColors } from '@mantine/colors-generator';
import {
  ActionIcon,
  createTheme,
  DEFAULT_THEME,
  Loader,
  mergeMantineTheme,
  rem,
  ScrollArea,
} from '@mantine/core';

import type { PrimaryColor } from '@/types';

type Params = { primaryColor: PrimaryColor };

export function generateTheme({ primaryColor }: Params) {
  const themeOverride = createTheme({
    white: '#f5f5f5',
    black: '#1a1b1e',
    colors: {
      blue: generateColors('#1f32c4'),
      cyan: generateColors('#099cff'),
      grape: generateColors('#8931b2'),
      gray: generateColors('#767c91'),
      green: generateColors('#2bdd66'),
      indigo: generateColors('#0969ff'),
      lime: generateColors('#ffab09'),
      orange: generateColors('#fc8c0c'),
      pink: generateColors('#ea1ce2'),
      red: generateColors('#f0185c'),
      teal: generateColors('#a57362'),
      violet: generateColors('#7b2eda'),
      yellow: generateColors('#efff09'),
    },
    primaryShade: { light: 4, dark: 8 },
    primaryColor,
    defaultRadius: 'sm',
    fontSizes: {
      xs: rem(10),
      sm: rem(12.5),
      md: rem(15),
      lg: rem(17.5),
      xl: rem(20),
    },
    respectReducedMotion: true,
    cursorType: 'pointer',
    defaultGradient: { from: '#e81cff', to: '#40c9ff', deg: -45 },
    activeClassName: '',
    components: {
      ScrollArea: ScrollArea.extend({
        defaultProps: {
          type: 'never',
        },
      }),
      Loader: Loader.extend({
        defaultProps: {
          type: 'dots',
        },
      }),
      ActionIcon: ActionIcon.extend({
        defaultProps: {
          variant: 'transparent',
          color: 'var(--mantine-color-text)',
        },
      }),
    },
  });

  return mergeMantineTheme(DEFAULT_THEME, themeOverride);
}
