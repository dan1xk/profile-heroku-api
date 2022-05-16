
import Database from './database/connections/Database';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import CommentsRoutes from './routers/comments';
import ContactsRoutes from './routers/contacts';
import { HttpError } from './errors/httpError';

export default class Application {
    readonly #express: express.Application;

    constructor() {
        this.#express = express();
    }

    async init () {
        this.config();
        this.routers();
        this.errors();
        await this.database();
    }

    private errors() {
        this.#express.use((error: HttpError, request: Request, response: Response, next: NextFunction) => {
            return response.json({
                message: error.message
            });
        });
    }

    start(port: number) {
        this.#express.listen(port, () => {
            console.log(`Aplicação rodando na porta: ${port}`);        
        });
    }

    private config() {
        this.#express.use(express.json());
        this.#express.use(express.urlencoded({ extended: false }));
        this.#express.use(cors());
    }

    private routers() {
        const commentsRouter = new CommentsRoutes().init();
        this.#express.use(commentsRouter);

        const contactsRouter = new ContactsRoutes().init();
        this.#express.use(contactsRouter);
    }

    private async database() {
        await Database.getInstance();
    }

}