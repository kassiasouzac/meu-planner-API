import { Request, Response } from "express";
import { UpdateFrequencyService } from '../../../services/planning/habit/UpdateFrequencyService'

class UpdateFrequencyController{
    async handle(req: Request, res: Response){
        const {habitId, frequency} = req.body;
        
        const updateHabit = new UpdateFrequencyService();

        const habit = await updateHabit.execute({habitId, frequency});

        return res.json(habit);

    }
}

export {UpdateFrequencyController}