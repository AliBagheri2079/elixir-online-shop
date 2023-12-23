'use client';

import { useDisclosure } from '@mantine/hooks';
import useSWR from 'swr';

import { useLocale } from '@/hooks';
import { getCart } from '@/lib';

import { CartListDrawer } from './drawer';
import { CartListTarget } from './target';

export function CartList() {
  const [opened, { open, close }] = useDisclosure(false);
  const locale = useLocale();

  const { data, isLoading } = useSWR('cart', async () => await getCart(locale));

  return (
    <>
      <CartListDrawer
        isLoading={isLoading}
        opened={opened}
        close={close}
        {...data}
      />
      <CartListTarget open={open} itemQuantity={data?.itemQuantity} />
    </>
  );
}
