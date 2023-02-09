import { Request, Response } from "express";
import { UserSerializer } from "../../serializer/user";
import { RegisterService } from "../../services/user/RegisterService";

export const RegisterController = async (req: Request, res: Response) => {
  const userData = req.body;
  await UserSerializer(req.body.email, res);
  const user = await RegisterService(userData);
  res.status(201).json(user);
};
