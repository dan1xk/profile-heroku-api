import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'profileDB.contacts' })
export class ContactsEntity extends BaseEntity {
    @PrimaryColumn() 
    id?: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    telefone: string

    constructor(name: string, email: string, telefone: string) {
        super();
        this.name = name;
        this.email = email;
        this.telefone = telefone;
    }
}

