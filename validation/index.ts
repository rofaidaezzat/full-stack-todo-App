import { z } from "zod";

// ------------------Validation Using Zod-----------------------
  export const TodoFormSchema = z.object({
    title: z
      .string()
      .min(5, {
        message: "Title must be at least 5 characters.",
      })
      .max(30, {
        message: "Title must not be longer than 30 characters.",
      }),
    body: z
      .string()
      .max(80, {
        message: "body must not be longer than 80 characters.",
      })
      // mean optional string or undefined i can not write body
      .optional(),
completed:z.boolean(),
  });
  
  export type TodoFormValues = z.infer<typeof TodoFormSchema>;