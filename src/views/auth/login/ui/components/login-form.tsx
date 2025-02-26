"use client";

import type React from "react";

import { motion } from "framer-motion";
import {EyeIcon, EyeOffIcon, LockIcon, MailIcon} from "lucide-react";

import Link from "next/link";
import {Label} from "@radix-ui/react-label";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";

import { useState } from "react";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            console.log("Login submitted");
            // Handle login logic here
        }, 1500);
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="space-y-2" variants={itemVariants}>
                <Label htmlFor="email" className="flex items-center gap-2">
                    <MailIcon className="h-4 w-4"/>
                    Электронная почта
                </Label>
                <Input id="email" type="email" placeholder="example@mail.com" required/>
            </motion.div>

            <motion.div className="space-y-2 relative" variants={itemVariants}>
                <Label htmlFor="password" className="flex items-center gap-2">
                    <LockIcon className="h-4 w-4"/>
                    Пароль
                </Label>
                <div className="relative">
                    <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Введите пароль"
                        required
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
                            <EyeOffIcon className="h-4 w-4 text-muted-foreground"/>
                        ) : (
                            <EyeIcon className="h-4 w-4 text-muted-foreground"/>
                        )}
                    </Button>
                </div>
                <div className="flex justify-end">
                    <Link href="#" className="text-sm text-primary hover:underline">
                        Забыли пароль?
                    </Link>
                </div>
            </motion.div>

            <motion.div variants={itemVariants}>
                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                        <div className="flex items-center gap-2">
                            <div
                                className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin"/>
                            Вход...
                        </div>
                    ) : (
                        "Войти"
                    )}
                </Button>
            </motion.div>
        </motion.form>
    );
};

export default LoginForm;