import prismaClient from '../../prisma';

const listSerice = async () => {
  const users = await prismaClient.user.findMany({
    include: {
      contacts: {},
    },
  });
  return users;
};

export default listSerice;
