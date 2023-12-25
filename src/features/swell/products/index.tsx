'use client';

import { Fragment, useRef } from 'react';

import {
  Center,
  Grid,
  Loader,
  ScrollArea,
  SimpleGrid,
  Stack,
  Transition,
} from '@mantine/core';

import {
  ErrorAlert,
  ProductCard,
  ProductCardPlaceholder,
  ProductFilter,
  ProductSearch,
} from '@/components';
import type { Locale } from '@/types';
import {
  PRODUCTS_PER_PAGE,
  PUBLIC_LAYOUT_CONTENT_BLOCK_PADDING,
  PUBLIC_LAYOUT_CONTENT_MAX_SIZE,
  randomId,
} from '@/utils';

import { useProducts } from '../hooks';

type Props = {
  lang: Locale;
  search?: string;
  filter?: string;
};

export function Products({ lang, search, filter }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { data, error, isLoading, isLoaderMounted, loaderRef } = useProducts({
    root: containerRef.current,
    lang,
    search,
    filter,
  });

  const isNothingFound = !isLoading && data?.length === 0;
  const notFoundMessage =
    lang === 'en' ? 'Does`t exist item' : 'گزینه ای وجود ندارد';

  const content = data?.map(item => {
    const id = randomId();
    return <ProductCard key={id} {...item} />;
  });

  const placeholders = Array.from(
    { length: PRODUCTS_PER_PAGE },
    (_v, i) => i,
  ).map(() => {
    const id = randomId();
    return <ProductCardPlaceholder key={id} />;
  });

  return (
    <ScrollArea
      ref={containerRef}
      styles={{
        root: {
          height: `calc(${PUBLIC_LAYOUT_CONTENT_MAX_SIZE} - calc(${PUBLIC_LAYOUT_CONTENT_BLOCK_PADDING} * 2))`,
        },
      }}
    >
      <Stack gap='xs'>
        <Grid
          grow
          justify='space-between'
          align='center'
          styles={{
            inner: {
              marginBlock: 'unset',
            },
          }}
        >
          <Grid.Col span={{ base: 12, sm: 'auto', md: 4 }} order={{ sm: 2 }}>
            <ProductFilter />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 'auto', md: 8 }} order={{ sm: 1 }}>
            <ProductSearch />
          </Grid.Col>
        </Grid>

        <Fragment>
          {error ? (
            <ErrorAlert message={error.message} />
          ) : isNothingFound ? (
            <ErrorAlert message={notFoundMessage} />
          ) : (
            <SimpleGrid cols={{ xs: 2, sm: 3, lg: 4 }} spacing='xs'>
              {content}
              {isLoading ? placeholders : null}
            </SimpleGrid>
          )}
        </Fragment>

        <Transition
          mounted={isLoaderMounted}
          transition='slide-up'
          duration={500}
          exitDuration={500}
        >
          {transitionStyle => (
            <Center py='xs' style={transitionStyle}>
              <Loader ref={loaderRef} size={24} />
            </Center>
          )}
        </Transition>
      </Stack>
    </ScrollArea>
  );
}
