import { Request, Response } from "express";
import { ListEventService } from "../../../services/planning/event/ListEventService";

class ListEventController{
    async handle(req: Request, res: Response){
        const listEventService = new ListEventService();

        const event = await listEventService.execute();

        return res.json({event});
    }
}

export { ListEventController}