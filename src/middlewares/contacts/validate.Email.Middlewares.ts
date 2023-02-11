import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../err/appError';
import prismaClient from '../../prisma';

const validateContactEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  if (!email) {
    throw new AppError(401, 'Field email is required');
  }

  const verifing = await prismaClient.contact.findFirst({
    where: {
      email: email,
    },
  });

  if (verifing) {
    throw new AppError(409, 'This email is already in use');
  }

  next();
};

export default validateContactEmail;
