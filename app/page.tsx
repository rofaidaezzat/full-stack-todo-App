import { getuserTodoListAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import { TodoTable } from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();

  console.log(userId);

  const todos = await getuserTodoListAction({ userId: userId as string });

  return (
    <main className="container flex flex-col items-center justify-between">
      <AddTodoForm userId={userId} />
      <TodoTable todos={todos} />
    </main>
  );
}
