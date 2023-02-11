import prismaClient from '../../prisma';

const deleteContactsService = async (contact_id: string) => {
  await prismaClient.contact.delete({
    where: {
      id: contact_id,
    },
  });

  return;
};

export default deleteContactsService;
