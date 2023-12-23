'use client';

import { ColorSwatch, Group, rem } from '@mantine/core';

import { usePrimaryColor } from '@/hooks';
import { randomId } from '@/utils';

import { themeColorCollection as collection } from './collection';

export function ThemeControllers() {
  const [_, setPrimaryColor] = usePrimaryColor();

  const content = collection.map(({ variable, value }) => {
    const id = randomId();
    return (
      <ColorSwatch
        key={id}
        component='button'
        size={rem(14.5)}
        color={variable}
        withShadow={false}
        styles={{
          root: { cursor: 'pointer' },
          alphaOverlay: { backgroundImage: 'unset' },
        }}
        onClick={() => setPrimaryColor(prevState => value ?? prevState)}
        aria-label={`${value} color swatch`}
      />
    );
  });

  return <Group gap='xs'>{content}</Group>;
}
