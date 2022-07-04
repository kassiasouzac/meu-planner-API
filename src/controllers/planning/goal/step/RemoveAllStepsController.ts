import { Request, Response } from "express";
import { RemoveAllStepsService } from "../../../../services/planning/goal/step/RemoveAllStepsService";

class RemoveAllStepsController{
    async handle(req: Request, res: Response){
        const goalId = req.query.goalId as string;

        const remove = new RemoveAllStepsService();

        const step = await remove.execute({goalId});

        return res.json({step});
    }
}

export {RemoveAllStepsController}