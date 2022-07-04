import { Request, Response } from "express";
import { ResetPasswordService } from "../../services/user/ResetPasswordService";

class ResetPasswordController{
    async handle(req: Request, res: Response){
        
        const { email} = req.body;

        const update = new ResetPasswordService();

        const user = await update.execute({
            email
        })

        return res.json(user);
    }
}

export { ResetPasswordController};