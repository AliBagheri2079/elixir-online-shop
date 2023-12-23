'use client';

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { ActionIcon, useMantineTheme, VisuallyHidden } from '@mantine/core';
import { IconUser } from '@tabler/icons-react';

export function UserAvatar() {
  const { primaryColor } = useMantineTheme();

  const signedInPart = (
    <SignedIn>
      <UserButton
        appearance={{
          variables: {
            colorPrimary: primaryColor,
          },
          elements: {
            userPreviewMainIdentifier: {
              color: 'inherit',
            },
            userPreviewSecondaryIdentifier: {
              color: 'gray',
            },
            userButtonPopoverActionButton: {
              color: 'inherit',
            },
            userButtonPopoverActionButtonText: {
              color: 'inherit',
            },
            userButtonPopoverFooter: {
              '& .cl-internal-wkkub3': {
                color: 'gray',
              },
            },
          },
        }}
        userProfileMode='navigation'
        userProfileUrl='/en/user-account'
        afterSignOutUrl='/en'
      />
    </SignedIn>
  );

  const signedOutPart = (
    <SignedOut>
      <SignInButton>
        <ActionIcon aria-label='User placeholder avatar'>
          <IconUser />
          <VisuallyHidden>User Placeholder Avatar</VisuallyHidden>
        </ActionIcon>
      </SignInButton>
    </SignedOut>
  );

  return (
    <>
      {signedInPart}
      {signedOutPart}
    </>
  );
}
