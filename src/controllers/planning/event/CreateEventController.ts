import { Request, Response } from "express";
import { CreateEventService } from "../../../services/planning/event/CreateEventService";

class CreateEventController{
    async handle(req: Request, res: Response){
        const { title, description, date, time, planningId, extendedLocalization, repeat, categoryId} = req.body;

        const createEventService = new CreateEventService();

        const event = await createEventService.execute({title, description, date, time, planningId, extendedLocalization, repeat, categoryId});

        return res.json({event})
    }
    }

export { CreateEventController }