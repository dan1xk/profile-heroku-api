import { Router } from 'express';
import { ContactsController } from '../controllers/contacts';
import { contactVerify } from '../middlewares/contacts';

export default class ContactsRoutes {
    init() {
        const routes = Router();
        const controller = new ContactsController();

        routes.post('/contacts',contactVerify, controller.store);

        return routes;
    }

}