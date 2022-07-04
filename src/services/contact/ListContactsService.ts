import prismaClient from "../../prisma";

interface ListRequest{
    userId: string
}

class ListContactService{
    async execute({userId}: ListRequest){
        const habit = await prismaClient.contact.findMany({
            where:{
                userId: userId
            },
            select:{
                id:true,
                name: true,
                lastname: true,
                phoneNumber: true,
                email: true
            }
        })

        return habit;
    }
}

export { ListContactService}