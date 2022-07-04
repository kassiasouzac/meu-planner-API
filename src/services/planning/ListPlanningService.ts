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
                        title: true,
                        frequency: true,
                        created_at: true
                    }
                },
                tasks: {
                    select:{
                        id: true,
                        categoryId: true,
                        title: true,
                        date: true,
                        description: true
                    }
                },
                events: {
                    select:{
                        id:true,
                        title: true,
                        description: true,
                        date: true,
                        time: true,
                        categoryId: true,
                        extendedLocalization: true,
                        repeat: true
                    }
                },
                goals: {
                    select:{
                        id: true,
                        title: true,
                        description: true,
                        startDate: true,
                        endDate: true,
                        categoryId: true,
                        steps:{
                            select:{
                                number: true,
                                value: true
                            }
                        }
                    }
                }
            }
        })

        return planning;
    }
}

export { ListPlanningService}