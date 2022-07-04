import prismaClient from "../../../prisma";

interface UpdateRequest{
    taskId:string,
    title?: string,
    description?: string,
    date?: Date,
    categoryId?: string
}

class UpdateTaskService{
    async execute({taskId, title, description, categoryId,date }: UpdateRequest){
            const task = await prismaClient.task.update({
                where:{
                    id: taskId
                },
                data:{
                    title: title,
                    description: description,
                    date: date,
                    categoryId: categoryId,
                    updated_at: new Date()
                }
            });

            return task;
        }
}

export { UpdateTaskService}