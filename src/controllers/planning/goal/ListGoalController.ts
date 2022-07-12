import { Request, Response } from "express";
import { ListGoalService } from "../../../services/planning/goal/ListGoalService";

class ListGoalController{
    async handle(req: Request, res: Response){
        const planningId = req.query.planningId as string;

        const listGoalService = new ListGoalService();

        const goal = await listGoalService.execute({planningId});

        return res.json({goal});
    }
}

export { ListGoalController}