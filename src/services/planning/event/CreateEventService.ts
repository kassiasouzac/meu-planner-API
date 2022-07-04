import prismaClient from "../../../prisma";

interface EventRequest{
    title: string,
    description: string,
    date: Date,
    time: Date,
    planningId: string,
    extendedLocalization:[{
        latitude:number,
        longitude:number,
        latitudeDelta: number,
        longitudeDelta: number,
        address: string
    }],
    repeat:[
        isOn: boolean,
        frequency: string
    ]
    categoryId: string
}

class CreateEventService{
    async execute({title, description, date, time, planningId, extendedLocalization, repeat, categoryId}: EventRequest){
        
        const alreadyExistsEventOnThatDay = await prismaClient.event.findFirst({
            where:{
                date: date
            }
        })
        
        if(alreadyExistsEventOnThatDay){
            const alreadyExistsEventOnThatTime = await prismaClient.event.findFirst({
                where:{
                    date: date,
                    time: time
                }
            })
            if(alreadyExistsEventOnThatTime){
                throw new Error("There is already an Event at this time of day! Please choose another time.") 
            }
        }

        const event = await prismaClient.event.create({
            data:{
                title: title,
                description: description,
                date: date,
                time: time,
                extendedLocalization:[extendedLocalization],
                repeat:[repeat],
                categoryId: categoryId,
                planningId: planningId
            }
        })

        return event;
}
}

export { CreateEventService}
