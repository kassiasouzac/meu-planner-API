import prismaClient from "../../../prisma";

class ListHabitService{
    async execute(){
        const habit = await prismaClient.habit.findMany({
            select:{
                id:true,
                title: true,
                motivation: true,
                frequency: true
            }
        })

        return habit;
    }
}

export { ListHabitService}