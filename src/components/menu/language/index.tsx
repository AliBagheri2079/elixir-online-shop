'use client';

import { Fragment, useEffect, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  ActionIcon,
  Menu,
  Radio,
  Text,
  useDirection,
  useMantineTheme,
  VisuallyHidden,
} from '@mantine/core';
import { IconWorld } from '@tabler/icons-react';
import cx from 'clsx';

import { useLocale } from '@/hooks';
import type { LanguageProps } from '@/types';
import { changePathnameLocale, randomId } from '@/utils';

import { getLanguageCollection } from './collection';

export function LanguageMenu() {
  const [collection, setCollection] = useState<LanguageProps[]>([]);
  const pathname = usePathname();
  const locale = useLocale();
  const { setDirection } = useDirection();
  const { primaryColor } = useMantineTheme();

  useEffect(() => {
    getLanguageCollection(locale).then(response => setCollection(response));
    setDirection(locale === 'en' ? 'ltr' : 'rtl');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  const target = (
    <ActionIcon aria-label='Change language'>
      <IconWorld />
      <VisuallyHidden>Change language</VisuallyHidden>
    </ActionIcon>
  );

  const content = collection.map(({ label, title }) => {
    const id = randomId();
    const href = changePathnameLocale(pathname, label);
    const active = locale === label;
    return (
      <Fragment key={id}>
        <Menu.Item<typeof Link>
          component={Link}
          href={href}
          color={active ? primaryColor : 'gray.6'}
          rightSection={
            <Text size='xs' c='gray.6' tt='capitalize'>
              {title}
            </Text>
          }
        >
          <Radio
            label={label.toLocaleUpperCase()}
            size='xs'
            defaultChecked={active}
          />
        </Menu.Item>
      </Fragment>
    );
  });

  return (
    <Menu
      trigger='hover'
      openDelay={100}
      closeDelay={200}
      offset={10}
      width={150}
      transitionProps={{ transition: 'fade', duration: 500 }}
      classNames={{
        dropdown: cx('glassmorphism'),
      }}
      styles={{
        dropdown: {
          border: 'unset',
        },
      }}
    >
      <Menu.Target>{target}</Menu.Target>
      <Menu.Dropdown>{content}</Menu.Dropdown>
    </Menu>
  );
}
