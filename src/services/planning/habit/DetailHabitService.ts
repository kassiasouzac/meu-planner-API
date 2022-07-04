import prismaClient from "../../../prisma"

interface DetailRequest{
    habitId: string;
}

class DetailHabitService{
    async execute({habitId}: DetailRequest){
        const habit = await prismaClient.habit.findMany({
            where:{
                id: habitId
            },
            select:{
                id: true,
                title: true,
                motivation: true,
                categoryId: true,
                created_at:true,
                frequency: true
            }
        })

        return habit;
    }
}

export { DetailHabitService}