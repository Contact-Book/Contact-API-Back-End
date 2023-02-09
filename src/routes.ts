import { Router } from 'express';
import { Request, Response } from 'express';

export const router = Router();

router.get('/users', (req: Request, res: Response) => {
  return res.status(201).json({
    message: 'esta funcionando',
  });
});
