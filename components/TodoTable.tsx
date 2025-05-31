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
    <div className="w-full overflow-x-auto rounded-xl shadow bg-card p-2 mt-4">
      <Table>
        <TableCaption className="mb-2 text-muted-foreground">
          A list of your recent Todos.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="max-w-[80px] truncate hidden sm:table-cell">
              ID
            </TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((todo) => (
            <TableRow
              key={todo.id}
              className="hover:bg-accent/40 transition-colors"
            >
              <TableCell className="font-medium max-w-[80px] truncate hidden sm:table-cell">
                {todo.id}
              </TableCell>
              <TableCell className="whitespace-pre-line">
                {todo.title}
              </TableCell>
              <TableCell>
                {todo.completed ? (
                  <Badge className="bg-blue-600 text-white">Completed</Badge>
                ) : (
                  <Badge
                    variant="secondary"
                    className="bg-amber-300 text-black"
                  >
                    Not Completed
                  </Badge>
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
              {!todos.length ? "You don't have any todos" : todos.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
