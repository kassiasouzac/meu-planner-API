import prismaClient from "../../../prisma"

class DetailHabitService{
    async execute(habit_id: string){
        const habit = await prismaClient.habit.findFirst({
            where:{
                id: habit_id
            },
            select:{
                title: true,
                motivation: true,
                frequency: true
            }
        })

        return habit;
    }
}

export { DetailHabitService}