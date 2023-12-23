import { Container, Group } from '@mantine/core';

import {
  CartList,
  LanguageMenu,
  ThemeControllers,
  ThemeSwitch,
  UserAvatar,
} from '@/components';
import { PUBLIC_LAYOUT_HEADER_MIN_SIZE } from '@/utils';

export function PublicHeader() {
  return (
    <header>
      <Container
        fluid
        styles={{
          root: {
            borderBlockEnd: '1px solid var(--mantine-color-dark-light)',
            paddingBlockStart: '0.15rem',
          },
        }}
      >
        <Group
          justify='space-between'
          styles={{
            root: {
              minBlockSize: PUBLIC_LAYOUT_HEADER_MIN_SIZE,
            },
          }}
        >
          <ThemeControllers />

          <Group gap='sm'>
            <ThemeSwitch />
            <LanguageMenu />
            <CartList />
            <UserAvatar />
          </Group>
        </Group>
      </Container>
    </header>
  );
}
