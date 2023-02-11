import { Request, Response } from 'express';
import { AppError } from '../../err/appError';
import { ICustomRequest } from '../../middlewares/isAuthenticated';
import updateUserService from '../../services/user/UpdateUserService';

const updateUserController = async (req: ICustomRequest, res: Response) => {
  const data = {
    ...req.body,
    user_id: req.user,
  };

  try {
    const updates = await updateUserService(data);
    return res.status(200).json(updates);
  } catch {
    throw new AppError(404, 'Error updating user');
  }
};

export default updateUserController;
