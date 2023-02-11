import { Request, Response } from 'express';
import detailContactService from '../../services/contacts/DetailContactService';

const detailContactController = async (req: Request, res: Response) => {
  const contact_id = req.params.id;
  const contact = await detailContactService(contact_id);
  return res.json(contact);
};

export default detailContactController;
