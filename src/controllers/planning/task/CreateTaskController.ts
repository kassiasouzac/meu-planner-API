import { Request, Response } from "express";
import { CreateTaskService } from "../../../services/planning/task/CreateTaskService";

class CreateTaskController{
    async handle(req: Request, res: Response){
        const {title,
            description,
            date,
            categoryId, 
            planningId} = req.body;

        const createTaskService = new CreateTaskService();

        const task = await createTaskService.execute({title,
            description,
            date,
            categoryId, 
            planningId});

        return res.json({task})
    }
}

export { CreateTaskController}