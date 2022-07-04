import prismaClient from "../../prisma";

interface UpdateRequest{
    userId:string,
    name?: string,
    lastname?: string
}

class UpdateUserService{
    async execute({userId, name, lastname}: UpdateRequest){
            const user = await prismaClient.user.update({
                where:{
                    id: userId
                },
                data:{
                    name: name,
                    lastname: lastname
                    
                }
            });

            return user;
        }
}

export { UpdateUserService}