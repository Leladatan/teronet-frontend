import React from "react";

import {motion, AnimatePresence} from "framer-motion";

import { Button } from "@/shared/components/ui/button";
import {Input} from "@/shared/components/ui/input";
import {Label} from "@/shared/components/ui/label";

interface Props {
    userType: "jobseeker" | "employer";
}

const RegisterForm = ({userType}: Props) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(`Submitted as ${userType}`);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <AnimatePresence mode="wait">
                <motion.div
                    key={userType}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -20}}
                    transition={{duration: 0.3}}
                    className="space-y-4"
                >
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Фамилия</Label>
                            <Input id="lastName" placeholder="Введите фамилию" required/>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="firstName">Имя</Label>
                            <Input id="firstName" placeholder="Введите имя" required/>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Электронная почта</Label>
                        <Input id="email" type="email" placeholder="example@mail.com" required/>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="telegram">Telegram</Label>
                        <Input id="telegram" placeholder="@username" required/>
                    </div>

                    {userType === "jobseeker" && (
                        <motion.div
                            initial={{opacity: 0, height: 0}}
                            animate={{opacity: 1, height: "auto"}}
                            exit={{opacity: 0, height: 0}}
                            transition={{duration: 0.3}}
                            className="space-y-2"
                        >
                            <Label htmlFor="skills">Навыки</Label>
                            <Input id="skills" placeholder="Ваши ключевые навыки"/>
                        </motion.div>
                    )}

                    {userType === "employer" && (
                        <motion.div
                            initial={{opacity: 0, height: 0}}
                            animate={{opacity: 1, height: "auto"}}
                            exit={{opacity: 0, height: 0}}
                            transition={{duration: 0.3}}
                            className="space-y-2"
                        >
                            <Label htmlFor="company">Компания</Label>
                            <Input id="company" placeholder="Название компании"/>
                        </motion.div>
                    )}
                </motion.div>
            </AnimatePresence>

            <Button type="submit" className="w-full mt-6">
                {userType === "jobseeker" ? "Зарегистрироваться как соискатель" : "Зарегистрироваться как работодатель"}
            </Button>
        </form>
    );
};

export default RegisterForm;