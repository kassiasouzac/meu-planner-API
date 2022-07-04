import prismaClient from "../../../prisma";

interface RemoveRequest{
    taskId: string;
}

class RemoveTaskService{
    async execute({taskId}: RemoveRequest){
        const task = await prismaClient.task.delete({
            where:{
                id: taskId
            }
        })

        return task;
    }
}

export {RemoveTaskService}