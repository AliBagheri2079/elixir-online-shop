'use client';

import { ActionIcon, Indicator, VisuallyHidden } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons-react';

import { useLocale } from '@/hooks';
import { formatting } from '@/utils';

type Props = {
  open: () => void;
  itemQuantity?: number;
};

export function CartListTarget({ open, itemQuantity }: Props) {
  const locale = useLocale();

  const quantity = itemQuantity ?? 0;
  const { format } = formatting.compact(locale);

  return (
    <ActionIcon onClick={open} mt={2.5} aria-label='Shopping cart target'>
      <Indicator
        inline
        label={format(quantity)}
        processing={quantity > 999}
        disabled={quantity === 0}
        size={18}
        offset={2}
      >
        <IconShoppingCart />
        <VisuallyHidden>Shopping cart target</VisuallyHidden>
      </Indicator>
    </ActionIcon>
  );
}
