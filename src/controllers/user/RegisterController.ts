import { Request, Response } from 'express';
import { AppError } from '../../err/appError';
import registerService from '../../services/user/RegisterService';

const registerController = async (req: Request, res: Response) => {
  try {
    const userData = req.body;

    const user = await registerService(userData);
    return res.status(201).json(user);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.error(error);
  }
};

export default registerController;
