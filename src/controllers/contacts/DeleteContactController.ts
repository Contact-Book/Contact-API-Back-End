import { Request, Response } from 'express';
import deleteContactsService from '../../services/contacts/DeleteContactService';

const deleteContactsController = async (req: Request, res: Response) => {
  const contact_id = req.params.id;
  await deleteContactsService(contact_id);
  return res.json({ message: 'Contact removed successfully' });
};

export default deleteContactsController;
