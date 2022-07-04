import { Request, Response } from "express";
import { UpdateTaskService } from '../../../services/planning/task/UpdateTaskService';

class UpdateTaskController{
    async handle(req: Request, res: Response){
        const {taskId, title, description, categoryId,date } = req.body;
        
        const updateTask = new UpdateTaskService();

        const task = await updateTask.execute({taskId, title, description, categoryId,date });

        return res.json(task);

    }
}

export {UpdateTaskController}