import { Request, Response } from "express";
import { ListGoalService } from "../../../services/planning/goal/ListGoalService";

class ListGoalController{
    async handle(req: Request, res: Response){
        const listGoalService = new ListGoalService();

        const goal = await listGoalService.execute();

        return res.json({goal});
    }
}

export { ListGoalController}