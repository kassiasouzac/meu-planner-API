import { Request, Response } from "express";
import { DetailEventService} from "../../../services/planning/event/DetailEventService"

class DetailEventController{
    async handle(req: Request, res: Response){
        const event_id = req.body;

        const detailEventService = new DetailEventService();

        const event = await detailEventService.execute(event_id);

        return res.json({event});
    }
}

export { DetailEventController}