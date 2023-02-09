import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../err/appError';
import prismaClient from '../../prisma';

const validateEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  if (!email) {
    throw new AppError(401, 'Field email is required');
  }

  const userAlreadyExists = await prismaClient.user.findFirst({
    where: {
      email: email,
    },
  });

  if (userAlreadyExists) {
    throw new AppError(409, 'This email is already in use');
  }

  next();
};

export default validateEmail;
