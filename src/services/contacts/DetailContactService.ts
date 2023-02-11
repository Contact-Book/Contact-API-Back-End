import prismaClient from '../../prisma';

const detailContactService = async (contact_id: string) => {
  const contact = await prismaClient.contact.findFirst({
    where: {
      id: contact_id,
    },
    select: {
      name: true,
      phone_number: true,
    },
  });

  return contact;
};

export default detailContactService;
