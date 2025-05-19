import { PrismaClient } from '@prisma/client'
import {faker} from "@faker-js/faker"


const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
//
//   await prisma.todo.createMany({
//     data:Array.from({length:25},()=>{
//       return{
//         title: faker.lorem.words(5), // يجيب 5 كلمات

// body: faker.lorem.words(faker.number.int({ min: 2, max: 10 })),
// user_id:"user_2xJ78KLNU2mc4QDcPWAFo0rEmE2"

        

//     }
//     })
//   })




}

  //generate fake data for user
//   await prisma.user.createMany({
//     data:Array.from({length:25},()=>{
//       return{
//         email:faker.internet.email(),
//         name:faker.internet.username(),
//         address:{
//           city:faker.location.city(),
//           state:faker.location.state(),
//           street:faker.location.street(),
//           zip:faker.location.zipCode()

//         }

//     }
//     })
//   })
// }

// main()
//   .catch(async (e) => {
//     console.error(e)
//     process.exit(1)
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })
  