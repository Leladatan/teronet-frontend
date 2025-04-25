import { z } from "zod";

const registerFormSchema = z.object({
  firstName: z.string().min(1, { message: "Имя обязательно" }),
  lastName: z.string().min(1, { message: "Фамилия обязательна" }),
  email: z.string().email({ message: "Введите корректный email адрес" }),
  telegram: z.string().min(1, { message: "Telegram обязателен" }),
  password: z
    .string()
    .min(6, { message: "Пароль должен содержать минимум 6 символов" })
    .max(128, { message: "Пароль не должен превышать 128 символов" }),
});

export const jobSeekerSchema = registerFormSchema;

export const employerSchema = registerFormSchema;

type JobSeekerFormValues = z.infer<typeof jobSeekerSchema>;
type EmployerFormValues = z.infer<typeof employerSchema>;

export type RegisterFormValues = JobSeekerFormValues | EmployerFormValues;
