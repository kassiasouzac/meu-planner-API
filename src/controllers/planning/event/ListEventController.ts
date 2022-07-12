import { Request, Response } from "express";
import { ListEventService } from "../../../services/planning/event/ListEventService";

class ListEventController{
    async handle(req: Request, res: Response){
        const  planningId  = req.query.planningId as string;

        const listEventService = new ListEventService();

        const event = await listEventService.execute({planningId});

        return res.json({event});
    }
}

export { ListEventController}