import { NextResponse } from 'next/server';
import type { NextMiddleware } from 'next/server';

type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;

type Params = {
  middlewares: MiddlewareFactory[];
  index?: number;
};

export function stackMiddlewares({
  middlewares = [],
  index = 0,
}: Params): NextMiddleware {
  const current = middlewares[index];

  if (current) {
    const next = stackMiddlewares({ middlewares, index: index + 1 });
    return current(next);
  }

  return () => NextResponse.next();
}
