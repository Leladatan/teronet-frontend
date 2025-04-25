"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";

import Link from "next/link";

import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from "lucide-react";

import { authRequests } from "@/entities/auth";

import { ErrorResponse } from "@/entities/types";

import { useToast } from "@/shared/hooks/use-toast";

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

import { loginContainerVariants, loginItemVariants } from "@/views/auth/login/const/motion";
import { loginFormSchema, LoginFormValues } from "@/views/auth/login/const/zod";

const LoginForm = () => {
  const { toast } = useToast();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useMutation({
    mutationFn: (values: LoginFormValues) => authRequests.login(values),
    onSuccess: () => {
      toast({
        title: "Авторизация успешна",
        description: "Вы успешно авторизовались",
        variant: "default",
      });
    },
    onError: (error: ErrorResponse) => {
      toast({
        title: "Ошибка авторизации",
        description: error.response?.data.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    loginMutation.mutate(values);
  };

  return (
    <Form {...form}>
      <motion.div
        className="space-y-6"
        variants={loginContainerVariants}
        initial="hidden"
        animate="visible"
      >
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
  );
};

export default LoginForm;
