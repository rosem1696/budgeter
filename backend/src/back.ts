import * as express from 'express';
import { apiRouter } from './routes'
import * as cors from 'cors';

const app: express.Application = express();
const port = 8080;

app.use(cors());
app.use('/api', apiRouter)
app.listen(port);
