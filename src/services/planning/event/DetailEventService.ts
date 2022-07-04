import { prisma } from "@prisma/client";
import prismaClient from "../../../prisma"

interface DetailRequest{
    eventId: string;
}

class DetailEventService{
    async execute({eventId}: DetailRequest){
        const thereIsAEvent = await prismaClient.event.findMany({
            where:{
                id: eventId
            }
        })
        if(!thereIsAEvent){
            throw new Error('Evento não existe!');
        }

        const event = await prismaClient.event.findFirst({
            where:{
                id: eventId
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

export { DetailEventService}