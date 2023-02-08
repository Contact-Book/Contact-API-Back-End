import { NextApiResponse } from "next"
import prismaClient from "../../prisma"



export const UserSerializer = async (email:string, res: NextApiResponse) => {

    if (!email) {
        return res.status(400).json({error:"Fieal email is required"})
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
        where: {
            email: email
        }
    })

    if(userAlreadyExists){
        return res.status(400).json({error:"This email is already in use"})
    }

    return true
}
