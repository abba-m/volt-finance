import express, { Request, Response } from 'express';
import { createLogger } from './utils/logger';

const logger = createLogger('App')

const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Volt Finance!');
});

app.listen(port, () => {
  logger.info(`Server listening on port ${port}`);
});
