import prismaClient from "../../../prisma";

interface HabitRequest{
    title: string;
    motivation: string; 
    categoryId: string;
    planningId: string;
}

class CreateHabitService{
    async execute({title, motivation, categoryId, planningId}: HabitRequest){
        const titleAlreadyExists = await prismaClient.habit.findFirst({
            where:{
                title: title
            }
        })

        if(titleAlreadyExists){
            throw new Error("Hábito duplicado!");
        }

        const habit = await prismaClient.habit.create({
            data:{
                title: title,
                motivation: motivation,
                categoryId: categoryId,
                planningId: planningId,
                frequency:[{
                    days:[]
                }]
            }
        })
        return habit;
    }
}

export { CreateHabitService}