import { Center, Loader, Text } from '@mantine/core';

type Props = React.PropsWithChildren<unknown>;

export function AuthLoader({ children }: Props) {
  return (
    <Center h='100dvh'>
      <Loader size='sm' mr='sm' />
      <Text size='sm' c='gray.500'>
        {children}
      </Text>
    </Center>
  );
}
