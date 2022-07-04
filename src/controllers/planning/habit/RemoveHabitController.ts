import { Request, Response } from "express";
import { RemoveHabitService } from "../../../services/planning/habit/RemoveHabitService";

class RemoveHabitController{
    async handle(req: Request, res: Response){
        const habitId = req.query.habitId as string;

        const removeHabit = new RemoveHabitService();

        const habit = await removeHabit.execute({habitId});

        return res.json(habit);
    }
}

export { RemoveHabitController}