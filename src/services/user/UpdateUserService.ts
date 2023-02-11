import { hash } from 'bcryptjs';
import { AppError } from '../../err/appError';
import { IUserUpdate } from '../../interface';
import prismaClient from '../../prisma';

const updateUserService = async (data: IUserUpdate) => {
  if (data.email) {
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: data.email,
      },
    });
    if (userAlreadyExists) {
      throw new AppError(
        404,
        'This Email is already taken, please try again with a different email address'
      );
    }
  }

  if (data.password) {
    const encryptedPassword = await hash(data.password, 8);
  }

  const user_id = data.user_id;

  delete data.user_id;

  const user = prismaClient.user.update({
    where: {
      id: user_id,
    },
    data: { ...data },
  });

  return user;
};

export default updateUserService;
