'use client';

import { useEffect, useState } from 'react';

import { Group, Loader, Slider, Text } from '@mantine/core';
import { upperFirst } from '@mantine/hooks';

import classes from './index.module.css';

import { useLocale, useQueryParams } from '@/hooks';
import { getDictionary } from '@/lib';
import { formatting, PRODUCT_MAX_PRICE } from '@/utils';

export function ProductFilter() {
  const [filterLabel, setFilterLabel] = useState('');
  const { query, setQuery, isPending } = useQueryParams('filter');
  const locale = useLocale();

  const isMutating = !filterLabel || isPending;
  const { format } = formatting.currency(locale);

  useEffect(() => {
    getDictionary(locale).then(({ page: { product } }) =>
      setFilterLabel(product.filter_label),
    );
  }, [locale]);

  return (
    <>
      <Group pb={5}>
        <Text size='sm'>{upperFirst(filterLabel)}</Text>
        {isMutating ? <Loader size={16} /> : null}
      </Group>
      <Slider
        size={5}
        thumbSize={12}
        label={value => format(value)}
        labelTransitionProps={{
          transition: 'slide-up',
          duration: 150,
          timingFunction: 'linear',
        }}
        classNames={classes}
        marks={[{ value: 250 }, { value: 500 }, { value: 750 }]}
        min={0}
        max={PRODUCT_MAX_PRICE}
        step={10}
        value={+query}
        onChange={value => setQuery(value.toString())}
        aria-label='Filter products price'
      />
    </>
  );
}
