import { Request, Response } from "express";
import { CheckPasswordService } from "../../services/user/CheckPasswordService";

class CheckPasswordController{
    async handle(req: Request, res: Response){
        const userId = req.user_id as string;
        const { password} = req.body;

        const check = new CheckPasswordService();

        const user = await check.execute({
           userId, 
            password
        })

        return res.json(user);
    }
}

export { CheckPasswordController};