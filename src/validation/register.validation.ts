import { z } from "zod";

export const registerValidation = z
  .object({
    firstName: z.string().min(1, "Please Enter Your First Name"),
    lastName: z.string().min(1, "Please Enter Your Last Name"),
    email: z.string().email("Please enter valid email address!"),
    image: z.string().min(1, "Please enter image"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const registerDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  image: "",
  password: "",
  confirmPassword: "",
};
