'use client';

import { motion } from 'framer-motion';
import { routes } from '@/shared/const/routes';

import Link from 'next/link';
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';

const HomeNavigationCards = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <motion.div custom={0} initial="hidden" animate="visible" variants={cardVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Для Соискателей</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Создайте профиль и свяжитесь с потенциальными работодателями</p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button asChild className="w-full">
                <Link href={routes.vacancies.href}>Просмотреть Вакансии</Link>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div custom={1} initial="hidden" animate="visible" variants={cardVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Для Работодателей</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Найдите квалифицированных кандидатов на ваши позиции</p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button asChild className="w-full">
                <Link href={routes.candidates.href}>Просмотреть Кандидатов</Link>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default HomeNavigationCards;
