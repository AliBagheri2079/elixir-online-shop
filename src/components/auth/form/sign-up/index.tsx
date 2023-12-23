'use client';

import { SignUp } from '@clerk/nextjs';
import { Center, rem, useMantineTheme } from '@mantine/core';

export function AuthSignUp() {
  const { primaryColor } = useMantineTheme();

  return (
    <Center py={rem(64)}>
      <SignUp
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
