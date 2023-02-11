import { Router } from 'express';

export const router = Router();

import listController from './controllers/user/ListUsersController';
import registerController from './controllers/user/RegisterController';
import loginUserController from './controllers/user/LoginUserController';
import deleteUserController from './controllers/user/DeleteUserController';
import detailUserController from './controllers/user/DetailUserController';
import updateUserController from './controllers/user/UpdateUserController';

import registerContactsController from './controllers/contacts/RegisterController';
import listContactsController from './controllers/contacts/ListContatcsController';
import detailContactController from './controllers/contacts/DetailContactController';
import deleteContactsController from './controllers/contacts/DeleteContactController';
import updateContactsController from './controllers/contacts/UpdateContactController';

import isAuthenticated from './middlewares/isAuthenticated';
import validateUserEmail from './middlewares/user/validate.Email.Middlewares';
import validateContactEmail from './middlewares/contacts/validate.Email.Middlewares';
import validadeContact from './middlewares/contacts/validate.Contacts.Id.middlewares';

//LOGIN
router.post('/login', loginUserController);

//USERS
router.get('/users/', isAuthenticated, listController);
router.get('/profile/', isAuthenticated, detailUserController);
router.post('/register/', validateUserEmail, registerController);
router.delete('/users/delete/', isAuthenticated, deleteUserController);
router.patch('/users/update/', isAuthenticated, updateUserController);

//CONTACTS
router.get('/contacts/', isAuthenticated, listContactsController);
router.get(
  '/contacts/:id',
  isAuthenticated,
  validadeContact,
  detailContactController
);
router.patch(
  '/contacts/:id',
  isAuthenticated,
  validadeContact,
  updateContactsController
);
router.delete(
  '/contacts/delete/:id',
  isAuthenticated,
  deleteContactsController
);
router.post(
  '/contacts/register',
  isAuthenticated,
  validateContactEmail,
  registerContactsController
);
