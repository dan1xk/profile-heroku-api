import { CommentsEntity } from "../entities/comments";
import { CommentsDTO } from "../../dto/comments";

export class CommentsRepository {
    async find() {
        const comments = await CommentsEntity.find();
        return comments;
    }

    async create(commentsDTO: CommentsDTO) {
        const comment = await new CommentsEntity(commentsDTO.name, commentsDTO.comment);
        comment.save();
        return comment;
    }
}