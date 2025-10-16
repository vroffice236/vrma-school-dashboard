'use server';


import prisma from "./prisma";
import { ChildSchema } from "./validationSchemas";

// model Child {
//   id Int @id @default(autoincrement())
//   firstName String
//   middleName String?
//   lastName String
//   dateOfBirth DateTime
//   placeOfBirth String
//   gender Gender
//   address String
//   allergyInfo String?
//   dietaryRestrictions String?
//   healthCardNo String? @unique
//   OEN String? @unique
//   createdAt DateTime @default(now())
// }

export const createStudent = async (
  currentState: { success: boolean; error: boolean },
  data: ChildSchema
) => {
  try {
    await prisma.child.create({
      data: {
        firstName: data.firstName,
        lastName: "Last Name",
        dateOfBirth: new Date(),
        placeOfBirth: "Place of Birth",
        gender: "Male",
        address: "Address",
      },
    });
    return { success: true, error: false };
  } catch (err) {
    console.error("Error creating student:", err);
    return { success: false, error: true };
  }
};