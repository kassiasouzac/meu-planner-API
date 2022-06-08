import prismaClient from "../../prisma";
import { hash } from 'bcryptjs';

interface UserRequest{
    name: string;
    lastname: string;
    email: string;
    password: string;
}

class CreateUserService{
    async execute({name, lastname, email, password}: UserRequest){
        if(!email){
            throw new Error("Email Incorrect")
        }
        
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(userAlreadyExists){
            throw new Error("User already exists!")
        }

        const passwordHashed = await hash(password, 8)

        const user = await prismaClient.user.create({
            data:{
                name: name,
                lastname: lastname,
                email: email,
                password: passwordHashed,
            },
            select:{
                id: true,
                name: true,
                lastname: true,
                email: true
            }
        })

        return user;
    }
}

export { CreateUserService };