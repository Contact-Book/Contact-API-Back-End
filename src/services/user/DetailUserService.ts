import prismaClient from '../../prisma';

const detailUserService = async (user_id: string) => {
  const user = await prismaClient.user.findFirst({
    where: {
      id: user_id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      phone_number: true,
      contacts: true,
      is_active: true,
    },
  });

  if (!user) {
    throw new Error('User not found');
  }

  return user;
};

export default detailUserService;
