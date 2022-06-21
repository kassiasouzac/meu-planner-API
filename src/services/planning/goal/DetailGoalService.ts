import prismaClient from "../../../prisma"

class DetailGoalService{
    async execute(goal_id: string){
        const goal = await prismaClient.goal.findFirst({
            where:{
                id: goal_id
            },
            select:{
                title: true,
                description: true,
                startDate: true,
                endDate: true,
                categoryId: true,
            }
        })

        return goal;
    }
}

export { DetailGoalService}