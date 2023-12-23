import type { Metadata } from 'next';

import { RedirectToSignIn } from '@clerk/nextjs';

import { AuthSignIn } from '@/components';
import type { Locale } from '@/types';

type Props = {
  params: { lang: Locale };
};

export const metadata: Metadata = {
  title: 'Signin',
  description:
    'Online Shopping Marketplace: Clothes, Shoes, Beauty, Electronics and More',
};

export default function SignIn({ params: { lang } }: Props) {
  if (lang !== 'en') return <RedirectToSignIn />;

  return <AuthSignIn />;
}
