import { Gender, PrismaClient } from "../prisma/generated/prisma-client";

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding data...');

  await prisma.child.createMany({
    data: [
      {
        firstName: 'Liam',
        middleName: 'Alexander',
        lastName: 'Smith',
        dateOfBirth: new Date('2018-04-15'),
        placeOfBirth: 'Toronto',
        gender: Gender.Male,
        address: '123 Maple Street, Toronto, ON',
        allergyInfo: 'Peanuts',
        dietaryRestrictions: null,
        healthCardNo: 'HCN1234567',
        OEN: '123456789',
      },
      {
        firstName: 'Olivia',
        middleName: null,
        lastName: 'Brown',
        dateOfBirth: new Date('2019-06-22'),
        placeOfBirth: 'Mississauga',
        gender: Gender.Female,
        address: '456 Oak Avenue, Mississauga, ON',
        allergyInfo: null,
        dietaryRestrictions: 'Vegetarian',
        healthCardNo: 'HCN9876543',
        OEN: '987654321',
      },
      {
        firstName: 'Noah',
        middleName: 'James',
        lastName: 'Patel',
        dateOfBirth: new Date('2020-01-09'),
        placeOfBirth: 'Brampton',
        gender: Gender.Male,
        address: '789 Pine Road, Brampton, ON',
        allergyInfo: 'Dairy',
        dietaryRestrictions: null,
        healthCardNo: 'HCN1122334',
        OEN: '112233445',
      },
    ],
  });

  console.log('✅ Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
