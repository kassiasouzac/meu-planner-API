import { Request, Response } from "express";
import { ListTaskService } from "../../../services/planning/task/ListTaskService";

class ListTaskController{
    async handle(req: Request, res: Response){
        const  planningId = req.query.planningId as string;

        const listTaskService = new ListTaskService();

        const task = await listTaskService.execute({planningId});

        return res.json({task});
    }
}

export { ListTaskController}