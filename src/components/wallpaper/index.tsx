'use client';

import { Box, Overlay } from '@mantine/core';

import { IconGradiantWaves } from '@/components';
import { useColorScheme } from '@/hooks';

export function Wallpaper() {
  const { computedColorScheme } = useColorScheme();
  const isDarkColorScheme = computedColorScheme === 'dark';

  const gradient = isDarkColorScheme
    ? 'linear-gradient(180deg,rgba(0, 0, 0, 0.65) 0%,rgba(0, 0, 0, 0.35) 100%)'
    : 'linear-gradient(180deg,rgba(255, 255, 255, 0.65) 0%,rgba(255, 255, 255, 0.35) 100%)';

  return (
    <Box pos='fixed' inset={0}>
      <IconGradiantWaves width='100%' height='100%' />
      <Overlay
        gradient={gradient}
        styles={{
          root: {
            backdropFilter: 'saturate(3)',
          },
        }}
      />
    </Box>
  );
}
