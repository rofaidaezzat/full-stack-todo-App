"use server"
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient()
//function get(fetch) todo from database
export const getuserTodoListAction = async ({userId}:{userId?:string|null})=>{
return await prisma.todo.findMany(
    {
where:{user_id:userId as string },
    orderBy:{createdAt:"desc"}
    }
    );
//Error Handling
}
//function to create todo action
export const createTodoAction = async ({title,body ,completed ,userId}:{title:string,body?:string|undefined,completed?:boolean,userId?:string|null})=>{
     await prisma.todo.create({ data: { title, body, completed, user_id:userId as string } });
     revalidatePath("/")
 
}
//function to update todo
export const updateTodoAction = async ({id,title,body ,completed}:{id:string,title:string,body?:string|undefined,completed?:boolean})=>{
await prisma.todo.update({
    where: {
      id,
    },
    data: { title, body, completed },
  });
  revalidatePath("/")
}
//function to delete todo
export const deleteTodoAction =async ({id}:{id:string})=>{
    await prisma.todo.delete({
        where: {
          id,
        },
    });
    // this use for update the cache before revalidate must refresh the page to delete
revalidatePath("/")
    
}