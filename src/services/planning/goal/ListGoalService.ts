import prismaClient from "../../../prisma";

interface ListRequest{
    planningId: string
}

class ListGoalService{
    async execute({planningId}: ListRequest){
        const goal = await prismaClient.goal.findMany({
            where:{
                planningId:planningId
            },
            select:{
                id: true,
                title: true,
                description: true,
                startDate: true,
                endDate: true,
                categoryId: true,
                steps:{
                    select:{
                        id:true,
                        number: true,
                        value: true
                    }
                }
            }
        })

        return goal;
    }
}

export { ListGoalService}