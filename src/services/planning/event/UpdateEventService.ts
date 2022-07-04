import prismaClient from "../../../prisma";

interface UpdateRequest{
    eventId:string,
    title?: string,
    description?: string,
    date?: Date,
    time?: Date,
    extendedLocalization?:[{
        latitude:number,
        longitude:number,
        latitudeDelta: number,
        longitudeDelta: number,
        address: string
    }],
    repeat?:[{
        isOn: boolean,
        frequency: string
    }]
    categoryId?: string
}

class UpdateEventService{
    async execute({eventId, title, description, extendedLocalization, 
        repeat, categoryId, date, time}: UpdateRequest){
            const event = await prismaClient.event.update({
                where:{
                    id: eventId
                },
                data:{
                    title: title,
                    description: description,
                    date: date,
                    time: time,
                    extendedLocalization:[extendedLocalization],
                    repeat:[repeat],
                    categoryId: categoryId,
                    updated_at: new Date()
                }
            });

            return event;
        }
}

export { UpdateEventService}