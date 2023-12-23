import { AuthProvider } from './auth';
import { UserInterfaceProvider } from './ui';

type Props = React.PropsWithChildren<unknown>;

export default function Providers({ children }: Props) {
  return (
    <UserInterfaceProvider>
      <AuthProvider>{children}</AuthProvider>
    </UserInterfaceProvider>
  );
}
