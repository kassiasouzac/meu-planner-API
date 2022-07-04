import prismaClient from "../../../prisma";

interface UpdateRequest{
    habitId:string,
    title?: string,
    motivation?: string,
    categoryId?: string
}

class UpdateHabitService{
    async execute({habitId, title, motivation, categoryId}: UpdateRequest){
            const habit = await prismaClient.habit.update({
                where:{
                    id: habitId
                },
                data:{
                    title: title,
                    motivation: motivation,
                    categoryId: categoryId,
                    updated_at: new Date()
                }
            });

            return habit;
        }
}

export { UpdateHabitService}