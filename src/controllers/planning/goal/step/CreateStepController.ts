import { Request, Response } from "express";
import { CreateStepService } from "../../../../services/planning/goal/step/CreateStepService"

class CreateStepController{
    async handle(req: Request, res: Response){
        const {number, value, goalId } = req.body;

        const createStepService = new CreateStepService();

        const step = await createStepService.execute({number, value, goalId});

        return res.json(step)
    }
}

export { CreateStepController}