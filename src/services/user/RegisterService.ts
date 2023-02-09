import prismaClient from '../../prisma';

import { hash } from 'bcryptjs';
import { IUserRequest } from '../../interface';

const registerService = async (userData: IUserRequest) => {
  const { name, email, password, phone_number } = userData;

  const encrypted = await hash(password, 8);

  const user = await prismaClient.user.create({
    data: {
      name: name,
      email: email,
      password: encrypted,
      phone_number: phone_number,
    },
    select: {
      name: true,
      email: true,
      password: true,
      phone_number: true,
    },
  });

  return user;
};

export default registerService;
