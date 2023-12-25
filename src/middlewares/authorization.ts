import { authMiddleware } from '@clerk/nextjs';

export function withAuthorization() {
  return authMiddleware({
    publicRoutes: ['/en', '/en/:url', '/fa', '/fa/:url'],
  });
}
