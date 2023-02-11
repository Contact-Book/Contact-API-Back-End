import { Response } from 'express';
import { ICustomRequest } from '../../middlewares/isAuthenticated';
import detailUserService from '../../services/user/DetailUserService';

const detailUserController = async (req: ICustomRequest, res: Response) => {
  const user = await detailUserService(req.user as string);
  return res.json(user);
};

export default detailUserController;
