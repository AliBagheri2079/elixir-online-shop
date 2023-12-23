'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import { useAuth } from '@clerk/nextjs';
import { Button } from '@mantine/core';
import type { ButtonProps } from '@mantine/core';

import { useLocale } from '@/hooks';
import { getDictionary } from '@/lib';

type LinkProps = React.ComponentPropsWithoutRef<typeof Link>;

type Props = Omit<ButtonProps, 'loading' | 'onClick'> &
  Omit<LinkProps, 'onClick'> & {
    isLoading?: boolean;
    close: () => void;
  };

export function CheckoutCartButton({
  href,
  isLoading,
  close,
  ...props
}: Props) {
  const [label, setLabel] = useState('');
  const { isSignedIn } = useAuth();
  const locale = useLocale();

  const fallbackUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL!;
  const path = isSignedIn ? href : fallbackUrl;
  const isMutating = !label || isLoading;

  useEffect(() => {
    getDictionary(locale).then(({ page: { product } }) =>
      setLabel(product.checkout_button),
    );
  }, [locale]);

  return (
    <Button<typeof Link>
      component={Link}
      href={path}
      loading={isMutating}
      onClick={isSignedIn ? undefined : close}
      {...props}
    >
      {label}
    </Button>
  );
}
