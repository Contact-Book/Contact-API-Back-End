import { Request, Response } from 'express';
import { AppError } from '../../err/appError';
import { ICustomRequest } from '../../middlewares/isAuthenticated';
import registerContactService from '../../services/contacts/RegisterService';

const registerContactsController = async (
  req: ICustomRequest,
  res: Response
) => {
  try {
    const contactData = {
      ...req.body,
      reference_id: req.user,
    };

    const newContact = await registerContactService(contactData);
    return res.status(201).json(newContact);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.error(error);
  }
};

export default registerContactsController;
