import { Box, Container, Flex, Paper, ScrollArea } from '@mantine/core';

import { Dockbar, Sidebar } from '@/features';
import {
  PUBLIC_LAYOUT_BLOCK_MARGIN,
  PUBLIC_LAYOUT_CONTENT_BLOCK_PADDING,
  PUBLIC_LAYOUT_CONTENT_MAX_SIZE,
  PUBLIC_LAYOUT_MAX_HEIGHT,
} from '@/utils';

import { PublicHeader } from './header';

type Props = React.PropsWithChildren<unknown>;

export function PublicLayout({ children }: Props) {
  return (
    <Container
      pos='relative'
      size='xl'
      styles={{
        root: {
          height: PUBLIC_LAYOUT_MAX_HEIGHT,
        },
      }}
    >
      <Paper
        mx='md'
        my={{ base: 'md', md: PUBLIC_LAYOUT_BLOCK_MARGIN }}
        styles={{
          root: {
            position: 'absolute',
            insetInline: 0,
            backdropFilter: 'var(--mantine-blur-default)',
          },
        }}
      >
        <PublicHeader />

        <Flex
          direction='row'
          justify='space-between'
          styles={{
            root: {
              maxBlockSize: PUBLIC_LAYOUT_CONTENT_MAX_SIZE,
            },
          }}
        >
          <Box<typeof ScrollArea>
            component={ScrollArea}
            styles={{
              root: {
                flex: '0 0 230px',
                borderInlineEnd: '1px solid var(--mantine-color-dark-light)',
                padding: 'calc(var(--mantine-spacing-lg) + 0.35rem)',
              },
            }}
            visibleFrom='md'
          >
            <Sidebar />
          </Box>

          <Box<typeof ScrollArea>
            component={ScrollArea}
            px={{ base: 'md', md: 'calc(var(--mantine-spacing-xl) * 1.35)' }}
            styles={{
              root: {
                flexGrow: 1,
                paddingBlock: PUBLIC_LAYOUT_CONTENT_BLOCK_PADDING,
              },
            }}
          >
            <main>{children}</main>
          </Box>
        </Flex>
      </Paper>

      <Paper
        mx='md'
        mb='xs'
        styles={{
          root: {
            position: 'fixed',
            insetInline: 0,
            insetBlock: 'auto 0',
            backdropFilter: 'var(--mantine-blur-default)',
          },
        }}
        hiddenFrom='md'
      >
        <Dockbar />
      </Paper>
    </Container>
  );
}
