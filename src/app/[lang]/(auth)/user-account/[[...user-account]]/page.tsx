import type { Metadata } from 'next';

import { currentUser } from '@clerk/nextjs';
import { Alert } from '@mantine/core';

import { UserDetails } from '@/components';
import type { Locale } from '@/types';

type Props = {
  params: { lang: Locale };
};

export const metadata: Metadata = {
  title: 'User Account',
  description:
    'Online Shopping Marketplace: Clothes, Shoes, Beauty, Electronics and More',
};

export default async function UserAccount({ params: { lang } }: Props) {
  const user = await currentUser();

  if (lang !== 'en')
    return (
      <Alert title='در حال تکمیل شدن'>
        {user?.firstName} عزیز بابت دردسترس نبودن اطلاعات پوزش می طلبم
      </Alert>
    );

  return <UserDetails />;
}
