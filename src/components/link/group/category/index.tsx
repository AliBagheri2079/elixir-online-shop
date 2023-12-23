import { Title } from '@mantine/core';

import type { NavLinkProps } from '@/types';

type Props = Pick<NavLinkProps, 'category'>;

export function GroupCategory({ category }: Props) {
  return (
    <Title order={5} c='gray.5' fw={500} tt='capitalize'>
      {category}
    </Title>
  );
}
