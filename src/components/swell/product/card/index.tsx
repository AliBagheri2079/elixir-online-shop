'use client';

import { useRef } from 'react';

import Image from 'next/image';

import { Carousel } from '@mantine/carousel';
import {
  Anchor,
  AspectRatio,
  Card,
  Group,
  rem,
  Stack,
  Text,
  TypographyStylesProvider,
} from '@mantine/core';
import { IconStar } from '@tabler/icons-react';
import cx from 'clsx';
import Autoplay from 'embla-carousel-autoplay';

import classes from './index.module.css';

import { AddCartButton, LocalizedLink } from '@/components';
import { useLocale } from '@/hooks';
import type { ProductResults } from '@/types';
import { formatting, randomId } from '@/utils';

export function ProductCard({
  id: productId,
  images,
  slug,
  name,
  description,
  sku,
  origPrice,
  price,
  sale,
}: ProductResults) {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  const locale = useLocale();

  const { format } = formatting.currency(locale);

  const slides = images?.map(({ file }) => {
    const id = randomId();
    return (
      <Carousel.Slide key={id}>
        <AspectRatio ratio={3 / 4}>
          <Image
            fill
            src={file?.url!}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            alt={description!}
          />
        </AspectRatio>
      </Carousel.Slide>
    );
  });

  return (
    <Card
      key={productId}
      p='sm'
      classNames={{
        root: cx('glassmorphism'),
      }}
    >
      <Card.Section>
        <Carousel
          loop
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
      </Card.Section>

      <Stack justify='space-between' gap='xs' mt='sm' h='100%'>
        <Group justify='space-between' wrap='nowrap'>
          <Anchor<typeof LocalizedLink>
            component={LocalizedLink}
            href={{
              pathname: `/product/${slug}`,
            }}
            underline='never'
            truncate
          >
            {name}
          </Anchor>

          <Group gap={4} wrap='nowrap'>
            <IconStar size={rem(11)} />
            <Text fz={rem(12)} fw={500}>
              {+(sku ?? 1)}
            </Text>
          </Group>
        </Group>

        <Text fz='sm' c='dimmed' lineClamp={3} component='div'>
          <TypographyStylesProvider
            styles={{
              root: {
                margin: 'initial',
                padding: 'initial',
              },
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: description! }} />
          </TypographyStylesProvider>
        </Text>

        <Group gap={8} wrap='nowrap'>
          {origPrice ? (
            <Text c='red' td='line-through'>
              {format(origPrice)}
            </Text>
          ) : null}

          <Text c={origPrice ? 'green' : 'var(--mantine-color-text)'}>
            {format(price!)}
          </Text>
        </Group>

        <AddCartButton
          productId={productId!}
          disabled={!sale}
          tt='capitalize'
          fullWidth
        />
      </Stack>
    </Card>
  );
}
