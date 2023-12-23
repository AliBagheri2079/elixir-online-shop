import { withAuthorization, withInternationalization } from './middlewares';
import { stackMiddlewares } from './utils';

// NOTE: withAuthorization must be add end of the middlewares list
const middlewares = [withInternationalization, withAuthorization];

export default stackMiddlewares({ middlewares });

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
