'use client';

import { useEffect, useState } from 'react';

import { Loader, TextInput } from '@mantine/core';
import { upperFirst } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import cx from 'clsx';

import { useLocale, useQueryParams } from '@/hooks';
import { getDictionary } from '@/lib';

export function ProductSearch() {
  const [placeholder, setPlaceholder] = useState('');
  const { query, setQuery, isPending } = useQueryParams('search');
  const locale = useLocale();

  const isMutating = !placeholder || isPending;

  useEffect(() => {
    getDictionary(locale).then(({ page: { product } }) =>
      setPlaceholder(product.search_placeholder),
    );
  }, [locale]);

  return (
    <TextInput
      variant='filled'
      leftSectionPointerEvents='none'
      leftSection={<IconSearch size={14} />}
      rightSectionPointerEvents='none'
      rightSection={isMutating ? <Loader size={15} /> : null}
      placeholder={upperFirst(placeholder)}
      classNames={{
        input: cx('glassmorphism'),
      }}
      value={query}
      onChange={setQuery}
      aria-label='Search on products'
    />
  );
}
