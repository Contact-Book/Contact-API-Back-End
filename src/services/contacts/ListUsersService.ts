import prismaClient from '../../prisma';

const listContactsService = async () => {
  const contact = await prismaClient.contact.findMany({});
  return contact;
};

export default listContactsService;
