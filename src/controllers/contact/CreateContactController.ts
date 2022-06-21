import { Request, Response } from "express";
import { CreateContactService } from "../../services/contact/CreateContactService";

class CreateContactController{
    async handle(req: Request, res: Response){
        const  id_user  = req.user_id;
        const { name, lastname, email,
            phoneNumber} = req.body;

        const createContactService = new CreateContactService();

        const contact = await createContactService.execute({id_user, name, lastname, email,
            phoneNumber});

        return contact;
    }
}

export { CreateContactController }