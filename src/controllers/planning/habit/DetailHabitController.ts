import { Request, Response } from "express";
import { DetailHabitService} from "../../../services/planning/habit/DetailHabitService"

class DetailHabitController{
    async handle(req: Request, res: Response){
        const habitId = req.query.habitId as string;

        const detailHabitService = new DetailHabitService;

        const habit = await detailHabitService.execute({habitId});

        return res.json(habit);
    }
}

export { DetailHabitController}