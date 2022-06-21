import prismaClient from "../../prisma";

class ListCategoryService{
    async execute(){
        const category = await prismaClient.category.findMany({
            select:{
                id: true,
                title: true
            }
        })

        return category;
    }
}

export { ListCategoryService}