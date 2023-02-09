import { Router } from 'express';
import listContactsController from './controllers/contacts/ListUsersController';
import registerContactsController from './controllers/contacts/RegisterController';
import listController from './controllers/user/ListUsersController';
import registerController from './controllers/user/RegisterController';
import validateEmail from './middlewares/user/validate.Email.Middlewares';

export const router = Router();

router.get('/users', listController);
router.post('/users', validateEmail, registerController);

router.get('/contacts', listContactsController);
router.post('/contacts/:id', validateEmail, registerContactsController);
