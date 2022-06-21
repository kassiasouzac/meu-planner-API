import prismaClient from "../../prisma";

interface ContactRequest{
    name: string,
    lastname?: string,
    email: string,
    phoneNumber: string,
    id_user: string
}

class CreateContactService{
    async execute({name,
        lastname, email,phoneNumber, id_user}: ContactRequest){

        const userExists = await prismaClient.user.findFirst({
            where:{
                id: id_user
            }
        })

        const contactExists = await prismaClient.contact.findFirst({
            where:{
                phoneNumber: phoneNumber
            }
        })

        if(!userExists){
            throw new Error("Invalid User")
        }
        if(contactExists){
            throw new Error("Already exists a contact with this number")
        }

        const contact = await prismaClient.contact.create({
            data:{
                name: name,
                lastname: lastname,
                email: email,
                phoneNumber: phoneNumber,
                userId: id_user
            }
        })

        return contact;
    }
}

export { CreateContactService}