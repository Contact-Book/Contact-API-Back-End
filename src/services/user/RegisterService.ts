import prismaClient from "../../prisma"

import { hash } from 'bcryptjs'
import { IUserRequest } from "../../interface/user"




export const  RegisterService  = async (userData:IUserRequest) =>{ 

        const {name , profile_img, email, password, is_admin, is_staff, is_co_admin, editor, } = userData

            const encrypted = await hash(password, 8)

            const user = await prismaClient.user.create({
                data : {
                    name : name,
                    profile_img : profile_img,
                    email : email,
                    password : encrypted,
                    is_admin : is_admin,
                    is_staff : is_staff,
                    is_co_admin : is_co_admin,
                    editor : editor,
                },
                select: {
                    name : true,
                    profile_img : true,
                    email : true,
                    is_admin : true,
                    is_staff : true,
                    is_co_admin : true,
                    editor : true,
                }
    })

    return user
}
