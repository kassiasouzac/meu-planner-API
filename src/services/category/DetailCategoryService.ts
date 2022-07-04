import prismaClient from "../../prisma";

interface DetailRequest{
    categoryId: string;
}

class DetailCategoryService{
    async execute({categoryId}: DetailRequest){


        const category = await prismaClient.category.findMany({
            where:{
                id: categoryId
            },
            select:{
                title:true
            }
        })

        return category;
    }
}

export { DetailCategoryService}