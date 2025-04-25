'use client';

import { motion } from 'framer-motion';

import Link from 'next/link';

import { routes } from '@/shared/const/routes';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';

import LoginForm from '@/views/auth/login/ui/components/login-form';

const LoginPage = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-4">
      <Card className="w-full max-w-md overflow-hidden">
        <CardHeader className="pb-4">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CardTitle className="text-2xl text-center">Вход в систему</CardTitle>
            <CardDescription className="text-center mt-2">
              Войдите в свой аккаунт для доступа к платформе
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent>
          <LoginForm />
        </CardContent>

        <CardFooter className="flex flex-col items-center gap-4 pt-2 pb-6">
          <motion.p
            className="text-sm text-muted-foreground mt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Нет аккаунта?{' '}
            <Link href={routes.register.href} className="text-primary hover:underline">
              Зарегистрироваться
            </Link>
          </motion.p>
        </CardFooter>
      </Card>
    </section>
  );
};

export default LoginPage;
