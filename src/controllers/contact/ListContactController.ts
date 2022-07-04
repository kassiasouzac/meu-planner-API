import { Request, Response } from "express";
import { ListContactService } from "../../services/contact/ListContactsService";

class ListContactController{
    async handle(req: Request, res: Response){
        const userId = req.user_id as string;

        const listContactService = new ListContactService();

        const contact = await listContactService.execute({userId});

        return res.json({contact});
    }
}

export { ListContactController}