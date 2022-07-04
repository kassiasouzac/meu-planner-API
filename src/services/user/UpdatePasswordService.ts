import prismaClient from '../../prisma';
import {  compare, hash } from 'bcryptjs';
import { response } from 'express';


interface ResetRequest{
    password: string,
    oldPassword: string,
   userId: string
}

class UpdatePasswordService{
    async execute({password, userId, oldPassword}: ResetRequest){
       
            const thereIs = await prismaClient.user.findFirst({
                where:{
                    id: userId
                }
            })

            if(!thereIs){
                return response.status(400).send();
            }
            
            const passwordMatch = await compare(oldPassword, thereIs.password)

            if(!passwordMatch){
                return response.status(400);
            }
           const newPassword = await hash(password, 8);
                        
           
           const user = await prismaClient.user.update({
                                where:{
                                   id: userId
                                },
                                data:{
                                    password: newPassword
                                }
                            })
            
            return user;

        

    }
}

export { UpdatePasswordService}