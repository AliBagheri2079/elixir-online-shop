import { authMiddleware } from '@clerk/nextjs';

export function withAuthorization() {
  return authMiddleware({
    publicRoutes: ['/:locale'],
  });
}
