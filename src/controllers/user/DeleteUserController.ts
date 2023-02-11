import { Request, Response } from 'express';
import { AppError } from '../../err/appError';
import { ICustomRequest } from '../../middlewares/isAuthenticated';
import deleteUserService from '../../services/user/DeleteUserService';

const deleteUserController = async (req: ICustomRequest, res: Response) => {
  try {
    const user_id = req.user;
    await deleteUserService(user_id as string);
    return res.json({ message: 'User removed successfully' });
  } catch (error) {
    if (error instanceof AppError) {
      throw new AppError(error.statusCode, error.message);
    }
  }
};

export default deleteUserController;
