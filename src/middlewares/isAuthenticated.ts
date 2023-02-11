import { NextFunction, Request, Response } from 'express';
import { AppError } from '../err/appError';
import { verify } from 'jsonwebtoken';
import 'dotenv/config';

export interface Payload {
  sub: string;
}

export interface ICustomRequest extends Request {
  user?: string;
}

const isAuthenticated = (
  req: ICustomRequest,
  res: Response,
  next: NextFunction
) => {
  const auth = req.headers.authorization;
  if (!auth) {
    return res.status(401).json({ error: 'Authorization missing' });
  }

  try {
    const [bearer, token] = auth.split(' ');

    //validar token
    const { sub } = verify(token, 'token') as Payload;
    req.user = sub;
    next();
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
  }
};

export default isAuthenticated;
