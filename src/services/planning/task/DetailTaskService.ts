import prismaClient from "../../../prisma"

interface DetailRequest{
    taskId: string;
}

class DetailTaskService{
    async execute({taskId}: DetailRequest){
        const task = await prismaClient.task.findMany({
            where:{
                id: taskId
            },
            select:{
                id: true,
                title: true,
                description: true,
                date: true,
                categoryId: true
            }
        })

        return task;
    }
}

export { DetailTaskService}