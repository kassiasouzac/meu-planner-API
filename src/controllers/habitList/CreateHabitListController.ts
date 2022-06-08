import { Request, Response } from "express";
import { CreateHabitListService } from "../../services/habitList/CreateHabitListService";

class CreateHabitListController{
    async handle(req: Request, res: Response){
        const {title, motivation, categoryId} = req.body;

        const createHabit = new CreateHabitListService();

        const habit = await createHabit.execute({title, motivation, categoryId})

        return res.json({habit});
    }
}

export {CreateHabitListController}