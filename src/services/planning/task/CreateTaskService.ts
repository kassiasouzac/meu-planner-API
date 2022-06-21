import prismaClient from "../../../prisma";

interface TaskRequest{
    title: string,
    description: string,
    date: string,
    categoryId: string, 
    planningId: string
}

class CreateTaskService{
    async execute({title,
        description,
        date,
        categoryId, 
        planningId}: TaskRequest){

        const validCategory = prismaClient.category.findFirst({
            where:{
                id: categoryId
            }
        })

        if(!validCategory){
            throw new Error("Categoria inválida");
            
        }

        const task = prismaClient.task.create({
            data:{
                title: title,
                description: description,
                date: date,
                categoryId: categoryId, 
                planningId: planningId
            }
        })
        return task;
    }
}

export { CreateTaskService}