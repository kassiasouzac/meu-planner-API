import { Request, Response } from "express";
import { RemoveTaskService } from "../../../services/planning/task/RemoveTaskService";

class RemoveTaskController{
    async handle(req: Request, res: Response){
        const taskId = req.query.taskId as string;

        const removeTask = new RemoveTaskService();

        const task = await removeTask.execute({taskId});

        return res.json(task);
    }
}

export { RemoveTaskController}