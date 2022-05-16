import { Router } from 'express';
import { CommentsController } from '../controllers/comments';
import { commentVerify } from '../middlewares/comments';

export default class CommentsRoutes {
    init() {
        const routes = Router();
        const controller = new CommentsController();

        routes.get('/comments', controller.index);
        routes.post('/comments',commentVerify, controller.store);

        return routes;
    }

}