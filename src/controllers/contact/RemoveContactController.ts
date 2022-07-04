import { Request, Response } from "express";
import { RemoveContactService } from "../../services/contact/RemoveContactService";

class RemoveContactController{
    async handle(req: Request, res: Response){
        const contactId = req.query.contactId as string;

        const remove = new RemoveContactService();

        const contact = await remove.execute({contactId});

        return res.json(contact);
    }
}

export { RemoveContactController}