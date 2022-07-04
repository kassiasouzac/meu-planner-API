import prismaClient from "../../../prisma";

interface RemoveRequest{
    eventId: string;
}

class RemoveEventService{
    async execute({eventId}: RemoveRequest){
        const event = await prismaClient.event.delete({
            where:{
                id: eventId
            }
        })

        return event;
    }
}

export {RemoveEventService}