import prismaClient from "../../prisma";

class ListHabitListService{
    async execute(){
        const habits = await prismaClient.habitList.findMany({
            select:{
                id:true,
                title: true,
                motivation: true,
                categoryId: true
            }
        })

        return habits;
    }
}

export { ListHabitListService}