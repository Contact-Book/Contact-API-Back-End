import { Request, Response } from 'express';
import { AppError } from '../../err/appError';
import registerContactService from '../../services/contacts/RegisterService';

const registerContactsController = async (req: Request, res: Response) => {
  try {
    const reference_id = req.params.id;
    const contactData = {
      ...req.body,
      reference_id: reference_id,
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
