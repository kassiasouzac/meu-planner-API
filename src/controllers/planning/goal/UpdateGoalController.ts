import { Request, Response } from "express";
import { UpdateGoalService } from '../../../services/planning/goal/UpdateGoalService'; 

class UpdateGoalController{
    async handle(req: Request, res: Response){
        const {goalId, title, description, categoryId, 
            startDate, endDate} = req.body;
        
        const updateGoal = new UpdateGoalService();

        const goal = await updateGoal.execute({goalId, title, description, categoryId, 
            startDate, endDate});

        return res.json(goal);

    }
}

export {UpdateGoalController}