import prismaClient from "../../../prisma";

class ListGoalService{
    async execute(){
        const goal = await prismaClient.goal.findMany({
            select:{
                id:true,
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

export { ListGoalService}