import { Request, Response } from 'express';
import { AppError } from '../../err/appError';
import listSerice from '../../services/user/ListUsersService';

const listController = async (req: Request, res: Response) => {
  try {
    const users = await listSerice();
    return res.status(201).json(users);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.error(error);
  }
};

export default listController;
