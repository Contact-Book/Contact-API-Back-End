import { Request, Response } from 'express';
import { AppError } from '../../err/appError';
import listContactsService from '../../services/contacts/ListContactsService';

const listContactsController = async (req: Request, res: Response) => {
  try {
    const contacts = await listContactsService();
    return res.status(201).json(contacts);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.error(error);
  }
};

export default listContactsController;
