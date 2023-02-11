import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../err/appError';
import prismaClient from '../../prisma';

const validadeContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contact_id = req.params.id;

  const verifing = await prismaClient.contact.findFirst({
    where: {
      id: contact_id,
    },
  });

  if (!verifing) {
    throw new AppError(404, 'Contact Not found');
  }

  next();
};

export default validadeContact;
