import { Request, Response } from "express";
import { CreateGoalService } from "../../../services/planning/goal/CreateGoalService";

class CreateGoalController{
    async handle(req: Request, res: Response){
        const {title,
            description,
            startDate,
            endDate,
            categoryId, 
            planningId } = req.body;

        const createGoalService = new CreateGoalService();

        const goal = await createGoalService.execute({title,
            description,
            startDate,
            endDate,
            categoryId, 
            planningId});

        return res.json({goal})
    }
}

export { CreateGoalController}