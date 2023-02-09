import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import { router } from './routes';
import { Request, Response } from 'express';
import { AppError } from './err/appError';

const app = express();
app.use(express.json());
app.use(router);

app.use((err: Error, req: Request, res: Response) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'internal server error',
  });
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server is runing at the port ${process.env.PORT}...`)
);
