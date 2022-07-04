import prismaClient from "../../../prisma"

interface DetailRequest{
    goalId: string;
}

class DetailGoalService{
    async execute({goalId}: DetailRequest){
        const goal = await prismaClient.goal.findMany({
            where:{
                id: goalId
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

export { DetailGoalService}