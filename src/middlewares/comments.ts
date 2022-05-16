import { Request, Response, NextFunction } from "express";
import { HttpBadRequestCode } from "../constants";

export const commentVerify = (request: Request, response: Response, next: NextFunction) => {
    const { name, comment } = request.body;

    if (!name || !comment) {
        return response.status(HttpBadRequestCode).json({
            message: 'Preencha todos os campos'
        });
    }

    if (name.length <= 2) {
        return response.status(HttpBadRequestCode).json({
            message: 'Seu nome precisa ter mais de 2 caracteres.'
        });
    }

    next();
}