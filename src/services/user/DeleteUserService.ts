import updateUserService from './UpdateUserService';

const deleteUserService = async (user_id: string) => {
  const data = {
    is_active: false,
    user_id: user_id,
  };
  await updateUserService(data);

  return;
};

export default deleteUserService;
