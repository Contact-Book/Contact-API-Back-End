import prismaClient from '../../prisma';

import { IContactRequest } from '../../interface';

const registerContactService = async (contactData: IContactRequest) => {
  const { name, email, phone_number, reference_id } = contactData;

  const contact = await prismaClient.contact.create({
    data: {
      name: name,
      email: email,
      phone_number: phone_number,
      reference_id: reference_id,
    },
    select: {
      name: true,
      email: true,
      phone_number: true,
      reference_id: true,
    },
  });

  return contact;
};

export default registerContactService;
