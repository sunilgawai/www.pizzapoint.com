import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(5, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  name: z.string(),
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(5, { message: "Password is required" }),
});
