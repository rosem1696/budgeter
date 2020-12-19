import * as express from 'express';
import * as user from './user/api/user';

const apiRouter = express.Router();

apiRouter.use(`/${user.routeUrl}`, user.router);

export { apiRouter };
