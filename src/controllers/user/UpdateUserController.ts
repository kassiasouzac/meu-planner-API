import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService";

class UpdateUserController{
    async handle(req: Request, res: Response){
        const userId = req.user_id as string;
        const { name, lastname} = req.body;

        const update = new UpdateUserService();

        const user = await update.execute({
            userId, name, lastname
        })

        return res.json(user);
    }
}

export { UpdateUserController};