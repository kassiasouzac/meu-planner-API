import { Request, Response } from "express";
import { DetailGoalService} from "../../../services/planning/goal/DetailGoalService"

class DetailGoalController{
    async handle(req: Request, res: Response){
        const goalId = req.query.goalId as string;

        const detailGoalService = new DetailGoalService;

        const goal = await detailGoalService.execute({goalId});

        return res.json(goal);
    }
}

export { DetailGoalController}