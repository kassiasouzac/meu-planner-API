import { Request, Response } from "express";
import { ListStepService } from "../../../../services/planning/goal/step/ListStepService";

class ListStepController{
    async handle(req: Request, res: Response){
        const goalId = req.query.goalId as string;

        const listStepService = new ListStepService();

        const step = await listStepService.execute({goalId});

        return res.json({step});
    }
}

export { ListStepController}