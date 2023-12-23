'use client';

import { Group, Skeleton } from '@mantine/core';
import { useMotionValue } from 'framer-motion';

import { DockNavLink } from '@/components';
import { randomId } from '@/utils';

import { useNavLink } from '../hooks';

export function Dockbar() {
  const { data, isLoading } = useNavLink();
  const mouseX = useMotionValue(Infinity);

  const placeholders = Array.from({ length: 14 }, (_v, i) => i).map(() => {
    const id = randomId();
    return <Skeleton key={id} height={38} circle />;
  });

  const content = data?.map(item => {
    const id = randomId();
    return <DockNavLink key={id} mouseX={mouseX} {...item} />;
  });

  return (
    <nav>
      {isLoading ? (
        <Group justify='space-evenly' wrap='nowrap' py='xs'>
          {placeholders}
        </Group>
      ) : (
        <ul
          onMouseMove={e => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          style={{
            height: '2.5rem',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-around',
            gap: '0.5rem',
            paddingInline: '0.5rem',
            marginBlock: '0.5rem',
            marginInline: 'auto',
            listStyleType: 'none',
          }}
        >
          {content}
        </ul>
      )}
    </nav>
  );
}
