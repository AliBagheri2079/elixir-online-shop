'use client';

import { createElement } from 'react';

import { usePathname } from 'next/navigation';

import { Badge, Group, NavLink, Text } from '@mantine/core';

import classes from './index.module.css';

import { LocalizedLink } from '@/components';
import type { NavLinkProps } from '@/types';
import { isActivePathname } from '@/utils';

type Props = Omit<NavLinkProps, 'category'>;

export function GroupNavLink({ label, href, icon, badge }: Props) {
  const pathname = usePathname();
  const active = isActivePathname(pathname, href);

  const content = (
    <Group justify='space-between'>
      <Text tt='capitalize'>{label}</Text>
      {badge ? (
        <Badge size='sm' variant='light' w={18} h={18} p={0}>
          {badge}
        </Badge>
      ) : null}
    </Group>
  );

  return (
    <NavLink<typeof LocalizedLink>
      component={LocalizedLink}
      href={href}
      active={active}
      label={content}
      leftSection={createElement(icon, {
        size: 20,
        stroke: 2,
      })}
      classNames={classes}
    />
  );
}
