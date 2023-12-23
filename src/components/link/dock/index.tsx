'use client';

import { createElement, useRef } from 'react';

import { usePathname } from 'next/navigation';

import { ActionIcon, useMantineTheme, VisuallyHidden } from '@mantine/core';
import { motion, MotionValue, useSpring, useTransform } from 'framer-motion';

import { LocalizedLink } from '@/components';
import type { NavLinkProps } from '@/types';
import { isActivePathname } from '@/utils';

type Props = Omit<NavLinkProps, 'category' | 'badge'> & {
  mouseX: MotionValue;
};

export function DockNavLink({ mouseX, label, href, icon }: Props) {
  const dockElm = useRef<HTMLLIElement>(null);
  const { primaryColor } = useMantineTheme();
  const pathname = usePathname();
  const active = isActivePathname(pathname, href);

  const distance = useTransform(mouseX, val => {
    const bounds = dockElm.current?.getBoundingClientRect() ?? {
      x: 0,
      width: 0,
    };
    return val - bounds.x - bounds.width / 2;
  });
  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.li
      ref={dockElm}
      style={{
        width,
        aspectRatio: '1 / 1',
      }}
    >
      <ActionIcon<typeof LocalizedLink>
        component={LocalizedLink}
        href={href}
        variant='outline'
        color={active ? primaryColor : 'var(--mantine-color-text)'}
        styles={{
          root: {
            width: 'inherit',
            height: '100%',
            borderRadius: '100vmax',
          },
        }}
        aria-label={label}
      >
        {createElement(icon, {
          stroke: 1.5,
          style: {
            width: '50%',
            height: '50%',
          },
        })}
        <VisuallyHidden>{label}</VisuallyHidden>
      </ActionIcon>
    </motion.li>
  );
}
