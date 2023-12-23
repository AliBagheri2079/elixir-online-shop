'use client';

import { DirectionProvider, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import { usePrimaryColor } from '@/hooks';

import { colorSchemeManager, generateTheme } from './plugins';

type Props = React.PropsWithChildren<unknown>;

export function UserInterfaceProvider({ children }: Props) {
  const [primaryColor] = usePrimaryColor();
  const theme = generateTheme({ primaryColor });

  return (
    <DirectionProvider>
      <MantineProvider
        theme={theme}
        colorSchemeManager={colorSchemeManager}
        defaultColorScheme='auto'
      >
        <Notifications />
        {children}
      </MantineProvider>
    </DirectionProvider>
  );
}
