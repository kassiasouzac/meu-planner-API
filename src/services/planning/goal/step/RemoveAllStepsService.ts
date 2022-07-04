import prismaClient from "../../../../prisma";

interface RemoveRequest{
    goalId: string;
}

class RemoveAllStepsService{
    async execute({goalId}: RemoveRequest){
        const step = await prismaClient.step.deleteMany({
            where:{
                goalId: goalId
            }
        })

        return step;
    }
}

export {RemoveAllStepsService}