import { Request, Response } from "express";
import { UpdateHabitService } from '../../../services/planning/habit/UpdateHabitService'

class UpdateHabitController{
    async handle(req: Request, res: Response){
        const {habitId, title, motivation, categoryId} = req.body;
        
        const updateHabit = new UpdateHabitService();

        const habit = await updateHabit.execute({habitId, title, motivation, categoryId});

        return res.json(habit);

    }
}

export {UpdateHabitController}