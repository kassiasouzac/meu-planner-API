import { NextFunction, Request, Response } from "express";
import prismaClient from "../prisma";
import { CreatePlanningController } from "../controllers/planning/CreatePlanningController";

export async function thereIsAPlanner(req: Request, res: Response, next: NextFunction){
    const user_id = req.user_id;
    const planningId = req.body.planningId;
    const createPlanningController = new CreatePlanningController();

    const userHasPlanning = await prismaClient.planning.findFirst({
        where:{
            userId: user_id
        }
    })
    const planningExists = await prismaClient.planning.findFirst({
        where:{
            id: planningId
        }
    })
   try{
    if(!userHasPlanning){
        await createPlanningController.handle(req, res);
        const NewPlanner = await prismaClient.planning.findFirst({
         where:{
             userId: user_id
         }
     })
     req.body.planningId = NewPlanner.id; 
     
     return next();
 }else if(!planningExists){
     throw new Error("Invalid planning id.");
 }
 return next();
   }catch(err){
    return res.status(404).end();
   }
}