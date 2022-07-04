import prismaClient from "../../../prisma";

interface UpdateRequest{
    goalId:string,
    title?: string,
    description?: string,
    startDate?: Date,
    endDate?: Date,
    categoryId?: string
}

class UpdateGoalService{
    async execute({goalId, title, description, categoryId, 
        startDate, endDate}: UpdateRequest){
            const goal = await prismaClient.goal.update({
                where:{
                    id: goalId
                },
                data:{
                    title: title,
                    description: description,
                    startDate: startDate,
                    endDate: endDate,
                    categoryId: categoryId,
                    updated_at: new Date()
                }
            });

            return goal;
        }
}

export { UpdateGoalService}