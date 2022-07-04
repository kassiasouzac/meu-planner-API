import { Request, Response } from "express";
import { RemoveGoalService } from "../../../services/planning/goal/RemoveGoalService";

class RemoveGoalController{
    async handle(req: Request, res: Response){
        const goalId = req.query.goalId as string;

        const removeGoal = new RemoveGoalService();

        const goal = await removeGoal.execute({goalId});

        return res.json(goal);
    }
}

export {RemoveGoalController}