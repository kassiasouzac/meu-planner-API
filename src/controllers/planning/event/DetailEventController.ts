import { Request, Response } from "express";
import { DetailEventService} from "../../../services/planning/event/DetailEventService"

class DetailEventController{
    async handle(req: Request, res: Response){
        const eventId = req.query.eventId as string;
        
        const detailEventService = new DetailEventService;

        const event = await detailEventService.execute({eventId});

        return res.json(event);
    }
}

export { DetailEventController}