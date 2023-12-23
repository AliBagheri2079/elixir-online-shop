import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

export function ErrorAlert({ message }: Partial<Error>) {
  return (
    <Alert
      color='red'
      title={message}
      icon={<IconAlertCircle size={24} stroke={1.5} />}
      mih={100}
      p='xl'
    />
  );
}
