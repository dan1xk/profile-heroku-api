import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'profileDB.comments' })
export class CommentsEntity extends BaseEntity {
    @PrimaryColumn()
    id?: number;

    @Column()
    name: string;

    @Column()
    comment: string;

    constructor(name: string, comment: string) {
        super();
        this.name = name;
        this.comment = comment;
    }
}
