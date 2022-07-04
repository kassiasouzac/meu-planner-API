import { Request, Response } from "express";
import { ListHabitService } from "../../../services/planning/habit/ListHabitService";

class ListHabitController{
    async handle(req: Request, res: Response){
        const planningId = req.query.planningId as string;

        const listHabitService = new ListHabitService();

        const habit = await listHabitService.execute({planningId});

        return res.json({habit});
    }
}

export { ListHabitController}