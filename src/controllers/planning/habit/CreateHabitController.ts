import { Request, Response } from "express";
import { CreateHabitService } from "../../../services/planning/habit/CreateHabitService";

class CreateHabitController{
    async handle(req: Request, res: Response){
        const {title, motivation, categoryId, planningId } = req.body;

        const createHabitService = new CreateHabitService();

        const habit = await createHabitService.execute({
            title, 
            motivation, 
            categoryId, 
            planningId
        });

        return res.json({habit})
    }
}

export  { CreateHabitController}