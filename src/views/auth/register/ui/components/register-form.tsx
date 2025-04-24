"use client"

import { motion, AnimatePresence } from "framer-motion"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/components/ui/form"
import { EyeIcon, EyeOffIcon } from "lucide-react"

const baseSchema = z.object({
    firstName: z.string().min(1, { message: "Имя обязательно" }),
    lastName: z.string().min(1, { message: "Фамилия обязательна" }),
    email: z.string().email({ message: "Введите корректный email адрес" }),
    telegram: z.string().min(1, { message: "Telegram обязателен" }),
    password: z
        .string()
        .min(6, { message: "Пароль должен содержать минимум 6 символов" })
        .max(128, { message: "Пароль не должен превышать 128 символов" }),
})

const jobSeekerSchema = baseSchema.extend({
    skills: z.string().optional(),
})

const employerSchema = baseSchema.extend({
    company: z.string().min(1, { message: "Название компании обязательно" }),
})

type JobSeekerFormValues = z.infer<typeof jobSeekerSchema>
type EmployerFormValues = z.infer<typeof employerSchema>

type FormValues = JobSeekerFormValues | EmployerFormValues

interface Props {
    userType: "jobseeker" | "employer"
}

const RegisterForm = ({ userType }: Props) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const form = useForm<FormValues>({
        resolver: zodResolver(userType === "jobseeker" ? jobSeekerSchema : employerSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            telegram: "",
            password: "",
            ...(userType === "jobseeker" ? { skills: "" } : { company: "" }),
        },
        mode: "onChange",
    })

    const onSubmit = (data: FormValues) => {
        const submissionData = {
            ...data,
            type: userType,
        }

        console.log(`Submitted as ${userType}:`, submissionData)

        if (userType === "jobseeker") {
            const jobSeekerData = data as JobSeekerFormValues
            console.log({ ...jobSeekerData, type: userType })
        } else {
            const employerData = data as EmployerFormValues
            console.log({ ...employerData, type: userType })
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={userType}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem className="space-y-2">
                                        <FormLabel>Фамилия</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Введите фамилию" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem className="space-y-2">
                                        <FormLabel>Имя</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Введите имя" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="space-y-2">
                                    <FormLabel>Электронная почта</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="example@mail.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="telegram"
                            render={({ field }) => (
                                <FormItem className="space-y-2">
                                    <FormLabel>Telegram</FormLabel>
                                    <FormControl>
                                        <Input placeholder="@username" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="space-y-2">
                                    <FormLabel>Пароль</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Введите пароль"
                                                {...field}
                                                className="pr-10"
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
                                </FormItem>
                            )}
                        />

                        {userType === "jobseeker" && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FormField
                                    control={form.control}
                                    name="skills"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2">
                                            <FormLabel>Навыки</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Ваши ключевые навыки" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </motion.div>
                        )}

                        {userType === "employer" && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FormField
                                    control={form.control}
                                    name="company"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2">
                                            <FormLabel>Компания</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Название компании" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </motion.div>
                        )}
                    </motion.div>
                </AnimatePresence>

                <Button type="submit" className="w-full mt-6">
                    {userType === "jobseeker" ? "Зарегистрироваться как соискатель" : "Зарегистрироваться как работодатель"}
                </Button>
            </form>
        </Form>
    )
}

export default RegisterForm
