import { Request, Response } from "express";
import { RemoveEventService } from "../../../services/planning/event/RemoveEventService";

class RemoveEventController{
    async handle(req: Request, res: Response){
        const eventId = req.query.eventId as string;

        const removeEvent = new RemoveEventService();

        const event = await removeEvent.execute({eventId});

        return res.json(event);
    }
}

export { RemoveEventController}