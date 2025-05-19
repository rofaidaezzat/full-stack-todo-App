"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Itodo } from "@/interface";
import { Badge } from "./ui/badge";
import TodoTableAction from "./TodoTableAction";

export function TodoTable({ todos }: { todos: Itodo[] }) {
  return (
    <Table>
      <TableCaption>A list of your recent Todos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Completed</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{todo.id}</TableCell>
            <TableCell>{todo.title}</TableCell>
            <TableCell>
              {" "}
              {todo.completed ? (
                <Badge>completed</Badge>
              ) : (
                <Badge variant={"secondary"}>not completed</Badge>
              )}
            </TableCell>
            <TableCell className="justify-end flex items-center space-x-2">
              <TodoTableAction todo={todo} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">
            {!todos.length ? "you don`t have any todo" : todos.length}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
