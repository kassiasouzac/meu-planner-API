import prismaClient from "../../../prisma";

interface GoalRequest{
    title: string,
    description: string,
    startDate: string,
    endDate: string,
    categoryId: string, 
    planningId: string
}

class CreateGoalService{
    async execute({title,
        description,
        startDate,
        endDate,
        categoryId, 
        planningId}: GoalRequest){

        const validCategory = prismaClient.category.findFirst({
            where:{
                id: categoryId
            }
        })

        if(!validCategory){
            throw new Error("Categoria inválida");
            
        }

        const goal = prismaClient.goal.create({
            data:{
                title: title,
                description: description,
                startDate: startDate,
                endDate: endDate,
                categoryId: categoryId, 
                planningId: planningId
            }
        })
        return goal;
    }
}

export { CreateGoalService}