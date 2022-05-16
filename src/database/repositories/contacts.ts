import { ContactsEntity } from "../entities/contacts";
import { ContactsDTO } from "../../dto/contacts";

export class ContactsRepository {
    async create(contactsDTO: ContactsDTO) {
        const contact = await new ContactsEntity(contactsDTO.name, contactsDTO.email, contactsDTO.telefone);
        contact.save();
        return contact;
    }
}