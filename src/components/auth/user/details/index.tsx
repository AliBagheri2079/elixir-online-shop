'use client';

import { UserProfile } from '@clerk/nextjs';
import { useMantineTheme } from '@mantine/core';

export function UserDetails() {
  const { primaryColor } = useMantineTheme();

  return (
    <UserProfile
      appearance={{
        variables: {
          colorPrimary: primaryColor,
        },
        elements: {
          rootBox: {
            width: 'revert',
          },
          card: {
            boxShadow: 'unset',
            width: 'unset',
            maxWidth: 'unset',
            margin: 'unset',
            marginLeft: '1.75rem',
          },
          navbar: {
            color: 'inherit',
            border: 'unset',
            borderInlineEnd: '1px solid var(--mantine-color-dark-light)',
          },
          navbarButton: {
            color: 'inherit',
          },
          headerTitle: {
            color: 'inherit',
          },
          profileSectionTitleText: {
            color: 'inherit',
          },
        },
      }}
      routing='path'
      path='/en/user-account'
    />
  );
}
