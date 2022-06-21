import { Request, Response } from "express";
import { DetailGoalService} from "../../../services/planning/goal/DetailGoalService"

class DetailGoalController{
    async handle(req: Request, res: Response){
        const goal_id = req.body;

        const detailGoalService = new DetailGoalService();

        const goal = await detailGoalService.execute(goal_id);

        return res.json({goal});
    }
}

export { DetailGoalController}