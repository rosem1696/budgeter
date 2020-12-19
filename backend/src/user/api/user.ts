import * as express from 'express';
import * as aws from 'aws-sdk';
import * as uuid from 'uuid';

const routeUrl = 'user';
const router = express.Router();

router.get('/', (req, res) => {
    return 0;
});

export { router, routeUrl };
