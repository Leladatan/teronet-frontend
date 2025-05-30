"use client";

import type { UserTypes } from "@/entities/users/types";

import { motion } from "framer-motion";
import { routes } from "@/shared/const/routes";

import Link from "next/link";
import { BuildingIcon, UserIcon } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

import RegisterForm from "@/views/auth/register/ui/components/register-form";

import { useState } from "react";

const RegisterPage = () => {
  const [userType, setUserType] = useState<UserTypes>("JOB_SEEKER");

  return (
    <section className="flex items-center justify-center">
      <Card className="w-full max-w-md overflow-hidden">
        <CardHeader className="pb-0">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CardTitle className="text-2xl text-center">Регистрация</CardTitle>
            <CardDescription className="text-center">
              Создайте аккаунт для доступа к платформе
            </CardDescription>
          </motion.div>
        </CardHeader>

        <div className="relative mt-6 mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-muted" />
          </div>
          <div className="relative flex justify-center">
            <div className="bg-card flex items-center rounded-full border border-muted p-1">
              <Button
                variant={userType === "JOB_SEEKER" ? "default" : "ghost"}
                className={`relative rounded-full px-6 ${
                  userType === "JOB_SEEKER" ? "" : "hover:bg-muted"
                }`}
                onClick={() => setUserType("JOB_SEEKER")}
              >
                <UserIcon className="mr-2 h-4 w-4" />
                Соискатель
                {userType === "JOB_SEEKER" && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary -z-10"
                    layoutId="activeTab"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </Button>
              <Button
                variant={userType === "EMPLOYER" ? "default" : "ghost"}
                className={`relative rounded-full px-6 ${
                  userType === "EMPLOYER" ? "" : "hover:bg-muted"
                }`}
                onClick={() => setUserType("EMPLOYER")}
              >
                <BuildingIcon className="mr-2 h-4 w-4" />
                Работодатель
                {userType === "EMPLOYER" && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary -z-10"
                    layoutId="activeTab"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </Button>
            </div>
          </div>
        </div>

        <CardContent>
          <RegisterForm userType={userType} />
        </CardContent>

        <CardFooter className="flex justify-center pt-2 pb-6">
          <p className="text-sm text-muted-foreground">
            Уже есть аккаунт?{" "}
            <Link href={routes.login.href} className="text-primary underline">
              Войти
            </Link>
          </p>
        </CardFooter>
      </Card>
    </section>
  );
};

export default RegisterPage;
