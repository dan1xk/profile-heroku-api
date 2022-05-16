import { Response, Request } from 'express';
import { createMessage, defaultErrorMessage, HttpBadRequestCode, httpCreatedCode } from '../constants';
import { HttpError } from '../errors';
import { ContactsService } from "../services/contacts";

export class ContactsController { 
    async store(request: Request, response: Response) {
        const { name, email, telefone } = request.body;
        const service = new ContactsService();

        try {
            await service.create({ 
                name,
                email,
                telefone
            });

            return response.json(createMessage('Enviado')).status(httpCreatedCode);
        } catch (error) {
            throw new HttpError(defaultErrorMessage, HttpBadRequestCode);
        }
    }
}