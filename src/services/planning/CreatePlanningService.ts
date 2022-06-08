import prismaClient from "../../prisma";

interface PlanningRequest{
    id_user: string
}

class CreatePlanningService{
    async execute({id_user}: PlanningRequest){
        const userExists = await prismaClient.user.findFirst({
            where:{
                id: id_user
            }
        })

        const planning = await prismaClient.planning.findFirst({
            where:{
                userId: id_user
            }
        })

        if(!userExists){
            throw new Error("Invalid User")
        }
        if(planning){
            return planning;
        }

        const planner = await prismaClient.planning.create({
            data:{
                userId: id_user
            }
        })

        return planner;
    }
}

export { CreatePlanningService}