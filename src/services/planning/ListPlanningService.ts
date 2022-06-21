import prismaClient from "../../prisma"

class ListPlanningService{
    async execute(user_id: string){
        const planning = await prismaClient.planning.findFirst({
            where:{
                userId: user_id
            },
            select:{
                id: true,
                userId: false,
                created_at: false,
                updated_at: false,
                habits: {
                    select:{
                        id: true,
                        categoryId: true,
                        title: true
                    }
                },
                tasks: {
                    select:{
                        id: true,
                        categoryId: true,
                        title: true,
                        date: true
                    }
                },
                events: {
                    select:{
                        id: true,
                        categoryId: true,
                        title: true,
                        date: true
                    }
                },
                goals: {
                    select:{
                        id: true,
                        categoryId: true,
                        title: true
                    }
                }
            }
        })

        return planning;
    }
}

export { ListPlanningService}