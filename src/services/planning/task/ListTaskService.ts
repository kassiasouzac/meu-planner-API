import prismaClient from "../../../prisma";

class ListTaskService{
    async execute(){
        const task = await prismaClient.task.findMany({
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