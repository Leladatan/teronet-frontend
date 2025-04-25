import {z} from "zod";

export const loginFormSchema = z.object({
    email: z.string().email({
        message: "Пожалуйста, введите корректный email адрес",
    }),
    password: z
        .string()
        .min(6, {
            message: "Пароль должен содержать минимум 6 символов",
        })
        .max(128, {
            message: "Пароль не должен превышать 128 символов",
        }),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;