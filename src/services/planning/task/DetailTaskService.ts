import prismaClient from "../../../prisma"

class DetailTaskService{
    async execute(task_id: string){
        const task = await prismaClient.task.findFirst({
            where:{
                id: task_id
            },
            select:{
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