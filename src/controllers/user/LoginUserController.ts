import { Request, Response } from 'express';
import LoginUserService from '../../services/user/LoginUserService';

const loginUserController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const login = await LoginUserService({ email, password });
  return res.json({ token: login });
};

export default loginUserController;
