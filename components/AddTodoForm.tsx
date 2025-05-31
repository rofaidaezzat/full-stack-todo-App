"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { TodoFormSchema, TodoFormValues } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTodoAction } from "@/actions/todo.actions";
import Spinner from "./Spinner";

const AddTodoForm = ({ userId }: { userId: string | null }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const defaultValues: Partial<TodoFormValues> = {
    title: "",
    body: "",
    completed: false,
  };

  const form = useForm<TodoFormValues>({
    resolver: zodResolver(TodoFormSchema),
    defaultValues,
    mode: "onChange",
  });
  //   ***onSubmit
  const onSubmit = async (data: TodoFormValues) => {
    setLoading(true);
    console.log(data);
    await createTodoAction({
      title: data.title,
      body: data.body,
      completed: data.completed,
      userId: userId as string,
    });
    setOpen(false);
    form.reset();
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2 px-4 py-2 rounded-lg shadow bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200">
          <Plus size={16} />
          <span className="font-semibold">Add Todo</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-xl shadow-2xl bg-card animate-in fade-in-0 slide-in-from-top-8">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Add New Todo</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Go to gym" {...field} className="rounded-lg focus:ring-2 focus:ring-primary/60 transition" />
                    </FormControl>
                    <FormDescription>
                      This is your todo title. 5-30 characters.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="body"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Short Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your todo..."
                        className="resize-none rounded-lg focus:ring-2 focus:ring-primary/60 transition"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Optional: Add a short description (max 80 chars).
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="completed"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          ref={field.ref}
                        />
                      </FormControl>
                      <FormLabel className="font-semibold">Completed</FormLabel>
                    </div>
                    <FormDescription>
                      Your todo will be uncompleted by default unless you check it.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 shadow-md disabled:bg-gray-400 disabled:text-white"
              >
                {loading ? (
                  <>
                    <Spinner />
                    Saving...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoForm;
