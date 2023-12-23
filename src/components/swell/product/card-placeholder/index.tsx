'use client';

import { AspectRatio, Card, Group, Skeleton, Stack } from '@mantine/core';
import cx from 'clsx';

export function ProductCardPlaceholder() {
  return (
    <Card
      p='sm'
      classNames={{
        root: cx('glassmorphism'),
      }}
    >
      <Card.Section>
        <AspectRatio ratio={3 / 4}>
          <Skeleton radius={0} />
        </AspectRatio>
      </Card.Section>

      <Stack justify='space-between' gap='xs' mt='lg' mb={2} h='100%'>
        <Group justify='space-between' wrap='nowrap'>
          <Skeleton height={10} width='75%' />
          <Skeleton height={10} width='20%' />
        </Group>

        <Stack gap='xs'>
          <Skeleton height={10} />
          <Skeleton height={10} />
          <Skeleton height={10} />
          <Skeleton height={10} width='50%' />
        </Stack>

        <Skeleton height={35} />
      </Stack>
    </Card>
  );
}
