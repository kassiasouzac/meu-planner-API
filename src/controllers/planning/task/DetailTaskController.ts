import { Request, Response } from "express";
import { DetailTaskService} from "../../../services/planning/task/DetailTaskService"

class DetailTaskController{
    async handle(req: Request, res: Response){
        const taskId = req.query.taskId as string;

        const detailTaskService = new DetailTaskService;

        const task = await detailTaskService.execute({taskId});

        return res.json(task);
    }
}

export { DetailTaskController}