import prismaClient from "../../../prisma"

class DetailEventService{
    async execute(event_id){
        const event = await prismaClient.event.findFirst({
            where:{
                id: event_id
            },
            select:{
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

export { DetailEventService}