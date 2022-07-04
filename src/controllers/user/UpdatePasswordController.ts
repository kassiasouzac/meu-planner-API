import { Request, Response } from "express";
import { UpdatePasswordService } from "../../services/user/UpdatePasswordService";

class UpdatePasswordController{
    async handle(req: Request, res: Response){
        const userId = req.user_id as string;
        const { password, oldPassword} = req.body;

        const update = new UpdatePasswordService();

        const user = await update.execute({
            userId, password, oldPassword
        })

        return res.json(user);
    }
}

export { UpdatePasswordController};