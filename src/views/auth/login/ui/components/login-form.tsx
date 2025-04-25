"use client"

import type {AxiosError} from "axios";

import { z } from "zod"
import { motion } from "framer-motion"
import { loginContainerVariants, loginItemVariants } from "@/views/auth/login/const/motion"

import { authRequests } from "@/entities/auth"

import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/components/ui/form"

import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"

const formSchema = z.object({
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
})

type FormValues = z.infer<typeof formSchema>

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const loginMutation = useMutation({
        mutationFn: (values: FormValues) => authRequests.login(values),
        onSuccess: (data) => {
            console.log("Успешный вход:", data)
            setErrorMessage(null)
        },
        onError: (error: AxiosError) => {
            console.log(error);
            setErrorMessage(error.message || "Ошибка при входе")
        },
    })

    const onSubmit = (values: FormValues) => {
        loginMutation.mutate(values)
    }

    return (
        <Form {...form}>
            <motion.div className="space-y-6" variants={loginContainerVariants} initial="hidden" animate="visible">
                <motion.div variants={loginItemVariants}>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="space-y-2">
                                <FormLabel className="flex items-center gap-2">
                                    <MailIcon className="h-4 w-4" />
                                    Электронная почта
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="example@mail.com" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </motion.div>

                <motion.div variants={loginItemVariants}>
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className="space-y-2">
                                <FormLabel className="flex items-center gap-2">
                                    <LockIcon className="h-4 w-4" />
                                    Пароль
                                </FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Введите пароль"
                                            className="pr-10"
                                            {...field}
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            className="absolute right-0 top-0 h-full px-3 py-2"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? (
                                                <EyeOffIcon className="h-4 w-4 text-muted-foreground" />
                                            ) : (
                                                <EyeIcon className="h-4 w-4 text-muted-foreground" />
                                            )}
                                        </Button>
                                    </div>
                                </FormControl>
                                <FormMessage />
                                <div className="flex justify-end">
                                    <Link href="#" className="text-sm text-primary hover:underline">
                                        Забыли пароль?
                                    </Link>
                                </div>
                            </FormItem>
                        )}
                    />
                </motion.div>

                {errorMessage && (
                    <motion.div variants={loginItemVariants} className="text-red-600 text-sm">
                        {errorMessage}
                    </motion.div>
                )}

                <motion.div variants={loginItemVariants}>
                    <Button
                        type="button"
                        className="w-full"
                        disabled={loginMutation.isPending}
                        onClick={form.handleSubmit(onSubmit)}
                    >
                        {loginMutation.isPending ? (
                            <div className="flex items-center gap-2">
                                <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                Вход...
                            </div>
                        ) : (
                            "Войти"
                        )}
                    </Button>
                </motion.div>
            </motion.div>
        </Form>
    )
}

export default LoginForm
