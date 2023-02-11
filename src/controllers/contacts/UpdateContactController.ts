import { Request, Response } from 'express';
import { AppError } from '../../err/appError';
import updateContactsService from '../../services/contacts/UpdateContactsService';

const updateContactsController = async (req: Request, res: Response) => {
  const data = {
    ...req.body,
    contact_id: req.params.id,
  };
  const updates = await updateContactsService(data);
  try {
    return res.status(200).json(updates);
  } catch {
    throw new AppError(404, 'Error updating user');
  }
};

export default updateContactsController;
