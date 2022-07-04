import prismaClient from '../../prisma';
import { compare } from 'bcryptjs';


interface Request{
    userId: string,
    password: string
}

class CheckPasswordService{
    async execute({userId, password}: Request){
        const user = await prismaClient.user.findFirst({
            where:{
                id: userId
            }
        })

        if(!user){
            throw new Error("User/password incorrect")
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("User/password incorrect")
        }

        

        return {
            name: user.name
        }
    }
}

export { CheckPasswordService}