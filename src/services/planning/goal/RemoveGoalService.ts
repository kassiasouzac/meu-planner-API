import prismaClient from "../../../prisma";

interface RemoveRequest{
    goalId: string;
}

class RemoveGoalService{
    async execute({goalId}: RemoveRequest){
        const goal = await prismaClient.goal.delete({
            where:{
                id: goalId
            }
        })

        return goal;
    }
}

export {RemoveGoalService}