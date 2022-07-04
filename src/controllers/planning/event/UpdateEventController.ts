import { Request, Response } from "express";
import { UpdateEventService } from '../../../services/planning/event/UpdateEventService';

class UpdateEventController{
    async handle(req: Request, res: Response){
        const { eventId, title, description, 
            extendedLocalization, repeat, categoryId ,
            date, time} = req.body;
        
        const updateEvent = new UpdateEventService();

        const event = await updateEvent.execute({
            eventId, title, description, 
            extendedLocalization, repeat, categoryId ,
            date, time
        });

        return res.json(event);

    }
}

export {UpdateEventController}