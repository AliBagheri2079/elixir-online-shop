'use client';

import { Fragment } from 'react';

import Image from 'next/image';

import {
  AspectRatio,
  Box,
  Button,
  Center,
  Divider,
  Drawer,
  Grid,
  Group,
  ScrollArea,
  Space,
  Stack,
  Text,
} from '@mantine/core';
import { IconArrowNarrowLeft, IconArrowNarrowRight } from '@tabler/icons-react';
import cx from 'clsx';

import { CheckoutCartButton, RemoveCartButton } from '@/components';
import { useLocale } from '@/hooks';
import type { CartResults } from '@/types';
import { formatting, randomId } from '@/utils';

type Props = CartResults & {
  isLoading: boolean;
  opened: boolean;
  close: () => void;
};

export function CartListDrawer({
  isLoading,
  opened,
  close,
  checkoutUrl,
  items,
  subTotal,
}: Props) {
  const locale = useLocale();

  const { format } = formatting.currency(locale);
  const labels = {
    quantity: locale === 'en' ? 'quantity' : 'تعداد',
    subTotal: locale === 'en' ? 'subtotal' : 'جمع کل',
    continuePrefix: locale === 'en' ? 'or' : 'یا',
    continue: locale === 'en' ? 'continue shopping' : 'ادامه خرید',
  };

  const content = items?.map(({ id: productId, product, price, quantity }) => {
    const id = randomId();

    return (
      <Fragment key={id}>
        <Grid gutter='xs' justify='space-between' align='stretch'>
          <Grid.Col span={3}>
            <AspectRatio ratio={1 / 1}>
              <Image
                fill
                src={product?.images?.at(0)?.file?.url!}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                style={{
                  borderRadius: 'var(--mantine-radius-default)',
                  cursor: 'pointer',
                }}
                alt={product?.description!}
              />
            </AspectRatio>
          </Grid.Col>

          <Grid.Col span='auto'>
            <Stack
              justify='space-between'
              styles={{
                root: {
                  height: '100%',
                },
              }}
            >
              <Group justify='space-between' align='stretch' wrap='nowrap'>
                <Text fw={500} lineClamp={2}>
                  {product?.name}
                </Text>
                <Text fw={500}>{format(Number(price) * Number(quantity))}</Text>
              </Group>
              <Group justify='space-between'>
                <Text fz='sm' c='dimmed' tt='capitalize'>
                  {labels.quantity} {quantity}
                </Text>
                <RemoveCartButton productId={productId!} />
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>

        <Divider />
      </Fragment>
    );
  });

  const checkbox = (
    <Stack gap='xs'>
      <Group justify='space-between' align='stretch' wrap='nowrap'>
        <Text fw={500} tt='capitalize'>
          {labels.subTotal}
        </Text>
        <Text fw={500}>{format(subTotal!)}</Text>
      </Group>

      <CheckoutCartButton
        href={checkoutUrl!}
        isLoading={isLoading}
        close={close}
        tt='capitalize'
        fullWidth
      />

      <Center>
        <Text fz='sm' c='dimmed'>
          {labels.continuePrefix}
        </Text>
        <Button
          variant='transparent'
          size='compact-sm'
          tt='capitalize'
          rightSection={
            locale === 'en' ? (
              <IconArrowNarrowRight size={16} />
            ) : (
              <IconArrowNarrowLeft size={16} />
            )
          }
          onClick={close}
        >
          {labels.continue}
        </Button>
      </Center>
    </Stack>
  );

  return (
    <Drawer
      opened={opened}
      onClose={close}
      position='right'
      radius='var(--mantine-radius-default)'
      classNames={{
        content: cx('glassmorphism'),
      }}
      overlayProps={{ backgroundOpacity: 0.25, blur: 4 }}
      transitionProps={{
        duration: 250,
        timingFunction: 'linear',
      }}
      scrollAreaComponent={ScrollArea}
      withCloseButton={false}
      closeButtonProps={{ 'aria-label': 'Close modal' }}
      aria-label='Shopping cart'
    >
      <Stack gap='xs'>{content}</Stack>
      <Space h={120} />
      <Box
        p='md'
        className={cx('glassmorphism')}
        style={{
          position: 'absolute',
          insetBlockEnd: '0',
          insetInline: '0',
        }}
      >
        {checkbox}
      </Box>
    </Drawer>
  );
}
