import prismaClient from "../../../prisma";

interface ListRequest{
    planningId: string
}

class ListEventService{
    async execute({planningId}: ListRequest){
        const event = await prismaClient.event.findMany({
            where:{
                planningId: planningId
            },
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
        })

        return event;
    }
}

export { ListEventService}