import { ClerkLoaded, ClerkLoading, ClerkProvider } from '@clerk/nextjs';

import { AuthLoader } from '@/components';

type Props = React.PropsWithChildren<unknown>;

export function AuthProvider({ children }: Props) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          fontFamily: 'var(--mantine-font-family)',
        },
        elements: {
          card: {
            color: 'var(--mantine-color-text)',
            backgroundColor: 'var(--mantine-color-body)',
            backdropFilter: 'var(--mantine-blur-default)',
            borderRadius: 'var(--mantine-radius-default)',
          },
        },
      }}
    >
      <ClerkLoading>
        <AuthLoader>Processing...</AuthLoader>
      </ClerkLoading>
      <ClerkLoaded>{children}</ClerkLoaded>
    </ClerkProvider>
  );
}
