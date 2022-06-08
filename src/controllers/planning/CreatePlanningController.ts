import { Request, Response } from "express";
import { CreatePlanningService } from "../../services/planning/CreatePlanningService";

class CreatePlanningController{
    async handle(req: Request, res: Response){
        const  id_user  = req.user_id;

        const createPlanningService = new CreatePlanningService();

        const planner = await createPlanningService.execute({id_user});

        return planner;
    }
}

export { CreatePlanningController }