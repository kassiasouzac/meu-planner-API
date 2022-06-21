import { Request, Response } from "express";
import { DetailHabitService} from "../../../services/planning/habit/DetailHabitService"

class DetailHabitController{
    async handle(req: Request, res: Response){
        const habit_id = req.body;

        const detailHabitService = new DetailHabitService();

        const habit = await detailHabitService.execute(habit_id);

        return res.json({habit});
    }
}

export { DetailHabitController}