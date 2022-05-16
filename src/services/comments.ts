import { CommentsRepository } from "../database/repositories/comments";
import { CommentsDTO } from "../dto/comments";

export class CommentsService {
    async find() {
        const repository = new CommentsRepository();
        const comment = repository.find();

        return comment;
    }

    async create(commentsDTO: CommentsDTO) {
        const repository = new CommentsRepository();
        const comment = repository.create(commentsDTO);

        return comment;
    }
}