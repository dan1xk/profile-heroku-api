import { Request, Response, NextFunction } from "express";
import { HttpBadRequestCode } from "../constants";

export const contactVerify = (request: Request, response: Response, next: NextFunction) => {
    const { name, email, telefone } = request.body;

    if (!name || !email || !telefone) {
        return response.status(HttpBadRequestCode).json({
            message: 'Preencha todos os campos'
        });
    }

    next();
}