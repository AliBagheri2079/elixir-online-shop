import type { Metadata } from 'next';

import { RedirectToSignUp } from '@clerk/nextjs';

import { AuthSignUp } from '@/components';
import type { Locale } from '@/types';

type Props = {
  params: { lang: Locale };
};

export const metadata: Metadata = {
  title: 'Signup',
  description:
    'Online Shopping Marketplace: Clothes, Shoes, Beauty, Electronics and More',
};

export default function SignUp({ params: { lang } }: Props) {
  if (lang !== 'en') return <RedirectToSignUp />;

  return <AuthSignUp />;
}
