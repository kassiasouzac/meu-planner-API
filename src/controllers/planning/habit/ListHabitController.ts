import { Request, Response } from "express";
import { ListHabitService } from "../../../services/planning/habit/ListHabitService";

class ListHabitController{
    async handle(req: Request, res: Response){
        const listHabitService = new ListHabitService();

        const habit = await listHabitService.execute();

        return res.json({habit});
    }
}

export { ListHabitController}