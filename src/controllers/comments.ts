import { Response, Request } from 'express';
import { createMessage, defaultErrorMessage, HttpBadRequestCode, httpCreatedCode, httpSucessCode } from '../constants';
import { HttpError } from '../errors';
import { CommentsService } from "../services/comments";

export class CommentsController {
    async index(request: Request, response: Response) {
        const service = new CommentsService();

        try {
            const comment = await service.find();
            return response.json(comment).status(httpSucessCode);

        } catch(error) {
            throw new HttpError(defaultErrorMessage, HttpBadRequestCode);
        }
    }

    async store(request: Request, response: Response) {
        const { name, comment } = request.body;
        const service = new CommentsService();

        try {
            await service.create({ 
                name,
                comment
            });

            return response.json(createMessage('Criado')).status(httpCreatedCode)
        } catch (error) {
            throw new HttpError (defaultErrorMessage, HttpBadRequestCode);
        }
    }
}