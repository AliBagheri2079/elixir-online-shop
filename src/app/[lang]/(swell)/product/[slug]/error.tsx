'use client';

import { Center } from '@mantine/core';

import { IconNotFound } from '@/components';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ProductError({ error, reset }: Props) {
  return (
    <Center>
      <IconNotFound height='45rem' />
    </Center>
  );
}
