import prismaClient from "../../../prisma";

interface ListRequest{
    planningId: string
}

class ListTaskService{
    async execute({planningId}: ListRequest){
        const task = await prismaClient.task.findMany({
            where:{
                planningId: planningId
            },
            select:{
                id:true,
                title: true,
                description: true,
                date: true,
                categoryId: true
            }
        })

        return task;
    }
}

export { ListTaskService}