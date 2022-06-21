import prismaClient from "../../../prisma";

class ListEventService{
    async execute(){
        const event = await prismaClient.event.findMany({
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