'use client';

import { useCallback, useEffect, useState, useTransition } from 'react';

import { useRouter } from 'next/navigation';

import { Button, Loader } from '@mantine/core';
import type { ButtonProps } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { IconShoppingCartPlus } from '@tabler/icons-react';
import cx from 'clsx';
import { useSWRConfig } from 'swr';

import { useLocale } from '@/hooks';
import { addCartItem, getDictionary } from '@/lib';

type Props = Omit<ButtonProps, 'loading' | 'leftSection' | 'rightSection'> & {
  productId: string;
};

export function AddCartButton({ productId, variant, ...props }: Props) {
  const [label, setLabel] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { mutate } = useSWRConfig();
  const locale = useLocale();
  const router = useRouter();

  const isMutating = isLoading || isPending;

  useEffect(() => {
    getDictionary(locale).then(({ page: { product } }) =>
      setLabel(product.add_button),
    );
  }, [locale]);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>, id: string) => {
      event.preventDefault();
      setLoading(true);
      await addCartItem({
        product_id: id,
        quantity: 1,
      });
      setLoading(false);
      mutate('cart');
      startTransition(() => {
        router.refresh();
      });
      showNotification({
        title: locale === 'en' ? 'Product was added' : 'محصول اضافه شد',
        message:
          locale === 'en'
            ? 'Notification will close in 3 seconds, you can close this notification now'
            : 'اعلان 3 ثانیه دیگر بسته می شود، اکنون می توانید این اعلان را ببندید',
        autoClose: 3000,
        classNames: {
          root: cx('glassmorphism'),
        },
      });
    },
    [locale, mutate, router],
  );

  return (
    <form onSubmit={event => handleSubmit(event, productId)}>
      <Button
        type='submit'
        variant={variant ?? 'light'}
        loading={isMutating}
        leftSection={<IconShoppingCartPlus size={15} />}
        rightSection={!label ? <Loader size={15} /> : null}
        {...props}
      >
        {label}
      </Button>
    </form>
  );
}
