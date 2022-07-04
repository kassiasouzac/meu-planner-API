import prismaClient from "../../prisma";

interface RemoveRequest{
    userId: string;
}

class RemoveUserService{
    async execute({userId}: RemoveRequest){
        const user = await prismaClient.user.delete({
            where:{
                id: userId
            }
        })

        return user;
    }
}

export {RemoveUserService}