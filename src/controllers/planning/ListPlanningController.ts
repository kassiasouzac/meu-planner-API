import { Request, Response } from "express";
import { ListPlanningService } from '../../services/planning/ListPlanningService';

class ListPlanningController{
    async handle(req: Request, res: Response){
    const user_id = req.user_id;

        const listPlanningService = new ListPlanningService();

        const planning = await listPlanningService.execute(user_id);

        return res.json({planning});
    }
}

export { ListPlanningController}