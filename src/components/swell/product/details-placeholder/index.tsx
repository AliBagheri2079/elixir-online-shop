'use client';

import {
  AspectRatio,
  Grid,
  Group,
  Paper,
  Skeleton,
  Stack,
} from '@mantine/core';
import cx from 'clsx';

export function ProductDetailsPlaceholder() {
  return (
    <Grid justify='space-between' align='stretch' gutter='xs' grow>
      <Grid.Col span={{ base: 12, sm: 'auto' }} order={{ sm: 2 }}>
        <AspectRatio ratio={6 / 9}>
          <Skeleton />
        </AspectRatio>
      </Grid.Col>

      <Grid.Col span={{ base: 12, sm: 'auto' }} order={{ sm: 1 }}>
        <Paper
          shadow='xs'
          p='md'
          h='100%'
          classNames={{
            root: cx('glassmorphism'),
          }}
        >
          <Stack h='100%' justify='space-between'>
            <Stack gap='xl'>
              <Stack gap='xs'>
                <Skeleton height={12} />
                <Skeleton height={12} width='25%' />
              </Stack>

              <Stack gap='xs'>
                <Skeleton height={8} />
                <Skeleton height={8} />
                <Skeleton height={8} />
                <Skeleton height={8} width='25%' />
              </Stack>

              <Group gap={4}>
                <Skeleton height={8} width='10%' />
                <Skeleton height={8} width='10%' />
                <Skeleton height={8} width='10%' />
              </Group>
            </Stack>

            <Stack>
              <Group justify='space-between' wrap='nowrap'>
                <Skeleton height={8} width='25%' />
                <Skeleton height={8} width='25%' />
              </Group>

              <Skeleton height={35} />
            </Stack>
          </Stack>
        </Paper>
      </Grid.Col>
    </Grid>
  );
}
