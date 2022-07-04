import { Request, Response } from "express";
import { UpdateContactService } from '../../services/contact/UpdateContactController';

class UpdateContactController{
    async handle(req: Request, res: Response){
        const { contactId, name, lastname, 
            email, phoneNumber} = req.body;
        
        const update = new UpdateContactService();

        const contact = await update.execute({
            contactId, name, lastname, 
            email, phoneNumber
        });

        return res.json(contact);

    }
}

export {UpdateContactController}