import { Request, Response } from "express";
import { RemoveUserService } from "../../services/user/RemoveUserService";

class RemoveUserController{
    async handle(req: Request, res: Response){
        const userId = req.user_id as string;

        const remove = new RemoveUserService();

        const user = await remove.execute({userId});

        return res.json(user);
    }
}

export { RemoveUserController}