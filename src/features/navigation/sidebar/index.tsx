'use client';

import { Fragment } from 'react';

import { Group, rem, Skeleton, Stack } from '@mantine/core';

import { GroupCategory, GroupNavLink } from '@/components';
import { categorizeData, randomId } from '@/utils';

import { useNavLink } from '../hooks';

export function Sidebar() {
  const { data, isLoading } = useNavLink();

  const placeholders = Array.from({ length: 4 }, (_v, i) => i).map(() => {
    const rootId = randomId();
    return (
      <Stack key={rootId} justify='space-between' mb='md'>
        <Skeleton height={8} width='35%' mb='xs' />

        {Array.from({ length: 3 }, (_v, i) => i).map(() => {
          const id = randomId();
          return (
            <Group key={id} gap='sm'>
              <Skeleton height={30} circle />
              <Skeleton height={8} width='50%' />
            </Group>
          );
        })}
      </Stack>
    );
  });

  const collection = categorizeData(data ?? []);
  const content = Object.entries(collection).map(([category, items]) => {
    const rootId = randomId();
    return (
      <Stack key={rootId} justify='space-between' gap='xs'>
        <GroupCategory category={category} />

        <Stack gap={rem(2)}>
          {items.map(item => {
            const id = randomId();
            return (
              <Fragment key={id}>
                <GroupNavLink {...item} />
              </Fragment>
            );
          })}
        </Stack>
      </Stack>
    );
  });

  return (
    <nav>
      <Stack
        justify='space-between'
        gap='calc(var(--mantine-spacing-lg) + 0.25rem)'
      >
        {isLoading ? placeholders : content}
      </Stack>
    </nav>
  );
}
