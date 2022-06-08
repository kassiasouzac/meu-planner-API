import prismaClient from "../../prisma";

interface CategoryRequest{
    title: string
}

class CreateCategoryService{
    async execute({title}: CategoryRequest){
        const category = await prismaClient.category.create({
            data:{
                title: title
            }
        })

        return category;
    }
}

export { CreateCategoryService}