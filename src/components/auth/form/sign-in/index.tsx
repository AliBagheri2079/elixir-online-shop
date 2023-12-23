'use client';

import { SignIn } from '@clerk/nextjs';
import { Center, rem, useMantineTheme } from '@mantine/core';

export function AuthSignIn() {
  const { primaryColor } = useMantineTheme();

  return (
    <Center py={rem(64)}>
      <SignIn
        appearance={{
          variables: {
            colorPrimary: primaryColor,
          },
          elements: {
            card: {
              boxShadow: 'unset',
            },
            headerTitle: {
              color: 'inherit',
            },
            formFieldLabel: {
              color: 'inherit',
            },
            footerActionText: {
              color: 'inherit',
            },
          },
        }}
      />
    </Center>
  );
}
