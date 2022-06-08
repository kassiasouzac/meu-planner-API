import prismaClient from "../../prisma";

interface ListRequest{
    title: string;
    motivation: string;
    categoryId: string;
}

class CreateHabitListService{
    async execute({title, motivation, categoryId}: ListRequest){
        const habit = await prismaClient.habitList.create({
            data:{
                title:title,
                motivation:motivation,
                categoryId:categoryId
            }
        })
        return habit;
    }
}

export { CreateHabitListService }