"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import { deleteTodoAction } from "@/actions/todo.actions";
import Spinner from "./Spinner";
import EditTodoForm from "./EditTodoDialog";
import { Itodo } from "@/interface";
// نقلتهم هنا علشان كان لما باجي بمسح كلهم بيحصلهم loading  كمان كنت مخلياها  client component  بسبب ال event handler  فعايزا امنع الحوار دا
const TodoTableAction = ({ todo }: { todo: Itodo }) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <EditTodoForm todo={todo} />
      <Button
        size={"icon"}
        variant={"destructive"}
        className="rounded-lg shadow hover:bg-destructive/80 transition-colors duration-200 ml-2"
        title="Delete Todo"
        onClick={async () => {
          setLoading(true);
          await deleteTodoAction({ id: todo.id });
          setLoading(false);
        }}
      >
        {loading ? <Spinner /> : <Trash size={16} />}
      </Button>
    </>
  );
};

export default TodoTableAction;
