'use client';

import { useCallback, useState, useTransition } from 'react';

import { useRouter } from 'next/navigation';

import { ActionIcon, VisuallyHidden } from '@mantine/core';
import type { ActionIconProps } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';
import { useSWRConfig } from 'swr';

import { removeCartItem } from '@/lib';

type Props = Omit<ActionIconProps, 'color' | 'loading'> & {
  productId: string;
};

export function RemoveCartButton({ productId, variant, ...props }: Props) {
  const [isLoading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { mutate } = useSWRConfig();
  const router = useRouter();

  const isMutating = isLoading || isPending;

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>, id: string) => {
      event.preventDefault();
      setLoading(true);
      await removeCartItem(id);
      setLoading(false);
      mutate('cart');
      startTransition(() => {
        router.refresh();
      });
    },
    [mutate, router],
  );

  return (
    <form onSubmit={event => handleSubmit(event, productId)}>
      <ActionIcon
        type='submit'
        color='red'
        variant={variant ?? 'subtle'}
        loading={isMutating}
        aria-label='Remove cart button'
        {...props}
      >
        <IconTrash size={20} />
        <VisuallyHidden>Remove cart button</VisuallyHidden>
      </ActionIcon>
    </form>
  );
}
