import prismaClient from '../../prisma';
import {  hash } from 'bcryptjs';
import * as nodemailer from 'nodemailer'
import * as crypto from 'crypto'
import { sign } from 'jsonwebtoken';
import { response } from 'express';

interface ResetRequest{
    email: string,
   
}

class ResetPasswordService{
    async execute({email}: ResetRequest){
        try{
             await prismaClient.user.findFirst({
                where:{
                    email: email
                }
            })

            const transporter = nodemailer.createTransport({
                host: "smtp.mailtrap.io",
                port: 2525,
                auth: {
                  user: "7a855fa65f2d44",
                  pass: "63e38876850813"
                }
              });

            const newPassword = crypto.randomBytes(4).toString('hex')

             await transporter.sendMail({
                from: 'Administrador <kassiasouzac@gmail.com>',
                to: email,
                subject: 'Recuperação de Senha',
                html: `<p>Olá, recebemos um pedido para recuperação de senha do e-mail ${email}. <br> Essa é sua nova senha para acessar o aplicativo: ${newPassword}</p><br>`

            })
           const password = await hash(newPassword, 8);
                        
           
           const user = await prismaClient.user.update({
                                where:{
                                    email: email
                                },
                                data:{
                                    password: password
                                }
                            })
            
            return user;

        }catch(error){
            return response.status(404).json({message: 'User not found'})
        }

    }
}

export { ResetPasswordService}