import prismaClient from "../../prisma";

interface RemoveRequest{
    contactId: string;
}

class RemoveContactService{
    async execute({contactId}: RemoveRequest){
        const contact = await prismaClient.contact.delete({
            where:{
                id: contactId
            }
        })

        return contact;
    }
}

export {RemoveContactService}