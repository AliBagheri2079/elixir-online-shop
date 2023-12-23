'use client';

import { useRef } from 'react';

import Image from 'next/image';

import { Carousel } from '@mantine/carousel';
import {
  AspectRatio,
  Badge,
  Grid,
  Group,
  Paper,
  Rating,
  Spoiler,
  Stack,
  Text,
  Title,
  TypographyStylesProvider,
  useMantineTheme,
} from '@mantine/core';
import cx from 'clsx';
import Autoplay from 'embla-carousel-autoplay';

import classes from './index.module.css';

import { AddCartButton } from '@/components';
import { useLocale } from '@/hooks';
import type { ProductResults } from '@/types';
import { formatting, randomId } from '@/utils';

export function ProductDetails({
  id: productId,
  images,
  name,
  description,
  tags,
  origPrice,
  price,
  sku,
  sale,
}: ProductResults) {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  const locale = useLocale();
  const { primaryColor } = useMantineTheme();

  const { format } = formatting.currency(locale);

  const spoiler = {
    showLabel: locale === 'en' ? 'Show more' : 'نمایش بیشتر',
    hideLabel: locale === 'en' ? 'Hide' : 'پنهان',
  };

  const slides = images?.map(({ file }) => {
    const id = randomId();
    return (
      <Carousel.Slide key={id}>
        <AspectRatio ratio={6 / 9}>
          <Image
            fill
            src={file?.url!}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            style={{
              borderRadius: 'var(--mantine-radius-default)',
            }}
            alt={description!}
          />
        </AspectRatio>
      </Carousel.Slide>
    );
  });

  const badges = tags?.map(tag => {
    const id = randomId();
    return (
      <Badge key={id} size='sm'>
        {tag}
      </Badge>
    );
  });

  return (
    <Grid
      key={productId}
      justify='space-between'
      align='stretch'
      gutter='xs'
      grow
    >
      <Grid.Col span={{ base: 12, sm: 'auto' }} order={{ sm: 2 }}>
        <Carousel
          withControls={false}
          withIndicators={Number(images?.length) > 1}
          draggable={Number(images?.length) > 1}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          classNames={classes}
        >
          {slides}
        </Carousel>
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
            <Stack>
              <Title order={1} size='h4'>
                {name}
              </Title>

              <Spoiler
                maxHeight={40}
                styles={{
                  control: {
                    left: 'unset',
                  },
                }}
                {...spoiler}
              >
                <TypographyStylesProvider
                  fz='sm'
                  c='dimmed'
                  styles={{
                    root: {
                      margin: 'initial',
                      padding: 'initial',
                    },
                  }}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: description!,
                    }}
                  />
                </TypographyStylesProvider>
              </Spoiler>

              <Group gap={4}>{badges}</Group>
            </Stack>

            <Stack gap='xs'>
              <Group justify='space-between' wrap='nowrap'>
                <Group gap={8}>
                  {origPrice ? (
                    <Text c='red' td='line-through'>
                      {format(origPrice)}
                    </Text>
                  ) : null}

                  <Text c={origPrice ? 'green' : 'var(--mantine-color-text)'}>
                    {format(price!)}
                  </Text>
                </Group>

                <Rating
                  value={+(sku ?? 1)}
                  fractions={2}
                  color={primaryColor}
                  readOnly
                />
              </Group>

              <AddCartButton
                productId={productId!}
                disabled={!sale}
                variant='gradient'
                tt='capitalize'
                fullWidth
              />
            </Stack>
          </Stack>
        </Paper>
      </Grid.Col>
    </Grid>
  );
}
