import z from "zod";

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

export const childSchema = z.object({
  firstName: z.string().min(3, { message: "Minimum 3 characters required" }),
  middleName: z.string().optional(),
  lastName: z.string().min(3, { message: "Minimum 3 characters required" }).optional(),
  dateOfBirth: z.date().max(new Date(), {error: "Enter a valid Date"}),
  placeOfBirth: z.string().min(1, { message: "Required" }),
  gender: z.enum(["Male", "Female"]), //   gender Gender
  address: z.string().min(1, { message: "Required" }),  //   address String
  allergyInfo: z.string().min(1, {error: "Required"}),  //   allergyInfo String?
  dietaryRestrictions: z.string().min(1, {error: "Required"}),
  healthCardNo: z.string().optional(),
  OEN: z.string().optional()  
})

export type ChildSchema = z.infer<typeof childSchema>;