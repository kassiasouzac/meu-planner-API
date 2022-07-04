import prismaClient from "../../../prisma";

interface RemoveRequest{
    habitId: string;
}

class RemoveHabitService{
    async execute({habitId}: RemoveRequest){
        const habit = await prismaClient.habit.delete({
            where:{
                id: habitId
            }
        })

        return habit;
    }
}

export {RemoveHabitService}