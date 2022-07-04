import prismaClient from "../../../prisma";

interface ListRequest{
    planningId: string;
}

class ListHabitService{
    async execute({planningId}: ListRequest){
        const habit = await prismaClient.habit.findMany({
            where:{
                planningId: planningId
            },
            select:{
                id:true,
                title: true,
                motivation: true,
                categoryId: true,
                frequency: true,
                created_at: true
            }
        })

        return habit;
    }
}

export { ListHabitService}