"use server";

import prisma from "./prisma";
import { ChildSchema } from "./validationSchemas";

export const createStudent = async (currentState: {success:boolean, error: boolean}, data:ChildSchema)=>{
    console.log(data + "in the server action");
    try {
        await prisma.child.create({
            data: { // if it shows error, it is due to missing fields, which will be added later, remove if already added!
                firstName:data.firstName,
            },
        })

        return {success:true, error:false}
    }
    catch (err) {
        console.log(err);
        return {success: false, error:true}
    }
}