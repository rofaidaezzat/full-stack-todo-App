import { getuserTodoListAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import { TodoTable } from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();

  console.log(userId);

  const todos = await getuserTodoListAction({ userId: userId as string });

  return (
    <main className="flex flex-col items-center min-h-[80vh] py-8 px-2 sm:px-4 bg-background">
      <section className="w-full max-w-2xl bg-card shadow-lg rounded-xl p-6 flex flex-col gap-6 mt-8 mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2 tracking-tight">Todo Management</h1>
        <AddTodoForm userId={userId} />
        <TodoTable todos={todos} />
      </section>
    </main>
  );
}
