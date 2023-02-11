import { AppError } from '../../err/appError';
import { IContactUpdate } from '../../interface';
import prismaClient from '../../prisma';

const updateContactsService = async (data: IContactUpdate) => {
  if (data.email) {
    const userAlreadyExists = await prismaClient.contact.findFirst({
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

  const contact_id = data.contact_id;
  delete data.contact_id;

  const contact = prismaClient.contact.update({
    where: {
      id: contact_id,
    },
    data: {
      ...data,
    },
  });

  return contact;
};

export default updateContactsService;
