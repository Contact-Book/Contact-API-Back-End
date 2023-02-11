import prismaClient from '../../prisma';

import 'dotenv/config';

import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { IUserLogin } from '../../interface';
import { AppError } from '../../err/appError';

const LoginUserService = async ({ email, password }: IUserLogin) => {
  if (!email) {
    throw new AppError(404, 'Field email is required');
  }

  if (!password) {
    throw new AppError(404, 'Field password is required');
  }

  const user = await prismaClient.user.findFirst({
    where: {
      email: email,
    },
  });
  if (!user) {
    throw new Error('Email / password is invalid');
  }

  const passwordMatch = await compare(password, user.password);
  if (!passwordMatch) {
    throw new Error('Email / password is invalid');
  }

  const token = sign(
    {
      name: user.name,
      email: user.email,
    },
    'token',
    {
      subject: user.id,
      expiresIn: '30d',
    }
  );

  return token;
};

export default LoginUserService;
