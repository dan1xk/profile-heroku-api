import { ContactsRepository } from "../database/repositories/contacts";
import { ContactsDTO } from "../dto/contacts";

export class ContactsService {
    async create(contactsDTO: ContactsDTO) {
        const repository = new ContactsRepository();
        const contacts = repository.create(contactsDTO);

        return contacts;
    }
}