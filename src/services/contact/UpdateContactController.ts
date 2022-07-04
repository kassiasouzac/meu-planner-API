import prismaClient from "../../prisma";

interface UpdateRequest{
    contactId:string,
    name?: string,
    lastname?: string,
    phoneNumber?: string,
    email?:string
}

class UpdateContactService{
    async execute({contactId, name, lastname, 
        email, phoneNumber}: UpdateRequest){
            const contact = await prismaClient.contact.update({
                where:{
                    id: contactId
                },
                data:{
                    name: name,
                    lastname: lastname,
                    phoneNumber: phoneNumber,
                    email:email
                }
            });

            return contact;
        }
}

export { UpdateContactService}