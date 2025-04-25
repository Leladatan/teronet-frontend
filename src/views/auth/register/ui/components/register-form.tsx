"use client";

import type { ErrorResponse } from "@/entities/types";
import type { UserTypes } from "@/entities/users/types";
import type { RegisterFormValues } from "@/views/auth/register/const";

import { motion, AnimatePresence } from "framer-motion";
import { authRequests } from "@/entities/auth";
import { employerSchema, jobSeekerSchema } from "@/views/auth/register/const";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/shared/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

interface Props {
  userType: UserTypes;
}

const RegisterForm = ({ userType }: Props) => {
  const { toast } = useToast();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(userType === "JOB_SEEKER" ? jobSeekerSchema : employerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      telegram: "",
      password: "",
    },
    mode: "onChange",
  });

  const registerMutation = useMutation({
    mutationFn: (values: RegisterFormValues) => authRequests.register(values),
    onSuccess: () => {
      toast({
        title: "Регистрация успешна",
        description: "Вы успешно зарегистрировались",
        variant: "default",
      });
    },
    onError: (error: ErrorResponse) => {
      toast({
        title: "Ошибка регистрации",
        description: error.response?.data.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: RegisterFormValues) => {
    const submissionData = {
      ...data,
      type: userType,
    };

    registerMutation.mutate(submissionData);
  };

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
          </motion.div>
        </AnimatePresence>

        <Button type="submit" className="w-full mt-6" disabled={registerMutation.isPending}>
          {registerMutation.isPending
            ? "Регистрация..."
            : userType === "JOB_SEEKER"
              ? "Зарегистрироваться как соискатель"
              : "Зарегистрироваться как работодатель"}
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
