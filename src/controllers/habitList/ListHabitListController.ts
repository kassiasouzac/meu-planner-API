import { Request, Response } from "express";
import { ListHabitListService } from "../../services/habitList/ListHabitListService";

class ListHabitListController{
    async handle(req: Request, res: Response){
        const listHabitListService = new ListHabitListService();

        const habitList = await listHabitListService.execute();

        return res.json({habitList});
    }
}

export { ListHabitListController}